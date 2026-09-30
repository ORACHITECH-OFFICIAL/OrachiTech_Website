import { useEffect, useRef, useState } from 'react';
import { CMS_EVENT, hasLocalCollection, readLocalCollection, readLocalSettings } from '@/lib/local-cms';

export function usePublishedCollection<T>(collectionName: string, fallback: T[] = []) {
  const [items, setItems] = useState<T[]>(fallback);
  const [loading, setLoading] = useState(true);
  const fallbackRef = useRef(fallback);

  useEffect(() => {
    const load = () => {
      const result = readLocalCollection<T & { order?: number; status?: string }>(collectionName)
        .filter((item) => item && typeof item === 'object' && item.status === 'published')
        .sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
      setItems(hasLocalCollection(collectionName) ? result : fallbackRef.current);
      setLoading(false);
    };
    load();
    const listener = (event: Event) => {
      if ((event as CustomEvent).detail?.collectionName === collectionName) load();
    };
    window.addEventListener(CMS_EVENT, listener);
    window.addEventListener('storage', load);
    return () => { window.removeEventListener(CMS_EVENT, listener); window.removeEventListener('storage', load); };
  }, [collectionName]);

  return { items, loading };
}

export function usePublishedDocument<T>(collectionName: string, slug: string | undefined, fallback?: T) {
  const { items, loading } = usePublishedCollection<T & { slug: string }>(collectionName, fallback ? [fallback as T & { slug: string }] : []);
  return { item: items.find((entry) => entry.slug === slug), loading };
}

export function usePublishedPage<T>(slug: string, fallback: T) {
  const [page, setPage] = useState<T>(fallback);
  const fallbackRef = useRef(fallback);
  useEffect(() => {
    const load = () => {
      const result = readLocalCollection<T & { slug?: string; status?: string }>('pages').find((item) => item.slug === slug && item.status === 'published');
      setPage(result || fallbackRef.current);
    };
    load();
    const listener = () => load();
    window.addEventListener(CMS_EVENT, listener);
    window.addEventListener('storage', listener);
    return () => { window.removeEventListener(CMS_EVENT, listener); window.removeEventListener('storage', listener); };
  }, [slug]);
  return page;
}

export function useSiteSettings<T>(fallback: T) {
  const [settings, setSettings] = useState<T>(fallback);
  const fallbackRef = useRef(fallback);
  useEffect(() => {
    const load = () => setSettings(readLocalSettings(fallbackRef.current));
    load();
    window.addEventListener(CMS_EVENT, load);
    window.addEventListener('storage', load);
    return () => { window.removeEventListener(CMS_EVENT, load); window.removeEventListener('storage', load); };
  }, []);
  return settings;
}

export async function getSiteSettings() { return readLocalSettings({}); }

export function slugify(value: string) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

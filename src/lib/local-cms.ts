export const CMS_EVENT = 'orachitech:cms-change';
export const CMS_SESSION_KEY = 'orachitech:cms-session';
export const CMS_EMAIL = 'admin@orachitech.com';
export const CMS_PASSWORD = 'orachiTech@12345';

const keyFor = (collectionName: string) => `orachitech:cms:${collectionName}`;
const seedKeyFor = (collectionName: string, version: string) => `orachitech:cms-seed:${collectionName}:${version}`;

export function hasLocalCollection(collectionName: string) {
  return localStorage.getItem(keyFor(collectionName)) !== null;
}

export function readLocalCollection<T>(collectionName: string): T[] {
  try {
    const value = JSON.parse(localStorage.getItem(keyFor(collectionName)) || '[]');
    return Array.isArray(value) ? value.filter((item) => item && typeof item === 'object') as T[] : [];
  } catch {
    return [];
  }
}

export function writeLocalCollection<T>(collectionName: string, items: T[]) {
  localStorage.setItem(keyFor(collectionName), JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(CMS_EVENT, { detail: { collectionName } }));
}

export function seedLocalCollectionOnce<T>(collectionName: string, items: T[], version = 'v1') {
  const marker = seedKeyFor(collectionName, version);
  if (localStorage.getItem(marker)) return false;

  if (!hasLocalCollection(collectionName) || readLocalCollection(collectionName).length === 0) {
    writeLocalCollection(collectionName, items);
  }
  localStorage.setItem(marker, new Date().toISOString());
  return true;
}

export function saveLocalDocument(collectionName: string, value: Record<string, unknown> & { id?: string }) {
  const items = readLocalCollection<Record<string, unknown> & { id: string }>(collectionName);
  const now = new Date().toISOString();
  if (value.id) {
    writeLocalCollection(collectionName, items.map((item) => item.id === value.id ? { ...value, id: item.id, updatedAt: now } : item));
    return value.id;
  }
  const id = crypto.randomUUID();
  writeLocalCollection(collectionName, [...items, { ...value, id, createdAt: now, updatedAt: now }]);
  return id;
}

export function deleteLocalDocument(collectionName: string, id: string) {
  writeLocalCollection(collectionName, readLocalCollection<{ id: string }>(collectionName).filter((item) => item.id !== id));
}

export function readLocalSettings<T>(fallback: T): T {
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(keyFor('settings')) || '{}') };
  } catch {
    return fallback;
  }
}

export function writeLocalSettings(value: Record<string, unknown>) {
  localStorage.setItem(keyFor('settings'), JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(CMS_EVENT, { detail: { collectionName: 'settings' } }));
}

export function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

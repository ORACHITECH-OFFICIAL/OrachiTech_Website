/* eslint-disable @typescript-eslint/no-explicit-any -- schema-driven fields intentionally support heterogeneous CMS values */
import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  Eye,
  EyeOff,
  Image,
  LayoutDashboard,
  LogOut,
  Menu,
  Pencil,
  Plus,
  Save,
  Settings,
  Trash2,
  Upload,
  Users,
  X,
} from 'lucide-react';
import { toast } from 'sonner';
import { slugify } from '@/lib/cms';
import {
  CMS_EMAIL,
  CMS_EVENT,
  CMS_PASSWORD,
  CMS_SESSION_KEY,
  deleteLocalDocument,
  fileToDataUrl,
  readLocalCollection,
  readLocalSettings,
  saveLocalDocument,
  seedLocalCollectionOnce,
  writeLocalSettings,
} from '@/lib/local-cms';
import { starterPortfolioProjects } from '@/data/portfolioProjects';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

type FieldType = 'text' | 'textarea' | 'number' | 'date' | 'image' | 'images' | 'list' | 'sections' | 'metrics';
type Field = { key: string; label: string; type: FieldType; required?: boolean; placeholder?: string };
type Section = { id: string; label: string; singular: string; icon: typeof FileText; fields: Field[] };
type ContentItem = Record<string, any> & { id: string; title: string; status?: string };

const sections: Section[] = [
  {
    id: 'portfolioProjects', label: 'Portfolio projects', singular: 'portfolio project', icon: FolderKanban,
    fields: [
      { key: 'title', label: 'Project title', type: 'text', required: true },
      { key: 'slug', label: 'URL slug', type: 'text', required: true },
      { key: 'category', label: 'Category / industry', type: 'text', required: true },
      { key: 'description', label: 'Project summary', type: 'textarea', required: true },
      { key: 'image', label: 'Cover image', type: 'image' },
      { key: 'imageAlt', label: 'Cover image alt text', type: 'text' },
      { key: 'gallery', label: 'Project gallery', type: 'images' },
      { key: 'technologies', label: 'Technologies', type: 'list' },
      { key: 'client', label: 'Client', type: 'text' },
      { key: 'year', label: 'Project year', type: 'text' },
      { key: 'projectUrl', label: 'Live project URL', type: 'text', placeholder: 'https://…' },
      { key: 'seoTitle', label: 'SEO title', type: 'text' },
      { key: 'seoDescription', label: 'SEO description', type: 'textarea' },
      { key: 'order', label: 'Display order', type: 'number' },
    ],
  },
  {
    id: 'posts', label: 'Blog posts', singular: 'post', icon: BookOpen,
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'slug', label: 'URL slug', type: 'text', required: true },
      { key: 'category', label: 'Category', type: 'text', required: true },
      { key: 'date', label: 'Display date', type: 'text', placeholder: 'September 30, 2026' },
      { key: 'publishedAt', label: 'Publication date', type: 'date' },
      { key: 'readTime', label: 'Read time', type: 'text', placeholder: '6 min read' },
      { key: 'summary', label: 'Summary', type: 'textarea', required: true },
      { key: 'heroImage', label: 'Featured image', type: 'image' },
      { key: 'heroAlt', label: 'Image alt text', type: 'text' },
      { key: 'keywords', label: 'SEO keywords', type: 'textarea' },
      { key: 'intro', label: 'Introduction', type: 'textarea' },
      { key: 'sections', label: 'Article sections', type: 'sections' },
      { key: 'bestFit', label: 'Best fit for', type: 'list' },
      { key: 'ctaLabel', label: 'Call-to-action label', type: 'text' },
    ],
  },
  {
    id: 'caseStudies', label: 'Case studies', singular: 'case study', icon: BriefcaseBusiness,
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'slug', label: 'URL slug', type: 'text', required: true },
      { key: 'category', label: 'Category', type: 'text' },
      { key: 'summary', label: 'Summary', type: 'textarea', required: true },
      { key: 'heroImage', label: 'Featured image', type: 'image' },
      { key: 'metrics', label: 'Project metrics', type: 'metrics' },
      { key: 'challenge', label: 'The challenge', type: 'textarea' },
      { key: 'solution', label: 'The solution', type: 'textarea' },
      { key: 'modules', label: 'Modules delivered', type: 'list' },
      { key: 'stack', label: 'Technology stack', type: 'list' },
    ],
  },
  {
    id: 'services', label: 'Services', singular: 'service', icon: BarChart3,
    fields: [
      { key: 'title', label: 'Service name', type: 'text', required: true },
      { key: 'description', label: 'Description', type: 'textarea', required: true },
      { key: 'features', label: 'Features', type: 'list' },
      { key: 'icon', label: 'Icon name', type: 'text', placeholder: 'Globe, Smartphone, Cloud…' },
      { key: 'order', label: 'Display order', type: 'number' },
    ],
  },
  {
    id: 'team', label: 'Team', singular: 'team member', icon: Users,
    fields: [
      { key: 'title', label: 'Name', type: 'text', required: true },
      { key: 'role', label: 'Role', type: 'text', required: true },
      { key: 'bio', label: 'Biography', type: 'textarea' },
      { key: 'image', label: 'Profile photo', type: 'image' },
      { key: 'linkedin', label: 'LinkedIn URL', type: 'text' },
      { key: 'email', label: 'Email', type: 'text' },
      { key: 'order', label: 'Display order', type: 'number' },
    ],
  },
  {
    id: 'pages', label: 'Pages', singular: 'page', icon: FileText,
    fields: [
      { key: 'title', label: 'Internal page name', type: 'text', required: true },
      { key: 'slug', label: 'Page key', type: 'text', required: true, placeholder: 'home, about, contact' },
      { key: 'eyebrow', label: 'Eyebrow', type: 'text' },
      { key: 'heading', label: 'Main heading', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'seoTitle', label: 'SEO title', type: 'text' },
      { key: 'seoDescription', label: 'SEO description', type: 'textarea' },
      { key: 'heroImage', label: 'Hero image', type: 'image' },
      { key: 'proofPoints', label: 'Proof points', type: 'list' },
      { key: 'primaryCtaLabel', label: 'Primary button label', type: 'text' },
      { key: 'primaryCtaUrl', label: 'Primary button URL', type: 'text' },
      { key: 'secondaryCtaLabel', label: 'Secondary button label', type: 'text' },
      { key: 'secondaryCtaUrl', label: 'Secondary button URL', type: 'text' },
    ],
  },
];

const emptyItem = (section: Section) => Object.fromEntries([
  ['title', ''], ['status', 'draft'], ['order', 0],
  ...section.fields.filter((field) => field.key !== 'title' && field.key !== 'order').map((field) => [
    field.key,
    field.type === 'list' || field.type === 'images' || field.type === 'sections' || field.type === 'metrics' ? [] : '',
  ]),
]);

function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setErrorMessage('');
    if (email.trim().toLowerCase() === CMS_EMAIL && password === CMS_PASSWORD) {
      sessionStorage.setItem(CMS_SESSION_KEY, 'authenticated');
      onLogin();
    } else {
      const message = 'Incorrect email or password.';
      setErrorMessage(message);
      toast.error(message);
    }
    setBusy(false);
  };

  return (
    <div className="min-h-screen bg-[#071716] text-white grid lg:grid-cols-2">
      <div className="hidden lg:flex relative overflow-hidden p-16 flex-col justify-between bg-gradient-to-br from-[#0d332f] to-[#071716]">
        <div className="absolute inset-0 hexagon-pattern opacity-30" />
        <div className="relative text-2xl font-display font-bold tracking-tight">ORACHI<span className="text-emerald-400">TECH</span></div>
        <div className="relative max-w-lg">
          <p className="text-5xl font-display font-bold leading-tight mb-6">Your website,<br />under your control.</p>
          <p className="text-lg text-slate-300">Publish articles, update services, manage case studies, and keep every page current from one secure workspace.</p>
        </div>
        <p className="relative text-sm text-slate-500">ORACHITECH Content Management System</p>
      </div>
      <div className="flex items-center justify-center p-6 bg-slate-50 text-slate-950">
        <form onSubmit={submit} className="w-full max-w-md bg-white border border-slate-200 shadow-xl rounded-3xl p-8 md:p-10">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-8"><LayoutDashboard /></div>
          <h1 className="font-display text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-slate-500 mb-8">Sign in to manage the ORACHITECH website.</p>
          <div className="space-y-5">
            <div><Label htmlFor="email">Email address</Label><Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 h-12" required /></div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 hover:text-emerald-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            {errorMessage && <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{errorMessage}</p>}
            <Button className="w-full h-12" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FieldEditor({ field, value, onChange }: { field: Field; value: any; onChange: (value: any) => void }) {
  const upload = async (file?: File) => {
    if (!file) return;
    if (file.size > 1_500_000) {
      toast.error('For local CMS storage, use an image smaller than 1.5 MB.');
      return;
    }
    toast.promise(
      fileToDataUrl(file).then((url) => onChange(url)),
      { loading: 'Uploading image…', success: 'Image uploaded', error: 'Image upload failed' },
    );
  };

  if (field.type === 'textarea') return <Textarea value={value || ''} onChange={(e) => onChange(e.target.value)} rows={5} required={field.required} placeholder={field.placeholder} />;
  if (field.type === 'image') return (
    <div className="space-y-3">
      {value && <img src={value} alt="Preview" className="h-40 w-full object-cover rounded-xl border" />}
      <div className="flex gap-2"><Input value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder="Image URL" /><label className="shrink-0 inline-flex items-center gap-2 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 cursor-pointer text-sm font-medium"><Upload className="w-4 h-4" /> Upload<input type="file" accept="image/*" className="hidden" onChange={(e) => upload(e.target.files?.[0])} /></label></div>
    </div>
  );
  if (field.type === 'images') {
    const images = Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
    const uploadMany = async (files: FileList | null) => {
      const selected = Array.from(files || []).slice(0, Math.max(0, 8 - images.length));
      if (!selected.length) return;
      if (selected.some((file) => file.size > 1_500_000)) {
        toast.error('Each gallery image must be smaller than 1.5 MB.');
        return;
      }
      try {
        const urls = await Promise.all(selected.map(fileToDataUrl));
        onChange([...images, ...urls]);
        toast.success(`${urls.length} image${urls.length === 1 ? '' : 's'} uploaded`);
      } catch {
        toast.error('One or more images could not be uploaded.');
      }
    };
    return <div className="space-y-3">
      {images.length > 0 && <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{images.map((source, index) => <div key={`${source.slice(0, 32)}-${index}`} className="relative overflow-hidden rounded-xl border bg-slate-100"><img src={source} alt={`Gallery preview ${index + 1}`} className="aspect-[4/3] w-full object-cover" /><button type="button" onClick={() => onChange(images.filter((_, itemIndex) => itemIndex !== index))} className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-slate-950/75 text-white" aria-label={`Remove gallery image ${index + 1}`}><X className="h-4 w-4" /></button></div>)}</div>}
      <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium hover:bg-slate-200"><Upload className="h-4 w-4" /> Upload gallery images<input type="file" accept="image/*" multiple className="hidden" onChange={(event) => uploadMany(event.target.files)} /></label>
      <p className="text-xs text-slate-500">Up to 8 images. Keep each file below 1.5 MB for local browser storage.</p>
    </div>;
  }
  if (field.type === 'list') return (
    <div className="space-y-2">
      {(Array.isArray(value) ? value : []).map((entry: string, index: number) => <div key={index} className="flex gap-2"><Input value={entry} onChange={(e) => onChange((Array.isArray(value) ? value : []).map((item: string, i: number) => i === index ? e.target.value : item))} /><Button type="button" variant="ghost" size="icon" onClick={() => onChange((Array.isArray(value) ? value : []).filter((_: string, i: number) => i !== index))}><X /></Button></div>)}
      <Button type="button" variant="outline" size="sm" onClick={() => onChange([...(Array.isArray(value) ? value : []), ''])}><Plus /> Add item</Button>
    </div>
  );
  if (field.type === 'sections' || field.type === 'metrics') {
    const firstKey = field.type === 'metrics' ? 'value' : 'title';
    const secondKey = field.type === 'metrics' ? 'label' : 'body';
    const entries = Array.isArray(value) ? value : [];
    return <div className="space-y-3">{entries.map((entry: any, index: number) => <div key={index} className="rounded-xl border bg-slate-50 p-4 space-y-3"><div className="flex gap-2"><Input value={entry?.[firstKey] || ''} placeholder={firstKey} onChange={(e) => onChange(entries.map((item: any, i: number) => i === index ? { ...item, [firstKey]: e.target.value } : item))} /><Button type="button" variant="ghost" size="icon" onClick={() => onChange(entries.filter((_: any, i: number) => i !== index))}><X /></Button></div><Textarea value={entry?.[secondKey] || ''} placeholder={secondKey} rows={field.type === 'metrics' ? 2 : 4} onChange={(e) => onChange(entries.map((item: any, i: number) => i === index ? { ...item, [secondKey]: e.target.value } : item))} /></div>)}<Button type="button" variant="outline" size="sm" onClick={() => onChange([...entries, { [firstKey]: '', [secondKey]: '' }])}><Plus /> Add {field.type === 'metrics' ? 'metric' : 'section'}</Button></div>;
  }
  return <Input type={field.type} value={value ?? ''} onChange={(e) => onChange(field.type === 'number' ? Number(e.target.value) : e.target.value)} required={field.required} placeholder={field.placeholder} />;
}

function ContentEditor({ section, item, onClose }: { section: Section; item: ContentItem | null; onClose: () => void }) {
  const [form, setForm] = useState<any>(() => item ? { ...item } : emptyItem(section));
  const [saving, setSaving] = useState(false);

  const update = (key: string, value: any) => setForm((current: any) => ({ ...current, [key]: value }));
  const save = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    try {
      const payload = { ...form, title: String(form.title || '').trim(), order: Number(form.order || 0) };
      section.fields.forEach((field) => {
        if (['list', 'images', 'sections', 'metrics'].includes(field.type) && !Array.isArray(payload[field.key])) payload[field.key] = [];
      });
      delete payload.id;
      if (section.fields.some((field) => field.key === 'slug') && !payload.slug) payload.slug = slugify(payload.title);
      saveLocalDocument(section.id, item?.id ? { ...payload, id: item.id } : payload);
      toast.success(`${section.singular[0].toUpperCase() + section.singular.slice(1)} saved`);
      onClose();
    } catch (error) {
      console.error(error);
      toast.error(error instanceof DOMException && error.name === 'QuotaExceededError' ? 'Browser storage is full. Use smaller images or remove unused gallery files.' : 'Could not save this entry. Please check the fields and try again.');
    } finally { setSaving(false); }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex justify-end" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <form onSubmit={save} className="w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col">
        <header className="px-6 py-5 border-b flex items-center justify-between"><div><p className="text-sm text-emerald-700 font-semibold">{item ? 'Edit' : 'Create'} {section.singular}</p><h2 className="font-display text-2xl font-bold">{item?.title || `New ${section.singular}`}</h2></div><Button type="button" variant="ghost" size="icon" onClick={onClose}><X /></Button></header>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="rounded-xl border p-4 flex items-center justify-between bg-slate-50"><div><Label htmlFor="published">Published</Label><p className="text-xs text-slate-500 mt-1">Drafts are only visible inside the CMS.</p></div><Switch id="published" checked={form.status === 'published'} onCheckedChange={(checked) => update('status', checked ? 'published' : 'draft')} /></div>
          {section.fields.map((field) => <div key={field.key} className="space-y-2"><Label>{field.label}{field.required && <span className="text-red-500"> *</span>}</Label><FieldEditor field={field} value={form[field.key]} onChange={(value) => update(field.key, value)} /></div>)}
        </div>
        <footer className="p-5 border-t flex justify-end gap-3 bg-white"><Button type="button" variant="outline" onClick={onClose}>Cancel</Button><Button disabled={saving}><Save />{saving ? 'Saving…' : 'Save changes'}</Button></footer>
      </form>
    </div>
  );
}

export default function AdminCMS() {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem(CMS_SESSION_KEY) === 'authenticated');
  const [activeId, setActiveId] = useState('dashboard');
  const [items, setItems] = useState<Record<string, ContentItem[]>>({});
  const [editing, setEditing] = useState<ContentItem | null | undefined>(undefined);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'ORACHITECH CMS';
    return () => { document.title = previousTitle; };
  }, []);
  useEffect(() => {
    if (!authenticated) return;
    seedLocalCollectionOnce('portfolioProjects', starterPortfolioProjects, 'v1');
    const load = () => setItems(Object.fromEntries(sections.map((section) => [
      section.id,
      readLocalCollection<ContentItem>(section.id).sort((a, b) => Number(a.order || 0) - Number(b.order || 0)),
    ])));
    load();
    window.addEventListener(CMS_EVENT, load);
    window.addEventListener('storage', load);
    return () => { window.removeEventListener(CMS_EVENT, load); window.removeEventListener('storage', load); };
  }, [authenticated]);

  const activeSection = sections.find((section) => section.id === activeId);
  const counts = useMemo(() => sections.reduce((result, section) => ({ ...result, [section.id]: (items[section.id] || []).length }), {} as Record<string, number>), [items]);
  if (!authenticated) return <Login onLogin={() => setAuthenticated(true)} />;

  const remove = async (section: Section, item: ContentItem) => {
    if (!window.confirm(`Delete “${item.title}”? This cannot be undone.`)) return;
    deleteLocalDocument(section.id, item.id);
    toast.success('Item deleted');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 flex">
      {mobileMenu && <button className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={() => setMobileMenu(false)} aria-label="Close navigation" />}
      <aside className={`fixed lg:sticky top-0 z-40 h-screen w-72 bg-[#071716] text-white flex flex-col transition-transform ${mobileMenu ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-20 px-6 flex items-center border-b border-white/10"><div className="font-display font-bold text-xl">ORACHI<span className="text-emerald-400">TECH</span><span className="ml-2 text-xs text-slate-500 font-normal">CMS</span></div></div>
        <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
          <button onClick={() => { setActiveId('dashboard'); setMobileMenu(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm ${activeId === 'dashboard' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'text-slate-300 hover:bg-white/5'}`}><LayoutDashboard className="w-5 h-5" /> Dashboard</button>
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-600 px-4 pt-7 pb-2">Content</p>
          {sections.map((section) => <button key={section.id} onClick={() => { setActiveId(section.id); setMobileMenu(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm ${activeId === section.id ? 'bg-white/10 text-white font-semibold' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}><section.icon className="w-5 h-5" />{section.label}<span className="ml-auto text-xs text-slate-600">{counts[section.id] || 0}</span></button>)}
          <button onClick={() => { setActiveId('settings'); setMobileMenu(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm ${activeId === 'settings' ? 'bg-white/10 text-white font-semibold' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}><Settings className="w-5 h-5" /> Settings</button>
        </nav>
        <div className="p-4 border-t border-white/10"><div className="px-3 mb-3 truncate text-xs text-slate-500">{CMS_EMAIL}</div><Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-white/10" onClick={() => { sessionStorage.removeItem(CMS_SESSION_KEY); setAuthenticated(false); }}><LogOut /> Sign out</Button></div>
      </aside>
      <main className="flex-1 min-w-0">
        <header className="h-20 bg-white border-b flex items-center px-5 md:px-8 gap-4 sticky top-0 z-20"><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenu(true)}><Menu /></Button><div><p className="text-xs text-slate-500">Content management</p><h1 className="font-display text-xl font-bold">{activeSection?.label || (activeId === 'settings' ? 'Settings' : 'Dashboard')}</h1></div><a href="/" target="_blank" className="ml-auto text-sm font-semibold text-emerald-700 hover:text-emerald-800">View website ↗</a></header>
        <div className="p-5 md:p-8 max-w-7xl mx-auto">
          {activeId === 'dashboard' && <Dashboard counts={counts} items={items} onNavigate={setActiveId} />}
          {activeSection && <CollectionView section={activeSection} items={items[activeSection.id] || []} onEdit={(item) => setEditing(item)} onCreate={() => setEditing(null)} onDelete={(item) => remove(activeSection, item)} />}
          {activeId === 'settings' && <SettingsView />}
        </div>
      </main>
      {activeSection && editing !== undefined && <ContentEditor section={activeSection} item={editing} onClose={() => setEditing(undefined)} />}
    </div>
  );
}

function Dashboard({ counts, items, onNavigate }: { counts: Record<string, number>; items: Record<string, ContentItem[]>; onNavigate: (id: string) => void }) {
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  const published = Object.values(items).flat().filter((item) => item.status === 'published').length;
  return <div className="space-y-8"><div className="rounded-3xl bg-gradient-to-br from-[#0c2d2a] to-[#071716] text-white p-8 md:p-10 relative overflow-hidden"><div className="absolute inset-0 hexagon-pattern opacity-20" /><div className="relative"><p className="text-emerald-400 font-semibold mb-3">Website overview</p><h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Everything in one place.</h2><p className="text-slate-300 max-w-xl">Create, review, and publish website content without touching the codebase.</p></div></div><div className="grid sm:grid-cols-3 gap-4"><Stat label="Total entries" value={total} /><Stat label="Published" value={published} /><Stat label="Drafts" value={total - published} /></div><div><h3 className="font-display font-bold text-xl mb-4">Manage content</h3><div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">{sections.map((section) => <button key={section.id} onClick={() => onNavigate(section.id)} className="text-left bg-white border rounded-2xl p-5 hover:border-emerald-400 hover:shadow-md transition-all group"><div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4"><section.icon /></div><h4 className="font-bold group-hover:text-emerald-700">{section.label}</h4><p className="text-sm text-slate-500 mt-1">{counts[section.id] || 0} entries</p></button>)}</div></div></div>;
}

function Stat({ label, value }: { label: string; value: number }) { return <div className="bg-white border rounded-2xl p-6"><p className="text-sm text-slate-500 mb-2">{label}</p><p className="font-display text-4xl font-bold">{value}</p></div>; }

function CollectionView({ section, items, onEdit, onCreate, onDelete }: { section: Section; items: ContentItem[]; onEdit: (item: ContentItem) => void; onCreate: () => void; onDelete: (item: ContentItem) => void }) {
  return <div><div className="flex items-end justify-between mb-7"><div><p className="text-slate-500 mt-1">Create drafts and publish when ready.</p></div><Button onClick={onCreate}><Plus /> New {section.singular}</Button></div>{items.length === 0 ? <div className="bg-white border border-dashed rounded-3xl py-20 text-center"><div className="w-14 h-14 bg-slate-100 rounded-2xl grid place-items-center mx-auto mb-4"><section.icon className="text-slate-400" /></div><h3 className="font-bold text-lg">No {section.label.toLowerCase()} yet</h3><p className="text-slate-500 text-sm mt-1 mb-5">Create the first entry for this collection.</p><Button variant="outline" onClick={onCreate}><Plus /> Create entry</Button></div> : <div className="bg-white border rounded-2xl overflow-hidden"><div className="divide-y">{items.map((item) => <div key={item.id} className="p-4 md:p-5 flex items-center gap-4 hover:bg-slate-50"><div className="w-11 h-11 rounded-xl bg-slate-100 grid place-items-center shrink-0">{(item.heroImage || item.image) ? <img src={item.heroImage || item.image} alt="" className="w-full h-full rounded-xl object-cover" /> : <section.icon className="w-5 h-5 text-slate-400" />}</div><div className="min-w-0 flex-1"><h3 className="font-semibold truncate">{item.title || 'Untitled'}</h3><div className="flex items-center gap-2 mt-1"><span className={`text-[11px] font-bold uppercase tracking-wide ${item.status === 'published' ? 'text-emerald-700' : 'text-amber-700'}`}>{item.status || 'draft'}</span>{item.slug && <span className="text-xs text-slate-400 truncate">/{item.slug}</span>}</div></div><Button variant="ghost" size="icon" onClick={() => onEdit(item)} aria-label="Edit"><Pencil /></Button><Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-600" onClick={() => onDelete(item)} aria-label="Delete"><Trash2 /></Button></div>)}</div></div>}</div>;
}

function SettingsView() {
  const [form, setForm] = useState({ siteName: 'ORACHITECH', email: '', phone: '', whatsapp: '', address: '', facebook: '', linkedin: '', instagram: '' });
  const [saving, setSaving] = useState(false);
  useEffect(() => setForm((current) => readLocalSettings(current)), []);
  const save = async (event: FormEvent) => { event.preventDefault(); setSaving(true); try { writeLocalSettings({ ...form, updatedAt: new Date().toISOString() }); toast.success('Settings saved'); } catch { toast.error('Could not save settings'); } finally { setSaving(false); } };
  return <form onSubmit={save} className="max-w-3xl bg-white border rounded-2xl p-6 md:p-8"><h2 className="font-display font-bold text-2xl mb-2">Global information</h2><p className="text-slate-500 mb-8">Contact and social details used across the website.</p><div className="grid md:grid-cols-2 gap-6">{Object.entries(form).map(([key, value]) => <div key={key} className={key === 'address' ? 'md:col-span-2' : ''}><Label className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</Label><Input value={value} onChange={(e) => setForm((current) => ({ ...current, [key]: e.target.value }))} className="mt-2" /></div>)}</div><Button className="mt-8" disabled={saving}><Save />{saving ? 'Saving…' : 'Save settings'}</Button></form>;
}

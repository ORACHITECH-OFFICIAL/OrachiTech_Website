import { motion } from 'framer-motion';
import { CheckCircle2, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { schoolSaasBlog } from '@/data/content';

const sections = [
  {
    title: 'One system for the daily work',
    body: 'Many schools still manage admissions, fee vouchers, attendance sheets, exam marks, and parent updates in separate files. A SaaS platform brings those workflows into one secure dashboard, so admin teams spend less time searching and more time serving students.',
  },
  {
    title: 'Fees become easier to track',
    body: 'Fee management is one of the biggest reasons schools move to software. The system can show paid, unpaid, discounted, and pending balances by class, student, month, or branch. This gives owners a clearer financial picture without waiting for manual reports.',
  },
  {
    title: 'Parents get more confidence',
    body: 'When parents can see attendance, notices, results, and fee status through a portal, the school feels more transparent and organized. Clear communication reduces repeated phone calls and helps families trust that records are up to date.',
  },
  {
    title: 'Reports support better decisions',
    body: 'A modern school platform should not only store data. It should help leadership understand admissions trends, collection performance, student attendance, exam outcomes, and staff activity so the next decision is based on evidence.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: schoolSaasBlog.title,
  description: schoolSaasBlog.summary,
  datePublished: '2026-05-25',
  author: {
    '@type': 'Organization',
    name: 'ORACHITECH',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ORACHITECH',
  },
  url: `https://www.orachitech.com/blog/${schoolSaasBlog.slug}`,
};

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${schoolSaasBlog.title} | ORACHITECH`}
        description={schoolSaasBlog.summary}
        path={`/blog/${schoolSaasBlog.slug}`}
        keywords="school management SaaS Pakistan, school software benefits, fee management software, parent portal, school ERP"
        schema={schema}
      />
      <Navbar />
      <WhatsAppButton />

      <main>
        <article>
          <section className="relative pt-32 pb-12 overflow-hidden">
            <div className="absolute inset-0 hexagon-pattern opacity-60" />
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl"
              >
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-5">
                  <span className="text-primary font-semibold">{schoolSaasBlog.category}</span>
                  <span>{schoolSaasBlog.date}</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {schoolSaasBlog.readTime}
                  </span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">{schoolSaasBlog.title}</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">{schoolSaasBlog.summary}</p>
              </motion.div>
            </div>
          </section>

          <section className="pb-20">
            <div className="container mx-auto px-6">
              <img
                src={schoolSaasBlog.heroImage}
                alt="Teacher helping students in a classroom"
                className="w-full max-h-[480px] object-cover rounded-2xl mb-12"
              />
              <div className="grid lg:grid-cols-[1fr_280px] gap-12">
                <div className="space-y-10 text-muted-foreground text-lg leading-8">
                  <p>
                    A school management SaaS is valuable when it removes operational friction. The goal is not to
                    replace the school team with software. The goal is to give administrators, teachers, accountants,
                    parents, and owners the same reliable source of truth.
                  </p>
                  {sections.map((section) => (
                    <section key={section.title}>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{section.title}</h2>
                      <p>{section.body}</p>
                    </section>
                  ))}
                  <section>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      What ORACHITECH builds into the platform
                    </h2>
                    <p>
                      ORACHITECH designs school management systems with student records, fee management, attendance,
                      exams, result cards, parent portals, admin dashboards, and role-based access. The platform can be
                      customized for private schools, academies, and multi-branch institutions.
                    </p>
                  </section>
                </div>
                <aside className="glass-card rounded-2xl p-6 h-fit sticky top-28">
                  <h3 className="font-display text-xl font-bold mb-5">Best fit for</h3>
                  <ul className="space-y-4 mb-6">
                    {['Private schools', 'Academies', 'Multi-branch institutions', 'Growing school networks'].map((item) => (
                      <li key={item} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Request demo
                  </Link>
                </aside>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;

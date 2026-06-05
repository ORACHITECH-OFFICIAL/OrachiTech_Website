import { motion } from 'framer-motion';
import { BarChart3, CheckCircle2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';

const sections = [
  {
    title: 'Start with decisions, not charts',
    body: 'A dashboard should answer the questions a team asks every week: which work is late, which customers need follow-up, where revenue is blocked, and which numbers changed enough to require action.',
  },
  {
    title: 'Map the handoffs that slow delivery',
    body: 'Operational delays usually happen between people, departments, and tools. A useful dashboard shows pending approvals, missing documents, stale requests, failed syncs, and work waiting on a clear owner.',
  },
  {
    title: 'Show exceptions before totals',
    body: 'Large totals can hide urgent problems. Teams need overdue tasks, failed payments, low inventory, open tickets, incomplete forms, and records that need verification before they need another high-level chart.',
  },
  {
    title: 'Turn reporting into workflow automation',
    body: 'Once the right signals are visible, automation becomes practical. The same data can trigger reminders, assign tasks, send customer updates, generate reports, sync records, and escalate risk without spreadsheet checks.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What a Custom Business Dashboard Should Show Before You Automate Operations',
  description:
    'A practical checklist for teams that want cleaner reporting, fewer spreadsheet handoffs, and workflow automation built around the right KPIs.',
  datePublished: '2026-06-03',
  author: {
    '@type': 'Organization',
    name: 'ORACHITECH',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ORACHITECH',
  },
  url: 'https://www.orachitech.com/blog/custom-business-dashboard-workflow-automation',
};

const DashboardAutomationBlog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Custom Business Dashboard and Workflow Automation Guide | ORACHITECH"
        description="Learn what a custom business dashboard should show before workflow automation, from KPIs and handoffs to exceptions, alerts, and reporting systems."
        path="/blog/custom-business-dashboard-workflow-automation"
        keywords="custom business dashboard, workflow automation, dashboard development Pakistan, KPI dashboard, business process automation, ORACHITECH"
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
                  <span className="text-primary font-semibold">Business Automation</span>
                  <span>June 3, 2026</span>
                  <span>7 min read</span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                  What a Custom Business Dashboard Should Show Before You Automate Operations
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  A practical checklist for teams that want cleaner reporting, fewer spreadsheet handoffs, and workflow automation built around the right KPIs.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="pb-20">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                <div className="space-y-10 text-muted-foreground text-lg leading-8">
                  <p>
                    A custom dashboard becomes valuable when it helps the next decision happen faster. Before a business automates reminders, approvals, reports, or customer updates, it needs one reliable view of the work that matters.
                  </p>
                  {sections.map((section) => (
                    <section key={section.title}>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{section.title}</h2>
                      <p>{section.body}</p>
                    </section>
                  ))}
                  <section>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      How ORACHITECH builds dashboard-led automation
                    </h2>
                    <p>
                      ORACHITECH designs custom dashboards around business workflows, API integrations, role-based portals, data pipelines, automated notifications, and reporting views. The goal is to reduce manual coordination while keeping leadership close to the numbers that guide daily decisions.
                    </p>
                  </section>
                </div>
                <aside className="glass-card rounded-2xl p-6 h-fit sticky top-28">
                  <BarChart3 className="w-10 h-10 text-primary mb-5" />
                  <h3 className="font-display text-xl font-bold mb-5">Best fit for</h3>
                  <ul className="space-y-4 mb-6">
                    {['Operations teams', 'Service businesses', 'Sales pipelines', 'Finance tracking', 'Multi-branch reporting'].map((item) => (
                      <li key={item} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/start-project"
                    className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Plan a dashboard
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

export default DashboardAutomationBlog;

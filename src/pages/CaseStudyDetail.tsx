import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, CheckCircle2, GraduationCap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { schoolSaasCaseStudy } from '@/data/content';

const modules = [
  'Admissions and student profiles',
  'Fee vouchers, collections, discounts, and dues',
  'Student and staff attendance',
  'Exam setup, marks entry, grades, and result cards',
  'Parent portal for fees, attendance, notices, and results',
  'Admin reports for revenue, attendance, and academic performance',
];

const process = [
  {
    icon: GraduationCap,
    title: 'School workflow mapping',
    body: 'We started with the work schools repeat every day: admissions, fee records, attendance, marks, notices, and reporting.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure role-based access',
    body: 'Admin, accountant, teacher, parent, and student views are separated so each user only sees the tools and data they need.',
  },
  {
    icon: BarChart3,
    title: 'Decision-ready reporting',
    body: 'Dashboards turn operational data into clear summaries for collections, absences, student performance, and school growth.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: schoolSaasCaseStudy.title,
  description: schoolSaasCaseStudy.summary,
  author: {
    '@type': 'Organization',
    name: 'ORACHITECH',
  },
  url: `https://www.orachitech.com/case-studies/${schoolSaasCaseStudy.slug}`,
};

const CaseStudyDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${schoolSaasCaseStudy.title} Case Study | ORACHITECH`}
        description={schoolSaasCaseStudy.summary}
        path={`/case-studies/${schoolSaasCaseStudy.slug}`}
        keywords="school management SaaS case study, school ERP project, education SaaS Pakistan, ORACHITECH school software"
        schema={schema}
      />
      <Navbar />
      <WhatsAppButton />

      <main>
        <section className="relative pt-32 pb-12 overflow-hidden">
          <div className="absolute inset-0 hexagon-pattern opacity-60" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                {schoolSaasCaseStudy.category} Case Study
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">{schoolSaasCaseStudy.title}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">{schoolSaasCaseStudy.summary}</p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6">
            <img
              src={schoolSaasCaseStudy.heroImage}
              alt="School building and students"
              className="w-full max-h-[500px] object-cover rounded-2xl mb-12"
            />
            <div className="grid md:grid-cols-3 gap-4 mb-16">
              {schoolSaasCaseStudy.metrics.map((metric) => (
                <div key={metric.label} className="glass-card rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 mb-16">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">The challenge</h2>
                <p className="text-muted-foreground text-lg leading-8">
                  Schools often depend on spreadsheets, notebooks, messaging apps, and manual receipts. That setup
                  makes it difficult to track fees accurately, find student history quickly, communicate with parents,
                  and understand performance across classes or branches.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">The solution</h2>
                <p className="text-muted-foreground text-lg leading-8">
                  ORACHITECH designed a cloud-based school management SaaS with clear modules for daily administration,
                  financial tracking, academic records, communication, and reporting. The platform is responsive, secure,
                  and built so schools can start with core modules and expand over time.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {process.map((item) => (
                <div key={item.title} className="tech-card rounded-2xl p-8">
                  <item.icon className="w-10 h-10 text-primary mb-5" />
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1fr_320px] gap-12">
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Core modules delivered</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {modules.map((module) => (
                    <div key={module} className="glass-card rounded-xl p-5 flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{module}</span>
                    </div>
                  ))}
                </div>
              </section>
              <aside className="glass-card rounded-2xl p-6 h-fit">
                <h3 className="font-display text-xl font-bold mb-4">Technology stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {schoolSaasCaseStudy.stack.map((item) => (
                    <span key={item} className="px-3 py-2 bg-secondary rounded-lg text-sm text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  to="/school-management-system"
                  className="inline-flex items-center gap-2 text-primary font-semibold"
                >
                  Explore the product page
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;

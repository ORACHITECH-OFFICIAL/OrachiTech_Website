import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, CalendarCheck, CreditCard, FileBarChart, GraduationCap, ShieldCheck, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';

const features = [
  {
    icon: Users,
    title: 'Student & Staff Records',
    description: 'Manage admissions, classes, sections, staff profiles, documents, and academic history in one secure system.',
  },
  {
    icon: CreditCard,
    title: 'Fee Management',
    description: 'Track fee vouchers, monthly dues, discounts, pending balances, collections, and financial reports.',
  },
  {
    icon: CalendarCheck,
    title: 'Attendance Tracking',
    description: 'Record student and staff attendance with daily summaries, absence reports, and parent communication support.',
  },
  {
    icon: GraduationCap,
    title: 'Exams & Results',
    description: 'Create exams, enter marks, generate result cards, manage grading, and analyze student performance.',
  },
  {
    icon: BookOpen,
    title: 'Parent & Student Portal',
    description: 'Give families access to attendance, fees, notices, results, and school updates from a simple portal.',
  },
  {
    icon: FileBarChart,
    title: 'Reports Dashboard',
    description: 'See admissions, revenue, attendance, exam performance, and operational reports from a clean admin dashboard.',
  },
];

const packages = [
  {
    name: 'Starter',
    audience: 'Small schools',
    items: ['Student records', 'Fee tracking', 'Attendance', 'Basic reports'],
  },
  {
    name: 'Professional',
    audience: 'Growing schools',
    items: ['Parent portal', 'Exam results', 'Advanced reports', 'Role-based access'],
  },
  {
    name: 'Enterprise',
    audience: 'Multi-branch schools',
    items: ['Custom modules', 'Branch management', 'Cloud deployment', 'Priority support'],
  },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ORACHITECH School Management System',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://www.orachitech.com/school-management-system',
    description:
      'A school management system by ORACHITECH for student records, fee management, attendance, exams, parent portal, and school reporting.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PKR',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'Organization',
      name: 'ORACHITECH',
      url: 'https://www.orachitech.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in the ORACHITECH School Management System?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It includes student records, fee management, attendance, exams and results, parent portal, admin dashboard, and reporting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can ORACHITECH customize the school software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. ORACHITECH can customize modules, reports, user roles, portals, and workflows for private schools, academies, and multi-branch institutions.',
        },
      },
    ],
  },
];

const SchoolManagementSystem = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="School Management System in Pakistan | ORACHITECH"
        description="ORACHITECH builds school management software for student records, fee management, attendance, exams, parent portals, dashboards, and reports for schools in Pakistan."
        path="/school-management-system"
        keywords="school management system Pakistan, school software, fee management software, attendance management system, student result management system, parent portal software"
        schema={schema}
      />
      <Navbar />
      <WhatsAppButton />

      <main>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 hexagon-pattern opacity-5" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block animated-text">
                School Software by ORACHITECH
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                School Management System for <span className="shimmer-text">Modern Schools</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mb-10">
                Manage admissions, fees, attendance, exams, parent communication, and reporting from one secure web-based school management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Request Demo
                </Link>
                <a
                  href="https://wa.me/923233593780"
                  className="inline-flex items-center justify-center px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-colors"
                >
                  Discuss on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="tech-card glass-card p-8"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h2>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Packages for Every School Stage
              </h2>
              <p className="text-muted-foreground">
                Start with the core school operations, then add portals, analytics, custom reports, and branch-level controls as your institution grows.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((plan) => (
                <div key={plan.name} className="glass-card p-8">
                  <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">{plan.audience}</p>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6">{plan.name}</h3>
                  <ul className="space-y-3 mb-8">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="text-primary font-semibold hover:text-primary/80">
                    Get proposal
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SchoolManagementSystem;

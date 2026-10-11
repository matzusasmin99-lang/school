import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  GraduationCap,
  House,
  Mail,
  MapPin,
  Medal,
  Menu,
  Phone,
  School,
  Shield,
  Sparkles,
  Trophy,
  UsersRound,
  Volleyball,
  X,
  type LucideIcon,
} from 'lucide-react';
import { Link, useLocation } from 'wouter';
import './school-app.css';

type SchoolSection = {
  href: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  headline: string;
  icon: LucideIcon;
  items: { title: string; detail: string }[];
};

const sections: SchoolSection[] = [
  {
    href: '/about',
    number: '01',
    title: 'About Us',
    shortTitle: 'Our story',
    description:
      'Explore the school’s history, vision, mission, anthem and facilities.',
    headline: 'A story shaped by a school community.',
    icon: BookOpen,
    items: [
      {
        title: 'Our history',
        detail: 'School-approved history and milestones will appear here.',
      },
      {
        title: 'Vision & mission',
        detail: 'The official school vision and mission are ready to be added.',
      },
      {
        title: 'School anthem',
        detail: 'Lyrics or an audio recording can be added when supplied.',
      },
      {
        title: 'Facilities',
        detail:
          'Details about the library, laboratories, computer facilities and grounds will be confirmed by the school.',
      },
    ],
  },
  {
    href: '/staff',
    number: '02',
    title: 'Administration & Staff',
    shortTitle: 'Our people',
    description:
      'Meet the people who guide, teach and support the school community.',
    headline: 'People make a school.',
    icon: GraduationCap,
    items: [
      {
        title: 'The principal',
        detail:
          'The principal’s name, approved portrait and message will be added here.',
      },
      {
        title: 'Deputy principals',
        detail: 'The current deputy principals’ profiles will be supplied.',
      },
      {
        title: 'Teaching staff',
        detail:
          'Staff profiles can be grouped by subject areas, including Science, Arts, Commerce and Technology.',
      },
      {
        title: 'School support team',
        detail:
          'The non-academic staff directory will be added with school approval.',
      },
    ],
  },
  {
    href: '/leadership',
    number: '03',
    title: 'Student Leadership',
    shortTitle: 'Leadership',
    description:
      'Discover student leadership, clubs and the activities that bring people together.',
    headline: 'Ready to make a difference.',
    icon: Shield,
    items: [
      {
        title: 'Head prefects',
        detail:
          'Current names, approved portraits and messages will be supplied.',
      },
      {
        title: 'Prefects’ guild',
        detail:
          'Meet the current student leadership team once its details are confirmed.',
      },
      {
        title: 'Clubs & societies',
        detail:
          'The active school clubs and societies will be listed here.',
      },
      {
        title: 'Student life',
        detail:
          'Share approved stories about service, initiative and community spirit.',
      },
    ],
  },
  {
    href: '/sports',
    number: '04',
    title: 'Sports',
    shortTitle: 'Sports',
    description:
      'Follow school sport, house activities and the annual sports meet.',
    headline: 'Play with purpose.',
    icon: Volleyball,
    items: [
      {
        title: 'Our sports',
        detail:
          'The school’s current sports and teams will be confirmed and listed here.',
      },
      {
        title: 'Sports houses',
        detail: 'Official house names, colours and stories will be added.',
      },
      {
        title: 'Sports meet',
        detail:
          'The confirmed date, programme and approved event photographs will appear here.',
      },
    ],
  },
  {
    href: '/achievements',
    number: '05',
    title: 'Achievements',
    shortTitle: 'Achievements',
    description:
      'Celebrate verified accomplishments in learning, sport and creativity.',
    headline: 'Every effort has a story.',
    icon: Trophy,
    items: [
      {
        title: 'Academic excellence',
        detail:
          'Verified examination results and years will be published when supplied.',
      },
      {
        title: 'Sports victories',
        detail:
          'Confirmed competition names, levels and results can be celebrated here.',
      },
      {
        title: 'Beyond the classroom',
        detail:
          'Approved achievements in speaking, writing, innovation and other fields.',
      },
    ],
  },
  {
    href: '/events',
    number: '06',
    title: 'Events & Gallery',
    shortTitle: 'School life',
    description:
      'Explore school events and the moments that make up life at school.',
    headline: 'Moments that bring us together.',
    icon: CalendarDays,
    items: [
      {
        title: 'Upcoming events',
        detail:
          'Confirmed event dates and details will be added to the school calendar.',
      },
      {
        title: 'Past events',
        detail:
          'Event reports can feature celebrations, performances and school activities.',
      },
      {
        title: 'Photo & video gallery',
        detail:
          'Approved school photos and videos will replace these illustrative spaces.',
      },
    ],
  },
  {
    href: '/contact',
    number: '07',
    title: 'Contact Us',
    shortTitle: 'Contact',
    description:
      'Find the school’s official contact details and location.',
    headline: 'Stay in touch.',
    icon: MapPin,
    items: [
      {
        title: 'Address',
        detail: 'The official school address will be supplied.',
      },
      {
        title: 'Telephone',
        detail: 'The official school phone number will be supplied.',
      },
      {
        title: 'Email',
        detail: 'The official school email address will be supplied.',
      },
    ],
  },
];

function CampusArtwork() {
  return (
    <div
      className="campus-stage app-campus-stage"
      aria-label="Illustrative three-dimensional school campus artwork"
      role="img"
    >
      <div className="campus-scene" aria-hidden="true">
        <div className="campus-ground">
          <div className="campus-path" />
        </div>
        <div className="building building-main">
          <div className="roof" />
          <div className="facade" />
        </div>
        <div className="building wing">
          <div className="roof" />
          <div className="facade" />
        </div>
        <div className="building wing wing-right">
          <div className="roof" />
          <div className="facade" />
        </div>
        <div className="building hall">
          <div className="roof" />
          <div className="facade" />
        </div>
        <div className="tree tree-a" />
        <div className="tree tree-b" />
        <div className="tree tree-c" />
        <div className="tree tree-d" />
        <div className="flag" />
      </div>
      <span className="artwork-caption">Illustrative campus artwork</span>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="screen-content home-screen">
      <div className="welcome-panel">
        <div className="welcome-copy">
          <span className="app-eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            H/Ambalanthota National School
          </span>
          <h1>
            Curiosity grows.
            <br />
            <em>Character leads.</em>
          </h1>
          <p>
            A place to learn, lead and belong. Choose a section to explore our
            school community.
          </p>
          <div className="welcome-note">
            <span className="welcome-dot" />
            Your school community, all in one place
          </div>
        </div>
        <CampusArtwork />
      </div>

      <div className="section-heading-row">
        <div>
          <span className="screen-kicker">Explore</span>
          <h2>Where would you like to go?</h2>
        </div>
        <span className="section-count">07 sections</span>
      </div>

      <nav className="section-launcher" aria-label="School sections">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              className="launch-card"
              href={section.href}
              key={section.href}
              data-testid={`link-section-${section.href.slice(1)}`}
            >
              <span className="launch-icon">
                <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="launch-copy">
                <span className="launch-number">{section.number}</span>
                <strong>{section.title}</strong>
                <span>{section.description}</span>
              </span>
              <span className="launch-arrow" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="home-signoff">
        <span>Learning</span>
        <i />
        <span>Leadership</span>
        <i />
        <span>Sport</span>
        <i />
        <span>Community</span>
      </div>
    </div>
  );
}

function ContactDetails() {
  return (
    <>
      <div className="contact-info-grid">
        <div className="contact-info-card">
          <MapPin size={20} aria-hidden="true" />
          <span>Address</span>
          <strong>Official school address to be supplied</strong>
        </div>
        <div className="contact-info-card">
          <Phone size={20} aria-hidden="true" />
          <span>Telephone</span>
          <strong>Official phone number to be supplied</strong>
        </div>
        <div className="contact-info-card">
          <Mail size={20} aria-hidden="true" />
          <span>Email</span>
          <strong>Official email address to be supplied</strong>
        </div>
      </div>
      <div className="map-placeholder">
        <MapPin size={24} aria-hidden="true" />
        <div>
          <strong>School location</strong>
          <span>A verified map will be added when the school location is confirmed.</span>
        </div>
      </div>
      <div className="message-unavailable">
        <strong>Message form not connected</strong>
        <span>
          Messages cannot be sent until the school provides an official inbox
          and delivery service.
        </span>
      </div>
    </>
  );
}

function SectionScreen({
  section,
  index,
}: {
  section: SchoolSection;
  index: number;
}) {
  const Icon = section.icon;
  const previous = sections[index - 1];
  const next = sections[index + 1];

  return (
    <div className="screen-content detail-screen">
      <div className="screen-hero">
        <div>
          <div className="screen-breadcrumb">
            <House size={14} aria-hidden="true" />
            <span>School home</span>
            <span aria-hidden="true">/</span>
            <strong>{section.title}</strong>
          </div>
          <span className="screen-kicker">
            {section.number} / 07 · School community
          </span>
          <h1>{section.headline}</h1>
          <p>{section.description}</p>
        </div>
        <div className="section-art-icon">
          <Icon size={42} strokeWidth={1.35} aria-hidden="true" />
        </div>
      </div>

      {section.href === '/contact' ? (
        <ContactDetails />
      ) : (
        <div className="detail-card-grid">
          {section.items.map((item, itemIndex) => (
            <article className="detail-card" key={item.title}>
              <span className="detail-card-index">
                {section.number}.{String(itemIndex + 1).padStart(2, '0')}
              </span>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
              <div className="card-bottom-line" />
            </article>
          ))}
        </div>
      )}

      <div className="content-note">
        <span className="note-mark">i</span>
        <p>
          School-specific details and approved media will be added when they
          are provided by the school.
        </p>
      </div>

      <nav className="screen-pager" aria-label="Browse school sections">
        {previous ? (
          <Link className="pager-link pager-previous" href={previous.href}>
            <ArrowLeft size={17} aria-hidden="true" />
            <span>
              <small>Previous</small>
              <strong>{previous.shortTitle}</strong>
            </span>
          </Link>
        ) : (
          <Link className="pager-link pager-previous" href="/">
            <ArrowLeft size={17} aria-hidden="true" />
            <span>
              <small>Back to</small>
              <strong>School home</strong>
            </span>
          </Link>
        )}
        <Link className="pager-home" href="/" aria-label="Return to school home">
          <House size={17} aria-hidden="true" />
        </Link>
        {next ? (
          <Link className="pager-link pager-next" href={next.href}>
            <span>
              <small>Next</small>
              <strong>{next.shortTitle}</strong>
            </span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        ) : (
          <Link className="pager-link pager-next" href="/">
            <span>
              <small>Return to</small>
              <strong>School home</strong>
            </span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        )}
      </nav>
    </div>
  );
}

function SchoolApp() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const currentPath =
    location === '/' ? '/' : location.replace(/\/+$/, '');
  const activeSectionIndex = sections.findIndex(
    (section) => section.href === currentPath,
  );
  const activeSection =
    activeSectionIndex >= 0 ? sections[activeSectionIndex] : undefined;
  const unknownPage = currentPath !== '/' && !activeSection;

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentPath]);

  const pageContent = unknownPage ? (
    <div className="screen-content detail-screen">
      <div className="screen-hero">
        <div>
          <span className="screen-kicker">Page not found</span>
          <h1>Let’s find the right place.</h1>
          <p>This school page is not available.</p>
        </div>
      </div>
      <Link className="back-home-button" href="/">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to school home
      </Link>
    </div>
  ) : activeSection ? (
    <SectionScreen section={activeSection} index={activeSectionIndex} />
  ) : (
    <HomeScreen />
  );

  return (
    <div className="school-app">
      <aside className="app-sidebar">
        <Link className="app-brand" href="/" aria-label="School home">
          <span className="app-crest" aria-hidden="true">
            H/A
          </span>
          <span className="app-brand-name">
            H/Ambalanthota
            <small>National School</small>
          </span>
        </Link>
        <div className="sidebar-rule" />
        <span className="sidebar-label">School community</span>
        <nav className="side-navigation" aria-label="Main navigation">
          <Link
            className={`side-link ${currentPath === '/' ? 'is-active' : ''}`}
            href="/"
            aria-current={currentPath === '/' ? 'page' : undefined}
          >
            <House size={18} aria-hidden="true" />
            <span>School home</span>
          </Link>
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = section.href === currentPath;
            return (
              <Link
                className={`side-link ${isActive ? 'is-active' : ''}`}
                href={section.href}
                key={section.href}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{section.title}</span>
              </Link>
            );
          })}
        </nav>
        <div className="sidebar-footer">
          <span className="sidebar-footer-mark">
            <School size={17} aria-hidden="true" />
          </span>
          <p>
            Learning, leadership
            <br />
            and community.
          </p>
        </div>
      </aside>

      <div className="app-main">
        <header className="app-topbar">
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div className="topbar-location">
            <span>H/Ambalanthota National School</span>
            <span aria-hidden="true">/</span>
            <strong>{activeSection?.title ?? 'School home'}</strong>
          </div>
          {activeSection ? (
            <Link className="topbar-home-link" href="/">
              <ArrowLeft size={15} aria-hidden="true" />
              <span>School home</span>
            </Link>
          ) : (
            <span className="topbar-status">
              <span />
              School community
            </span>
          )}
          {menuOpen && (
            <nav className="mobile-navigation" aria-label="Mobile navigation">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <House size={17} aria-hidden="true" /> School home
              </Link>
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <Link
                    href={section.href}
                    key={section.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Icon size={17} aria-hidden="true" />
                    {section.title}
                  </Link>
                );
              })}
            </nav>
          )}
        </header>

        <main className="app-content" id="main-content">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="route-screen"
              key={currentPath}
              initial={
                reduceMotion ? false : { opacity: 0, y: 13, filter: 'blur(4px)' }
              }
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: -9, filter: 'blur(3px)' }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
              }
            >
              {pageContent}
            </motion.div>
          </AnimatePresence>
          <footer className="app-footer">
            <span>H/Ambalanthota National School</span>
            <span>Learning · Leadership · Community</span>
            <span>Developer: Matheesha Sasmin</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default SchoolApp;

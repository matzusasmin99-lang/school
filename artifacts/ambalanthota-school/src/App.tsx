import { useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const navigation = [
  ['About Us', '#about'],
  ['Administration & Staff', '#staff'],
  ['Student Leadership', '#leadership'],
  ['Sports', '#sports'],
  ['Achievements', '#achievements'],
  ['Events & Gallery', '#events'],
] as const;

function Placeholder({ children }: { children: string }) {
  return <p className="editable-note">Content placeholder — {children} to be supplied by the school.</p>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const keepLocal = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <div className="site-shell">
      <div className="topline">
        <span>H/Ambalanthota National School</span>
        <span>A place to learn, lead and belong</span>
      </div>
      <header className="header">
        <a className="brand" href="#home" aria-label="H/Ambalanthota National School home" onClick={closeMenu}>
          <span className="crest" aria-hidden="true">H/A</span>
          <span className="brand-title">H/Ambalanthota<span className="brand-sub">National School</span></span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="#contact" className="nav-contact">Contact Us</a>
        </nav>
        <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          {navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a href="#contact" onClick={closeMenu}>Contact Us</a>
        </nav>}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow">A school community</div>
            <h1>Curiosity grows.<br /><em>Character leads.</em></h1>
            <p>A welcoming place for learning, leadership, sport and the shared moments that bring a school community together.</p>
            <a href="#about" className="hero-cta">Discover our school <span>↘</span></a>
            <div className="hero-note"><strong>H/Ambalanthota National School</strong><br />A story still being written, together.</div>
          </div>
          <div className="campus-stage" aria-label="Illustrative three-dimensional school campus motif">
            <div className="orbit-label label-learning">Learning, every day</div>
            <div className="campus-scene" aria-hidden="true">
              <div className="campus-ground"><div className="campus-path" /></div>
              <div className="building building-main"><div className="roof" /><div className="facade" /></div>
              <div className="building wing"><div className="roof" /><div className="facade" /></div>
              <div className="building wing wing-right"><div className="roof" /><div className="facade" /></div>
              <div className="building hall"><div className="roof" /><div className="facade" /></div>
              <div className="tree tree-a" /><div className="tree tree-b" /><div className="tree tree-c" /><div className="tree tree-d" />
              <div className="flag" />
            </div>
            <div className="orbit-label label-community">A place to belong</div>
            <div className="stage-caption">Illustrative campus artwork · not a school photograph</div>
          </div>
        </section>

        <div className="ticker" aria-label="School values">
          <span>Learning</span><i /><span>Leadership</span><i /><span>Sport</span><i /><span>Community</span>
        </div>

        <section className="section" id="about">
          <div className="container intro-grid">
            <div>
              <span className="section-kicker">01 — About us</span>
              <h2>Rooted in community.<br />Open to possibility.</h2>
              <div className="intro-meta">
                <div><strong>Our story</strong>History to be added</div>
                <div><strong>Our direction</strong>Vision & mission to be added</div>
              </div>
            </div>
            <div>
              <p className="section-intro">H/Ambalanthota National School is a community shaped by learning, contribution and shared ambition. This space is ready to tell the school's story in the words of the people who know it best.</p>
              <Placeholder>school history, approved vision and mission, and the school anthem (lyrics or recording)</Placeholder>
            </div>
          </div>
        </section>

        <section className="feature-band" aria-label="School information sections">
          <div className="container feature-row">
            {[
              ['01', 'A story to share', 'School history and milestones, supplied and approved by the school.'],
              ['02', 'A shared direction', 'The official vision and mission, ready to publish here.'],
              ['03', 'Spaces to learn', 'Library, laboratories, grounds and other facilities — details to confirm.'],
              ['04', 'Our anthem', 'School song lyrics and audio can be added when provided.'],
            ].map(([number, title, text]) => <article className="feature" key={number}><span className="feature-num">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="section message-section" id="staff">
          <div className="container message-layout">
            <div className="portrait-placeholder" role="img" aria-label="Illustrative portrait placeholder, not a staff photograph">
              <span className="portrait-label">Portrait placeholder · replace with approved image</span>
              <div className="portrait-shape" />
            </div>
            <div className="message-copy">
              <span className="section-kicker">02 — Administration & staff</span>
              <h2>People make<br />a school.</h2>
              <blockquote>“A message from the principal belongs here, in their own words.”</blockquote>
              <Placeholder>principal's name, message and approved portrait; deputy principals; teaching and non-academic staff directory</Placeholder>
              <div className="signature"><strong>Principal</strong>H/Ambalanthota National School · profile details to be supplied</div>
            </div>
          </div>
        </section>

        <section className="pathway" id="leadership">
          <div className="container">
            <div className="pathway-head">
              <div><span className="section-kicker">03 — Student leadership</span><h2>Ready to make<br />a difference.</h2></div>
              <p>Leadership takes shape in service, initiative and the everyday ways students care for their community.</p>
            </div>
            <div className="path-grid">
              <a className="path-card" href="#leadership-details"><span>LEADERSHIP / 01</span><div><h3>Head prefects</h3><p>Names, portraits and messages to be supplied.</p></div><span className="path-arrow"><ArrowUpRight size={19} /></span></a>
              <a className="path-card" href="#leadership-details"><span>LEADERSHIP / 02</span><div><h3>Prefects' guild</h3><p>Meet the current student leadership team.</p></div><span className="path-arrow"><ArrowUpRight size={19} /></span></a>
              <a className="path-card" href="#leadership-details"><span>LEADERSHIP / 03</span><div><h3>Clubs & societies</h3><p>Student interests, ideas and shared pursuits.</p></div><span className="path-arrow"><ArrowUpRight size={19} /></span></a>
              <a className="path-card" href="#leadership-details"><span>LEADERSHIP / 04</span><div><h3>Find your voice</h3><p>Society descriptions and participation details to come.</p></div><span className="path-arrow"><ArrowUpRight size={19} /></span></a>
            </div>
            <div id="leadership-details"><Placeholder>current prefect names and approved portraits, club and society list, and student messages</Placeholder></div>
          </div>
        </section>

        <section className="section events-section" id="sports">
          <div className="container events-layout">
            <div>
              <span className="section-kicker">04 — Sports</span>
              <h2>Play with<br />purpose.</h2>
              <p className="section-intro">Sport brings teamwork, commitment and school spirit into motion. The sports programme and its stories will take centre stage here.</p>
              <Placeholder>active sports, house names and colours, sports meet details and approved photographs</Placeholder>
            </div>
            <div className="event-list">
              <div className="event-row"><div className="event-date"><b>—</b>Calendar</div><div><h3>Sports meet</h3><p>Date, programme and details to be confirmed</p></div><span><ArrowUpRight size={17} /></span></div>
              <div className="event-row"><div className="event-date"><b>—</b>Teams</div><div><h3>Our sports</h3><p>Sports programme and team information to be added</p></div><span><ArrowUpRight size={17} /></span></div>
              <div className="event-row"><div className="event-date"><b>—</b>Houses</div><div><h3>House spirit</h3><p>Official house names and colours to be supplied</p></div><span><ArrowUpRight size={17} /></span></div>
            </div>
          </div>
        </section>

        <section className="feature-band" id="achievements">
          <div className="container intro-grid">
            <div>
              <span className="section-kicker">05 — Achievements</span>
              <h2>Every effort<br />has a story.</h2>
            </div>
            <div>
              <p className="section-intro">Celebrate the work behind each milestone: academic progress, sporting performance, creativity and the courage to try something new.</p>
              <Placeholder>verified examination results and years, competition names, placements and student permissions</Placeholder>
            </div>
          </div>
        </section>

        <section className="showcase" id="events">
          <div className="container">
            <div className="showcase-top">
              <div><span className="section-kicker">06 — Events & gallery</span><h2>Moments that<br />bring us together.</h2></div>
              <p>A window into performances, celebrations, sports and the everyday moments that make up school life. School-provided images can replace these abstract colour studies.</p>
            </div>
            <div className="gallery-grid">
              {[
                ['A day to remember', 'School celebrations'],
                ['On the field', 'Sport & teamwork'],
                ['Making things', 'Arts & creativity'],
                ['Learning together', 'Classroom life'],
                ['Our community', 'People & moments'],
              ].map(([title, label], index) => <article className="gallery-tile" key={title}>
                <span className="placeholder-tag">Illustrative tile · image pending</span>
                <div><span>Gallery / 0{index + 1} · {label}</span><h3>{title}</h3></div>
              </article>)}
            </div>
            <div style={{ marginTop: 22 }}><Placeholder>event reports, confirmed dates, photo and video albums, and image permissions</Placeholder></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <span className="section-kicker">07 — Contact us</span>
              <h2>Stay in<br />touch.</h2>
              <p className="contact-intro">For school enquiries, use the official contact details once they have been confirmed. No location, phone number or email has been supplied yet.</p>
              <div className="contact-details">
                <div><span>Address</span><strong>School address to be supplied</strong></div>
                <div><span>Telephone</span><strong>Official phone number to be supplied</strong></div>
                <div><span>Email</span><strong>Official email address to be supplied</strong></div>
              </div>
              <div className="map-note">Map embed placeholder — add a verified school location before publishing a map.</div>
            </div>
            <form className="contact-form" onSubmit={keepLocal}>
              <h3>Send a message</h3>
              <p>This form is not connected to a school inbox yet. Your information will not be sent or stored.</p>
              <div className="form-grid">
                <label>Your name<input name="name" type="text" placeholder="Name" autoComplete="name" /></label>
                <label>Email address<input name="email" type="email" placeholder="you@example.com" autoComplete="email" /></label>
                <label>Message<textarea name="message" placeholder="How can the school help?" /></label>
                <button type="submit" disabled aria-disabled="true" data-testid="button-contact-submit">Message form unavailable</button>
                <span className="form-hint">The school must configure a recipient and secure form service before messages can be sent.</span>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>H/Ambalanthota National School</span>
        <span>School stories, shared with pride.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

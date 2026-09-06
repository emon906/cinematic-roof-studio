import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  MapPin,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/ds-roofing-hero.jpg";
import projectReplacement from "@/assets/project-replacement.jpg";
import projectRepair from "@/assets/project-repair.jpg";
import projectStorm from "@/assets/project-storm.jpg";
import projectDetail from "@/assets/project-detail.jpg";
import beforeImage from "@/assets/roof-before.jpg";
import afterImage from "@/assets/roof-after.jpg";

const phoneDisplay = "+44 7904 186514";
const phoneHref = "tel:+447904186514";

const navLinks = [
  ["Home", "home"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["Before & After", "transformation"],
  ["Testimonials", "testimonials"],
  ["Contact", "contact"],
] as const;

const services = [
  { number: "01", title: "Roof Repairs", text: "Precise fault-finding and durable repairs that restore protection without compromise." },
  { number: "02", title: "Roof Replacements", text: "Complete re-roofing delivered with disciplined planning, premium materials and exacting finishes." },
  { number: "03", title: "New Roof Installation", text: "Weather-ready roofing systems built around the character and performance needs of your property." },
  { number: "04", title: "Storm Damage Repairs", text: "Responsive assessment and dependable remedial work when the weather has put your roof at risk." },
  { number: "05", title: "Roof Maintenance", text: "Proactive care that identifies small issues early and helps extend the life of your roof." },
  { number: "06", title: "Guttering & Roofline", text: "Clean, considered guttering, fascia and roofline work for dependable drainage and a refined finish." },
];

const projects = [
  { title: "Complete Roof Replacement", location: "Littlehampton", type: "Natural slate", description: "A full renewal shaped around clean detailing, lasting weather protection and the home’s coastal setting.", image: projectReplacement },
  { title: "Residential Roof Repair", location: "Worthing", type: "Clay tile repair", description: "Targeted repairs and careful tile replacement, preserving the character of a traditional Sussex property.", image: projectRepair },
  { title: "Storm Damage Restoration", location: "Arundel", type: "Emergency restoration", description: "A considered recovery following severe weather, securing the structure and restoring every critical detail.", image: projectStorm },
  { title: "Roofline & Detail Work", location: "West Sussex", type: "Guttering & fascia", description: "Precision roofline work that elevates the finish while improving drainage and long-term resilience.", image: projectDetail },
];

const testimonials = [
  { quote: "From the first inspection to the final clean-up, everything felt organised and professional. The finish is excellent and the whole house looks transformed.", name: "Sarah M.", location: "Littlehampton" },
  { quote: "Clear advice, reliable timings and outstanding attention to detail. DS Roofing made a major roof repair feel completely straightforward.", name: "James T.", location: "Worthing" },
  { quote: "They found the source of a persistent leak others had missed and repaired it properly. Excellent communication and genuinely careful work.", name: "Helen R.", location: "Arundel" },
  { quote: "A highly professional team and a first-class result. The new roofline is beautifully finished and everything was left spotless.", name: "David C.", location: "West Sussex" },
];

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="DS Roofing home">
      <span className="brand-mark" aria-hidden="true"><span>DS</span></span>
      <span className={inverse ? "text-inverse" : "text-foreground"}>
        <strong className="block font-display text-lg leading-none">DS ROOFING</strong>
        <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.24em] opacity-60">Littlehampton</span>
      </span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy: string; light?: boolean }) {
  return (
    <div className="section-intro">
      <p className="eyebrow"><span />{eyebrow}</p>
      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-end">
        <h2 className={`section-title ${light ? "text-inverse" : "text-foreground"}`}>{title}</h2>
        <p className={`max-w-lg text-base leading-7 ${light ? "text-inverse/60" : "text-muted-foreground"}`}>{copy}</p>
      </div>
    </div>
  );
}

function ComparisonSlider() {
  const [position, setPosition] = useState(53);
  return (
    <div className="comparison" style={{ "--split": `${position}%` } as React.CSSProperties}>
      <img src={afterImage} alt="Completed slate roof after restoration" width={1400} height={1000} loading="lazy" />
      <div className="comparison-before">
        <img src={beforeImage} alt="Aged roof before restoration" width={1400} height={1000} loading="lazy" />
      </div>
      <span className="comparison-label left">Before</span>
      <span className="comparison-label right">After</span>
      <div className="comparison-line" aria-hidden="true"><span><ChevronRight className="rotate-180" /><ChevronRight /></span></div>
      <input aria-label="Move to compare roof before and after" type="range" min="0" max="100" value={position} onChange={(e) => setPosition(Number(e.target.value))} />
    </div>
  );
}

export function DsRoofingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (heroRef.current) heroRef.current.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.12, 90)}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <main className="overflow-clip bg-background">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <BrandMark inverse={!scrolled} />
          <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Main navigation">
            {navLinks.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
          </nav>
          <Button asChild variant="hero" className="hidden lg:inline-flex"><a href="#contact">Get a quote <ArrowRight /></a></Button>
          <Button aria-label={menuOpen ? "Close navigation" : "Open navigation"} variant="heroOutline" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <nav className="site-container flex flex-col py-5" aria-label="Mobile navigation">
            {navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowRight /></a>)}
            <Button asChild variant="hero" size="xl" className="mt-4"><a href="#contact" onClick={() => setMenuOpen(false)}>Get a quote</a></Button>
          </nav>
        </div>
      </header>

      <section id="home" ref={heroRef} className="hero-section">
        <img className="hero-image" src={heroImage} alt="Professional roofer inspecting a slate roof at sunset" width={1920} height={1280} fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="site-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-9 pt-32 sm:pb-12 lg:justify-center lg:pb-16">
          <div className="max-w-4xl pt-24 lg:pt-10">
            <p className="hero-kicker reveal-up"><span>Local roofing expertise</span><span>Littlehampton · West Sussex</span></p>
            <h1 className="hero-title reveal-up delay-1">Built Strong.<br /><em>Finished Right.</em></h1>
            <p className="hero-copy reveal-up delay-2">Professional roofing built around quality craftsmanship, reliable service and lasting protection.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row reveal-up delay-3">
              <Button asChild variant="hero" size="xl"><a href="#contact">Get a free quote <ArrowRight /></a></Button>
              <Button asChild variant="heroOutline" size="xl"><a href={phoneHref}><Phone />Call DS Roofing</a></Button>
            </div>
          </div>
          <div className="hero-trust mt-14 grid grid-cols-3 gap-2 border-t border-inverse/20 pt-5 lg:absolute lg:bottom-10 lg:right-8 lg:w-[43%] lg:max-w-xl">
            {["Quality craftsmanship", "Reliable service", "Built to last"].map((item) => <div key={item}><Check /><span>{item}</span></div>)}
          </div>
          <a href="#services" className="scroll-cue" aria-label="Scroll to services"><ArrowDown /></a>
        </div>
      </section>

      <section id="services" className="section-pad bg-surface-warm">
        <div className="site-container">
          <SectionIntro eyebrow="The work" title="Our Roofing Services" copy="Quality work. Professional standards. Roofs built to protect what matters." />
          <div className="services-list mt-14 border-t border-border lg:mt-20">
            {services.map((service) => (
              <article key={service.title} className="service-row group">
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-arrow"><ArrowRight /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad bg-foreground text-inverse">
        <div className="site-container">
          <SectionIntro eyebrow="Selected work" title="Recent Projects" copy="Real roofs. Real work. Built to last." light />
          <div className="project-stack mt-14 lg:mt-20">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card" style={{ "--index": index } as React.CSSProperties}>
                <div className="project-image"><img src={project.image} alt={`${project.title} in ${project.location}`} width={1400} height={1000} loading="lazy" /></div>
                <div className="project-content">
                  <div className="flex items-center justify-between gap-4"><span className="project-count">0{index + 1}</span><span className="project-type">{project.type}</span></div>
                  <div>
                    <p className="mb-3 flex items-center gap-2 text-sm text-inverse/50"><MapPin className="size-4 text-primary" />{project.location}</p>
                    <h3>{project.title}</h3>
                    <p className="mt-4 max-w-lg text-sm leading-6 text-inverse/60 sm:text-base">{project.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="transformation" className="section-pad bg-background">
        <div className="site-container">
          <SectionIntro eyebrow="Transformation" title="See the Difference" copy="Drag across the image to reveal a roof restored with care, precision and materials selected to last." />
          <div className="mt-12 lg:mt-16"><ComparisonSlider /></div>
          <div className="transformation-note"><ShieldCheck /><p><strong>Care in every detail.</strong><span>From weathered and vulnerable to clean, secure and ready for the years ahead.</span></p></div>
        </div>
      </section>

      <section id="testimonials" className="section-pad bg-surface-warm">
        <div className="site-container">
          <SectionIntro eyebrow="Client words" title="Testimonials" copy="Trusted by homeowners. Built on quality work." />
          <div className="testimonial-stack mt-14 lg:mt-20">
            {testimonials.map((testimonial, index) => (
              <article key={testimonial.name} className="testimonial-card" style={{ "--index": index } as React.CSSProperties}>
                <Quote className="quote-mark" />
                <blockquote>“{testimonial.quote}”</blockquote>
                <footer><span>{testimonial.name}</span><span>{testimonial.location}</span></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow"><span />Start a conversation</p>
            <h2 className="section-title mt-5 text-inverse">Let’s Talk About<br />Your Roof.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-inverse/60">Tell us what you need and DS Roofing will help you take the next step.</p>
            <div className="contact-details">
              <a href={phoneHref}><Phone /><span><small>Call us directly</small>{phoneDisplay}</span></a>
              <div><MapPin /><span><small>Based in Littlehampton</small>42 Olliver Acre, Littlehampton,<br />United Kingdom, BN17 6FD</span></div>
            </div>
          </div>
          <form className="quote-form" onSubmit={submitForm}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label>Full name<Input name="name" required placeholder="Your name" /></label>
              <label>Phone number<Input name="phone" type="tel" required placeholder="Your phone number" /></label>
              <label>Email address<Input name="email" type="email" required placeholder="you@example.com" /></label>
              <label>Service needed<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label>
            </div>
            <label className="mt-5 block">Tell us about the work<Textarea name="message" required rows={5} placeholder="A few details about your roof or project…" /></label>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-inverse/45">No pressure. Just clear, professional advice.</p>
              <Button type="submit" variant="hero" size="xl">Request a free quote <ArrowRight /></Button>
            </div>
            {sent && <p className="form-success" role="status"><Check />Thanks — your enquiry is ready for DS Roofing to review.</p>}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-container">
          <div className="grid gap-10 border-b border-inverse/10 pb-12 md:grid-cols-[1fr_auto_auto] md:gap-16">
            <div><BrandMark inverse /><p className="mt-5 text-sm text-inverse/50">Quality roofing. Built to last.</p></div>
            <div><h3>Quick links</h3><nav>{navLinks.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></div>
            <div><h3>Contact</h3><a href={phoneHref}>{phoneDisplay}</a><address>42 Olliver Acre, Littlehampton,<br />United Kingdom, BN17 6FD</address></div>
          </div>
          <div className="flex flex-col gap-2 py-6 text-xs text-inverse/35 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} DS Roofing. All rights reserved.</span><span>Littlehampton · West Sussex</span></div>
        </div>
      </footer>
    </main>
  );
}
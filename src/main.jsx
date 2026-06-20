import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { IMAGES, SITE } from './siteConfig.js';
import './styles.css';

const T = {
  nav: ['Home', 'Opdrachtgevers', 'Chauffeurs', 'Diensten', 'Offerte', 'Contact'],
  topbar: 'Transportoplossingen voor Nederland, Duitsland en België',
  quote: 'Offerte aanvragen',
  driverCta: 'Chauffeur aanmelden',
  heroTitle: 'Transportcapaciteit waar je op kunt bouwen.',
  heroText: 'Betrouwbaar transport en flexibele chauffeursdiensten voor bedrijven in Nederland, Duitsland, België en West-Europa. Duidelijke communicatie, sterke uitvoering en afspraak = afspraak.',
  trustBadges: ['Afspraak = afspraak', 'CE-bestuurders', 'Nederland, Duitsland & België', 'Internationale chauffeurs'],
  clientBullets: ['Transportbedrijf Nederland', 'Zakelijk transport', 'Chauffeursdiensten', 'CE-bestuurders', 'Flexibele transportcapaciteit', 'Duidelijke communicatie'],
  trust: [
    ['Op tijd', 'Planning en uitvoering volgens afspraak.'],
    ['Sterke chauffeurs', 'Betrouwbare CE-bestuurders die begrijpen wat transport vraagt.'],
    ['Heldere communicatie', 'Korte lijnen, duidelijke afspraken en snelle terugkoppeling.'],
    ['Internationaal inzetbaar', 'Focus op Nederland, Duitsland, België en internationale chauffeurs.'],
  ],
  services: [
    ['Transportbedrijf Nederland', 'Betrouwbare transportcapaciteit voor zakelijke klanten in Nederland.'],
    ['Internationaal transport', 'Transportondersteuning in Nederland, Duitsland, België en West-Europa.'],
    ['CE-bestuurders', 'Betrouwbare CE-bestuurders voor tijdelijke of structurele inzet.'],
    ['Chauffeursdiensten', 'Flexibele ondersteuning voor logistieke bedrijven en transportopdrachten.'],
    ['Zakelijk transport', 'Timing, zorgvuldigheid en betrouwbaarheid voor iedere opdracht.'],
    ['Logistieke ondersteuning', 'Extra capaciteit bij drukte, personeelstekort of piekmomenten.'],
  ],
  steps: [
    ['Aanvraag', 'Je vraagt transportcapaciteit of chauffeursdiensten aan.'],
    ['Afstemming', 'We bespreken planning, land, inzet en specifieke eisen.'],
    ['Match & planning', 'We stemmen de juiste capaciteit of chauffeur af op de opdracht.'],
    ['Uitvoering', 'De opdracht wordt professioneel uitgevoerd volgens afspraak.'],
    ['Terugkoppeling', 'Heldere communicatie voor, tijdens en na de opdracht.'],
  ],
};

const SERVICE_OPTIONS = ['Transport Nederland', 'Internationaal transport', 'CE-bestuurder', 'Chauffeursdienst', 'Logistieke ondersteuning', 'Anders'];

const iconPaths = {
  phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-1-1 2c-4-1.5-8.5-6-10-10l2-1-1-4z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>, check: <path d="M5 12l4 4L19 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />, close: <path d="M6 6l12 12M18 6L6 18" />,
  truck: <><path d="M3 5h11v11H3zM14 9h4l3 4v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
  driver: <><circle cx="12" cy="8" r="3" /><path d="M6 20v-2a6 6 0 0 1 12 0v2M4 4h16" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  message: <><path d="M5 17l-2 4 5-2h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7a3 3 0 0 0 2 3z" /><path d="M8 9h8M8 13h5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.4 3 14.6 0 18M12 3c-3 3.4-3 14.6 0 18" /></>,
  route: <><circle cx="5" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 6h5a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h8" /></>,
  box: <><path d="M4 7l8-4 8 4-8 4-8-4zM4 7v10l8 4 8-4V7M12 11v10" /></>,
  building: <><path d="M4 21V5l8-3v19M12 8h8v13M7 7h2M7 11h2M7 15h2M15 12h2M15 16h2M2 21h20" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7" /></>,
};

const Icon = ({ name, size = 21 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
const Container = ({ children, className = '' }) => <div className={`container ${className}`}>{children}</div>;
const Brand = ({ light = false }) => <a href="#home" className={`brand ${light ? 'brand-light' : ''}`} aria-label="EDOX Logistics startpagina"><span className="brand-star" aria-hidden="true">✦</span><span className="brand-word"><strong>EDOX</strong><small>LOGISTICS</small></span></a>;
const Button = ({ href, children, secondary = false }) => <a className={`button ${secondary ? 'button-secondary' : 'button-primary'}`} href={href}>{children}<Icon name="arrow" size={17} /></a>;

function Topbar() {
  return <div className="topbar"><Container className="topbar-inner"><div className="top-contact"><a href={`tel:${SITE.phone}`}><Icon name="phone" size={14} />{SITE.phoneDisplay}</a><a href={`mailto:${SITE.email}`}><Icon name="mail" size={14} />{SITE.email}</a></div><span className="top-message">{T.topbar}</span><div className="top-actions"><a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={15} /></a><a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={15} /></a>{/* Taalwisselaar tijdelijk verborgen. Voeg NL/EN/RU pas terug als alle vertalingen volledig zijn. */}</div></Container></div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const ids = ['home', 'opdrachtgevers', 'chauffeurs', 'diensten', 'offerte', 'contact'];
  return <header className="header"><Container className="header-inner"><Brand /><nav id="main-nav" className={open ? 'nav open' : 'nav'} aria-label="Hoofdnavigatie">{T.nav.map((item, index) => <a key={item} href={`#${ids[index]}`} onClick={() => setOpen(false)}>{item}</a>)}<div className="mobile-nav-ctas"><Button href="#offerte">{T.quote}</Button><Button href="#chauffeurs" secondary>{T.driverCta}</Button></div></nav><div className="header-ctas"><Button href="#offerte">{T.quote}</Button><Button href="#chauffeurs" secondary>{T.driverCta}</Button></div><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? 'Menu sluiten' : 'Menu openen'}><Icon name={open ? 'close' : 'menu'} /></button></Container></header>;
}

function SectionHead({ kicker, title, text, light = false, center = false }) {
  return <div className={`section-head ${light ? 'light' : ''} ${center ? 'center' : ''}`}><span className="kicker">{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function Hero() {
  return <section className="hero" id="home" style={{ '--hero-image': `url(${IMAGES.hero})` }}><div className="hero-overlay" /><div className="hero-lines" /><Container className="hero-content"><div className="hero-copy"><div className="hero-brandline"><span>EDOX LOGISTICS</span><i /></div><h1>{T.heroTitle}</h1><strong className="slogan">FAST <b>•</b> STRONG <b>•</b> TRUSTED</strong><p>{T.heroText}</p><div className="hero-buttons"><Button href="#offerte">{T.quote}</Button><Button href="#chauffeurs" secondary>Ik ben chauffeur</Button></div><div className="hero-badges">{T.trustBadges.map((item, index) => <span key={item}><Icon name={['check', 'driver', 'route', 'globe'][index]} size={16} />{item}</span>)}</div></div></Container><div className="hero-route-label"><span>NL</span><i /><span>DE</span><i /><span>BE</span><i /><span>EU</span></div></section>;
}

function Clients() {
  return <section className="section clients" id="opdrachtgevers"><Container className="split"><div><SectionHead kicker="Voor opdrachtgevers" title="Transportpartner voor bedrijven in West-Europa" text="EDOX Logistics ondersteunt opdrachtgevers met betrouwbare transportcapaciteit, chauffeursdiensten en logistieke oplossingen in Nederland, Duitsland, België en West-Europa." /><div className="check-grid">{T.clientBullets.map(item => <span key={item}><Icon name="check" size={15} />{item}</span>)}</div><Button href="#offerte">Vraag transportofferte aan</Button></div>{/* Abstracte placeholder; vervang later door echte EDOX truckfoto. */}<div className="image-panel client-image" role="img" aria-label="Abstract netwerk voor transport in West-Europa"><span className="image-label">WEST-EUROPA</span><div className="route-map"><b>NL</b><i /><b>DE</b><i /><b>BE</b></div><div className="image-stat"><strong>3</strong><span>kern-<br />markten</span></div></div></Container></section>;
}

function Field({ label, name, type = 'text', required = false, textarea = false }) {
  return <label>{label}{textarea ? <textarea name={name} rows="3" required={required} /> : <input name={name} type={type} required={required} />}</label>;
}

function Select({ label, name, options, required = false }) {
  return <label>{label}<select name={name} required={required}><option value="">Maak een keuze</option>{options.map(item => <option value={item} key={item}>{item}</option>)}</select></label>;
}

function DriverForm() {
  const [done, setDone] = useState(false);
  const submit = event => { event.preventDefault(); setDone(true); event.currentTarget.reset(); };
  return <form className="compact-form" onSubmit={submit}>{done && <div className="success" role="status"><Icon name="check" />Bedankt voor je aanmelding. EDOX Logistics neemt contact met je op wanneer er een passende mogelijkheid is.</div>}<div className="form-row three"><Field label="Naam *" name="driverName" required /><Field type="email" label="E-mail *" name="driverEmail" required /><Field type="tel" label="Telefoonnummer *" name="driverPhone" required /></div><div className="form-row three"><Field label="Land (optioneel)" name="driverCountry" /><Select label="Taalvoorkeur (optioneel)" name="driverLanguage" options={['Nederlands', 'Engels', 'Russisch']} /><Select label="Rijbewijs (optioneel)" name="driverLicense" options={['CE', 'C', 'Anders']} /></div><button type="submit" className="button button-primary full">Laat je gegevens achter<Icon name="arrow" size={17} /></button>{/* KOPPELPUNT CHAUFFEUR: vervang de demo-handler later door Netlify Forms, Formspree, EmailJS of een backend. */}</form>;
}

function Drivers() {
  return <section className="section drivers" id="chauffeurs"><Container><div className="driver-shell"><div className="driver-copy"><SectionHead light kicker="Voor chauffeurs" title="Werk zoeken als transportchauffeur?" text="Ben jij chauffeur of CE-bestuurder en sta je open voor werk via EDOX Logistics? Laat je gegevens achter. Wij nemen contact met je op zodra er passende mogelijkheden zijn." /><p className="driver-regions"><Icon name="globe" size={17} />Wij verwelkomen internationale chauffeurs uit Europa en Centraal-Azië.</p>{/* Abstracte placeholder; vervang later door echte EDOX chauffeurfoto. */}<div className="driver-photo-slot" role="img" aria-label="Abstracte EDOX-placeholder voor internationale chauffeurs"><span>// INTERNATIONAAL CHAUFFEURSNETWERK</span></div><p className="reassure"><Icon name="check" size={16} />EDOX Logistics neemt contact met je op wanneer er passende mogelijkheden zijn.</p></div><DriverForm /></div></Container></section>;
}

function Trust() {
  const icons = ['clock', 'driver', 'message', 'globe'];
  return <section className="section trust"><Container><SectionHead center kicker="Waarom EDOX" title="Sterk in uitvoering. Duidelijk in afspraken." /><div className="trust-grid">{T.trust.map((item, index) => <article key={item[0]} className="trust-card"><span className="number">0{index + 1}</span><div className="icon"><Icon name={icons[index]} /></div><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></Container></section>;
}

function Services() {
  const icons = ['truck', 'globe', 'driver', 'route', 'building', 'box'];
  return <section className="section services" id="diensten"><Container><SectionHead center kicker="Onze diensten" title="Diensten van EDOX Logistics" text="Praktische transportoplossingen voor opdrachtgevers die continuïteit, kwaliteit en heldere communicatie verwachten." /><div className="services-grid">{T.services.map((item, index) => <article className="service-card" key={item[0]}><div className="service-icon"><Icon name={icons[index]} size={24} /></div><small>0{index + 1}</small><h3>{item[0]}</h3><p>{item[1]}</p><a href="#offerte">{T.quote}<Icon name="arrow" size={16} /></a></article>)}</div></Container></section>;
}

function Problem() {
  const bullets = ['Minder ruis in de planning', 'Betere betrouwbaarheid', 'Sneller schakelen', 'Duidelijke terugkoppeling', 'Sterke internationale chauffeursbasis'];
  return <section className="section problem"><Container><SectionHead kicker="Betrouwbaarheid als basis" title="Transport valt of staat met betrouwbaarheid." /><div className="problem-grid"><article className="problem-card problem-dark"><span>Het probleem</span><h3>Als de planning begint te schuiven</h3><p>Vertragingen, slechte communicatie en afspraken die niet worden nagekomen hebben direct gevolgen voor planning, klanttevredenheid en kosten.</p><div className="delay-bars"><i /><i /><i /><i /></div></article><article className="problem-card solution"><span>De EDOX-aanpak</span><h3>Rust door sterke uitvoering</h3><p>EDOX Logistics biedt betrouwbare transportondersteuning met duidelijke afspraken, sterke chauffeurs en consistente uitvoering.</p><ul>{bullets.map(item => <li key={item}><Icon name="check" size={15} />{item}</li>)}</ul></article>{/* Abstracte placeholder; vervang later door echte EDOX transportfoto. */}<div className="problem-photo" role="img" aria-label="Abstracte EDOX-placeholder voor routeplanning"><span>EDOX / ONDERWEG</span></div></div></Container></section>;
}

function Process() {
  return <section className="section process" id="werkwijze"><Container><SectionHead light kicker="Werkwijze" title="Zo werkt EDOX Logistics" /><div className="steps">{T.steps.map((item, index) => <article key={item[0]}><div className="step-no">0{index + 1}</div><i /><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></Container></section>;
}

function QuoteForm() {
  const [done, setDone] = useState(false);
  const submit = event => { event.preventDefault(); setDone(true); event.currentTarget.reset(); };
  return <form className="quote-form" onSubmit={submit}>{done && <div className="success" role="status"><Icon name="check" />Bedankt. Je offerteaanvraag is ontvangen. EDOX Logistics neemt contact met je op.</div>}<fieldset><legend><span>01</span>Bedrijfsgegevens</legend><div className="form-row"><Field label="Bedrijfsnaam *" name="company" required /><Field label="Contactpersoon *" name="contact" required /></div><div className="form-row"><Field type="email" label="E-mail *" name="email" required /><Field type="tel" label="Telefoon *" name="phone" required /></div></fieldset><fieldset><legend><span>02</span>Transportgegevens</legend><div className="form-row"><Field label="Land opdrachtgever *" name="clientCountry" required /><Select label="Soort dienst *" name="service" options={SERVICE_OPTIONS} required /></div><div className="form-row three"><Field label="Soort goederen *" name="goods" required /><Field type="number" label="Gewicht in kg" name="weight" /><Field type="number" label="Volume in m³" name="volume" /></div></fieldset><fieldset><legend><span>03</span>Route en planning</legend><div className="form-row"><Field label="Laadadres *" name="loadAddress" required /><Field label="Losadres *" name="unloadAddress" required /></div><Field type="date" label="Gewenste datum *" name="preferredDate" required /><Field textarea label="Opmerkingen" name="notes" /></fieldset><label className="privacy-check"><input type="checkbox" required /><span>Ik ga akkoord dat EDOX Logistics mijn gegevens gebruikt om contact met mij op te nemen.</span></label><button type="submit" className="button button-primary quote-submit">Offerte versturen<Icon name="arrow" size={18} /></button>{/* KOPPELPUNT OFFERTE: voeg later een Netlify Forms-, Formspree-, EmailJS- of backend-endpoint toe. */}</form>;
}

function Quote() {
  return <section className="section quote" id="offerte"><Container><SectionHead kicker="Voor opdrachtgevers" title="Vraag een transportofferte aan" text="Vul je gegevens in en EDOX Logistics neemt contact op voor een passende transportoplossing." /><QuoteForm /></Container></section>;
}

function Social() {
  const cards = [['FAST • STRONG • TRUSTED', 'Sterke uitvoering en betrouwbare transportcapaciteit.'], ['Chauffeurs gezocht', 'Internationale CE-bestuurders kunnen zich direct aanmelden.'], ['Transportcapaciteit nodig?', 'Bespreek jouw planning met EDOX Logistics.']];
  return <section className="section social"><Container><SectionHead center kicker="Blijf op de hoogte" title="Volg EDOX Logistics" text="Volg EDOX Logistics op Instagram en LinkedIn voor updates, vacatures en transportinzichten." /><div className="social-grid">{cards.map((item, index) => <article key={item[0]} className={`social-card social-${index + 1}`}><span>{['01 / MERK', '02 / CHAUFFEURS', '03 / CAPACITEIT'][index]}</span><div className="social-symbol">{['✦', 'CE', '→'][index]}</div><h3>{item[0]}</h3><p>{item[1]}</p><a href={index === 1 ? '#chauffeurs' : '#offerte'}>{index === 1 ? T.driverCta : T.quote}<Icon name="arrow" size={15} /></a></article>)}</div><div className="social-links"><a href={SITE.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" />Instagram</a><a href={SITE.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" />LinkedIn</a></div></Container></section>;
}

function About() {
  return <section className="section about"><Container className="about-grid">{/* Abstracte placeholder; vervang later door echte EDOX teamfoto. */}<div className="about-photo" role="img" aria-label="Abstracte EDOX-placeholder voor het team"><span>// TEAM / EIGENAAR / TRANSPORT</span><div className="about-mark">E</div></div><div><SectionHead kicker="Over EDOX" title="Gebouwd op kracht, vertrouwen en betrouwbaarheid." text="EDOX Logistics is een ambitieus transportbedrijf met een internationale blik. Wij bouwen op vertrouwen, duidelijke communicatie en het nakomen van afspraken." /><strong className="slogan dark">FAST <b>•</b> STRONG <b>•</b> TRUSTED</strong><div className="values">{['FAST', 'STRONG', 'TRUSTED'].map((item, index) => <span key={item}><small>0{index + 1}</small>{item}</span>)}</div></div></Container></section>;
}

function Seo() {
  return <section className="seo"><Container><div className="seo-content"><span><Icon name="route" /></span><div><h2>Transportbedrijf Nederland voor betrouwbare logistieke ondersteuning</h2><p>EDOX Logistics ondersteunt zakelijke klanten als transportbedrijf in Nederland, Duitsland, België en West-Europa. Met CE-bestuurders, chauffeursdiensten, zakelijk transport, logistieke ondersteuning en internationale chauffeurs bieden wij betrouwbare transportcapaciteit zonder gedoe.</p></div></div></Container></section>;
}

function CTA() {
  return <section className="cta"><div className="cta-lines" /><Container><div><span className="kicker">EDOX LOGISTICS</span><h2>Transportcapaciteit of chauffeurs nodig?</h2><p>Neem contact op en ontdek hoe wij jouw planning ondersteunen met betrouwbare chauffeurs en duidelijke afspraken.</p></div><div><Button href="#offerte">{T.quote}</Button><Button href="#chauffeurs" secondary>{T.driverCta}</Button></div></Container></section>;
}

function Contact() {
  return <section className="section contact" id="contact"><Container><SectionHead center kicker="Contact" title="Twee duidelijke routes. Eén betrouwbaar contact." /><div className="contact-grid"><a href={`tel:${SITE.phone}`}><span><Icon name="phone" /></span><small>Telefoon</small><strong>{SITE.phoneDisplay}</strong></a><a href={`mailto:${SITE.email}`}><span><Icon name="mail" /></span><small>E-mail</small><strong>{SITE.email}</strong></a><div><span><Icon name="globe" /></span><small>Werkgebied</small><strong>Nederland, Duitsland, België en West-Europa</strong></div></div><div className="contact-socials"><span>Volg EDOX Logistics</span><a href={SITE.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" size={18} />Instagram</a><a href={SITE.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={18} />LinkedIn</a></div><div className="contact-paths"><a href="#offerte"><b>Voor opdrachtgevers</b><span>Vraag direct een passende transportofferte aan.</span><strong>Offerte aanvragen</strong><Icon name="arrow" /></a><a href="#chauffeurs"><b>Voor chauffeurs</b><span>Laat je gegevens achter via het korte formulier.</span><strong>Chauffeur aanmelden</strong><Icon name="arrow" /></a></div></Container></section>;
}

function Footer() {
  return <footer><Container><div className="footer-grid"><div><Brand light /><p>Betrouwbare transportcapaciteit voor zakelijke klanten in West-Europa.</p><strong className="slogan">FAST • STRONG • TRUSTED</strong></div><div><h3>Contact</h3><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a><a href={`mailto:${SITE.email}`}>{SITE.email}</a><span>Nederland, Duitsland, België en West-Europa</span></div><div><h3>Bedrijfsgegevens</h3><span>KvK: 00000000</span><span>BTW: NL000000000B00</span><span>Vestigingsplaats, Nederland</span></div><div><h3>Social</h3><a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="#contact">Contact</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} EDOX Logistics. Alle rechten voorbehouden.</span><div><a href="#">Privacyverklaring</a><a href="#">Algemene voorwaarden</a></div></div></Container></footer>;
}

function StructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'edox-structured-data';
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': ['Organization', 'LocalBusiness'], additionalType: 'https://schema.org/TransportBusiness', name: SITE.name, url: 'https://arixconnect.github.io/logistiek/', email: SITE.email, telephone: SITE.phone, address: { '@type': 'PostalAddress', addressCountry: 'NL' }, areaServed: ['Netherlands', 'Germany', 'Belgium', 'Western Europe'], sameAs: [SITE.instagram, SITE.linkedin], contactPoint: { '@type': 'ContactPoint', telephone: SITE.phone, email: SITE.email, contactType: 'sales', availableLanguage: ['Dutch'] } });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
  return null;
}

function App() {
  useEffect(() => {
    document.documentElement.lang = 'nl-NL';
    document.title = 'EDOX Logistics | Transportbedrijf Nederland & CE-bestuurders';
  }, []);
  return <><StructuredData /><Topbar /><Header /><main><Hero /><Clients /><Drivers /><Trust /><Services /><Problem /><Process /><Quote /><Social /><About /><Seo /><CTA /><Contact /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);

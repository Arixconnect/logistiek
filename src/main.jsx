import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const Icon = ({ name, size = 22 }) => {
  const paths = {
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    driver: <><circle cx="12" cy="8" r="3"/><path d="M6 20v-2a6 6 0 0 1 12 0v2M4 4h16"/></>,
    message: <><path d="M5 17l-2 4 5-2h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7a3 3 0 0 0 2 3z"/><path d="M8 9h8M8 13h5"/></>,
    repeat: <><path d="M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/></>,
    truck: <><path d="M3 5h11v11H3zM14 9h4l3 4v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
    route: <><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h5a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h8"/></>,
    layers: <><path d="M12 3L3 8l9 5 9-5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-1-1 2c-4-1.5-8.5-6-10-10l2-1-1-4z"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
    check: <path d="M5 12l4 4L19 6"/>,
    chevron: <path d="M9 18l6-6-6-6"/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    close: <path d="M6 6l12 12M18 6L6 18"/>
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};

const Container = ({ children, className = '' }) => <div className={`container ${className}`}>{children}</div>;

function Topbar() {
  return <div className="topbar"><Container className="topbar-inner">
    <div className="topbar-links"><a href="tel:+31600000000"><Icon name="phone" size={14}/>06 - 00 00 00 00</a><a href="mailto:info@northride.nl"><Icon name="mail" size={15}/>info@northride.nl</a></div>
    <span className="availability"><i/>Beschikbaar voor zakelijke transportaanvragen</span>
  </Container></div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = () => setOpen(false); window.addEventListener('resize', close); return () => window.removeEventListener('resize', close); }, []);
  return <header className="header"><Container className="header-inner">
    <a href="#home" className="logo" aria-label="Northride Logistics home"><span className="logo-mark"><i/><b>N</b></span><span><strong>NORTHRIDE</strong><small>LOGISTICS</small></span></a>
    <nav id="main-navigation" className={open ? 'nav open' : 'nav'} aria-label="Hoofdnavigatie">
      {['Home','Diensten','Werkwijze','Over ons','Contact'].map((item, i) => <a key={item} href={['#home','#diensten','#werkwijze','#over-ons','#contact'][i]} onClick={() => setOpen(false)}>{item}</a>)}
      <a href="#contact" className="button button-primary nav-cta" onClick={() => setOpen(false)}>Offerte aanvragen <Icon name="arrow" size={18}/></a>
    </nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Menu sluiten' : 'Menu openen'} aria-expanded={open} aria-controls="main-navigation"><Icon name={open ? 'close' : 'menu'}/></button>
  </Container></header>;
}

function HeroVisual() {
  return <div className="hero-visual" role="img" aria-label="Abstracte logistieke route met vrachtwagen en distributiepunten">
    <div className="visual-grid"/><div className="route-line route-a"/><div className="route-line route-b"/>
    <div className="map-dot dot-a"/><div className="map-dot dot-b"/><div className="map-dot dot-c"/>
    <div className="truck-card"><span className="truck-icon"><Icon name="truck" size={36}/></span><span><small>CAPACITEIT</small><strong>Direct inzetbaar</strong></span><i className="status-dot"/></div>
    <div className="metric-card"><small>BETROUWBAARHEID</small><strong>100<span>%</span></strong><p>afspraak = afspraak</p></div>
    <div className="floating-label"><i/><span>Planning op schema</span><b>Nu</b></div>
    <div className="road"><span/><span/><span/></div>
  </div>;
}

function Hero() {
  return <section className="hero" id="home"><Container className="hero-inner">
    <div className="hero-copy"><div className="eyebrow"><span/>Zakelijke transportpartner</div>
      <h1>Betrouwbare transportcapaciteit. <em>Zonder gedoe.</em></h1>
      <p>Voor logistieke bedrijven die kunnen bouwen op CE-bestuurders, duidelijke communicatie en afspraken die worden nagekomen.</p>
      <div className="hero-actions"><a className="button button-primary" href="#contact">Offerte aanvragen <Icon name="arrow" size={18}/></a><a className="button button-ghost" href="tel:+31600000000"><Icon name="phone" size={18}/> Direct contact</a></div>
      <div className="hero-trust">{['CE-bestuurders','Zakelijk transport','Afspraak = afspraak'].map(t => <span key={t}><Icon name="check" size={15}/>{t}</span>)}</div>
    </div><HeroVisual/>
  </Container><Container><div className="hero-footer"><span>FAST.</span><span>RELIABLE.</span><span>CONSISTENT.</span><i/></div></Container></section>;
}

const trustItems = [
  ['clock','01','Op tijd','Planning en uitvoering volgens afspraak.'],
  ['driver','02','Betrouwbare CE-bestuurders','Professionele chauffeurs die begrijpen wat logistiek vraagt.'],
  ['message','03','Duidelijke communicatie','Korte lijnen, heldere afspraken en snelle terugkoppeling.'],
  ['repeat','04','Consistent inzetbaar','Flexibele ondersteuning wanneer jouw planning daarom vraagt.']
];
function TrustCards() { return <section className="trust-section"><Container><div className="trust-grid">{trustItems.map(([icon,n,title,text]) => <article className="trust-card" key={title}><span className="card-number">{n}</span><div className="icon-box"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>; }

function ProblemSolution() { return <section className="section problem"><Container>
  <div className="section-heading split-heading"><div><span className="kicker">Waarom betrouwbaarheid telt</span><h2>Transport valt of staat met <em>betrouwbaarheid.</em></h2></div><p>Elke schakel telt. Daarom maken we afspraken concreet en houden we de communicatie helder.</p></div>
  <div className="problem-grid"><article className="problem-card dark"><span className="card-label">Het probleem</span><h3>Als de planning begint te schuiven</h3><p>Veel bedrijven lopen vast door vertragingen, slechte communicatie en transportpartners die afspraken niet nakomen. Eén vertraagde rit heeft direct gevolgen voor planning, klanttevredenheid en kosten.</p><div className="delay-chart"><span/><span/><span/><span/><i>Vertraging</i></div></article>
  <article className="problem-card light"><span className="card-label">Onze aanpak</span><h3>Rust door duidelijke uitvoering</h3><p>Wij bieden betrouwbare transportondersteuning met duidelijke afspraken, professionele CE-bestuurders en consistente uitvoering. Geen loze beloftes, maar doen wat is afgesproken.</p><ul>{['Minder ruis in de planning','Sneller schakelen','Betere betrouwbaarheid','Duidelijke terugkoppeling'].map(x=><li key={x}><Icon name="check" size={16}/>{x}</li>)}</ul></article></div>
  </Container></section>; }

const services = [
 ['driver','01','CE-bestuurders','Voor tijdelijke of structurele inzet van betrouwbare CE-chauffeurs.'],
 ['truck','02','Chauffeursdiensten','Flexibele ondersteuning voor zakelijke transportopdrachten.'],
 ['layers','03','Transportondersteuning','Extra capaciteit bij drukte, personeelstekort of piekmomenten.'],
 ['route','04','Flexibele logistieke capaciteit','Snel opschalen wanneer jouw planning daarom vraagt.'],
 ['briefcase','05','Zakelijk transport','Voor bedrijven die waarde hechten aan timing, zorgvuldigheid en afspraak = afspraak.']
];
function Services() { return <section className="section services" id="diensten"><Container><div className="section-heading centered"><span className="kicker">Onze diensten</span><h2>Capaciteit die met jouw <em>planning meebeweegt.</em></h2><p>Of je nu tijdelijk extra capaciteit nodig hebt of structureel betrouwbare chauffeurs zoekt: wij denken praktisch mee en zorgen voor duidelijke uitvoering.</p></div><div className="services-grid">{services.map(([icon,n,title,text],i)=><article className={`service-card ${i===0?'featured':''}`} key={title}><div className="service-top"><span className="service-icon"><Icon name={icon}/></span><small>{n}</small></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Vraag ${title} aan`}>Bespreek je aanvraag <Icon name="arrow" size={17}/></a></article>)}</div></Container></section>; }

const steps = [['Aanvraag','Je neemt contact op en geeft aan welke ondersteuning nodig is.'],['Afstemming','We bespreken de planning, inzet, locatie en specifieke eisen.'],['Uitvoering','De rit of inzet wordt professioneel uitgevoerd volgens afspraak.'],['Terugkoppeling','Heldere communicatie voor, tijdens en na de opdracht.']];
function WorkProcess() { return <section className="section process" id="werkwijze"><Container><div className="section-heading inverse"><span className="kicker">Zo werken wij</span><h2>Van aanvraag naar uitvoering.<br/><em>Helder in vier stappen.</em></h2></div><div className="steps">{steps.map(([title,text],i)=><article className="step" key={title}><div className="step-num">0{i+1}</div><div className="step-line"><i/></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="process-note"><Icon name="check" size={18}/><span>Eén vast aanspreekpunt, van eerste aanvraag tot afronding.</span></div></Container></section>; }

function About() { return <section className="section about" id="over-ons"><Container className="about-grid"><div className="about-visual"><div className="about-word">N</div><div className="about-stat"><strong>100%</strong><span>toewijding aan<br/>iedere opdracht</span></div><span className="about-caption">SINDS DE EERSTE RIT</span></div><div className="about-copy"><span className="kicker">Over Northride</span><h2>Gebouwd op vertrouwen, integriteit en <em>consistentie.</em></h2><p>Wij zijn een ambitieus transportbedrijf dat gelooft dat betrouwbaarheid het verschil maakt in logistiek. Met focus op integriteit, duidelijke communicatie en afspraak = afspraak ondersteunen wij bedrijven die willen kunnen bouwen op hun transportcapaciteit.</p><div className="values">{['Fast','Reliable','Consistent'].map((x,i)=><div key={x}><small>0{i+1}</small><strong>{x}</strong></div>)}</div></div></Container></section>; }

function SeoBlock() { return <section className="seo-block"><Container><div className="seo-inner"><span className="seo-icon"><Icon name="route"/></span><div><h2>Transportondersteuning en CE-bestuurders voor zakelijke klanten</h2><p>Voor logistieke bedrijven is betrouwbare transportcapaciteit essentieel. Wij ondersteunen zakelijke klanten met CE-bestuurders, chauffeursdiensten en flexibele logistieke capaciteit. Met duidelijke communicatie en een afspraak-is-afspraakmentaliteit zorgen wij voor rust in de planning en professioneel zakelijk transport.</p></div></div></Container></section>; }

function CTASection() { return <section className="cta-section"><Container><div className="cta-inner"><div><span className="kicker">Klaar om door te rijden?</span><h2>Transportcapaciteit nodig waar je op kunt rekenen?</h2><p>Neem contact op en ontdek hoe wij jouw planning ondersteunen met betrouwbare chauffeurs en duidelijke afspraken.</p></div><div className="cta-actions"><a href="#contact" className="button button-primary">Vraag offerte aan <Icon name="arrow" size={18}/></a><a href="tel:+31600000000" className="button button-ghost"><Icon name="phone" size={18}/> Bel direct</a></div></div></Container></section>; }

function ContactForm() {
  const handleSubmit = e => { e.preventDefault(); alert('Bedankt! Dit demoformulier is klaar om aan een formulierdienst gekoppeld te worden.'); };
  return <section className="section contact" id="contact"><Container className="contact-grid"><div className="contact-copy"><span className="kicker">Neem contact op</span><h2>Vertel ons wat jouw planning <em>nodig heeft.</em></h2><p>Een concrete aanvraag of eerst even sparren? Laat je gegevens achter. We nemen zo snel mogelijk contact met je op.</p><div className="contact-details"><a href="tel:+31600000000"><span><Icon name="phone"/></span><div><small>Bel direct</small><strong>06 - 00 00 00 00</strong></div></a><a href="mailto:info@northride.nl"><span><Icon name="mail"/></span><div><small>Stuur een e-mail</small><strong>info@northride.nl</strong></div></a></div><div className="response-badge"><i/><span><strong>Snel antwoord</strong>Reactie op werkdagen binnen 2 uur</span></div></div>
    {/* KOPPELPUNT: vervang onSubmit met Netlify Forms, Formspree, EmailJS of een eigen API-endpoint. */}
    <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>Offerteaanvraag</span><small>Velden met * zijn verplicht</small></div><div className="form-row"><label>Naam *<input name="name" autoComplete="name" required placeholder="Voor- en achternaam"/></label><label>Bedrijfsnaam *<input name="company" autoComplete="organization" required placeholder="Naam van je organisatie"/></label></div><div className="form-row"><label>Telefoonnummer *<input type="tel" name="phone" autoComplete="tel" required placeholder="06 - 12 34 56 78"/></label><label>E-mailadres *<input type="email" name="email" autoComplete="email" required placeholder="naam@bedrijf.nl"/></label></div><div className="form-row"><label>Welke dienst heb je nodig? *<select name="service" defaultValue="" required><option value="" disabled>Selecteer een dienst</option>{services.map(s=><option key={s[2]}>{s[2]}</option>)}</select></label><label>Gewenste startdatum<input type="date" name="startDate"/></label></div><label>Bericht<textarea name="message" rows="4" placeholder="Vertel kort wat je zoekt, waar en wanneer."/></label><button className="button button-primary submit-button" type="submit">Verstuur aanvraag <Icon name="arrow" size={18}/></button><p className="privacy-note">Door te verzenden ga je akkoord met onze privacyverklaring.</p></form>
  </Container></section>;
}

function Footer() { return <footer className="footer"><Container><div className="footer-main"><div className="footer-brand"><a href="#home" className="logo light"><span className="logo-mark"><i/><b>N</b></span><span><strong>NORTHRIDE</strong><small>LOGISTICS</small></span></a><p>Betrouwbare transportcapaciteit voor bedrijven die willen doorpakken.</p><strong className="slogan">FAST. RELIABLE. CONSISTENT.</strong></div><div className="footer-col"><h3>Contact</h3><a href="tel:+31600000000">06 - 00 00 00 00</a><a href="mailto:info@northride.nl">info@northride.nl</a><span>Werkgebied: Nederland</span></div><div className="footer-col"><h3>Bedrijfsgegevens</h3><span>KvK: 00000000</span><span>Btw: NL000000000B00</span><span>Vestigingsplaats, Nederland</span></div><div className="footer-col"><h3>Snel naar</h3><a href="#diensten">Diensten</a><a href="#werkwijze">Werkwijze</a><a href="#contact">Offerte aanvragen</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Northride Logistics. Alle rechten voorbehouden.</span><div><a href="#">Privacyverklaring</a><a href="#">Algemene voorwaarden</a><a href="#contact">Contact</a></div></div></Container></footer>; }

function App() { return <><Topbar/><Header/><main><Hero/><TrustCards/><ProblemSolution/><Services/><WorkProcess/><About/><SeoBlock/><CTASection/><ContactForm/></main><Footer/></>; }

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);

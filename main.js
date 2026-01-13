/*
    Home Section
*/
const homeSectionData = {
  myDetails: {
    name: "Subodh Kumar",
    intro: [
      "Senior Software Engineer at EPAM Systems!!",
      "Frontend Developer by profession!!",
      "Problem Solver by Passion!!",
    ],
    contact: {
      call: 8076561176,
    },
    socialHandles: {
      linkedin: "https://www.linkedin.com/in/subodh-kr/",
      whatsapp: "https://wa.me/918076561176",
      github: "https://github.com/subodh-kumar1",
      mail: "mailto:subodh.subodhkumar1@gmail.com",
    },
  },
};

const iconClasses = {
  linkedin: "fa fa-linkedin",
  mail: "fa fa-envelope-o",
  whatsapp: "fa fa-whatsapp",
  github: "fa fa-github",
};
const getName = (name) => {
  const nameTag = document.createElement("h1");
  nameTag.setAttribute("class", "name");
  nameTag.append(name);
  return nameTag;
};

const getIntro = () => {
  const iAm = document.createElement("div");
  iAm.append("I am ");
  iAm.setAttribute("class", "iam");
  const nameTag = document.createElement("h3");
  nameTag.setAttribute("class", "intro");
  iAm.append(nameTag);
  return iAm;
};
const getLink = (content, type) => {
  const linkTag = document.createElement("a");
  linkTag.setAttribute("href", content);
  linkTag.setAttribute("target", "_blank");
  linkTag.setAttribute("rel", "noopener noreferrer");
  linkTag.setAttribute("aria-label", type);
  linkTag.setAttribute("title", type.charAt(0).toUpperCase() + type.slice(1));

  const icon = document.createElement("i");
  icon.setAttribute("class", iconClasses[type]);
  icon.setAttribute("aria-hidden", "true");

  const sr = document.createElement("span");
  sr.setAttribute("class", "sr-only");
  sr.textContent = type.charAt(0).toUpperCase() + type.slice(1);

  linkTag.append(icon);
  linkTag.append(sr);
  return linkTag;
};
const getSocialLinks = (socialHandles) => {
  const { linkedin, whatsapp, github, mail } = socialHandles;
  const socialTag = document.createElement("div");
  socialTag.setAttribute("class", "social-links");
  socialTag.append(getLink(linkedin, "linkedin"));
  socialTag.append(getLink(whatsapp, "whatsapp"));
  socialTag.append(getLink(github, "github"));
  socialTag.append(getLink(mail, "mail"));
  return socialTag;
};
const getFooterContent = (number) => {
  const footerContent = document.createElement("div");
  footerContent.setAttribute("class", "footer-content");
  const year = new Date().getFullYear();
  footerContent.innerHTML = `<div>Call me at <a href="tel:${number}">${number}</a></div><div>All rights reserved &copy; ${year}</div>`;
  return footerContent;
};
const createHomeSection = () => {
  const home = document.getElementById("homesection");
  // clear in case of re-render
  home.innerHTML = '';

  const name = getName(homeSectionData?.myDetails?.name);
  const nameTitle = getIntro();
  const socialLinks = getSocialLinks(homeSectionData?.myDetails?.socialHandles);
  const footerContent = getFooterContent(
    homeSectionData?.myDetails?.contact?.call
  );

  const hero = document.createElement('div');
  hero.setAttribute('class', 'hero-content reveal');

  const avatarLarge = document.createElement('img');
  avatarLarge.setAttribute('class', 'avatar avatar-large reveal');
  avatarLarge.setAttribute('src', 'assets/Avatar.jpeg');
  avatarLarge.setAttribute('alt', homeSectionData?.myDetails?.name + ' avatar');
  avatarLarge.setAttribute('width','120');
  avatarLarge.setAttribute('height','120');
  avatarLarge.setAttribute('loading','lazy');

  const subtitle = document.createElement('p');
  subtitle.setAttribute('class', 'hero-subtitle');
  subtitle.append('I build thoughtful, accessible web applications and scalable systems.');

  const ctaWrap = document.createElement('div');
  ctaWrap.setAttribute('class', 'hero-cta');
  const cta = document.createElement('a');
  cta.setAttribute('class', 'btn primary');
  cta.setAttribute('href', '#contact');
  cta.setAttribute('role', 'button');
  cta.setAttribute('aria-label','Contact Subodh');
  cta.append("Let's talk");
  cta.addEventListener('click', () => {
    if(window.dataLayer) window.dataLayer.push({ event: 'cta_contact_clicked' });
  });

  const resumeBtn = document.createElement('a');
  resumeBtn.setAttribute('class','btn ghost');
  resumeBtn.setAttribute('href','./assets/Subodh Kumar 2025 CV.pdf');
  resumeBtn.setAttribute('target','_blank');
  resumeBtn.setAttribute('rel','noopener noreferrer');
  resumeBtn.append('Download CV');

  ctaWrap.append(cta, resumeBtn);

  hero.append(avatarLarge);
  hero.append(name);
  hero.append(nameTitle);
  hero.append(subtitle);
  hero.append(ctaWrap);
  hero.append(socialLinks);

  home.append(hero);

  const footer = document.getElementById("footer");
  footer.append(footerContent);

  var typed = new Typed(".intro", {
    strings: homeSectionData?.myDetails?.intro,
    typeSpeed: 50,
    loop: true,
    backDelay: 900,
    backSpeed: 30,
  });
};

createHomeSection();

/*
    Experience Section
*/

const experienceData = [
  {
    companyName: "EPAM Systems",
    companyUrl: "https://epam.com",
    duration: "Apr 2024 - Present",
    location: "Gurugram, Haryana, India",
    position: "Senior Software Engineer",
    media:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGCvAy6jBv3eQ/company-logo_100_100/company-logo_100_100/0/1736349440203/epam_systems_logo?e=1744243200&v=beta&t=Akt7P9TeahmnoZSNUdq-U9RlQFTcFdbCStCtdPVUtZA",
    skills: ["React", "React Hooks", "Redux", "Java", "Springboot"],
  },
  {
    companyName: "GlobalLogic India",
    companyUrl: "https://globallogic.com",
    duration: "Nov 2021 - Apr 2024",
    location: "Noida, Uttar Pradesh, India",
    position: "Associate Consultant Engineering",
    media:
      "https://media.licdn.com/dms/image/C560BAQGkQhfYVuKB6Q/company-logo_100_100/0/1587638526588?e=1687392000&v=beta&t=MmhdfbL6Dpzau-xzISpig_y9eTLCSEl-knVSLVMd1yA",
    skills: ["React", "React Hooks", "Redux"],
  },
  {
    companyName: "ZeMoSo Technologies",
    companyUrl: "https://www.zemosolabs.com/",
    duration: "Mar 2021 - Oct 2021",
    location: "Hyderabad, Telangana, India",
    position: "Senior Software Engineer 2",
    media:
      "https://media.licdn.com/dms/image/C560BAQEGsbroYsa3yg/company-logo_100_100/0/1519902907612?e=1687392000&v=beta&t=Ubz7e3Wdq4Ot6BS535XO_JtGGOfI2dsBZFeVrKm0aOI",
    skills: ["React", "React Hooks", "Java Springboot"],
  },
  {
    companyName: "athenahealth",
    companyUrl: "https://www.athenahealth.com/",
    duration: "Oct 2019 - Mar 2021",
    location: "Chennai, Tamil Nadu, India",
    position: "Member of Technical Staff",
    media:
      "https://media.licdn.com/dms/image/C4D0BAQEks9TxjFdIag/company-logo_100_100/0/1632748749990?e=1687392000&v=beta&t=rljCKH-Tab4uRNUTZ0645Om5j5jAC7Jrxugqi-tTZ8A",
    skills: ["React", "React Hooks", "Perl Script", "Javascript"],
  },
  {
    companyName: "HCL Technologies",
    companyUrl: "https://www.hcltech.com",
    duration: "Jun 2019 - Oct 2019",
    location: "Chennai, Tamil Nadu, India",
    position: "Lead Engineer",
    media:
      "https://media.licdn.com/dms/image/C4D0BAQF-RIoeeMTMKQ/company-logo_100_100/0/1664197007563?e=1687392000&v=beta&t=KtYp2Ebk8VSkAhnD0cHtGT-njpU0e27Rr2rrz-bn_C4",
    skills: ["Core Java"],
  },
  {
    companyName: "Temenos India",
    companyUrl: "https://www.temenos.com/",
    duration: "Feb 2019 - May 2019",
    location: "Chennai, Tamil Nadu, India",
    position: "Software Engineer",
    media:
      "https://media.licdn.com/dms/image/C560BAQFf6zLYVupRGQ/company-logo_100_100/0/1652860743754?e=1687392000&v=beta&t=JYhfDZ7lwRUjFlTHIDpvkUozAEVLSnYTtGcvOsPdDQA",
    skills: ["T24"],
  },
  {
    companyName: "TPF Software India",
    companyUrl: "https://tpfsoftware.com/",
    duration: "Nov 2015 - Jan 2019",
    location: "Chennai, Tamil Nadu, India",
    position: "Senior Software Engineer",
    media:
      "https://media.licdn.com/dms/image/C510BAQHJlyzY_5caWw/company-logo_100_100/0/1552309762428?e=1687392000&v=beta&t=jp0zakJ7yTUto-GGpW30LGHlHrA9nXMLnfoZoqC87RA",
    skills: ["Java", "Springboot", "TPF"],
  },
];

const getCompany = (companyName, media, companyUrl) => {
  const companyParentTag = document.createElement("div");
  const companyTag = document.createElement("div");
  companyParentTag.setAttribute("class", "companyparent");
  const companyLogoTag = document.createElement("img");
  companyLogoTag.setAttribute("src", media);
  companyLogoTag.setAttribute("alt", companyName + ' logo');
  companyLogoTag.setAttribute("class", "companylogo");
  companyLogoTag.setAttribute("width", "48");
  companyLogoTag.setAttribute("height", "48");
  companyLogoTag.setAttribute("loading", "lazy");
  companyTag.append(companyName);
  companyLogoTag.addEventListener("click", () => {
    window.open(companyUrl, "_blank", "noopener,noreferrer");
  });
  companyParentTag.append(companyLogoTag);
  companyParentTag.append(companyTag);
  return companyParentTag;
};

const getWorkDetails = (duration, location, position, skills) => {
  const workDetailsContainer = document.createElement("div");
  const durationElement = document.createElement("div");
  const locationElement = document.createElement("div");
  const positionElement = document.createElement("div");

  workDetailsContainer.setAttribute("class", "workdetails");
  durationElement.setAttribute("class", "duration");
  locationElement.setAttribute("class", "location");
  positionElement.setAttribute("class", "position");

  positionElement.append(position);
  locationElement.append(location);
  durationElement.append(duration);

  const skillList = document.createElement("div");
  skillList.setAttribute("class", "skilllist");
  skills.forEach((skill) => {
    const skillListItem = document.createElement("div");
    skillListItem.setAttribute("class", "skilllistitem");
    skillListItem.append(skill);
    skillList.append(skillListItem);
  });

  workDetailsContainer.append(positionElement);
  workDetailsContainer.append(durationElement);
  workDetailsContainer.append(locationElement);
  workDetailsContainer.append(skillList);

  return workDetailsContainer;
};
const getExperience = (
  { companyName, duration, location, position, skills, companyUrl },
  companyLogo
) => {
  const experienceTag = document.createElement("div");
  experienceTag.setAttribute("class", "experienceparent");
  experienceTag.append(getCompany(companyName, companyLogo, companyUrl));
  experienceTag.append(getWorkDetails(duration, location, position, skills));
  return experienceTag;
};

const createExperienceSection = () => {
  const experience = document.getElementById("experiencesection");
  experienceData.forEach((experienceCompany, idx) => {
    const currentExperience = getExperience(
      experienceCompany,
      `./assets/joblogo${idx}.jpg`
    );
    experience.append(currentExperience);
  });
};

createExperienceSection();

/* Contact form handling (Formspree friendly) */
(function(){
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');

  if(!form) return;

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    status.textContent = 'Sending…';
    const action = form.getAttribute('action');
    try{
      const data = new FormData(form);
      const res = await fetch(action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' }});
      if(res.ok){
        status.textContent = 'Thanks—your message has been sent!';
        form.reset();
        // analytics event
        if(window.dataLayer) window.dataLayer.push({ event: 'contact_form_sent' });
      } else {
        const json = await res.json();
        status.textContent = json?.error || 'Oops, there was a problem sending your message.';
      }
    }catch(err){
      status.textContent = 'Network error. Please try again later.';
    }
  });
})();

/* UI Animations: reveal on scroll, background float, button pulse */
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // elements to reveal
  const revealSelectors = ['.name', '.intro', '.social-links', '.companyparent', '#cvsection', '#contactsection', 'footer'];
  const revealEls = revealSelectors.map(s => document.querySelector(s)).filter(Boolean);

  revealEls.forEach(el => el.classList.add('reveal'));

  // stagger children (social links, experience items)
  document.querySelectorAll('.social-links, .experienceparent').forEach(container => {
    container.classList.add('reveal-stagger');
    Array.from(container.children).forEach((child, i) => child.style.setProperty('--stagger-index', i));
  });

  if(!prefersReduced){
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, {threshold:0.15});

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));

    // float background overlay for subtle motion
    const overlay = document.querySelector('.bg-overlay');
    overlay && overlay.classList.add('float');

    // quick pulse for resume button then remove
    const resumeBtn = document.getElementById('resume-download');
    if(resumeBtn){
      // add a gentle pulse then keep a subtle hover affordance for clicks
      resumeBtn.classList.add('pulse');
      setTimeout(()=> resumeBtn.classList.remove('pulse'), 4200);
      // single micro-pulse for main CTA too (select dynamically)
      const heroCta = document.querySelector('.hero-cta .btn.primary');
      if(heroCta){ heroCta.classList.add('pulse'); setTimeout(()=> heroCta.classList.remove('pulse'), 1800); }
    }

    // social icons pop stagger
    document.querySelectorAll('.social-links a').forEach((a, i) => setTimeout(()=> a.classList.add('pop'), 400 + i*120));
    // remove pop after a while to allow hover effects
    setTimeout(()=> document.querySelectorAll('.social-links a.pop').forEach(a=>a.classList.remove('pop')), 2800);
  }
})();


/* Progressive hero background loader: try WebP then JPG, add class when ready */
(function(){
  const home = document.getElementById('homesection');
  if(!home) return;
  const loadImg = (src) => new Promise((res, rej)=>{
    const img = new Image();
    img.src = src;
    img.onload = ()=>res(src);
    img.onerror = ()=>rej(src);
  });

  // try multiple sources (webp → jpg → jpeg → other fallbacks)
  const bgCandidates = [
    'assets/background3.webp',
    'assets/background3.jpg',
    'assets/background3.jpeg',
    'assets/backgroundHome.jpg',
    'assets/background2.jpeg'
  ];

  (async function tryBackgrounds(){
    for(const src of bgCandidates){
      try{
        await loadImg(src);
        home.style.backgroundImage = `linear-gradient(180deg, rgba(2,6,10,0.35), rgba(2,6,10,0.25)), url('${src}')`;
        home.classList.add('bg-loaded');
        return;
      }catch(e){ /* try next */ }
    }
    // none available — keep gradient only
  })();
})();

// try to use generated noise.png (if present) to override default inline texture
(function(){
  const root = document.documentElement;
  const load = (src)=> new Promise((res,rej)=>{
    const i = new Image();
    i.src = src;
    i.onload = ()=>res(src);
    i.onerror = ()=>rej(src);
  });
  load('assets/noise.png').then((src)=>{
    root.style.setProperty('--page-texture', `url('${src}')`);
    document.body.classList.add('texture-available');
  }).catch(()=>{ /* keep inline SVG as fallback */ });
})();

/* Responsive nav behaviors: shrink navbar on scroll, accessible toggle, close menu on outside click or ESC */
(function(){
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('primary-menu');

  function onScroll(){
    if(window.scrollY > 80) navbar && navbar.classList.add('small');
    else navbar && navbar.classList.remove('small');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Toggle menu when nav toggle is clicked (accessible)
  if(navToggle){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      menu && menu.classList.toggle('open');
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', (e)=>{
    if(menu && !menu.contains(e.target) && navToggle && !navToggle.contains(e.target)){
      menu.classList.remove('open');
      navToggle && navToggle.setAttribute('aria-expanded','false');
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      menu && menu.classList.remove('open');
      navToggle && navToggle.setAttribute('aria-expanded','false');
      navToggle && navToggle.focus();
    }
  });

  // Close menu when a nav link is clicked (mobile)
  document.querySelectorAll('.menu a').forEach(a => a.addEventListener('click', ()=>{
    menu && menu.classList.remove('open');
    navToggle && navToggle.setAttribute('aria-expanded','false');
  }));

  // Prevent body scroll when menu is open on small screens
  const observer = new MutationObserver(()=>{
    if(menu && menu.classList.contains('open')) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  });
  menu && observer.observe(menu, { attributes: true, attributeFilter: ['class'] });
})();
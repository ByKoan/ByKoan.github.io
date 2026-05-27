// ── i18n ──────────────────────────────────────────────────────
const translations = {
  es: {
    "hero.tag": "Desarrollador Full Stack",
    "hero.line1": "Construyo",
    "hero.line2": "experiencias",
    "hero.line3": "digitales.",
    "hero.sub": "Apasionado del código limpio, las interfaces bien construidas y los sistemas que escalan. Transformo ideas en productos que funcionan de verdad.",
    "hero.cta1": "Ver proyectos",
    "hero.cta2": "Hablemos",
    "about.num": "01 // sobre mí",
    "about.title": "Un poco sobre mí",
    "about.p1": "Soy un desarrollador <span class=\"keyword\">full stack</span> con más de 5 meses de experiencia construyendo aplicaciones web y de escritorio / movil robustas y escalables. Me especializo en el ecosistema <span class=\"keyword\">Multiplataforma</span>, tanto en frontend como en backend.",
    "about.p2": "Me apasiona escribir código <span class=\"keyword\">limpio y mantenible</span>, colaborar en equipo, y estar siempre aprendiendo nuevas tecnologías. Creo firmemente en que la mejor tecnología es aquella que el usuario ni nota.",
    "about.p3": "Cuando no estoy programando, me encontrarás leyendo sobre <span class=\"keyword\">arquitectura de software</span>, contribuyendo a proyectos open source, o tomando café mientras depuro código.",
    "about.stat1": "meses de experiencia",
    "about.stat2": "proyectos completados",
    "about.stat3": "tecnologías principales",
    "about.stat4": "ganas de aprender",
    "projects.num": "02 // proyectos",
    "projects.title": "Proyectos destacados",
    "proj1.name": "PulseStream",
    "proj1.desc": "Servidor de reproducción de música estilo Spotify privado con conexión a plataformas como YouTube.",
    "proj2.name": "CoffeeCode",
    "proj2.desc": "Editor de código totalmente personalizable hecho en C (Actualmente en progreso).",
    "proj3.name": "RagePower (Rage)",
    "proj3.desc": "Plataforma online para llevar progresión, rutinas y bloques de entrenamiento general dándole especial enfoque al deporte \"Powerlifting\" para entrenadores y atletas (Actualmente en progreso).",
    "exp.num": "03 // experiencia",
    "exp.title": "Trayectoria profesional",
    "exp1.date": "Febrero 2026 — Junio 2026",
    "exp1.role": "IoT Researcher & Developer",
    "exp1.company": "Air Institute · Presencial",
    "exp1.desc": "Desarrollo de programas relacionados con sensores de dispositivos IoT, análisis de datos de sensores y gestión de bases de datos relacionales y no relacionales.",
    "exp2.date": "Septiembre 2025 — Junio 2027",
    "exp2.role": "Grado Superior - Desarrollo de Aplicaciones Multiplataforma",
    "exp2.company": "Presencial",
    "exp2.desc": "",
    "exp3.date": "Marzo 2024 — Junio 2024",
    "exp3.role": "Técnico Reparador de Sistemas MicroInformáticos y Redes",
    "exp3.company": "Universo Digital Segovia · Presencial",
    "exp3.desc": "Reparación y mantenimiento de equipos informáticos, redes y otros aparatos tecnológicos.",
    "exp4.date": "Septiembre 2022 — Junio 2024",
    "exp4.role": "Grado Medio - Sistemas MicroInformáticos y Redes",
    "exp4.company": "Presencial",
    "exp4.desc": "",
    "skills.num": "04 // habilidades",
    "skills.title": "Stack tecnológico",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.devops": "DevOps & Herramientas",
    "contact.num": "05 // contacto",
    "contact.title": "Hablemos",
    "contact.sub": "Estoy abierto a nuevas oportunidades, colaboraciones o simplemente a una buena conversación sobre tecnología. Envíame un mensaje y te respondo en menos de 24h.",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    "footer": "Diseñado y construido por <span>Diego Velasco Ayuso</span> · 2026",
    nav: { sobre: "Sobre mí", proyectos: "Proyectos", experiencia: "Experiencia", habilidades: "Habilidades", contacto: "Contacto" }
  },
  en: {
    "hero.tag": "Full Stack Developer",
    "hero.line1": "I build",
    "hero.line2": "digital",
    "hero.line3": "experiences.",
    "hero.sub": "Passionate about clean code, well-crafted interfaces, and systems that scale. I transform ideas into products that actually work.",
    "hero.cta1": "View projects",
    "hero.cta2": "Let's talk",
    "about.num": "01 // about me",
    "about.title": "A bit about me",
    "about.p1": "I'm a <span class=\"keyword\">full stack</span> developer with over 5 months of experience building robust and scalable web and desktop / mobile applications. I specialize in the <span class=\"keyword\">Multiplatform</span> ecosystem, both on frontend and backend.",
    "about.p2": "I'm passionate about writing <span class=\"keyword\">clean and maintainable</span> code, collaborating in teams, and always learning new technologies. I firmly believe the best technology is the kind users don't even notice.",
    "about.p3": "When I'm not coding, you'll find me reading about <span class=\"keyword\">software architecture</span>, contributing to open source projects, or drinking coffee while debugging.",
    "about.stat1": "months of experience",
    "about.stat2": "completed projects",
    "about.stat3": "core technologies",
    "about.stat4": "will to learn",
    "projects.num": "02 // projects",
    "projects.title": "Featured projects",
    "proj1.name": "PulseStream",
    "proj1.desc": "Private Spotify-style music streaming server with integration to platforms like YouTube.",
    "proj2.name": "CoffeeCode",
    "proj2.desc": "Fully customizable code editor built in C (Currently in progress).",
    "proj3.name": "RagePower (Rage)",
    "proj3.desc": "Online platform to track progression, routines and training blocks with a special focus on Powerlifting for coaches and athletes (Currently in progress).",
    "exp.num": "03 // experience",
    "exp.title": "Professional journey",
    "exp1.date": "February 2026 — June 2026",
    "exp1.role": "IoT Researcher & Developer",
    "exp1.company": "Air Institute · On-site",
    "exp1.desc": "Development of programs related to IoT device sensors, sensor data analysis, and management of relational and non-relational databases.",
    "exp2.date": "September 2025 — June 2027",
    "exp2.role": "Higher Degree - Multiplatform Application Development",
    "exp2.company": "On-site",
    "exp2.desc": "",
    "exp3.date": "March 2024 — June 2024",
    "exp3.role": "MicroComputer Systems & Networks Repair Technician",
    "exp3.company": "Universo Digital Segovia · On-site",
    "exp3.desc": "Repair and maintenance of computer equipment, networks, and other technological devices.",
    "exp4.date": "September 2022 — June 2024",
    "exp4.role": "Mid Degree - MicroComputer Systems & Networks",
    "exp4.company": "On-site",
    "exp4.desc": "",
    "skills.num": "04 // skills",
    "skills.title": "Tech stack",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.devops": "DevOps & Tools",
    "contact.num": "05 // contact",
    "contact.title": "Let's talk",
    "contact.sub": "I'm open to new opportunities, collaborations, or simply a good conversation about technology. Send me a message and I'll reply within 24h.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "footer": "Designed and built by <span>Diego Velasco Ayuso</span> · 2026",
    nav: { sobre: "About", proyectos: "Projects", experiencia: "Experience", habilidades: "Skills", contacto: "Contact" }
  }
};

let lang = 'es';

function setLang(l) {
  lang = l;
  const t = translations[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // nav links
  const navAs = document.querySelectorAll('.nav-a');
  const navKeys = ['sobre', 'proyectos', 'experiencia', 'habilidades', 'contacto'];
  navAs.forEach((a, i) => { a.textContent = t.nav[navKeys[i]] || a.textContent; });
  // lang buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.textContent === l.toUpperCase());
  });
  document.documentElement.lang = l;
}

// ── CURSOR ────────────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animRing() {
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a, button, .project-card, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    ring.style.width = '56px';
    ring.style.height = '56px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    ring.style.width = '36px';
    ring.style.height = '36px';
  });
});

// ── SCROLL REVEAL ─────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-fill').forEach(f => {
        f.style.width = f.dataset.pct + '%';
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .timeline-item').forEach(el => observer.observe(el));

// ── SKILL BARS ────────────────────────────────────────────────
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(f => {
        setTimeout(() => { f.style.width = f.dataset.pct + '%'; }, 200);
      });
    }
  });
}, { threshold: 0.3 });

const skillSection = document.getElementById('habilidades');
if (skillSection) skillObs.observe(skillSection);

// ── TERMINAL TYPEWRITER ───────────────────────────────────────
const terminalLines = [
  { text: 'whoami', delay: 400, color: 'white' },
  { text: 'Diego Velasco Ayuso — Full Stack Dev', delay: 800, color: 'green', prefix: '> ' },
  { text: 'ls skills/', delay: 1600, color: 'white' },
  { text: 'c  python  java  node  web  systems  docker...', delay: 2200, color: 'cyan', prefix: '' },
  { text: 'git log --oneline -1', delay: 3200, color: 'white' },
  { text: 'a1b2c3d ✨ feat: building awesome things', delay: 3800, color: 'green', prefix: '' },
];

function type(el, text, cb, i = 0) {
  if (i < text.length) {
    el.textContent += text[i];
    setTimeout(() => type(el, text, cb, i + 1), 45);
  } else if (cb) {
    setTimeout(cb, 300);
  }
}

const termBody = document.getElementById('termBody');

function runTerminal(idx = 0) {
  if (idx >= terminalLines.length) return;
  const ln = terminalLines[idx];
  setTimeout(() => {
    const row = document.createElement('div');
    const colorClass = ln.color === 'white' ? 't-white' : ln.color === 'green' ? 't-green' : 't-cyan';
    if (ln.color === 'white') {
      row.innerHTML = `<span class="t-green">~/portfolio</span> <span class="t-dim">$</span> <span class="t-white"></span>`;
      termBody.appendChild(row);
      type(row.querySelector('.t-white'), ln.text, () => runTerminal(idx + 1));
    } else {
      row.innerHTML = `<span class="${colorClass}"></span>`;
      termBody.appendChild(row);
      type(row.querySelector(`.${colorClass}`), (ln.prefix || '') + ln.text, () => runTerminal(idx + 1));
    }
  }, ln.delay);
}

runTerminal();

// ── NAV ACTIVE ────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-a');

window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) cur = s.id; });
  navLinks.forEach(a => {
    const href = a.getAttribute('href').replace('#', '');
    a.style.color = href === cur ? 'var(--accent)' : '';
  });
});

// ── COLOR PICKER ──────────────────────────────────────────────
const colorPickerBtn = document.getElementById('colorPickerBtn');
const colorPalette   = document.getElementById('colorPalette');
const colorDot       = document.getElementById('colorDot');
const root           = document.documentElement;

colorPickerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  colorPalette.classList.toggle('open');
});

document.addEventListener('click', () => colorPalette.classList.remove('open'));
colorPalette.addEventListener('click', e => e.stopPropagation());

function applyAccent(hex, glow) {
  root.style.setProperty('--accent', hex);
  root.style.setProperty('--glow', `0 0 20px rgba(${glow},0.15)`);
  // Update grid bg lines
  document.querySelectorAll('.grid-bg').forEach(el => {
    el.style.backgroundImage = `
      linear-gradient(rgba(${glow},0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(${glow},0.03) 1px, transparent 1px)
    `;
  });
  // Update cursor ring
  document.querySelectorAll('.cursor-ring').forEach(el => {
    el.style.borderColor = `rgba(${glow},0.4)`;
  });
  // Update scanline
  document.querySelectorAll('.scanline').forEach(el => {
    el.style.background = `linear-gradient(90deg, transparent, rgba(${glow},0.15), transparent)`;
  });
  // Update orb1
  const orb1 = document.querySelector('.orb1');
  if (orb1) orb1.style.background = hex;
  // Update color dot
  colorDot.style.background = hex;
  colorDot.style.boxShadow = `0 0 6px ${hex}`;
  // Mark active swatch
  document.querySelectorAll('.swatch').forEach(s => {
    s.classList.toggle('active', s.dataset.color === hex);
  });
  colorPalette.classList.remove('open');
}

document.querySelectorAll('.swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    applyAccent(swatch.dataset.color, swatch.dataset.glow);
  });
});

// Mark default swatch
document.querySelector('.swatch[data-color="#00ff88"]')?.classList.add('active');


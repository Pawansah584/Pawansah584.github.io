// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Theme toggle =====
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Scroll-spy active nav link =====
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(section => spyObserver.observe(section));

// ===== Fade-up on scroll =====
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ===== Project data (excludes RxShield, which is hand-authored as the featured card) =====
const projects = [
  {
    title: 'Atlas Red Team: MITRE ATT&CK Layer',
    description: 'A MITRE ATT&CK Navigator layer mapping techniques used in a red team adversary emulation against a simulated corporate portal, covering phishing, credential harvesting, OSINT reconnaissance, and C2 persistence.',
    tags: ['Red Teaming', 'MITRE ATT&CK', 'Adversary Emulation'],
    url: 'https://github.com/Pawansah584/atlas-redteam-mitre-layer'
  },
  {
    title: 'Vuln-Atlas Webapp',
    description: 'The intentionally vulnerable target application built for the Atlas red team engagement, used to practice and demonstrate exploitation of common web application weaknesses.',
    tags: ['Python', 'Web Security', 'Red Team Target'],
    url: 'https://github.com/Pawansah584/Vuln-Atlas-webapp'
  },
  {
    title: 'Web Application Security Scanner',
    description: 'A Python-based web application security scanner with both CLI and GUI interfaces for identifying common vulnerabilities.',
    tags: ['Python', 'Web Security', 'Automation'],
    url: 'https://github.com/Pawansah584/Web-Application-Security-Scanner-Using-Python'
  },
  {
    title: 'Password-Protected Image Steganography',
    description: 'A tool for hiding and retrieving encrypted data inside images, with both CLI and GUI interfaces.',
    tags: ['Python', 'Steganography', 'Cryptography'],
    url: 'https://github.com/Pawansah584/Password_Protected_Image_Steganography'
  },
  {
    title: 'File Encryption &amp; Decryption',
    description: 'A file encryption/decryption utility written in C, implementing core cryptographic operations from scratch.',
    tags: ['C', 'Cryptography'],
    url: 'https://github.com/Pawansah584/File-Encryption-and-Decryption'
  },
  {
    title: 'Password Generating Tool',
    description: 'A simple, configurable secure password generator written in Python.',
    tags: ['Python', 'Security Utility'],
    url: 'https://github.com/Pawansah584/PasswordGeneratingTool'
  },
  {
    title: 'CCNA Labs &amp; Projects',
    description: 'A collection of networking labs and projects built while preparing for CCNA, covering routing, switching, and initial device configuration.',
    tags: ['Networking', 'Cisco', 'CCNA'],
    url: 'https://github.com/Pawansah584/CCNA-Labs-Projects'
  },
  {
    title: 'Web Development Coursework: Database',
    description: 'Database design and implementation coursework for a web development module.',
    tags: ['SQL', 'Database Design'],
    url: 'https://github.com/Pawansah584/Cw2_Database'
  }
];

const externalLinkIcon = `<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;

const projectGrid = document.getElementById('projectGrid');
projectGrid.innerHTML = projects.map(p => `
  <article class="project-card">
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <div class="chip-row">${p.tags.map(t => `<span class="chip chip-tag">${t}</span>`).join('')}</div>
    <a class="card-link" href="${p.url}" target="_blank" rel="noopener">View on GitHub ${externalLinkIcon}</a>
  </article>
`).join('');

// ===== Certificate data =====
const fileIcon = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`;

const certificates = {
  academic: [
    { title: 'Platforms and Operating Systems', meta: 'Coventry University · 20 Credits', file: 'assets/certificates/platforms-and-operating-systems.pdf' },
    { title: 'Programming and Algorithms 1', meta: 'Coventry University · 30 Credits', file: 'assets/certificates/programming-and-algorithms-1.pdf' },
    { title: 'Programming and Algorithms 2', meta: 'Coventry University · 20 Credits', file: 'assets/certificates/programming-and-algorithms-2.pdf' },
    { title: 'Networking', meta: 'Coventry University · 20 Credits', file: 'assets/certificates/networking.pdf' },
    { title: 'Applied Forensics', meta: 'Coventry University · 10 Credits', file: 'assets/certificates/applied-forensics.pdf' }
  ],
  ctf: [
    { title: 'Hackfest 2025: Capture the Flag', meta: 'Softwarica College · Team NoobSec · Jan 2025', file: 'assets/certificates/hackfest-2025-ctf.jpeg' },
    { title: 'Hackfest 2.0: Defend the Future', meta: 'Softwarica IT Club · Jul 2025', file: 'assets/certificates/hackfest-2.0-ctf.jpeg' },
    { title: 'TRI-KODE: The Ultimate Hackathon', meta: 'Softwarica IT Club · Team Ninja Debuggers', file: 'assets/certificates/tri-kode-hackathon.jpeg' },
    { title: 'Capture the Flag (CTF)', meta: 'Softwarica College · Coventry University · Oct 2023', file: 'assets/certificates/ctf-2023.jpeg' },
    { title: 'DataForGood Nepal 2026 Hackathon', meta: '"Analytics for Society" · Institute of Analytics', file: 'assets/certificates/dataforgood-hackathon-2026.pdf' }
  ],
  training: [
    { title: 'CCNA: 90 Hours Professional Training', meta: 'Broadway Infosys · Feb - Apr 2025', file: 'assets/certificates/ccna-broadway-infosys.jpeg' },
    { title: 'Internship Completion Letter', meta: 'Nepal Telecom (Nepal Doorsanchar Co. Ltd.) · Apr 2025', file: 'assets/certificates/nepal-telecom-internship.jpeg' }
  ],
  community: [
    { title: 'IT Club Recognition', meta: 'IT &amp; Editorial Club, Softwarica College', file: 'assets/certificates/it-club-recognition.jpeg' },
    { title: 'Panel Session: "Why Open Source is Important"', meta: 'IT &amp; Editorial Club × Owl Integration · Dec 2023', file: 'assets/certificates/open-source-session-2023.jpeg' }
  ]
};

function renderCertGroup(items, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = items.map(c => `
    <div class="cert-card" data-file="${c.file}" data-type="${c.file.endsWith('.pdf') ? 'pdf' : 'image'}">
      <div class="cert-icon">${fileIcon}</div>
      <div>
        <p class="cert-title">${c.title}</p>
        <p class="cert-meta">${c.meta}</p>
      </div>
    </div>
  `).join('');
}

renderCertGroup(certificates.academic, 'certGrid-academic');
renderCertGroup(certificates.ctf, 'certGrid-ctf');
renderCertGroup(certificates.training, 'certGrid-training');
renderCertGroup(certificates.community, 'certGrid-community');

// ===== Certificate click: images -> lightbox, PDFs -> new tab =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => {
    const file = card.getAttribute('data-file');
    const type = card.getAttribute('data-type');
    if (type === 'pdf') {
      window.open(file, '_blank', 'noopener');
    } else {
      lightboxImg.src = file;
      lightbox.classList.add('open');
    }
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

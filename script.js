(function () {
  'use strict';

  const skillsData = [
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'C++', icon: 'devicon-cplusplus-plain' },
    { name: 'SQL', icon: 'devicon-mysql-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'HTML', icon: 'devicon-html5-plain' },
    { name: 'CSS', icon: 'devicon-css3-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'Power BI', icon: 'devicon-microsoftsqlserver-plain' },
    { name: 'Tableau', icon: 'devicon-azuresqldatabase-plain' },
    { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
    { name: 'Machine Learning', icon: 'devicon-pytorch-original' },
    { name: 'Data Analysis', icon: 'devicon-pandas-original' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
  ];

  const projectsData = [
    {
      title: 'Coffee Shop Analysis',
      description: 'A machine learning model that predicts coffee prices with 94% accuracy. Features comprehensive data preprocessing and feature engineering.',
      image: 'assets/coffee_project.png',
      github: 'https://github.com/Rahma-Elsafty/Coffee-Shop-Analysis',
      technologies: ['Python', 'PowerBI' , 'Excel'],
    },
    {
      title: 'Jumia Web Scarping - Black Friday',
      description: 'A real-time Python web scraping pipeline using BeautifulSoup to collect smartphone pricing data from Jumia before and after the Black Friday sales period.',
      image: 'assets/jumia.png',
      github: 'https://github.com/Rahma-Elsafty/DSM-Jumia/tree/main',
      technologies: ['Python (BeautifulSoup)', 'Matplolib','Pandas','PowerBI'],
    },
    {
      title: 'Future Project',
      description: 'Currently working on new ideas in AI, data engineering, and machine learning. Stay tuned for upcoming projects and experiments.',
      image: 'assets/working.jpg',
      github: 'https://github.com/Rahma-Elsafty',
      technologies: ['AI' ,'Machine Learning'],
    },
  ];

  const skillsGrid = document.getElementById('skills-grid');
  const projectsGrid = document.getElementById('projects-grid');
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const themeToggle = document.getElementById('theme-toggle');
  const yearSpan = document.getElementById('year');

  const THEME_KEY = 'portfolio-theme';

  function renderSkills() {
    const fragment = document.createDocumentFragment();
    skillsData.forEach(function (skill) {
      const card = document.createElement('div');
      card.className = 'skill-card';
      const icon = document.createElement('i');
      icon.className = skill.icon;
      icon.setAttribute('aria-hidden', 'true');
      const name = document.createElement('span');
      name.className = 'skill-name';
      name.textContent = skill.name;
      card.appendChild(icon);
      card.appendChild(name);
      fragment.appendChild(card);
    });
    skillsGrid.appendChild(fragment);
  }

  function renderProjects() {
    const fragment = document.createDocumentFragment();
    projectsData.forEach(function (project) {
      const card = document.createElement('article');
      card.className = 'project-card';

      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'project-image-wrapper';
      const img = document.createElement('img');
      img.className = 'project-image';
      img.src = project.image;
      img.alt = project.title + ' project screenshot';
      img.loading = 'lazy';
      imageWrapper.appendChild(img);

      imageWrapper.addEventListener('click', function () {
        window.open(project.github, '_blank', 'noopener,noreferrer');
      });
      imageWrapper.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(project.github, '_blank', 'noopener,noreferrer');
        }
      });
      imageWrapper.setAttribute('tabindex', '0');
      imageWrapper.setAttribute('role', 'button');
      imageWrapper.setAttribute('aria-label', 'Open ' + project.title + ' on GitHub');

      const info = document.createElement('div');
      info.className = 'project-info';

      const titleEl = document.createElement('h3');
      titleEl.className = 'project-title';
      titleEl.textContent = project.title;

      const descEl = document.createElement('p');
      descEl.className = 'project-description';
      descEl.textContent = project.description;

      const techEl = document.createElement('div');
      techEl.className = 'project-tech';
      project.technologies.forEach(function (tech) {
        const badge = document.createElement('span');
        badge.className = 'tech-badge';
        badge.textContent = tech;
        techEl.appendChild(badge);
      });

      const linkEl = document.createElement('a');
      linkEl.className = 'project-link';
      linkEl.href = project.github;
      linkEl.target = '_blank';
      linkEl.rel = 'noopener noreferrer';
      linkEl.setAttribute('aria-label', 'View ' + project.title + ' on GitHub');
      linkEl.innerHTML = 'GitHub <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>';

      info.appendChild(titleEl);
      info.appendChild(descEl);
      info.appendChild(techEl);
      info.appendChild(linkEl);

      card.appendChild(imageWrapper);
      card.appendChild(info);
      fragment.appendChild(card);
    });
    projectsGrid.appendChild(fragment);
  }

  function handleNavScroll() {
    var scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  function handleMobileNav() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    var expanded = hamburger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
    hamburger.setAttribute('aria-expanded', expanded);
  }

  function closeMobileNav() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function updateActiveLink() {
    var scrollY = window.scrollY + 120;
    var sections = document.querySelectorAll('.section');

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  function setupIntersectionObserver() {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    var fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  function toggleTheme() {
    var html = document.documentElement;
    var current = html.getAttribute('data-theme');
    if (current === 'dark') {
      html.removeAttribute('data-theme');
      localStorage.setItem(THEME_KEY, 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem(THEME_KEY, 'dark');
    }
  }

  yearSpan.textContent = new Date().getFullYear();
  renderSkills();
  renderProjects();
  initTheme();

  window.addEventListener('scroll', function () {
    handleNavScroll();
    updateActiveLink();
  });

  hamburger.addEventListener('click', handleMobileNav);

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileNav();
    });
  });

  themeToggle.addEventListener('click', toggleTheme);

  document.addEventListener('click', function (e) {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileNav();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMobileNav();
    }
  });

  setupIntersectionObserver();

  handleNavScroll();
  updateActiveLink();
})();

(function () {
  'use strict';

  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'C++', icon: 'devicon-cplusplus-plain' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'HTML', icon: 'devicon-html5-plain' },
        { name: 'CSS', icon: 'devicon-css3-plain' },
      ],
    },
    {
      category: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
        { name: 'Machine Learning', icon: 'devicon-pytorch-original' },
        { name: 'Data Analysis', icon: 'devicon-pandas-original' },
      ],
    },
    {
      category: 'Data & Analytics',
      skills: [
        { name: 'SQL', icon: 'devicon-mysql-plain' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' },
        { name: 'Power BI', icon: 'devicon-microsoftsqlserver-plain' },
        { name: 'Tableau', icon: 'devicon-azuresqldatabase-plain' },
      ],
    },
    {
      category: 'Tools & Version Control',
      skills: [
        { name: 'Git', icon: 'devicon-git-plain' },
        { name: 'GitHub', icon: 'devicon-github-original' },
      ],
    },
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
      title: 'Multiple Linear Regression Model',
      description: 'Built a multiple linear regression model from scratch using the least squares method rather than relying on pre-built libraries like scikit-learn. Implements the core mathematical foundations of regression through matrix operations.',
      image: 'assets/mlr.png',
      github: 'https://github.com/Rahma-Elsafty',
      technologies: ['Python', 'NumPy', 'Pandas'],
    },
    {
      title: 'Future Project',
      description: 'Currently working on new ideas in AI, data engineering, and machine learning. Stay tuned for upcoming projects and experiments.',
      image: 'assets/working.jpg',
      github: 'https://github.com/Rahma-Elsafty',
      technologies: ['AI' , 'Machine Learning'],
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
  const typingEl = document.getElementById('typing-text');
  const scrollProgress = document.getElementById('scroll-progress');
  const cursorGlow = document.getElementById('cursor-glow');

  const THEME_KEY = 'portfolio-theme';

  const typingPhrases = [
    'Machine Learning Engineer',
    'Data Scientist',
    'Building Intelligent Systems',
    'Turning Data into Decisions',
  ];

  function renderSkills() {
    var fragment = document.createDocumentFragment();
    skillCategories.forEach(function (cat) {
      var section = document.createElement('div');
      section.className = 'skills-section fade-in';

      var title = document.createElement('h3');
      title.className = 'skills-category-title';
      title.textContent = cat.category;
      section.appendChild(title);

      var grid = document.createElement('div');
      grid.className = 'skills-grid fade-in-stagger';

      cat.skills.forEach(function (skill) {
        var card = document.createElement('div');
        card.className = 'skill-card';
        var icon = document.createElement('i');
        icon.className = skill.icon;
        icon.setAttribute('aria-hidden', 'true');
        var name = document.createElement('span');
        name.className = 'skill-name';
        name.textContent = skill.name;
        card.appendChild(icon);
        card.appendChild(name);
        grid.appendChild(card);
      });

      section.appendChild(grid);
      fragment.appendChild(section);
    });
    skillsGrid.appendChild(fragment);
  }

  function renderProjects() {
    var fragment = document.createDocumentFragment();
    projectsData.forEach(function (project) {
      var card = document.createElement('article');
      card.className = 'project-card';

      var imageWrapper = document.createElement('div');
      imageWrapper.className = 'project-image-wrapper';
      var img = document.createElement('img');
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

      var info = document.createElement('div');
      info.className = 'project-info';

      var titleEl = document.createElement('h3');
      titleEl.className = 'project-title';
      titleEl.textContent = project.title;

      var descEl = document.createElement('p');
      descEl.className = 'project-description';
      descEl.textContent = project.description;

      var techEl = document.createElement('div');
      techEl.className = 'project-tech';
      project.technologies.forEach(function (tech) {
        var badge = document.createElement('span');
        badge.className = 'tech-badge';
        badge.textContent = tech;
        techEl.appendChild(badge);
      });

      var linkEl = document.createElement('a');
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

  function startTyping() {
    var index = 0;
    var charIndex = 0;
    var isDeleting = false;
    var speed = 80;
    var pause = 2000;

    function type() {
      var current = typingPhrases[index];
      if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        speed = 40;
      } else {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        speed = 80;
      }

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        speed = pause;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % typingPhrases.length;
        speed = 400;
      }

      setTimeout(type, speed);
    }

    if (typingEl) type();
  }

  function handleNavScroll() {
    var scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    var winScroll = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
  }

  function handleMouseMove(e) {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    var fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initParticles() {
    var existing = document.getElementById('particles-canvas');
    if (existing) existing.remove();

    var canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var particles = [];
    var w, h;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function createParticles() {
      particles = [];
      var count = Math.min(80, Math.floor((w * h) / 15000));
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
          o: Math.random() * 0.4 + 0.1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, ' + p.o + ')';
        ctx.fill();
      });

      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(139, 92, 246, ' + (0.06 * (1 - dist / 120)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();
    window.addEventListener('resize', function () {
      resize();
      createParticles();
    });
  }

  function initTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  function toggleTheme() {
    var html = document.documentElement;
    var current = html.getAttribute('data-theme');
    if (current === 'light') {
      html.removeAttribute('data-theme');
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem(THEME_KEY, 'light');
    }
  }

  yearSpan.textContent = new Date().getFullYear();
  renderSkills();
  renderProjects();
  initTheme();
  startTyping();
  initParticles();

  window.addEventListener('scroll', function () {
    handleNavScroll();
    updateActiveLink();
  });

  window.addEventListener('mousemove', handleMouseMove);

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

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.getElementById('header');
const toTop = document.getElementById('to-top');
const yearTarget = document.getElementById('year');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

navLinks.forEach((link) =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

const sections = [...document.querySelectorAll('main section[id]')];

function setActiveLink() {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const height = section.offsetHeight;
    const top = section.offsetTop - 120;
    const id = section.id;
    const link = document.querySelector(`.nav__link[href="#${id}"]`);
    if (!link) return;
    if (scrollY > top && scrollY <= top + height) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function handleScroll() {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  if (window.scrollY > 400) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }

  setActiveLink();
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (toTop) {
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

const blogList = document.getElementById('blog-list');
if (blogList) {
  fetch('assets/data/blog.json')
    .then((res) => res.json())
    .then((posts) => {
      if (!Array.isArray(posts) || posts.length === 0) {
        blogList.innerHTML = '<p class="blog__empty">No posts yet. Add entries to assets/data/blog.json.</p>';
        return;
      }
      blogList.innerHTML = posts
        .map(
          (post) => `
            <article>
              <p class="blog__label">${post.date || ''}</p>
              <h3><a href="${post.url}" target="_blank" rel="noopener">${post.title}</a></h3>
              <p>${post.summary}</p>
            </article>
          `
        )
        .join('');
    })
    .catch(() => {
      blogList.innerHTML = '<p class="blog__empty">Unable to load posts right now.</p>';
    });
}

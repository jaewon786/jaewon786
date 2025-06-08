// 다크모드 토글
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(mode) {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    themeIcon.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    themeIcon.textContent = '🌙';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });
}

// 부드러운 섹션 이동
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  });
});


// ---- Blog 캐러셀 함수 (Home에서 사용) ----
function renderBlogCarousel(blogData) {
  if (!blogData || !blogData.length) return;
  let current = 0;
  const content = document.getElementById('carousel-content');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  function show(idx) {
    const post = blogData[idx];
    content.innerHTML = `
      <div class="relative w-full h-full flex flex-col items-center justify-center">
        <img src="${post.thumbnail}" alt="${post.title}" class="w-full h-[60vh] md:h-[80vh] object-cover rounded-none mb-0"/>
        <div class="absolute bottom-0 left-0 pl-16 pb-16 flex flex-col items-start gap-4">
          <h3 class="text-4xl md:text-6xl font-extrabold mb-2 text-white drop-shadow">${post.title}</h3>
          <p class="text-2xl md:text-3xl font-semibold mb-4 text-white drop-shadow">${post.summary}</p>
          <button class="text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition px-4 py-1 rounded text-white shadow" id="carousel-detail">상세보기</button>
        </div>
      </div>
    `;
    // 상세보기 버튼 이벤트
    document.getElementById('carousel-detail').onclick = () => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        window.scrollTo({
          top: blogSection.offsetTop - 80,
          behavior: 'smooth',
        });
        renderBlogDetail(post, blogData);
      }
    };
  }
  show(current);
  prevBtn.onclick = () => {
    current = (current - 1 + blogData.length) % blogData.length;
    show(current);
  };
  nextBtn.onclick = () => {
    current = (current + 1) % blogData.length;
    show(current);
  };
}

// ---- Home Carousel/Intro 분리 렌더링 ----
function renderHomeCarousel(blogData) {
  const homeCarousel = document.getElementById('home-carousel');
  homeCarousel.innerHTML = `
    <div id="blog-carousel" class="w-full flex flex-col justify-center">
      <div class="relative w-full">
        <button id="carousel-prev" class="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 flex items-center justify-center w-12 h-12 rounded-full z-10 hover:bg-gray-300 dark:hover:bg-gray-600 text-2xl font-bold leading-none p-0 text-center select-none aspect-square min-w-0"><span class="relative" style="top:-2px">&lt;</span></button>
        <div id="carousel-content"></div>
        <button id="carousel-next" class="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 flex items-center justify-center w-12 h-12 rounded-full z-10 hover:bg-gray-300 dark:hover:bg-gray-600 text-2xl font-bold leading-none p-0 text-center select-none aspect-square min-w-0"><span class="relative" style="top:-2px">&gt;</span></button>
      </div>
      <div class="mb-24"></div>
    </div>
  `;
  renderBlogCarousel(blogData);
}

function renderHomeIntro(about) {
  const homeIntro = document.getElementById('home-intro');
  homeIntro.innerHTML = `
    <div class="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-16">
      <!-- 텍스트 영역 -->
      <div class="max-w-3xl text-left">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          안녕하세요, 저는 개발자 <span class="text-blue-600 dark:text-blue-400">${about.name}</span><br>입니다
        </h1>
        <p class="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
          배움을 즐기고 독서를 통해 성장하는 개발자입니다. 머신러닝과 딥러닝에 깊은 관심이 있으며, 기술로 문제를 해결하는 것을 좋아합니다.
        </p>
        <div class="mt-6 flex gap-4">
          <a href="#portfolio" id="intro-portfolio-btn" class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            포트폴리오 보기
          </a>
          <a href="#blog" id="intro-blog-btn" class="px-6 py-3 border border-gray-400 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            블로그 방문하기
          </a>
        </div>
        <div class="mt-6 flex gap-4">
          <a href="${about.contact.github}" target="_blank" title="GitHub">
            <img src="images/github.png" alt="github" class="w-10 h-10 hover:scale-110 transition" />
          </a>
          <a href="mailto:${about.contact.email}" title="이메일">
            <img src="images/email.png" alt="email" class="w-10 h-10 hover:scale-110 transition" />
          </a>
        </div>
      </div>

      <!-- 이미지 영역 -->
      <div class="mt-10 md:mt-0 md:ml-12 flex-shrink-0">
        <div class="w-48 h-48 md:w-60 md:h-60 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
          <img src="images/profile.png" alt="profile" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  `;
  // smooth scroll 이벤트 추가
  const portfolioBtn = document.getElementById('intro-portfolio-btn');
  if (portfolioBtn) {
    portfolioBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById('portfolio');
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    });
  }
  const blogBtn = document.getElementById('intro-blog-btn');
  if (blogBtn) {
    blogBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById('blog');
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    });
  }
}

// ---- Skill Section 렌더링 ----
function renderSkillSection(skills) {
  const section = document.getElementById('skills');
  section.innerHTML = `
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-8">Skills</h2>
      <div class="flex justify-center">
        <div class="grid gap-8 grid-cols-1 md:grid-cols-${Object.keys(skills).length} lg:grid-cols-${Object.keys(skills).length}">
          ${Object.entries(skills).map(([category, items]) => {
            return `
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-5 flex flex-col w-full" style="min-width: 280px;">
                <h3 class="text-xl font-semibold mb-4">${category}</h3>
                <div class="flex flex-col gap-4">
                  ${items.map(skill => `
                    <div>
                      <div class="flex justify-between items-center mb-1">
                        <span class="font-medium">${skill.name}</span>
                        <span class="text-xs text-gray-500">${skill.level}%</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div class="bg-blue-600 dark:bg-blue-400 h-3 rounded-full" style="width: ${skill.level}%; transition: width 0.5s;"></div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// ---- Portfolio Section 렌더링 ----
function renderPortfolio(data) {
  const section = document.getElementById('portfolio');
  section.innerHTML = `
    <h2 class="text-2xl font-bold mb-8">Portfolio</h2>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      ${data.map((project, i) => `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-5 flex flex-col">
          <img src="${project.thumbnail}" alt="${project.title}" class="rounded mb-4 aspect-video object-cover bg-gray-100 dark:bg-gray-700"/>
          <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
          <p class="mb-2 text-gray-700 dark:text-gray-300">${project.description}</p>
          <div class="flex flex-wrap gap-2 mb-2">
            ${project.tech.map(t => `<span class='px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs'>${t}</span>`).join('')}
          </div>
          <a href="${project.github}" target="_blank" class="mt-auto text-blue-600 dark:text-blue-400 hover:underline portfolio-github-link" data-index="${i}">GitHub ↗</a>
        </div>
      `).join('')}
    </div>
  `;
  // GitHub 링크 비활성화
  section.querySelectorAll('.portfolio-github-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });
}

// ---- Blog Section 렌더링 ----
function renderBlogList(data) {
  const section = document.getElementById('blog');
  section.innerHTML = `
    <h2 class="text-2xl font-bold mb-8">Blog</h2>
    <div id="blog-list">
      ${data.map(post => `
        <article class="mb-8 p-4 rounded-lg bg-white dark:bg-gray-800 shadow flex flex-col md:flex-row gap-4">
          <img src="${post.thumbnail}" alt="${post.title}" class="w-32 h-20 object-cover rounded mb-2 md:mb-0"/>
          <div class="flex-1">
            <h3 class="text-lg font-semibold"><a href="#blog-${post.id}" class="hover:underline">${post.title}</a></h3>
            <p class="text-xs text-gray-500 mb-1">${post.date}</p>
            <p class="text-gray-700 dark:text-gray-300">${post.summary}</p>
          </div>
        </article>
      `).join('')}
    </div>
    <div id="blog-detail"></div>
  `;
  // 블로그 상세 진입 이벤트
  section.querySelectorAll('a[href^="#blog-"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = parseInt(link.getAttribute('href').replace('#blog-', ''));
      renderBlogDetail(data.find(p => p.id === id), data);
    });
  });
}

function renderBlogDetail(post, data) {
  const detail = document.getElementById('blog-detail');
  if (!post) return;
  detail.innerHTML = `
    <article class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
      <button class="mb-4 text-blue-600 dark:text-blue-400 hover:underline" id="blog-back">← 목록으로</button>
      <h3 class="text-2xl font-bold mb-2">${post.title}</h3>
      <p class="text-xs text-gray-500 mb-4">${post.date}</p>
      <div class="prose dark:prose-invert">${markdownToHtml(post.content)}</div>
    </article>
  `;
  document.getElementById('blog-list').style.display = 'none';
  document.getElementById('blog-back').onclick = () => {
    detail.innerHTML = '';
    document.getElementById('blog-list').style.display = '';
  };
}

// ---- 희망직무(직무 소개) Section 렌더링 ----
function renderJobSection() {
  const section = document.getElementById('job');
  section.innerHTML = `
    <h2 class="text-2xl font-bold mb-6">희망 직무</h2>
    <div class="max-w-8xl mx-auto flex flex-col gap-8 text-lg">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">머신러닝 엔지니어</h3>
        <p>데이터 기반 문제 해결에 흥미를 느끼며, 실제 서비스에 적용 가능한 머신러닝 모델을 구현하고 싶기 때문입니다.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">딥러닝 엔지니어</h3>
        <p>딥러닝 모델의 구조와 성능 향상에 깊은 관심이 있으며, 이를 통해 복잡한 인지 문제를 해결하고자 하기 때문입니다.</p>
      </div>
    </div>
  `;
}

// ---- 최소 마크다운 파서 (제목, 리스트, 테이블, 코드블록, 줄바꿈) ----
function markdownToHtml(md) {
  return md
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n- (.*)/g, '<li>$1</li>')
    .replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>')
    .replace(/\|([^|]+)\|/g, '<td>$1</td>')
    .replace(/<td>(.*?)<\/td>/g, '<tr><td>$1</td></tr>');
}


// ---- 데이터 불러오기 및 렌더링 ----
window.addEventListener('DOMContentLoaded', () => {
  // 동적 import 대체: script 태그로 데이터 파일을 불러온다고 가정
  // window.portfolioData, window.blogData, window.aboutData로 접근
  renderHomeCarousel(window.blogData);
  renderHomeIntro(window.aboutData);
  renderSkillSection(window.aboutData.skills);
  renderPortfolio(window.portfolioData);
  renderBlogList(window.blogData);
  renderJobSection();
}); 
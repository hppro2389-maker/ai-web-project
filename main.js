const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

function applyInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
}

applyInitialTheme();

const posts = [
  {
    slug: 'good-morning-routine',
    title: '성공적인 하루를 위한 아침 루틴의 중요성',
    category: "King's IT", // Changed category
    date: '2026년 2월 1일',
    content: `
      <h2>성공적인 하루를 위한 아침 루틴의 중요성</h2>
      <p>잘 짜여진 아침 루틴은 하루 전체의 분위기를 좌우할 수 있습니다. 단순히 일찍 일어나는 것이 아니라, 생산성을 높이고 스트레스를 줄이며 전반적인 웰빙을 향상시키는 습관을 만드는 것입니다. 이 글에서는 효과적인 아침 루틴의 핵심 요소와 자신에게 맞는 루틴을 만드는 방법을 알아봅니다.</p>
      <h3>아침 루틴의 핵심 요소</h3>
      <ul>
        <li><strong>수분 섭취:</strong> 잠자는 동안 빠져나간 수분을 보충하기 위해 물 한 잔으로 하루를 시작하세요.</li>
        <li><strong>마음 챙김:</strong> 명상, 일기 쓰기, 또는 조용한 성찰의 시간이든, 마음 챙김은 명확하고 집중된 마음으로 하루를 시작하는 데 도움이 될 수 있습니다.</li>
        <li><strong>운동:</strong> 짧은 운동이라도 에너지 수치를 높이고 기분을 개선할 수 있습니다.</li>
        <li><strong>건강한 아침 식사:</strong> 영양가 있는 아침 식사로 몸에 활력을 불어넣어 하루를 시작하는 데 필요한 에너지를 얻으세요.</li>
      </ul>
      <p>이러한 습관을 아침 루틴에 포함시킴으로써 긍정적이고 생산적인 하루를 시작할 수 있습니다.</p>
    `
  },
  {
    slug: 'mindful-eating-guide',
    title: '마음챙김 식사 가이드',
    category: "Smart-Life", // Changed category
    date: '2026년 2월 2일',
    content: `
      <h2>마음챙김 식사 가이드</h2>
      <p>마음챙김 식사는 몸 안팎에서 먹고 마시는 경험에 온전히 집중하는 수련입니다. 음식을 음미하고 식사 중에 발생하는 신체적, 정서적 감각을 인식하는 것입니다. 이 글에서는 마음챙김 식사의 원칙과 일상 생활에 통합하는 방법을 안내합니다.</p>
      <h3>마음챙김 식사 실천 방법</h3>
      <ol>
        <li><strong>방해 없이 천천히 식사하기:</strong> TV를 끄고 휴대폰을 치우고 음식에 집중하세요.</li>
        <li><strong>몸의 배고픔 신호에 귀 기울이기:</strong> 배고플 때 먹고 배부르면 멈추세요.</li>
        <li><strong>오감 활용하기:</strong> 음식의 색, 냄새, 소리, 질감, 맛을 느껴보세요.</li>
        <li><strong>음식에 감사하기:</strong> 음식이 어디에서 왔는지, 식탁에 오르기까지 어떤 노력이 있었는지 생각해보세요.</li>
      </ol>
      <p>마음챙김 식사는 음식을 더 즐기고 소화를 개선하며 음식과 더 건강한 관계를 형성하는 데 도움이 될 수 있습니다.</p>
    `
  },
    {
    slug: 'digital-detox-benefits',
    title: '디지털 디톡스의 이점',
    category: "Quick-Tips", // Changed category
    date: '2026년 2월 3일',
    content: `
      <h2>디지털 디톡스의 이점</h2>
      <p>초연결 시대에 우리는 끊임없는 알림, 이메일, 소셜 미디어 업데이트의 홍수 속에서 쉽게 압도당할 수 있습니다. 디지털 디톡스(전자기기 사용을 자제하는 기간)는 연결을 끊고 재충전하며 주변 세상과 다시 연결될 수 있는 강력한 방법이 될 수 있습니다. 이 글에서는 기술로부터 잠시 벗어나는 것의 많은 이점을 살펴봅니다.</p>
      <h3>디지털 디톡스를 고려해야 하는 이유</h3>
      <ul>
        <li><strong>집중력 향상:</strong> 기기의 끊임없는 방해 없이 당면한 과제에 더 잘 집중할 수 있습니다.</li>
        <li><strong>스트레스 감소:</strong> 항상 연결되어 있어야 한다는 압박감에서 벗어나면 스트레스 수치를 낮추고 정신 건강을 개선할 수 있습니다.</li>
        <li><strong>수면 개선:</strong> 화면에서 나오는 블루라이트는 수면 주기를 방해할 수 있습니다. 디지털 디톡스는 더 편안한 밤잠을 자는 데 도움이 될 수 있습니다.</li>
        <li><strong>더 의미 있는 관계:</strong> 기기와의 연결을 끊으면 다른 사람들과의 상호 작용에 더 집중하는 데 도움이 될 수 있습니다.</li>
      </ul>
      <p>짧은 디지털 디톡스라도 웰빙에 긍정적인 영향을 미칠 수 있습니다. 매일 몇 시간씩 연결을 끊고 기분이 어떤지 확인하는 것부터 시작해보세요.</p>
    `
  },
  {
      slug: 'about',
      title: '소개',
      category: '블로그 소개', // Changed category for internal pages
      content: `
        <h2>블로그 소개</h2>
        <p>안녕하세요, 킹경덕의 Tech & Life log에 오신 것을 환영합니다! 저는 IT 기획자로서 실무에서 얻은 보안 노하우, 직접 사용해 본 테크 제품에 대한 솔직한 리뷰, 그리고 복잡한 재테크를 쉽고 슬기롭게 풀어내는 이야기를 공유하고 있습니다. 변화하는 IT 트렌드 속에서 여러분의 업무와 삶에 실질적인 도움을 드리고자 합니다.</p>
        <p>이곳에서 여러분은 다음과 같은 다양한 주제를 만나보실 수 있습니다:</p>
        <ul>
            <li><strong>[King's IT]:</strong> 현직 IT 기획자의 시선으로 바라보는 운영, 보안, 개인 정보(PI) 보호 노하우.</li>
            <li><strong>[Work-Log]:</strong> 업무 자동화 팁, AI 활용법 등 스마트한 업무 환경 구축을 위한 실용적인 정보.</li>
            <li><strong>[Smart-Life]:</strong> 테슬라, 최신 가전제품 등 삶을 더 윤택하게 만들어 줄 테크 리뷰와 활용기.</li>
            <li><strong>[Money-Log]:</strong> 복잡한 재테크와 부동산 투자, 자산 관리에 대한 쉽고 슬기로운 접근법.</li>
            <li><strong>[Quick-Tips]:</strong> 일상 속에서 발견한 유용하고 소소한 꿀팁들.</li>
        </ul>
        <p>지식과 경험을 공유하며 함께 성장하는 공간이 되기를 바랍니다. 방문해 주셔서 감사합니다!</p>
    `
  },
  {
      slug: 'contact',
      title: '문의',
      category: '블로그 안내',
      content: `
        <h2>문의하기</h2>
        <p>저의 블로그에 대한 질문, 제안, 또는 협업 문의가 있으시면 언제든지 환영합니다.</p>
        <p>아래 이메일 주소로 연락 주시면 최대한 빠르게 답변 드리겠습니다.</p>
        <p>이메일: <a href="mailto:contact@example.com">contact@example.com</a></p>
        <p>여러분의 소중한 의견을 기다립니다!</p>
    `
  },
  {
      slug: 'privacy-policy',
      title: '개인정보 처리방침',
      category: '블로그 안내',
      content: `
        <h2>개인정보 처리방침</h2>
        <p>킹경덕의 Tech & Life log는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령상의 개인정보 보호 규정을 준수하며, 정보통신망법에 따라 개인정보 처리방침을 정하여 이용자의 권익 보호에 최선을 다하고 있습니다. 본 개인정보 처리방침은 변경될 수 있으며, 변경 시에는 공지사항을 통해 안내합니다.</p>

        <h3>1. 개인정보의 수집 및 이용 목적</h3>
        <p>본 블로그는 다음 목적을 위해 개인정보를 수집 및 이용합니다:</p>
        <ul>
            <li>블로그 서비스 제공 (콘텐츠 제공, 문의 응대 등)</li>
            <li>이용자 문의 및 불만 처리</li>
            <li>새로운 서비스 및 이벤트 정보 제공</li>
        </ul>

        <h3>2. 수집하는 개인정보 항목</h3>
        <p>기본적으로 개인정보를 직접 수집하지 않습니다. 단, 문의 시 자발적으로 제공하는 이메일 주소 등은 문의 응대를 위해서만 사용됩니다.</p>
        <p>사이트 방문 시 웹 브라우저, IP 주소, 시간대, 쿠키 정보 등 기기 정보가 자동으로 수집될 수 있습니다. 이는 웹사이트 트래픽 분석 및 서비스 개선을 위한 목적입니다.</p>

        <h3>3. 개인정보의 보유 및 이용 기간</h3>
        <p>수집된 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 단, 관련 법령에 의해 보존할 필요가 있는 경우 해당 법령이 정한 기간 동안 보존합니다.</p>

        <h3>4. 개인정보의 제3자 제공</h3>
        <p>본 블로그는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다:</p>
        <ul>
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
        </ul>

        <h3>5. 이용자의 권리</h3>
        <p>이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며, 개인정보 처리 동의 철회 또는 삭제를 요청할 수 있습니다. 개인정보 관리책임자에게 이메일로 연락하시면 지체 없이 조치하겠습니다.</p>

        <h3>6. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</h3>
        <p>본 블로그는 쿠키(cookie)를 사용합니다. 쿠키는 웹사이트를 운영하는 데 이용되는 서버가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자의 컴퓨터 하드디스크에 저장됩니다.</p>
        <ul>
            <li><strong>쿠키의 사용 목적:</strong> 방문 기록 및 패턴 분석, 사용자 맞춤 서비스 제공 등을 위해 사용됩니다.</li>
            <li><strong>쿠키 설치에 대한 선택권:</strong> 이용자는 웹 브라우저에서 옵션을 설정함으로써 쿠키 저장을 거부할 수 있습니다. 단, 쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.</li>
        </ul>

        <h3>7. 개인정보 보호책임자</h3>
        <p>본 블로그는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
        <p>개인정보 보호책임자: 킹경덕 (IT 기획자)</p>
        <p>이메일: <a href="mailto:contact@example.com">contact@example.com</a></p>
        <p>기타 개인정보 침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>
        <ul>
            <li>개인정보 침해신고센터 (<a href="http://privacy.kisa.or.kr" target="_blank">privacy.kisa.or.kr</a> / 국번없이 118)</li>
            <li>대검찰청 사이버수사과 (<a href="http://www.spo.go.kr" target="_blank">www.spo.go.kr</a> / 국번없이 1301)</li>
            <li>경찰청 사이버안전국 (<a href="http://cyberbureau.police.go.kr" target="_blank">cyberbureau.police.go.kr</a> / 국번없이 182)</li>
        </ul>

        <p>본 개인정보 처리방침은 2026년 2월 4일부터 적용됩니다.</p>
    `
  }
];

const app = document.getElementById('app');

function getCategories() {
    const categories = posts
      .filter(post => !['블로그 소개', '블로그 안내'].includes(post.category)) // Exclude special pages
      .map(post => post.category);
    return [...new Set(categories)];
}

function renderPostList(filterCategory = null) {
  let filteredPosts = posts.filter(post => !['블로그 소개', '블로그 안내'].includes(post.category));

  if (filterCategory) {
    filteredPosts = filteredPosts.filter(post => post.category === filterCategory);
  }

  app.innerHTML = `
    <ul class="post-list">
      ${filteredPosts.map(post => `
        <li>
          <a href="#post/${post.slug}">
            <h3>${post.title}</h3>
            <p class="post-date">${post.date} &bull; ${post.category}</p>
          </a>
        </li>
      `).join('')}
    </ul>
  `;
}

function renderPost(slug) {
  const post = posts.find(p => p.slug === slug);
  if (post) {
    app.innerHTML = `
      <div class="post">
        <a href="#">&larr; 목록으로 돌아가기</a>
        <p class="post-date">${post.date || ''} &bull; ${post.category || ''}</p>
        ${post.content}
        <div class="social-share">
            <span>공유하기:</span>
            <a href="#" class="share-kakao">카카오톡</a>
            <a href="#" class="share-naver">네이버</a>
            <a href="#" class="share-link">링크 복사</a>
        </div>
      </div>
    `;
  } else {
    renderPostList();
  }
}

function renderCategories() {
    const categories = getCategories();
    const categoryContainer = document.querySelector('.categories');
    if (categoryContainer) {
        categoryContainer.innerHTML = `
            <h3>카테고리</h3>
            <ul>
                ${categories.map(category => `<li><a href="#category/${category}">${category}</a></li>`).join('')}
            </ul>
        `;
        // Add event listeners for category filtering
        categoryContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const category = event.target.textContent;
                renderPostList(category);
                window.location.hash = `#category/${category}`; // Update hash for URL
            });
        });
    }
}

function router() {
  const path = window.location.hash;
  if (path.startsWith('#post/')) {
    const slug = path.substring('#post/'.length);
    renderPost(slug);
  } else if (path.startsWith('#category/')) {
    const category = path.substring('#category/'.length);
    renderPostList(decodeURIComponent(category)); // Decode URI component for categories with spaces
  }
  else {
    renderPostList();
  }
  renderCategories();
}

window.addEventListener('hashchange', router);
router();
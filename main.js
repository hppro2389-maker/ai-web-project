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
    category: '자기계발',
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
    category: '건강',
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
    category: '라이프스타일',
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
      category: '소개',
      content: `
        <h2>소개</h2>
        <p>저희 블로그에 오신 것을 환영합니다! 저희는 다양한 주제에 대한 고품질 콘텐츠를 공유하는 데 전념하는 열정적인 작가 팀입니다.</p>
        <p>저희 사이트를 방문해주셔서 감사합니다. 저희 콘텐츠를 즐기고 성장하는 커뮤니티의 일원이 되기를 바랍니다.</p>
    `
  },
  {
      slug: 'contact',
      title: '문의',
      category: '문의',
      content: `
        <h2>문의</h2>
        <p>여러분의 의견을 듣고 싶습니다! 질문, 의견 또는 제안이 있으시면 언제든지 연락주십시오.</p>
        <p>이메일(<a href="mailto:contact@example.com">contact@example.com</a>)로 연락하실 수 있습니다.</p>
    `
  },
  {
      slug: 'privacy-policy',
      title: '개인정보 처리방침',
      category: '정책',
      content: `
        <h2>개인정보 처리방침</h2>
        <p>본 개인정보 처리방침은 귀하가 이 웹사이트를 방문하거나 구매할 때 귀하의 개인정보가 어떻게 수집, 사용 및 공유되는지 설명합니다.</p>
        <h3>수집하는 개인정보</h3>
        <p>귀하가 사이트를 방문할 때 당사는 귀하의 웹 브라우저, IP 주소, 시간대 및 귀하의 기기에 설치된 일부 쿠키에 대한 정보를 포함하여 귀하의 기기에 대한 특정 정보를 자동으로 수집합니다.</p>
        <h3>개인정보 사용 방법</h3>
        <p>당사는 일반적으로 사이트를 통해 접수된 모든 주문을 처리하기 위해 수집한 주문 정보를 사용합니다(결제 정보 처리, 배송 준비, 인보이스 및/또는 주문 확인서 제공 포함). 또한 당사는 이 주문 정보를 사용하여 다음을 수행합니다.</p>
        <ul>
            <li>귀하와 소통합니다.</li>
            <li>잠재적인 위험이나 사기에 대한 주문을 심사합니다.</li>
            <li>귀하가 당사와 공유한 기본 설정에 따라 당사 제품 또는 서비스와 관련된 정보 또는 광고를 귀하에게 제공합니다.</li>
        </ul>
        <h3>개인정보 공유</h3>
        <p>당사는 위에 설명된 대로 귀하의 개인정보를 사용하는 데 도움이 되도록 제3자와 귀하의 개인정보를 공유합니다. 예를 들어, 당사는 고객이 사이트를 어떻게 사용하는지 이해하는 데 도움이 되도록 Google Analytics를 사용합니다.</p>
        <h3>귀하의 권리</h3>
        <p>귀하가 유럽 거주자인 경우, 귀하는 당사가 보유한 귀하에 대한 개인정보에 접근하고 귀하의 개인정보를 수정, 업데이트 또는 삭제하도록 요청할 권리가 있습니다. 이 권리를 행사하려면 아래 연락처 정보를 통해 당사에 문의하십시오.</p>
        <h3>문의하기</h3>
        <p>당사의 개인정보 보호 관행에 대한 자세한 내용, 질문이 있거나 불만 사항이 있는 경우 이메일(<a href="mailto:contact@example.com">contact@example.com</a>)로 문의하십시오.</p>
    `
  }
];

const app = document.getElementById('app');

function getCategories() {
    const categories = posts.map(post => post.category);
    return [...new Set(categories)];
}

function renderPostList() {
  const blogPosts = posts.filter(post => !['소개', '문의', '정책'].includes(post.category));
  app.innerHTML = `
    <ul class="post-list">
      ${blogPosts.map(post => `
        <li>
          <a href="#post/${post.slug}">
            <h3>${post.title}</h3>
            <p class="post-date">${post.date}</p>
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
        <p class="post-date">${post.date || ''}</p>
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
                ${categories.map(category => `<li><a href="#">${category}</a></li>`).join('')}
            </ul>
        `;
    }
}


function router() {
  const path = window.location.hash;
  if (path.startsWith('#post/')) {
    const slug = path.substring('#post/'.length);
    renderPost(slug);
  } else {
    renderPostList();
  }
  renderCategories();
}

window.addEventListener('hashchange', router);
router();

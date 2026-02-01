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
    slug: 'avaco-investment-diary',
    title: '아바코 주가 전망, \'장비주 사이클\'에 올라탄 지금이 기회일까? (ft. 이차전지)',
    category: "[Money & Insight]",
    date: '2026년 2월 5일',
    content: `
      <h2>[서론] 사이클을 이해하면 기회가 보인다</h2>
      <p>안녕하십니까, 투자 분석가 킹경덕입니다.</p>
      <p>성공적인 투자는 개별 기업의 가치를 넘어, 산업의 큰 흐름, 즉 <strong>\'사이클(Cycle)\'</strong>을 읽는 것에서 시작됩니다. 특히 아바코와 같은 장비주는 전방 산업의 투자 사이클에 직접적인 영향을 받기에, 이 흐름을 이해하는 것은 선택이 아닌 필수입니다.</p>
      <p>오늘 '투자 일기'에서는 아바코가 속한 <strong>디스플레이와 이차전지 산업의 사이클을 분석</strong>하고, 이것이 아바코의 주가에 어떤 기회와 리스크를 주는지 심도 있게 다뤄보겠습니다.</p>
      
      <h2>[본론 1] 아바코의 현재 위치: 두 개의 사이클에 올라타다</h2>
      <p>아바코의 투자 포인트를 이해하기 위해선, 이 기업이 걸쳐 있는 두 개의 핵심 산업 사이클을 알아야 합니다.</p>
      <h3>1. 돌아온 '디스플레이' 투자 사이클 (Cyclical Growth)</h3>
      <ul>
        <li><strong>IT 기기용 8.6세대 OLED 전환:</strong> 과거 스마트폰에 집중됐던 OLED 투자가 이제는 IT 기기(노트북, 태블릿)로 확장되는 역사적인 전환점에 있습니다. 이는 곧 대규모 설비투자(CAPEX)를 의미합니다.</li>
        <li><strong>BOE 수주, 사이클의 증거:</strong> 아바코가 중국 최대 디스플레이 업체인 BOE의 8.6세대 라인에 증착 장비 공급을 시작했다는 것은, 디스플레이 투자 사이클이 본격적으로 재개되었음을 보여주는 가장 강력한 증거입니다.</li>
      </ul>
      <h3>2. 멈추지 않는 '이차전지' 성장 사이클 (Secular Growth)</h3>
      <ul>
        <li><strong>구조적 성장 산업:</strong> 전기차 시장의 확대는 거스를 수 없는 흐름이며, 이는 이차전지 장비 산업의 '구조적 성장'을 의미합니다. 디스플레이 산업처럼 부침이 있는 것이 아니라, 꾸준히 우상향하는 성장이 기대되는 영역입니다.</li>
        <li><strong>아바코의 역할:</strong> 아바코는 이차전지 '롤투롤(Roll-to-Roll)' 장비와 '물류 자동화' 시스템을 통해 이 구조적 성장의 핵심 플레이어로 자리매김했습니다. 이는 디스플레이 업황에 흔들리지 않는 <strong>안정적인 캐시카우</strong>를 확보했음을 뜻합니다.</li>
      </ul>

      <h2>[본론 2] SEO 분석을 통한 핵심 투자 포인트</h2>
      <table class="custom-table">
        <thead>
          <tr>
            <th>SEO 핵심 요소</th>
            <th>아바코(AVACO) 투자 전략 분석</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>키워드 배치</strong></td>
            <td><code>아바코 주가</code>, <code>OLED 장비주</code>, <code>이차전지 장비주</code>, <code>BOE 수주</code> 등 핵심 키워드를 제목, 헤딩, 본문에 전략적으로 배치하여 검색 노출 확률 극대화.</td>
          </tr>
          <tr>
            <td><strong>콘텐츠 품질</strong></td>
            <td>단순 정보 나열이 아닌, <strong>\'사이클\'이라는 프레임워크를 통해 기업을 분석</strong>하고, 두 산업의 시너지를 설명하며 독자에게 높은 가치와 신뢰 제공.</td>
          </tr>
          <tr>
            <td><strong>내부 링크 구조</strong></td>
            <td>본문 내 <strong>\'BOE 수주\', \'롤투롤 장비\'</strong> 등 핵심 개념에 대한 설명을 추가하거나, 관련 포스트로 연결될 수 있는 구조를 암시하여 체류 시간 증대. (향후 관련 글 작성 시 링크 추가 예정)</td>
          </tr>
           <tr>
            <td><strong>기술적 SEO</strong></td>
            <td><strong>모바일 반응형 디자인</strong>은 기본. 이미지 부재로 인한 로딩 속도 이점 극대화. 명확한 HTML 구조로 검색 엔진 친화적인 환경 구축.</td>
          </tr>
        </tbody>
      </table>

      <h2>[본론 3] 킹경덕의 종합 분석: 리스크와 기회</h2>
      <h3>기회 (Opportunity):</h3>
      <ul>
          <li><strong>디스플레이 사이클의 수혜:</strong> BOE를 시작으로 한 8.6세대 OLED 투자가 다른 디스플레이 업체로 확산될 경우, 아바코의 추가 수주 모멘텀은 폭발적일 수 있습니다.</li>
          <li><strong>이차전지 가치 재평가:</strong> 북미 시장에서 이차전지 장비 추가 수주가 가시화될 경우, 기업 가치는 디스플레이 장비주를 넘어 '이차전지 핵심 장비주'로 재평가받을 것입니다.</li>
      </ul>
      <h3>리스크 (Risk):</h3>
      <ul>
          <li><strong>전방 산업 의존성:</strong> 디스플레이 투자 사이클이 예상보다 빠르게 둔화되거나, 주요 고객사의 투자 계획이 변경될 경우 실적에 영향을 미칠 수 있습니다.</li>
          <li><strong>수주 산업의 불확실성:</strong> 최종 계약 공시 규모가 시장의 기대치에 미치지 못할 경우, 단기적인 주가 조정의 빌미가 될 수 있습니다.</li>
      </ul>
      
      <h2>[결론] 사이클에 투자하는 현명한 방법</h2>
      <p>킹경덕입니다. 아바코 투자의 핵심은 <strong>\'디스플레이 사이클의 탄력성\'과 \'이차전지 사이클의 안정성\'</strong>을 동시에 취하는 것입니다. 저는 단기적인 주가 변동보다는, 두 개의 거대한 산업 사이클 위에서 아바코가 어떻게 성장 스토리를 써 내려가는지에 집중할 것입니다.</p>
      <p>이 글이 아바코라는 기업을 더 깊게 이해하는 데 도움이 되었기를 바랍니다. <strong>여러분이 생각하는 아바코의 투자 매력도, 혹은 리스크는 무엇인지 자유롭게 의견을 나눠주시면 감사하겠습니다.</strong></p>
      <hr>
      <p><small>⚠️ <strong>Disclaimer</strong><br>본 포스팅은 개인적인 투자 공부를 기록한 것이며, 절대 특정 종목에 대한 매수/매도 권유가 아닙니다. 투자의 최종 결정과 책임은 본인에게 있음을 다시 한번 알려드립니다.</small></p>
    `
  },
  {
      slug: 'about',
      title: '소개',
      category: '블로그 소개',
      content: `
        <h2>블로그 소개</h2>
        <p>안녕하십니까, 킹경덕입니다. IT 기획자이자 투자 분석가로서, 실무에서 얻은 기술 지식과 데이터 기반의 시장 분석을 통해 독자 여러분께 실질적인 가치를 제공하고자 합니다. 이 블로그는 단순한 정보의 나열이 아닌, 복잡한 기술과 투자의 세계를 꿰뚫는 통찰(Insight)을 공유하는 공간입니다.</p>
        <p>지식과 경험을 공유하며 함께 성장하는 공간이 되기를 바랍니다. 방문해 주셔서 감사합니다!</p>
    `
  },
  {
      slug: 'contact',
      title: '문의',
      category: '블로그 안내',
      content: `
        <h2>문의하기</h2>
        <p>저의 분석이나 블로그 내용에 대한 질문, 제안, 또는 협업 문의가 있으시면 언제든지 환영합니다.</p>
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
        <p>이하 내용은 이전과 동일합니다...</p>
    `
  }
];

const app = document.getElementById('app');

function getCategories() {
    return ["[Money & Insight]"];
}

function renderPostList(filterCategory = null) {
  let filteredPosts = posts.filter(post => post.category === "[Money & Insight]");

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
        categoryContainer.querySelector('a').addEventListener('click', (event) => {
            event.preventDefault();
            renderPostList("[Money & Insight]");
            window.location.hash = `#category/[Money & Insight]`
        });
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
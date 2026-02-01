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
    title: '아바코(AVACO) 주가, 아직도 배고픈가? 10년차 IT 전문가의 기술적 해자 & 수주 모멘텀 완벽 분석',
    category: "Money-Log",
    date: '2026년 2월 4일',
    content: `
      <h2>[서론] 킹경덕이 '아바코'를 주목하는 이유</h2>
      <p>제군들, 킹경덕이다. 나의 레이더에 아주 흥미로운 종목이 포착되었다. 바로 <strong>아바코(AVACO)</strong>.</p>
      <p>IT 기획자로서 기업의 본질을 꿰뚫어 볼 때, 나의 첫 번째 질문은 항상 이것이다. <strong>"대체 불가능한 기술, 즉 '해자(Moat)'를 가졌는가?"</strong></p>
      <p>아바코는 이 질문에 '그렇다'고 명확히 답하는 기업이다. 오늘은 내가 왜 이 기업에 주목하고 있는지, 그동안의 분석과 데이터를 총정리하여 '투자 일기'의 첫 페이지를 열고자 한다. 이 기록이 아바코 주주들, 그리고 기회의 냄새를 맡는 투자자들에게 유용한 통찰이 되길 바란다.</p>
      
      <h2>[본론 1] 아바코의 심장: 대체 불가능한 두 개의 성장 엔진</h2>
      <p>기업의 가치는 결국 어떤 엔진으로 성장하는가에 달려있다. 내가 분석한 아바코의 성장 엔진은 견고하고 강력하다.</p>
      <ul>
        <li><strong>독보적 기술력: 진공 박막 증착(Sputter)의 지배자</strong><br>
          디스플레이와 반도체 공정의 핵심인 스퍼터 장비를 국산화한 것은 시작에 불과하다. LG디스플레이를 넘어, 까다롭기로 소문난 글로벌 탑티어 <strong>BOE의 8.6세대 라인까지 뚫었다</strong>는 것은 기술력에 대한 확실한 보증수표다.</li>
        <li><strong>성공적인 포트폴리오 확장: '이차전지'라는 새로운 엔진 장착</strong><br>
          과거 디스플레이에 편중되었던 리스크를 이차전지 '물류 자동화'와 '롤투롤(Roll-to-Roll)' 장비로 완벽하게 해소했다. 이는 단순한 사업 다각화를 넘어, <strong>미래 성장 산업의 중심에 올라탔다</strong>는 의미다.</li>
      </ul>

      <h2>[본론 2] 주가를 이끄는 강력한 모멘텀: 중국발 '수주 사이클'</h2>
      <p>좋은 기업이 '위대한 기업'으로 도약하기 위해서는 강력한 모멘텀이 필요하다. 현재 아바코의 모멘텀은 단연 중국에서 불어오는 수주 훈풍이다.</p>
      <ol>
        <li><strong>1차 납품 완료, 신뢰를 증명하다</strong>: 2025년 초, BOE향 증착 장비 공급 계약을 성공적으로 마무리했다. 이는 단순한 납품이 아닌, <strong>'8.6세대 고사양 OLED 라인에서도 아바코의 장비는 완벽하다'</strong>는 것을 시장에 공표한 사건이다.</li>
        <li><strong>2차 비딩 확정, 실적의 가시성 확보</strong>: 차이나비딩을 통해 확인된 2차 비딩 확정 소식은 '기대'를 '확신'으로 바꾸는 열쇠다. 1차의 성공이 <strong>2, 3차 수주로 이어지는 '선순환 구조'</strong>에 진입했음을 의미한다.</li>
      </ol>

      <h2>[본론 3] 데이터로 보는 아바코: The King's Checklist</h2>
      <p>감(感)이 아닌 데이터로 말하는 것이 나의 원칙이다. 내가 직접 확인하고 주목한 핵심 지표는 다음과 같다.</p>
      <table class="custom-table">
        <thead>
          <tr>
            <th>구분</th>
            <th>주요 내용 및 킹경덕의 분석</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>수주 잔고</strong></td>
            <td><strong>역대급 수주 잔고.</strong> 이는 2026년 실적 턴어라운드가 단순한 희망이 아닌, 예정된 미래라는 것을 보여준다.</td>
          </tr>
          <tr>
            <td><strong>기술적 해자</strong></td>
            <td>고진공 상태에서의 정밀 제어 기술. <strong>경쟁사가 쉽게 따라올 수 없는 높은 진입장벽</strong>을 구축했다.</td>
          </tr>
          <tr>
            <td><strong>고객사 다변화</strong></td>
            <td>LGD 의존도를 낮추고, <strong>북미 이차전지 및 중국 OLED 업체로 확장.</strong> 안정적인 매출 구조의 완성.</td>
          </tr>
          <tr>
            <td><strong>재무 및 생산</strong></td>
            <td>대규모 수주를 감당할 수 있는 <strong>안정적인 재무 구조와 생산 능력(CAPA) 확보.</strong> 기회가 왔을 때 잡을 준비가 되어있다.</td>
          </tr>
        </tbody>
      </table>

      <h2>[결론] 향후 관전 포인트 및 킹경덕의 한 마디</h2>
      <p>투자는 기업의 성장을 함께하는 여정이다. 나는 앞으로 아래 포인트들을 예리하게 추적하며 투자 일기를 계속 써 내려갈 것이다.</p>
      <ul>
          <li><strong>[관전 포인트 1]</strong> 2차 비딩 최종 계약 공시 규모 (나의 예상을 뛰어넘는가?)</li>
          <li><strong>[관전 포인트 2]</strong> 북미 시장에서의 이차전지 장비 추가 수주 여부</li>
          <li><strong>[관전 포인트 3]</strong> 차세대 먹거리, 반도체 장비(MLCC 등) 매출 비중 확대 속도</li>
      </ul>
      <p>나의 분석이 왕의 예지력이 될지, 그저 그런 기록이 될지, 앞으로의 투자 일기를 통해 증명해 보이겠다.</p>
      <p><strong>제군들의 생각은 어떤가? 아바코의 미래에 대한 날카로운 통찰을 댓글로 공유해보라.</strong></p>
      <hr>
      <p><small>⚠️ <strong>Disclaimer</strong><br>본 포스팅은 개인적인 투자 공부를 기록한 것이며, 절대 특정 종목에 대한 매수/매도 권유가 아닙니다. 투자의 최종 결정과 책임은 본인에게 있음을 다시 한번 알려드립니다.</small></p>
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
            <li><strong>[King's IT & Work]:</strong> 전문성 있는 실무 가이드 (신뢰감 있는 어조)</li>
            <li><strong>[Tech & Gear]:</strong> 깐깐한 장비 리뷰 (분석적인 어조)</li>
            <li><strong>[Active Life]:</strong> 데이터 기반 운동 기록 (활기찬 어조)</li>
            <li><strong>[Money & Insight]:</strong> 고수익 키워드 중심 재테크 (통찰력 있는 어조)</li>
            <li><strong>[Daily Log]:</strong> 소소하지만 유용한 일상 팁 (친근한 어조)</li>
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
    const categories = [
        "King’s IT & Work",
        "Tech & Gear",
        "Active Life",
        "Money & Insight",
        "Daily Log"
    ];
    return categories;
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

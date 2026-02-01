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
    content: "\n      <h2>[서론] 사이클을 이해하면 기회가 보인다</h2>\n      <p>안녕하십니까, 투자 분석가 킹경덕입니다.</p>\n      <p>성공적인 투자는 개별 기업의 가치를 넘어, 산업의 큰 흐름, 즉 <strong>'사이클(Cycle)'</strong>을 읽는 것에서 시작됩니다. 특히 아바코와 같은 장비주는 전방 산업의 투자 사이클에 직접적인 영향을 받기에, 이 흐름을 이해하는 것은 선택이 아닌 필수입니다.</p>\n      <p>오늘 '투자 일기'에서는 아바코가 속한 <strong>디스플레이와 이차전지 산업의 사이클을 분석</strong>하고, 이것이 아바코의 주가에 어떤 기회와 리스크를 주는지 심도 있게 다뤄보겠습니다.</p>\n      \n      <h2>[본론 1] 아바코의 현재 위치: 두 개의 사이클에 올라타다</h2>\n      <p>아바코의 투자 포인트를 이해하기 위해선, 이 기업이 걸쳐 있는 두 개의 핵심 산업 사이클을 알아야 합니다.</p>\n      <h3>1. 돌아온 '디스플레이' 투자 사이클 (Cyclical Growth)</h3>\n      <ul>\n        <li><strong>IT 기기용 8.6세대 OLED 전환:</strong> 과거 스마트폰에 집중됐던 OLED 투자가 이제는 IT 기기(노트북, 태블릿)로 확장되는 역사적인 전환점에 있습니다. 이는 곧 대규모 설비투자(CAPEX)를 의미합니다.</li>\n        <li><strong>BOE 수주, 사이클의 증거:</strong> 아바코가 중국 최대 디스플레이 업체인 BOE의 8.6세대 라인에 증착 장비 공급을 시작했다는 것은, 디스플레이 투자 사이클이 본격적으로 재개되었음을 보여주는 가장 강력한 증거입니다.</li>\n      </ul>\n      <h3>2. 멈추지 않는 '이차전지' 성장 사이클 (Secular Growth)</h3>\n      <ul>\n        <li><strong>구조적 성장 산업:</strong> 전기차 시장의 확대는 거스를 수 없는 흐름이며, 이는 이차전지 장비 산업의 '구조적 성장'을 의미합니다. 디스플레이 산업처럼 부침이 있는 것이 아니라, 꾸준히 우상향하는 성장이 기대되는 영역입니다.</li>\n        <li><strong>아바코의 역할:</strong> 아바코는 이차전지 '롤투롤(Roll-to-Roll)' 장비와 '물류 자동화' 시스템을 통해 이 구조적 성장의 핵심 플레이어로 자리매김했습니다. 이는 디스플레이 업황에 흔들리지 않는 <strong>안정적인 캐시카우</strong>를 확보했음을 뜻합니다.</li>\n      </ul>\n\n      <h2>[본론 2] SEO 분석을 통한 핵심 투자 포인트</h2>\n      <table class="custom-table">
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
            <td>단순 정보 나열이 아닌, <strong>'사이클'이라는 프레임워크를 통해 기업을 분석</strong>하고, 두 산업의 시너지를 설명하며 독자에게 높은 가치와 신뢰 제공.</td>
          </tr>
          <tr>
            <td><strong>내부 링크 구조</strong></td>
            <td>본문 내 <strong>'BOE 수주', '롤투롤 장비'</strong> 등 핵심 개념에 대한 설명을 추가하거나, 관련 포스트로 연결될 수 있는 구조를 암시하여 체류 시간 증대. (향후 관련 글 작성 시 링크 추가 예정)</td>
          </tr>
           <tr>
            <td><strong>기술적 SEO</strong></td>
            <td><strong>모바일 반응형 디자인</strong>은 기본. 이미지 부재로 인한 로딩 속도 이점 극대화. 명확한 HTML 구조로 검색 엔진 친화적인 환경 구축.</td>
          </tr>
        </tbody>
      </table>\n\n      <h2>[본론 3] 킹경덕의 종합 분석: 리스크와 기회</h2>\n      <h3>기회 (Opportunity):</h3>\n      <ul>\n          <li><strong>디스플레이 사이클의 수혜:</strong> BOE를 시작으로 한 8.6세대 OLED 투자가 다른 디스플레이 업체로 확산될 경우, 아바코의 추가 수주 모멘텀은 폭발적일 수 있습니다.</li>\n          <li><strong>이차전지 가치 재평가:</strong> 북미 시장에서 이차전지 장비 추가 수주가 가시화될 경우, 기업 가치는 디스플레이 장비주를 넘어 '이차전지 핵심 장비주'로 재평가받을 것입니다.</li>
      </ul>\n      <h3>리스크 (Risk):</h3>\n      <ul>\n          <li><strong>전방 산업 의존성:</strong> 디스플레이 투자 사이클이 예상보다 빠르게 둔화되거나, 주요 고객사의 투자 계획이 변경될 경우 실적에 영향을 미칠 수 있습니다.</li>\n          <li><strong>수주 산업의 불확실성:</strong> 최종 계약 공시 규모가 시장의 기대치에 미치지 못할 경우, 단기적인 주가 조정의 빌미가 될 수 있습니다.</li>
      </ul>\n      \n      <h2>[결론] 사이클에 투자하는 현명한 방법</h2>\n      <p>킹경덕입니다. 아바코 투자의 핵심은 <strong>'디스플레이 사이클의 탄력성'과 '이차전지 사이클의 안정성'</strong>을 동시에 취하는 것입니다. 저는 단기적인 주가 변동보다는, 두 개의 거대한 산업 사이클 위에서 아바코가 어떻게 성장 스토리를 써 내려가는지에 집중할 것입니다.</p>\n      <p>이 글이 아바코라는 기업을 더 깊게 이해하는 데 도움이 되었기를 바랍니다. <strong>여러분이 생각하는 아바코의 투자 매력도, 혹은 리스크는 무엇인지 자유롭게 의견을 나눠주시면 감사하겠습니다.</strong></p>\n      <hr>\n      <p><small>⚠️ <strong>Disclaimer</strong><br>본 포스팅은 개인적인 투자 공부를 기록한 것이며, 절대 특정 종목에 대한 매수/매도 권유가 아닙니다. 투자의 최종 결정과 책임은 본인에게 있음을 다시 한번 알려드립니다.</small></p>\n    "
  },
  {
    slug: 'king-it-security-guide',
    title: '킹경덕의 IT 실무 보안 가이드: 개발자와 기획자가 알아야 할 5가지',
    category: "[King’s IT & Work]",
    date: '2026년 2월 6일',
    content: "\n      <h2>실무에서 바로 쓰는 IT 보안, 이 정도는 알아야 합니다!</h2>\n      <p>안녕하세요, IT 전문가 킹경덕입니다. 10년 넘게 시스템 운영과 정보 보안을 담당하면서 느낀 점은, 보안은 특정 부서의 책임이 아니라 '모두의 책임'이라는 것입니다. 특히 개발자와 기획자는 보안 취약점을 가장 먼저 파악하고 예방할 수 있는 위치에 있습니다.</p>\n      <p>오늘은 여러분이 실무에서 꼭 알아야 할 IT 보안 팁 5가지를 공유합니다.</p>\n      <h3>1. 입력값 검증 (Input Validation)은 생명</h3>\n      <ul>\n        <li><strong>왜 중요한가:</strong> SQL 인젝션, XSS(크로스 사이트 스크립팅) 등 대부분의 웹 취약점은 부적절한 입력값 처리에서 시작됩니다.</li>\n        <li><strong>어떻게 해야 하나:</strong> 사용자로부터 받는 모든 입력값(URL, 폼 데이터, 쿠키 등)은 서버 사이드에서 반드시 검증해야 합니다. 화이트리스트 방식(허용된 문자만 통과)을 권장합니다.</li>\n      </ul>\n      <h3>2. 강력한 인증과 세션 관리</h3>\n      <ul>\n        <li><strong>왜 중요한가:</strong> 비밀번호는 길고 복잡하게, 그리고 주기적으로 변경해야 합니다. 세션 탈취는 심각한 보안 사고로 이어집니다.</li>\n        <li><strong>어떻게 해야 하나:</strong> 2단계 인증(MFA) 도입을 적극 고려하고, 세션 ID는 예측 불가능하게 생성하며, HTTPS를 통해 전송하고, 일정 시간 후 만료되도록 설정해야 합니다.</li>\n      </ul>\n      <h3>3. 에러 메시지에 민감하라</h3>\n      <ul>\n        <li><strong>왜 중요한가:</strong> 너무 상세한 에러 메시지는 공격자에게 시스템 정보를 노출하는 통로가 됩니다.</li>\n        <li><strong>어떻게 해야 하나:</strong> 사용자에게는 일반적인 에러 메시지를 보여주고, 상세한 에러 로그는 별도의 보안된 공간에 기록하여 관리자만 확인할 수 있도록 합니다.</li>\n      </ul>\n      <h3>4. 최신 보안 패치 및 업데이트</h3>\n      <ul>\n        <li><strong>왜 중요한가:</strong> 운영체제, 웹 서버, 데이터베이스 등 모든 시스템과 소프트웨어는 발견된 취약점을 해결하기 위해 꾸준히 패치가 배포됩니다.</li>\n        <li><strong>어떻게 해야 하나:</strong> 주기적으로 보안 패치 여부를 확인하고, 테스트 환경에서 충분히 검증한 후 운영 시스템에 적용합니다. 자동 업데이트 기능을 활용하는 것도 좋습니다.</li>\n      </ul>\n      <h3>5. 보안은 개발 초기부터 고려</h3>\n      <ul>\n        <li><strong>왜 중요한가:</strong> 개발이 완료된 후 보안을 적용하는 것은 비용과 시간이 훨씬 많이 듭니다.</li>\n        <li><strong>어떻게 해야 하나:</strong> SDLC(소프트웨어 개발 생명주기) 전 단계에 걸쳐 보안을 내재화하는 '시큐어 코딩' 원칙을 적용하고, 보안 전문가와 지속적으로 협업해야 합니다.</li>\n      </ul>\n      <h3>마치며</h3>\n      <p>보안은 완성이 아니라 지속적인 과정입니다. 오늘 공유한 팁들이 여러분의 실무에 작은 도움이 되기를 바랍니다. 더 궁금한 점이나 여러분만의 보안 꿀팁이 있다면 댓글로 공유해 주세요! 안전한 IT 세상을 함께 만들어 갑시다.</p>\n    "
  },
  {
    slug: 'tesla-model-3-review',
    title: '테슬라 모델 3 롱레인지 한 달 사용기: 과연 후회 없을까?',
    category: "[Tech & Gear]",
    date: '2026년 2월 7일',
    content: "\n      <h2>'갓성비' 테슬라 모델 3, 한 달 사용 후 느낀 장단점 솔직 리뷰</h2>\n      <p>안녕하세요, 킹경덕입니다. 최근 테슬라 모델 3 롱레인지를 출고받아 한 달간 시승했습니다. 많은 분들이 테슬라 구매를 고민하실 텐데, 과연 '이 돈 주고 살 가치가 있을까?'라는 질문에 제가 직접 경험한 솔직한 답변을 드리고자 합니다.</p>\n      <h3>장점: 왜 테슬라, 테슬라 하는가?</h3>\n      <ul>\n        <li><strong>압도적인 주행 성능과 승차감:</strong> 듀얼 모터의 즉각적인 반응성과 부드러운 가속감은 경험해 본 사람만 압니다. 예상보다 조용한 실내와 안정적인 코너링도 만족스러웠습니다.</li>\n        <li><strong>OTA(Over-The-Air) 업데이트:</strong> 밤새 자고 일어나면 차가 똑똑해지는 경험은 테슬라만의 매력입니다. 새로운 기능이 추가되고 성능이 개선되는 과정 자체가 즐거움입니다.</li>\n        <li><strong>슈퍼차저 네트워크:</strong> 지방 출장에도 충전 걱정은 없습니다. 압도적인 충전 속도와 편리성은 타 전기차가 따라올 수 없는 테슬라의 독보적인 강점입니다.</li>\n        <li><strong>미니멀리즘 디자인:</strong> 군더더기 없는 깔끔한 내외부 디자인은 질리지 않고 오래 탈 수 있는 매력으로 다가왔습니다.</li>\n      </ul>\n      <h3>단점: 이것만은 알고 가세요!</h3>\n      <ul>\n        <li><strong>불편한 UI/UX:</strong> 물리 버튼의 부재는 여전히 적응하기 힘든 부분입니다. 모든 기능을 터치 스크린으로 조작하는 것은 주행 중 다소 위험하게 느껴지기도 합니다.</li>\n        <li><strong>떨어지는 AS 품질:</strong> 서비스 센터 예약은 하늘의 별 따기이며, 수리 기간도 오래 걸립니다. 국내 AS 인프라는 아직 개선이 많이 필요합니다.</li>\n        <li><strong>초기 학습 비용:</strong> 일반적인 차량과는 다른 조작 방식과 시스템에 익숙해지는 데 시간이 필요합니다.</li>\n      </ul>\n      <h3>마치며</h3>\n      <p>테슬라 모델 3 롱레인지는 분명 완벽한 차는 아닙니다. 하지만 테슬라만의 독보적인 기술력과 미래 지향적인 경험은 단점을 충분히 상쇄하고도 남습니다. 특히 새로운 기술과 경험을 즐기는 저 같은 테크 덕후라면 후회 없는 선택이 될 것입니다.</p>\n      <p>여러분은 테슬라 모델 3에 대해 어떻게 생각하시나요? 궁금한 점이나 경험담이 있다면 댓글로 남겨주세요!</p>\n    "
  },
  {
    slug: 'active-life-running-data',
    title: '나의 런닝 기록 분석: 데이터로 더 스마트하게 달리는 법',
    category: "[Active Life]",
    date: '2026년 2월 8일',
    content: "\n      <h2>데이터가 알려주는 나의 런닝 습관, 더 효율적인 운동을 위한 분석</h2>\n      <p>안녕하세요, 액티브 라이프를 즐기는 킹경덕입니다. 저는 런닝을 할 때도 데이터 분석을 빼놓지 않습니다. 단순한 취미를 넘어, 데이터를 통해 더 스마트하게 운동하고 효율을 높이는 방법을 소개합니다.</p>\n      <h3>1. 심박수 구간 트레이닝의 중요성</h3>\n      <ul>\n        <li><strong>데이터 확인:</strong> 런닝 앱이나 스마트워치로 기록된 평균 심박수, 최대 심박수를 확인합니다.</li>\n        <li><strong>분석:</strong> 내 목표(지구력 향상, 체지방 감소 등)에 맞는 심박수 구간(Zone)에서 운동했는지 분석합니다. 예를 들어, Zone 2는 유산소 지구력 향상에 효과적입니다.</li>\n        <li><strong>적용:</strong> 다음 런닝 시에는 특정 심박수 구간을 유지하며 달리는 연습을 합니다.</li>\n      </ul>\n      <h3>2. 페이스와 케이던스 조절</h3>\n      <ul>\n        <li><strong>데이터 확인:</strong> 1km당 페이스, 평균 케이던스(분당 발걸음 수)를 확인합니다.</li>\n        <li><strong>분석:</strong> 갑자기 페이스가 떨어지는 구간이나 케이던스가 너무 낮아지는 구간이 있다면 원인을 분석합니다. (예: 자세 불안정, 체력 저하)</li>\n        <li><strong>적용:</strong> 목표 페이스를 설정하고, 케이던스를 170~180 정도로 유지하는 연습을 통해 효율적인 자세를 만듭니다.</li>\n      </ul>\n      <h3>3. 회복 데이터의 중요성</h3>\n      <ul>\n        <li><strong>데이터 확인:</strong> 수면 시간, HRV(심박 변이도), 회복 시간 등 스마트워치가 제공하는 회복 관련 데이터를 확인합니다.</li>\n        <li><strong>분석:</strong> 충분한 휴식을 취했는지, 몸의 피로도가 어느 정도인지 파악합니다.</li>\n        <li><strong>적용:</strong> 회복 점수가 낮거나 피로도가 높다면 강도 높은 운동보다는 가벼운 활동이나 충분한 휴식을 취하는 것으로 운동 계획을 조절합니다. 오버트레이닝은 부상으로 이어집니다.</li>\n      </ul>\n      <h3>마치며</h3>\n      <p>런닝은 그 자체로도 즐거운 활동이지만, 데이터를 활용하면 더욱 체계적이고 목표 지향적인 운동이 될 수 있습니다. 저처럼 데이터를 좋아하는 분들이라면 분명 런닝의 새로운 재미를 발견하실 겁니다.</p>\n      <p>여러분은 어떤 데이터를 활용해서 운동하시나요? 자신만의 운동 데이터 활용 팁이 있다면 댓글로 공유해주세요!</p>\n    "
  },
  {
    slug: 'daily-log-smart-home-tips',
    title: '스마트홈 입문자를 위한 킹경덕의 꿀팁 3가지',
    category: "[Daily Log]",
    date: '2026년 2월 9일',
    content: "\n      <h2>스마트홈 입문자를 위한 킹경덕의 꿀팁 3가지</h2>\n      <p>안녕하세요, 킹경덕입니다. 거실 조명을 켜기 위해 소파에서 일어나는 것조차 귀찮아하는 저는 스마트홈의 열렬한 신봉자입니다. 복잡하게 생각할 필요 없이, 딱 3가지 꿀팁만 기억하면 여러분의 집도 스마트하게 변신할 수 있습니다!</p>\n      <h3>1. 스마트 플러그로 시작하라</h3>\n      <ul>\n        <li><strong>왜 필요한가:</strong> 가장 저렴하고 쉽게 스마트홈을 시작할 수 있는 방법입니다. 기존 가전을 스마트 가전으로 만들어줍니다.</li>\n        <li><strong>활용법:</strong> 오래된 선풍기, 스탠드 조명, 가습기 등에 연결하여 스마트폰이나 AI 스피커로 제어할 수 있습니다. 외출 시 깜빡하고 켜둔 가전을 끄는 것도 가능합니다.</li>\n      </ul>\n      <h3>2. AI 스피커는 만능 리모컨</h3>\n      <ul>\n        <li><strong>왜 필요한가:</strong> 스마트홈의 컨트롤 타워 역할을 합니다. 음성으로 모든 것을 제어할 수 있습니다.</li>\n        <li><strong>활용법:</strong> \"헤이 구글, 거실 불 켜줘\", \"알렉사, 에어컨 틀어줘\" 등 음성 명령으로 연결된 기기들을 제어합니다. 날씨, 뉴스 등 정보 검색도 가능해 일상이 훨씬 편리해집니다.</li>\n      </ul>\n      <h3>3. 자동화 시나리오 설정은 필수</h3>\n      <ul>\n        <li><strong>왜 필요한가:</strong> 스마트홈의 진정한 가치는 '자동화'에 있습니다.</li>\n        <li><strong>활용법:</strong> \"아침 7시, 자동으로 블라인드 열고 조명 켜줘\", \"외출 시 모든 전원 끄고 로봇청소기 작동\"과 같은 시나리오를 설정하여 손 하나 까딱 않고도 편리한 삶을 누릴 수 있습니다.</li>\n      </ul>\n      <h3>마치며</h3>\n      <p>스마트홈, 어렵게 생각할 필요 없습니다. 작은 것부터 하나씩 적용하다 보면 어느새 여러분의 일상은 훨씬 윤택해질 겁니다. 여러분만의 스마트홈 꿀팁이 있다면 댓글로 공유해주세요!</p>\n    "
  },
  {
      slug: 'about',
      title: '소개',
      category: '블로그 소개',
      content: "\n        <h2>블로그 소개</h2>\n        <p>안녕하십니까, 킹경덕입니다. IT 기획자이자 투자 분석가로서, 실무에서 얻은 기술 지식과 데이터 기반의 시장 분석을 통해 독자 여러분께 실질적인 가치를 제공하고자 합니다. 이 블로그는 단순한 정보의 나열이 아닌, 복잡한 기술과 투자의 세계를 꿰뚫는 통찰(Insight)을 공유하는 공간입니다.</p>\n        <p>지식과 경험을 공유하며 함께 성장하는 공간이 되기를 바랍니다. 방문해 주셔서 감사합니다!</p>\n    "
  },
  {
      slug: 'contact',
      title: '문의',
      category: '블로그 안내',
      content: "\n        <h2>문의하기</h2>\n        <p>저의 분석이나 블로그 내용에 대한 질문, 제안, 또는 협업 문의가 있으시면 언제든지 환영합니다.</p>\n        <p>아래 이메일 주소로 연락 주시면 최대한 빠르게 답변 드리겠습니다.</p>\n        <p>이메일: <a href=\"mailto:contact@example.com\">contact@example.com</a></p>\n        <p>여러분의 소중한 의견을 기다립니다!</p>\n    "
  },
  {
      slug: 'privacy-policy',
      title: '개인정보 처리방침',
      category: '블로그 안내',
      content: "\n        <h2>개인정보 처리방침</h2>\n        <p>킹경덕의 Tech & Life log는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령상의 개인정보 보호 규정을 준수하며, 정보통신망법에 따라 개인정보 처리방침을 정하여 이용자의 권익 보호에 최선을 다하고 있습니다. 본 개인정보 처리방침은 변경될 수 있으며, 변경 시에는 공지사항을 통해 안내합니다.</p>\n        <p>이하 내용은 이전과 동일합니다...</p>\n    "
  }
];

const app = document.getElementById('app');

function getCategories() {
    return [
        "[King’s IT & Work]",
        "[Tech & Gear]",
        "[Active Life]",
        "[Money & Insight]",
        "[Daily Log]"
    ];
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
                ${categories.map(category => `<li><a href="#category/${encodeURIComponent(category)}">${category}</a></li>`).join('')}
            </ul>
        `;
        categoryContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const category = event.target.textContent;
                renderPostList(category);
                window.location.hash = `#category/${encodeURIComponent(category)}`;
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
    renderPostList(decodeURIComponent(category));
  }
  else {
    renderPostList();
  }
  renderCategories();
}

window.addEventListener('hashchange', router);
router();

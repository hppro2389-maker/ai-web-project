document.addEventListener('DOMContentLoaded', function() {
    const ORIGINAL_BLOG_TITLE = '킹경덕의 Tech & Life log';
    const headerTitleElement = document.getElementById('header-title');

    const posts = [
        {
            id: 6,
            title: "2026년 청년 도약 계좌, 5천만 원 목돈 만들기 A to Z",
            date: "2026년 2월 1일",
            summary: "2026년 청년 도약 계좌 신청 방법, 자격, 혜택을 총정리했습니다. 5천만 원 목돈 만들기를 위한 정부 기여금, 비과세 혜택부터 온라인 신청 절차까지 A to Z를 확인하세요.",
            url: "posts/2026-02-01-cheongnyeon-doyak-gyejwa-sincheong-bangbeop.html"
        },
        {
            id: 1,
            title: "클린 아키텍처는 정말로 필요한가?",
            date: "2024년 4월 10일",
            summary: "소프트웨어 개발에서 '클린 아키텍처'는 거의 종교적인 지위를 얻었습니다. 하지만 모든 프로젝트에 정말로 클린 아키텍처가 필요할까요? 그 장점과 단점, 그리고 현실적인 적용법을 알아봅니다.",
            content: `
                <p>소프트웨어 개발 분야에서 '클린 아키텍처'는 거의 종교적인 지위를 얻었습니다. 하지만 모든 프로젝트에 정말로 클린 아키텍처가 필요할까요? 이 질문에 답하기 위해, 먼저 클린 아키텍처의 핵심 목표를 이해해야 합니다.</p>
                <p>클린 아키텍처의 주요 목적은 관심사의 분리(Separation of Concerns)입니다. 즉, 비즈니스 로직을 프레임워크, UI, 데이터베이스와 같은 외부 요소로부터 독립시키는 것입니다. 이를 통해 시스템은 유연하고, 테스트하기 쉽고, 유지보수하기 좋아집니다. 예를 들어, 데이터베이스를 바꾸거나 UI 프레임워크를 업그레이드할 때 비즈니스 로직은 영향을 받지 않아야 합니다.</p>
                <p>하지만 이러한 장점에는 비용이 따릅니다. 클린 아키텍처를 구현하려면 더 많은 코드와 추상화 계층이 필요하며, 이는 초기 개발 속도를 늦출 수 있습니다. 작은 프로토타입이나 단기 프로젝트에서 클린 아키텍처의 모든 규칙을 따르는 것은 과잉 설계(Over-engineering)일 수 있습니다.</p>
                <p>결론적으로, 클린 아키텍처는 '만병통치약'이 아닙니다. 프로젝트의 규모, 복잡성, 예상 수명, 그리고 팀의 경험을 고려하여 적용 여부를 결정해야 합니다. 중요한 것은 아키텍처의 '이름'이 아니라, '왜' 그 아키텍처를 선택했는지 이해하는 것입니다.</p>
            `
        },
        {
            id: 2,
            title: "개발자를 위한 생산성 도구 5가지 추천",
            date: "2024년 4월 12일",
            summary: "개발자에게 시간은 금입니다. 코딩 외에도 수많은 작업에 시간이 소요되기 때문입니다. 제가 매일 사용하는 Postman, Fig, Obsidian, GitHub Copilot, Notion 5가지 도구를 소개합니다.",
            content: `
                <p>개발자에게 시간은 금입니다. 코딩 외에도 수많은 작업에 시간이 소요되기 때문입니다. 다행히도 우리의 생산성을 높여줄 훌륭한 도구들이 많이 있습니다. 제가 매일 사용하는 5가지 도구를 소개합니다.</p>
                <ol>
                    <li><strong>Postman:</strong> API 개발 및 테스트를 위한 필수 도구입니다. 복잡한 HTTP 요청을 쉽게 보내고 응답을 확인할 수 있으며, 테스트 스크립트를 작성하여 API 동작을 자동화할 수 있습니다.</li>
                    <li><strong>Fig:</strong> 터미널을 위한 자동 완성 기능입니다. IDE의 코드 완성 기능처럼, 터미널 명령어에 대한 자동 완성과 설명을 제공하여 작업 효율을 극대화합니다.</li>
                    <li><strong>Obsidian:</strong> 마크다운 기반의 개인 지식 관리 시스템(PKM)입니다. 노트를 양방향으로 연결하여 자신만의 지식 네트워크를 구축할 수 있으며, 개발 일지나 프로젝트 문서를 작성하는 데 매우 유용합니다.</li>
                    <li><strong>GitHub Copilot:</strong> AI 기반의 코드 자동 완성 도구입니다. 단순한 코드 조각을 넘어, 함수 전체나 복잡한 알고리즘까지 제안해주어 코딩 속도를 획기적으로 높여줍니다.</li>
                    <li><strong>Notion:</strong> 프로젝트 관리, 문서화, 개인적인 계획까지 모든 것을 한 곳에서 관리할 수 있는 올인원 생산성 앱입니다. 개발 팀의 협업 공간으로도 훌륭하게 활용될 수 있습니다.</li>
                </ol>
                <p>이 도구들을 활용하여 여러분의 개발 워크플로우를 개선해보세요!</p>
            `
        },
        {
            id: 3,
            title: "제주도, 코딩하기 좋은 숨겨진 카페 3선",
            date: "2024년 4월 15일",
            summary: "때로는 익숙한 환경을 벗어나 새로운 곳에서 영감을 얻는 것이 필요합니다. '워케이션'의 성지, 제주도에서 제가 직접 방문하고 코딩하기 좋았던 카페 3곳을 소개합니다.",
            content: `
                <p>때로는 익숙한 환경을 벗어나 새로운 곳에서 영감을 얻는 것이 필요합니다. '워케이션'의 성지, 제주도에서 제가 직접 방문하고 코딩하기 좋았던 카페 3곳을 소개합니다.</p>
                <ul>
                    <li><strong>카페 델문도 (함덕):</strong> 함덕 해수욕장 바로 앞에 위치한 이 카페는 환상적인 오션뷰를 자랑합니다. 넓은 공간과 넉넉한 콘센트, 그리고 빠른 Wi-Fi는 디지털 노마드에게 최적의 환경을 제공합니다. 파도 소리를 들으며 코딩하는 경험은 정말 특별합니다.</li>
                    <li><strong>풍림다방 (송당):</strong> 제주시 동쪽의 조용한 마을 송당리에 위치한 이곳은 핸드드립 커피가 유명합니다. 복잡한 도심을 벗어나 고즈넉한 분위기에서 깊은 집중이 필요할 때 방문하기 좋습니다. 창밖으로 보이는 제주의 시골 풍경이 마음을 편안하게 해줍니다.</li>
                    <li><strong>서양차관 (애월):</strong> 애월의 한적한 골목에 숨겨진 앤티크한 분위기의 찻집입니다. 다양한 종류의 홍차와 디저트를 즐길 수 있으며, 조용하고 아늑한 분위기는 복잡한 문제에 대한 해결책을 고민하기에 안성맞춤입니다.</li>
                </ul>
                <p>다음 제주 여행에서는 노트북과 함께 이 카페들을 방문해보는 것은 어떨까요?</p>
            `
        },
        {
            id: 4,
            title: "TDD(테스트 주도 개발)는 시간 낭비일까?",
            date: "2024년 4月 18일",
            summary: "TDD는 '실패하는 테스트를 먼저 작성하고, 그 테스트를 통과시키는 코드를 작성한 후, 코드를 리팩토링하는' 개발 방식입니다. TDD의 장점과 단점, 그리고 현실적인 적용 방안에 대해 알아봅니다.",
            content: `
                <p>테스트 주도 개발(TDD)은 '실패하는 테스트를 먼저 작성하고, 그 테스트를 통과시키는 코드를 작성한 후, 코드를 리팩토링하는' 개발 방식입니다. 많은 개발자들이 TDD의 이점을 칭찬하지만, 일각에서는 오히려 개발 속도를 저해하는 시간 낭비라고 주장합니다.</p>
                <p>TDD의 가장 큰 장점은 '설계 개선'과 '안정성'입니다. 테스트를 먼저 작성하는 과정에서 코드의 인터페이스와 역할을 더 명확하게 고민하게 되며, 이는 자연스럽게 더 나은 설계로 이어집니다. 또한, 촘촘하게 짜인 테스트 코드는 코드 변경 시 발생할 수 있는 부작용을 빠르게 감지하여 시스템의 안정성을 높여줍니다.</p>
                <p>반면, TDD의 단점은 명확합니다. 특히 TDD에 익숙하지 않은 개발자에게는 초기 학습 곡선이 가파를 수 있으며, 간단한 기능을 구현하는 데에도 더 많은 시간이 소요될 수 있습니다. 또한, 사용자 인터페이스나 외부 시스템과의 통합 테스트처럼 TDD를 적용하기 어려운 영역도 존재합니다.</p>
                <p>개인적으로 저는 TDD가 '투자'라고 생각합니다. 단기적으로는 시간이 더 걸릴 수 있지만, 장기적으로는 디버깅 시간을 줄이고 유지보수 비용을 낮추는 효과를 가져옵니다. 모든 상황에 TDD가 정답은 아니지만, 특히 비즈니스 로직과 같이 핵심적인 부분에는 TDD를 적용하는 것이 현명한 선택일 수 있습니다.</p>
            `
        },
        {
            id: 5,
            title: "나를 성장시킨 책 3권: '함께 자라기', '실용주의 프로그래머', '생각에 관한 생각'",
            date: "2024년 4월 22일",
            summary: "독서는 제가 개발자로서, 그리고 한 개인으로서 성장하는 데 가장 중요한 자양분이었습니다. 저에게 큰 영향을 미친 '함께 자라기', '실용주의 프로그래머', '생각에 관한 생각' 세 권의 책을 소개합니다.",
            content: `
                <p>독서는 제가 개발자로서, 그리고 한 개인으로서 성장하는 데 가장 중요한 자양분이었습니다. 수많은 책 중에서 저에게 특히 큰 영향을 미친 3권의 책을 소개하고자 합니다.</p>
                <dl>
                    <dt><strong>함께 자라기 (김창준 저)</strong></dt>
                    <dd>이 책은 '어떻게 더 나은 학습자가 될 수 있는가'에 대한 깊은 통찰을 제공합니다. 특히 '실수 관리'와 '피드백'의 중요성을 강조하며, 혼자가 아닌 '함께' 성장하는 방법에 대해 이야기합니다. 개발자로서의 커리어뿐만 아니라 인생 전반에 적용할 수 있는 지혜로 가득합니다.</dd>
                    <dt><strong>실용주의 프로그래머 (앤드류 헌트, 데이비드 토머스 저)</strong></dt>
                    <dd>모든 개발자의 필독서로 꼽히는 고전입니다. 특정 기술이 아닌, 프로그래머로서 가져야 할 '자세'와 '철학'에 대해 이야기합니다. '깨진 창문을 고쳐라', '지식 포트폴리오를 만들어라' 등 수많은 주옥같은 조언들이 담겨 있습니다.</dd>
                    <dt><strong>생각에 관한 생각 (대니얼 카너먼 저)</strong></dt>
                    <dd>노벨 경제학상 수상자인 대니얼 카너먼이 쓴 이 책은 우리가 얼마나 비합리적으로 생각하고 판단하는지를 적나라하게 보여줍니다. 개발자로서 논리적인 사고를 하는 것만큼이나, 우리 자신의 인지적 편향을 이해하는 것이 중요하다고 생각합니다. 이 책은 더 나은 의사결정을 내리는 데 큰 도움을 줍니다.</dd>
                </dl>
                <p>아직 이 책들을 읽어보지 않으셨다면, 꼭 한번 읽어보시기를 강력히 추천합니다.</p>
            `
        }
    ];

    const postListContainer = document.getElementById('post-list');
    const postViewContainer = document.getElementById('post-view');
    const aboutPage = document.getElementById('about-page');
    const privacyPage = document.getElementById('privacy-page');
    const contactPage = document.getElementById('contact-page');
    const sidebarPostList = document.querySelector('#sidebar ul');

    const pages = {
        'post-list': postListContainer,
        'post-view': postViewContainer,
        'about': aboutPage,
        'privacy': privacyPage,
        'contact': contactPage
    };

    function updateHeaderTitle(title = ORIGINAL_BLOG_TITLE) {
        let displayTitle = title;
        if (title.length > 15) {
            displayTitle = title.substring(0, 15) + '...';
        }
        headerTitleElement.textContent = displayTitle;
    }

    function showPage(pageId) {
        Object.values(pages).forEach(page => {
            if (page) page.style.display = 'none';
        });

        if (pageId !== 'post-view') {
            updateHeaderTitle(); // Reset header for all pages except post-view
        }

        if (pages[pageId]) {
            pages[pageId].style.display = 'block';
        }
    }

    function renderPostList() {
        postListContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('article');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2><a href="/post/${post.id}" data-post-id="${post.id}">${post.title}</a></h2>
                <div class="post-meta">게시일: ${post.date}</div>
                <div class="post-content">
                    <p>${post.summary}</p>
                </div>
            `;
            postListContainer.appendChild(postElement);

            if ((index + 1) % 2 === 0 && index < posts.length - 1) {
                const adElement = document.createElement('div');
                adElement.className = 'ad-placeholder';
                adElement.textContent = '광고';
                postListContainer.appendChild(adElement);
            }
        });
        showPage('post-list');
    }

    function renderPost(postId) {
        const post = posts.find(p => p.id === postId);
        if (!post) {
            navigateTo('/'); // Redirect to home if post not found
            return;
        }

        updateHeaderTitle(post.title);

        postViewContainer.innerHTML = `
            <button id="back-to-list" data-page="home">← 목록으로 돌아가기</button>
            <div id="post-content-area"></div>
        `;
        const contentArea = postViewContainer.querySelector('#post-content-area');

        if (post.url) {
            fetch(post.url)
                .then(response => response.ok ? response.text() : Promise.reject('File not found'))
                .then(html => {
                    contentArea.innerHTML = html;
                    // Prism.highlightAll is not needed if using autoloader
                })
                .catch(error => {
                    console.error('Error fetching post:', error);
                    contentArea.innerHTML = '<p>게시물을 불러오는 데 실패했습니다.</p>';
                });
        } else if (post.content) {
            contentArea.innerHTML = `
                <article class="post">
                    <h2>${post.title}</h2>
                    <div class="post-meta">게시일: ${post.date}</div>
                    <div class="post-content">${post.content}</div>
                </article>
            `;
            // Prism.highlightAll(); might be needed here for inline content
        }
        showPage('post-view');
    }

    function updateSidebar() {
        sidebarPostList.innerHTML = '';
        posts.slice(0, 3).forEach(post => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="/post/${post.id}" data-post-id="${post.id}">${post.title}</a>`;
            sidebarPostList.appendChild(li);
        });
    }

    // --- Router Logic ---
    const navigateTo = (url) => {
        history.pushState({ path: url }, '', url);
        router();
    };

    const router = () => {
        const path = window.location.pathname;

        if (path === '/' || path === '/index.html' || path.startsWith('/home')) {
            renderPostList();
        } else if (path.startsWith('/post/')) {
            const postId = parseInt(path.split('/')[2], 10);
            renderPost(postId);
        } else if (path.startsWith('/about')) {
            showPage('about');
        } else if (path.startsWith('/privacy')) {
            showPage('privacy');
        } else if (path.startsWith('/contact')) {
            showPage('contact');
        } else {
            renderPostList(); // 404 fallback
        }
    };

    window.addEventListener('popstate', router);

    document.body.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (anchor && anchor.href.startsWith(window.location.origin) && !e.metaKey && !e.ctrlKey) {
             // Check for internal links that aren't special clicks
            const targetUrl = new URL(anchor.href);
            if (targetUrl.pathname !== window.location.pathname) {
                e.preventDefault();
                navigateTo(targetUrl.pathname);
            }
        }
        // Handle buttons that act like links
        const backButton = e.target.closest('#back-to-list');
        if (backButton) {
            e.preventDefault();
            navigateTo('/');
        }
    });

    // Initial Load
    router();
    updateSidebar();
    
    // --- Theme Toggle Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.toggleAttribute('data-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});
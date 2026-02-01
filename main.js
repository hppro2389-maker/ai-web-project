document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            id: 1,
            title: "첫 번째 블로그 게시물",
            date: "2024년 4월 3일",
            content: `
                <p>안녕하세요! 이것은 제 블로그의 첫 번째 게시물입니다. 이 공간을 사용하여 생각, 아이디어 및 경험을 공유할 수 있습니다.</p>
                <p>이 블로그는 기술, 라이프스타일, 그리고 그 사이의 모든 것에 대한 제 생각을 기록하기 위해 만들어졌습니다. 앞으로 흥미로운 콘텐츠를 많이 기대해주세요!</p>
            `
        },
        {
            id: 2,
            title: "두 번째 블로그 게시물",
            date: "2024년 4월 4일",
            content: `
                <p>두 번째 게시물에 오신 것을 환영합니다. 오늘은 웹 개발의 최신 동향에 대해 이야기해볼까 합니다.</p>
                <p>React, Vue, Angular와 같은 프레임워크는 계속해서 발전하고 있으며, Svelte와 같은 새로운 도구도 등장하고 있습니다. 끊임없이 배우고 적응하는 것이 중요합니다.</p>
            `
        },
        {
            id: 3,
            title: "한국의 아름다운 장소",
            date: "2024년 4월 5일",
            content: `
                <p>한국은 정말 아름다운 나라입니다. 서울의 번화한 거리부터 제주도의 고요한 해변까지, 볼거리와 즐길 거리가 가득합니다.</p>
                <p>개인적으로 저는 경주의 역사적인 분위기를 좋아합니다. 여러분이 가장 좋아하는 장소는 어디인가요?</p>
            `
        },
        {
            id: 4,
            title: "수익형 블로그 만들기 팁",
            date: "2024년 4月 6일",
            content: `
                <p>수익형 블로그를 만드는 것은 많은 사람들의 꿈입니다. 꾸준함, 양질의 콘텐츠, 그리고 약간의 마케팅 지식이 필요합니다.</p>
                <p>Google AdSense는 시작하기에 좋은 방법이지만, 제휴 마케팅이나 스폰서 게시물과 같은 다른 수익 모델도 고려해볼 수 있습니다.</p>
            `
        }
    ];

    const postListContainer = document.getElementById('post-list');
    const postViewContainer = document.getElementById('post-view');

    function renderPostList() {
        postListContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('article');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2><a href="#" data-post-id="${post.id}">${post.title}</a></h2>
                <div class="post-meta">게시일: ${post.date}</div>
                <div class="post-content">
                    ${post.content.substring(0, 150)}...
                </div>
            `;
            postListContainer.appendChild(postElement);

            // Inject an ad placeholder after every 2 posts
            if ((index + 1) % 2 === 0) {
                const adElement = document.createElement('div');
                adElement.className = 'ad-placeholder';
                adElement.textContent = '광고';
                postListContainer.appendChild(adElement);
            }
        });
        postViewContainer.style.display = 'none';
        postListContainer.style.display = 'block';
    }

    function renderPost(postId) {
        const post = posts.find(p => p.id === postId);
        if (!post) return;

        postViewContainer.innerHTML = `
            <button id="back-to-list">← 목록으로 돌아가기</button>
            <article class="post">
                <h2>${post.title}</h2>
                <div class="post-meta">게시일: ${post.date}</div>
                <div class="post-content">
                    ${post.content}
                </div>
            </article>
        `;
        postListContainer.style.display = 'none';
        postViewContainer.style.display = 'block';
    }

    // Event Delegation for post clicks
    postListContainer.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.dataset.postId) {
            e.preventDefault();
            const postId = parseInt(e.target.dataset.postId, 10);
            renderPost(postId);
        }
    });

    // Event Delegation for back button
    postViewContainer.addEventListener('click', function(e) {
        if (e.target.id === 'back-to-list') {
            e.preventDefault();
            renderPostList();
        }
    });
    
    // Initial Render
    renderPostList();
});

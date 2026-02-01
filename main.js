document.addEventListener('DOMContentLoaded', function() {
    // This is where you would fetch your blog posts from, e.g., a JSON file or an API.
    const posts = [
        {
            title: "첫 번째 블로그 게시물",
            date: "2024년 4월 3일",
            content: `
                <p>이것은 제 블로그의 첫 번째 게시물입니다. 여기에 귀하의 콘텐츠를 작성하십시오.</p>
            `
        },
        {
            title: "두 번째 블로그 게시물",
            date: "2024년 4월 4일",
            content: `
                <p>이것은 두 번째 게시물입니다. 기술, 생활 또는 기타 관심 있는 주제에 대해 이야기해 보세요.</p>
            `
        }
    ];

    const app = document.getElementById('app');

    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2><a href="#">${post.title}</a></h2>
            <div class="post-meta">게시일: ${post.date}</div>
            <div class="post-content">
                ${post.content}
            </div>
        `;
        app.appendChild(postElement);
    });
});

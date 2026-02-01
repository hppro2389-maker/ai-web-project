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
    slug: 'first-post',
    title: 'My First Post',
    content: `
      <h2>My First Post</h2>
      <p>This is my first post on my new blog. I'm excited to share my thoughts with the world.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
    `
  },
  {
    slug: 'second-post',
    title: 'Another Post',
    content: `
      <h2>Another Post</h2>
      <p>Here's another post. I'm getting the hang of this.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
    `
  },
    {
    slug: 'third-post',
    title: 'A Third Post',
    content: `
      <h2>A Third Post</h2>
      <p>This is the third post. I'm on a roll!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam. Porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
    `
  }
];

const app = document.getElementById('app');

function renderPostList() {
  app.innerHTML = `
    <ul class="post-list">
      ${posts.map(post => `
        <li>
          <a href="#post/${post.slug}">${post.title}</a>
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
        <a href="#">&larr; Back to posts</a>
        ${post.content}
      </div>
    `;
  } else {
    renderPostList();
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
}

window.addEventListener('hashchange', router);
router();
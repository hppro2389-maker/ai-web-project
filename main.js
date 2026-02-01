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
    title: 'The Importance of a Good Morning Routine',
    date: 'February 1, 2026',
    content: `
      <h2>The Importance of a Good Morning Routine</h2>
      <p>A well-structured morning routine can set the tone for your entire day. It's not just about waking up early; it's about creating a series of habits that promote productivity, reduce stress, and improve your overall well-being. In this post, we'll explore the key components of an effective morning routine and how you can build one that works for you.</p>
      <h3>Key Components of a Morning Routine</h3>
      <ul>
        <li><strong>Hydration:</strong> Start your day with a glass of water to rehydrate your body after a long night's sleep.</li>
        <li><strong>Mindfulness:</strong> Whether it's meditation, journaling, or simply a few minutes of quiet reflection, mindfulness can help you start your day with a clear and focused mind.</li>
        <li><strong>Exercise:</strong> Even a short workout can boost your energy levels and improve your mood.</li>
        <li><strong>Healthy Breakfast:</strong> Fuel your body with a nutritious breakfast to give you the energy you need to tackle the day.</li>
      </ul>
      <p>By incorporating these habits into your morning routine, you can create a positive and productive start to your day.</p>
    `
  },
  {
    slug: 'second-post',
    title: 'A Guide to Mindful Eating',
    date: 'February 2, 2026',
    content: `
      <h2>A Guide to Mindful Eating</h2>
      <p>Mindful eating is the practice of paying full attention to the experience of eating and drinking, both inside and outside the body. It's about savoring your food and being aware of the physical and emotional sensations that arise during a meal. This post will guide you through the principles of mindful eating and how you can incorporate them into your daily life.</p>
      <h3>How to Practice Mindful Eating</h3>
      <ol>
        <li><strong>Eat slowly and without distraction:</strong> Turn off the TV, put away your phone, and focus on your food.</li>
        <li><strong>Listen to your body's hunger cues:</strong> Eat when you're hungry and stop when you're full.</li>
        <li><strong>Engage your senses:</strong> Notice the colors, smells, sounds, textures, and flavors of your food.</li>
        <li><strong>Appreciate your food:</strong> Reflect on where your food came from and the effort it took to get to your plate.</li>
      </ol>
      <p>Mindful eating can help you enjoy your food more, improve your digestion, and develop a healthier relationship with food.</p>
    `
  },
    {
    slug: 'third-post',
    title: 'The Benefits of Digital Detox',
    date: 'February 3, 2026',
    content: `
      <h2>The Benefits of Digital Detox</h2>
      <p>In our hyper-connected world, it's easy to feel overwhelmed by the constant stream of notifications, emails, and social media updates. A digital detox—a period of time during which a person refrains from using electronic devices—can be a powerful way to unplug, recharge, and reconnect with the world around you. This post explores the many benefits of taking a break from technology.</p>
      <h3>Why You Should Consider a Digital Detox</h3>
      <ul>
        <li><strong>Improved Focus:</strong> Without the constant distraction of your devices, you'll be able to concentrate better on the task at hand.</li>
        <li><strong>Reduced Stress:</strong> Taking a break from the pressure to be constantly connected can lower your stress levels and improve your mental health.</li>
        <li><strong>Better Sleep:</strong> The blue light from screens can interfere with your sleep cycle. A digital detox can help you get a more restful night's sleep.</li>
        <li><strong>More Meaningful Connections:</strong> Disconnecting from your devices can help you be more present in your interactions with others.</li>
      </ul>
      <p>Even a short digital detox can have a positive impact on your well-being. Start small by setting aside a few hours each day to unplug and see how you feel.</p>
    `
  },
  {
      slug: 'about',
      title: 'About Us',
      content: `
        <h2>About Us</h2>
        <p>Welcome to our blog! We are a team of passionate writers dedicated to sharing high-quality content on a variety of topics. Our mission is to inspire, educate, and entertain our readers through well-researched and engaging articles.</p>
        <p>Thank you for visiting our site. We hope you enjoy our content and become a part of our growing community.</p>
    `
  },
  {
      slug: 'contact',
      title: 'Contact Us',
      content: `
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! If you have any questions, comments, or suggestions, please don't hesitate to get in touch.</p>
        <p>You can reach us by email at <a href="mailto:contact@example.com">contact@example.com</a>.</p>
    `
  },
  {
      slug: 'privacy-policy',
      title: 'Privacy Policy',
      content: `
        <h2>Privacy Policy</h2>
        <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from this website.</p>
        <h3>Personal Information We Collect</h3>
        <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
        <h3>How Do We Use Your Personal Information?</h3>
        <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:</p>
        <ul>
            <li>Communicate with you;</li>
            <li>Screen our orders for potential risk or fraud; and</li>
            <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
        </ul>
        <h3>Sharing Your Personal Information</h3>
        <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site.</p>
        <h3>Your Rights</h3>
        <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
        <h3>Contact Us</h3>
        <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:contact@example.com">contact@example.com</a>.</p>
    `
  }
];

const app = document.getElementById('app');

function renderPostList() {
  const blogPosts = posts.filter(post => !['about', 'contact', 'privacy-policy'].includes(post.slug));
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
        <a href="#">&larr; Back to posts</a>
        <p class="post-date">${post.date || ''}</p>
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
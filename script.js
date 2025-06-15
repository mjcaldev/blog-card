const blogPosts = [
  {
    title: "Modern Blog Card 1",
    excerpt: "Clean and responsive blog cards are great for showcasing your content.",
    image: "https://cdn.freecodecamp.org/curriculum/labs/cover-photo.jpg",
    link: "#"
  },
  {
    title: "Modern Blog Card 2",
    excerpt: "Design systems and UI libraries often include reusable cards like these.",
    image: "https://cdn.freecodecamp.org/curriculum/labs/cover-photo.jpg",
    link: "#"
  },
  {
    title: "Modern Blog Card 3",
    excerpt: "Creating cards with consistent padding and spacing makes your site look pro.",
    image: "https://cdn.freecodecamp.org/curriculum/labs/cover-photo.jpg",
    link: "#"
  },
];

const blogGrid = document.getElementById("blogGrid");

blogPosts.forEach(post => {
  const card = document.createElement("div");
  card.className = "blog-post-card";
  card.innerHTML = `
    <img src="${post.image}" alt="${post.title}" class="post-img" />
    <div class="post-content">
      <h2 class="post-title">${post.title}</h2>
      <p class="post-excerpt">${post.excerpt}</p>
      <a href="${post.link}" class="read-more">Read More</a>
    </div>
  `;
  blogGrid.appendChild(card);
});

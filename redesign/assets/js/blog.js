// بارگذاری مقالات از فایل JSON
fetch('data/blog-posts.json')
    .then(response => response.json())
    .then(posts => {
        const blogContainer = document.querySelector('.blog-grid');
        if (!blogContainer) return;

        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'blog-card';
            article.innerHTML = `
                <img src="images/${post.image}" alt="${post.title}">
                <div class="blog-content">
                    <span class="date">${post.date}</span>
                    <h3><a href="blog-post.html?id=${post.id}">${post.title}</a></h3>
                    <p>${post.summary}</p>
                    <a href="blog-post.html?id=${post.id}" class="read-more">مطالعه بیشتر</a>
                </div>
            `;
            blogContainer.appendChild(article);
        });
    })
    .catch(error => console.error('خطا در بارگذاری وبلاگ:', error));
export function renderNews(news) {
    const newsContainer = document.getElementById("news");
    if (!newsContainer)
        return;
    const html = news
        .slice(0, 10)
        .map(article => `
                <div class="news-article">

                    <h3>${article.title}</h3>

                    <a
                        href="${article.url}"
                        target="_blank">

                        Read More

                    </a>

                    <hr>

                </div>
            `)
        .join("");
    newsContainer.innerHTML = `
        <h2>📰 Nepali News</h2>
        ${html}
    `;
}

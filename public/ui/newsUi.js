export async function renderNews(news) {
    const newsContainer = document.getElementById('news');
    if (!newsContainer)
        return;
    const html = news.map((article) => `
        <div class="news-article">
           <a
                href="${article.url}"
                target="_blank">
                ${article.title}
            </a>
            <P>
            Author: ${article.by}
            </P>
        </div>`).join('');
    newsContainer.innerHTML = `<h2>📰 News</h2>${html}`;
}

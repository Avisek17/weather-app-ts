import { News } from "../types/news.js";

export function renderNews(
    news: News[]
): void {

    const newsContainer =
        document.getElementById("news");

    if (!newsContainer) return;

    const html = news
        .slice(0, 10)
        .map(
            article => `
                <div class="news-article">

                    <h3>${article.title}</h3>

                    <a
                        href="${article.url}"
                        target="_blank">

                        Read More

                    </a>

                    <hr>

                </div>
            `
        )
        .join("");

    newsContainer.innerHTML = `
        ${html}
    `;
}
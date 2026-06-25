import { setContent } from "../ui/contentUi.js";
import { getNews } from "../api/news.js";
export async function handleNewsClick() {
    const news = await getNews();
    const html = news
        .slice(0, 10)
        .map(article => `

                <div>

                    <h3>
                        ${article.title}
                    </h3>

                    <a
                        href="${article.url}"
                        target="_blank">

                        Read More

                    </a>

                </div>

            `)
        .join("");
    setContent(`


        ${html}

    `);
}

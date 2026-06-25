// api/news.ts

import { News } from "../types/news.js";

export async function getNews(): Promise<News[]> {

    const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://www.onlinekhabar.com/feed"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch news");
    }

    const data = await response.json();

    return data.items;
}
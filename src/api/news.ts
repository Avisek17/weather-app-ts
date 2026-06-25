import { News } from '../types/news.js';

export async function getNews(): 
Promise<News[]>{
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    if(!response.ok){
        throw new Error('Failed to fetch news data');
    }

    const newsIds: number[] = await response.json();
    const newsPromises = newsIds.slice(0, 10).map(async (id) => {
        const newsResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

    return newsResponse.json();
    });

    const newsData: News[] = await Promise.all(newsPromises);
    return newsData;
}
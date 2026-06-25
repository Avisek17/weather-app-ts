export async function getNews() {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    if (!response.ok) {
        throw new Error('Failed to fetch news data');
    }
    const newsIds = await response.json();
    const newsPromises = newsIds.slice(0, 10).map(async (id) => {
        const newsResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return newsResponse.json();
    });
    const newsData = await Promise.all(newsPromises);
    return newsData;
}

import { useState, useMemo } from 'react';
import { newsData } from './data';

const useNews = (searchInput) => {
    const news = newsData.data;

    const searchTerm = searchInput ? searchInput.toLowerCase() : '';

    const filteredNews = useMemo(() =>
        news.filter(newsItem =>
            newsItem.title.toLowerCase().includes(searchTerm) ||
            newsItem.description.toLowerCase().includes(searchTerm)
        ),
        [news, searchTerm]
    );

    const [visibleCount, setVisibleCount] = useState(6);
    const itemsToLoad = 6;

    const loadMoreItems = () => {
        setVisibleCount(prevCount => prevCount + itemsToLoad);
    };

    return {
        filteredNews: filteredNews.slice(0, visibleCount),
        hasMore: visibleCount < filteredNews.length,
        loadMoreItems
    };
};

export default useNews;

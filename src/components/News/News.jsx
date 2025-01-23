import React from 'react';
import NewsList from './NewsList';
import Loder from '../Loding';
import useCallApi from '../../Hooks/useCallApi';
import useNews from './useNews';

export default function News({ searchInput }) {
    // const { apiData, loading, error } = useCallApi('news');
    // if (loading) return <Loder />;
    // if (error) return <p>Error loading data</p>;

    const { filteredNews, hasMore, loadMoreItems } = useNews(searchInput);

    return (
        <div>
            <NewsList
                news={filteredNews}
                hasMore={hasMore}
                onLoadMore={loadMoreItems}
            />
        </div>
    );
}

import NewsItem from '../news-item/NewsItem';
import { Button, Typography, IconButton } from '@mui/material';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

function DisplayResults({
    newsResult,
    handleFavoritesChange,
    favoritesList,
    handleLoadMoreResults,
    handleDisplayPages,
    newsPage,
    searchParam,
}) {
    return (
        <>
            <section className='display-results-container'>
                {newsResult.length < 1 && (
                    <Typography variant='caption' color='#868e96'>
                        Please enter a search term above to begin searching for news.
                    </Typography>
                )}
                {searchParam && (
                    <Typography variant='h5' className='search-term' sx={{ letterSpacing: '1px' }}>
                        {searchParam.toUpperCase()} ({newsResult.length})
                    </Typography>
                )}

                <div className='results-container'>
                    {newsResult.map((news) => (
                        <NewsItem
                            key={news.title}
                            news={news}
                            handleFavoritesChange={handleFavoritesChange}
                            favoritesList={favoritesList}
                        />
                    ))}
                </div>
                <div className='display-results-buttons'>
                    {newsResult[0] && (
                        <>
                            <Button
                                variant='contained'
                                onClick={() => {
                                    handleLoadMoreResults(newsPage);
                                    handleDisplayPages();
                                }}>
                                Load More
                            </Button>
                            <IconButton aria-label='arrow-up' color='primary' href='#header' className='arrow'>
                                <ArrowCircleUpOutlinedIcon fontSize='large' />
                            </IconButton>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

export default DisplayResults;

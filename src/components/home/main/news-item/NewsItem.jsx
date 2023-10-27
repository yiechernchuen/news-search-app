import { Typography, Avatar, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const color = {
    a: '#f43f5e',
    b: '#ec4899',
    c: '#d946ef',
    d: '#d946ef',
    e: '#a855f7',
    f: '#8b5cf6',
    g: '#6366f1',
    h: '#3b82f6',
    i: '#0ea5e9',
    j: '#06b6d4',
    k: '#0d9488',
    l: '#059669',
    m: '#16a34a',
    n: '#65a30d',
    o: '#ca8a04',
    p: '#d97706',
    q: '#ea580c',
    r: '#dc2626',
    s: '#57534e',
    t: '#525252',
    u: '#71717a',
    v: '#083344',
    w: '#713f12',
    x: '#3b0764',
    y: '#0c4a6e',
    z: '#064e3b',
};

function NewsItem({ news, handleFavoritesChange, favoritesList }) {
    const newsTitleFirstLetter = news.source.name[0].toLowerCase();
    const savedItem = favoritesList.find((list) => {
        return list.title === news.title;
    });

    return (
        <div className='news-item-card'>
            <img className='card-img' src={news.urlToImage} alt='news image' />
            <div className='card-content'>
                <div className='news-header'>
                    <Avatar sx={{ bgcolor: color[newsTitleFirstLetter] }}>{news.source.name[0]}</Avatar>
                    <div className='news-title-date'>
                        <Typography variant='h6'>{news.source.name}</Typography>
                        <Typography variant='subtitle1'>{news.publishedAt.slice(0, 10)}</Typography>
                    </div>
                </div>
                <Typography variant='body1' className='news-description' sx={{ marginBottom: '0.5rem' }}>
                    {news.title}
                </Typography>
                <div className='news-icon'>
                    <IconButton
                        aria-label='favorites'
                        color='primary'
                        size='large'
                        onClick={() => {
                            handleFavoritesChange(savedItem, news);
                        }}>
                        {savedItem ? <FavoriteIcon fontSize='md' /> : <FavoriteBorderIcon fontSize='md' />}
                    </IconButton>
                    <IconButton
                        href={news.url}
                        target='_blank'
                        rel='noopener,noreferrer'
                        aria-label='to-website'
                        color='primary'
                        size='large'>
                        <OpenInNewIcon fontSize='md' />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;

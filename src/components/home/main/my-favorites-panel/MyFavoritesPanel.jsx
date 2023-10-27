import { Typography, Button, Link, IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function MyFavoritesPanel({ favoritesList, handleFavoritesChange, handleClearFavoritesList }) {
    return (
        <section className='favorites-container'>
            <div className='favorites-header'>
                <Typography variant='h5'>Favorites ({favoritesList.length || '0'})</Typography>
                <Button variant='contained' onClick={handleClearFavoritesList} size='small' className='clear-button'>
                    Clear
                </Button>
            </div>
            <div className='favorites-list-container'>
                {favoritesList.length < 1 && (
                    <Typography variant='caption' color='#868e96'>
                        Your collection begins with a click
                    </Typography>
                )}
                {favoritesList.map((item) => (
                    <div key={item.title} className='favorites-item'>
                        <Link href={item.url} underline='none' target='_blank' rel='noopener noreferrer'>
                            {item.title}
                        </Link>
                        <IconButton
                            onClick={() => {
                                handleFavoritesChange(item);
                            }}>
                            <DeleteOutlineOutlinedIcon fontSize='md' />
                        </IconButton>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MyFavoritesPanel;

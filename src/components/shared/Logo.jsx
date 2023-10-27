import { Typography } from '@mui/material';
function Logo() {
    return (
        <Typography
            variant='h4'
            sx={{ fontWeight: 'medium', fontSize: '2.5rem', cursor: 'default' }}
            className='logo-name-start'>
            NewsFind
            <Typography
                component='span'
                variant='h4'
                sx={{ fontWeight: 'bold', fontSize: '2.8rem' }}
                color='primary'
                className='logo-name-end'>
                R
            </Typography>
        </Typography>
    );
}

export default Logo;

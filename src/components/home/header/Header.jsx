import { TextField, Button, Chip, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Logo from '../../shared/Logo';

function Header({ searchParam, setSearchParam, handleSubmit, handleLogin }) {
    const navigate = useNavigate();
    return (
        <header className='header' id='header'>
            <Logo />
            <form className='search-bar' onSubmit={handleSubmit}>
                <TextField
                    variant='outlined'
                    value={searchParam}
                    size='small'
                    fullWidth
                    onChange={(e) => {
                        setSearchParam(e.target.value);
                    }}></TextField>
                <Button variant='contained' type='submit' className='search-button-complete'>
                    Search
                </Button>
                <IconButton className='search-button-partial' color='primary'>
                    <SearchOutlinedIcon />
                </IconButton>
            </form>
            <nav className='nav-bar'>
                <Chip label='TEST' color='primary' icon={<PermIdentityOutlinedIcon />} className='user-icon-complete' />
                <Chip label='T' color='primary' variant='outlined' className='user-icon-partial' />
                <Chip
                    className='logout-icon-complete'
                    color='primary'
                    label='LOGOUT'
                    variant='outlined'
                    onClick={() => {
                        handleLogin(false);
                        navigate('/');
                    }}
                />
                <IconButton
                    className='logout-icon-partial'
                    color='primary'
                    variant='outlined'
                    onClick={() => {
                        handleLogin(false);
                        navigate('/');
                    }}>
                    <LogoutOutlinedIcon />
                </IconButton>
            </nav>
        </header>
    );
}

export default Header;

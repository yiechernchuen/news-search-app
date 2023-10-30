/* eslint-disable react-hooks/exhaustive-deps */
import MyFavoritesPanel from './main/my-favorites-panel/MyFavoritesPanel';
import DisplayResults from './main/display-results/DisplayResults';
import Header from './header/Header';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [searchParam, setSearchParam] = useState('');
    const [newsResult, setNewsResult] = useState([]);
    const [newsPage, setNewsPage] = useState(2);
    const [favoritesList, setFavoritesList] = useState(JSON.parse(localStorage.getItem('favoritesList')) ?? []);
    const search = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
    }, [favoritesList]);

    useEffect(() => {
        if (!JSON.parse(sessionStorage.getItem('isLoggedIn'))) navigate('/');
    }, []);

    async function getNewsData(searchParam, page) {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${searchParam}&sortBy=relevancy&pageSize=10&page=${page}&apiKey=${
                import.meta.env.VITE_API_KEY
            }`,
            { mode: 'cors', method: 'GET' }
        );
        const json = await response.json();
        return json;
    }

    async function handleSubmit(e) {
        if (searchParam[0] === ' ') return;
        e.preventDefault();
        setSearchParam('');
        const json = await getNewsData(searchParam, 1);
        search.current = searchParam;
        setNewsResult(() => [...json.articles]);
        setNewsPage(2);
    }

    function handleFavoritesChange(savedItem, news) {
        if (savedItem) {
            const newFavoritesList = favoritesList.filter((item) => item.title !== savedItem.title);
            setFavoritesList(newFavoritesList);
        } else {
            setFavoritesList((prevFavoritesList) => [...prevFavoritesList, news]);
        }
    }

    function handleClearFavoritesList() {
        setFavoritesList([]);
    }

    async function handleLoadMoreResults(newsPage) {
        const json = await getNewsData(search.current, newsPage);
        setNewsResult((prevNewsResult) => [...prevNewsResult, ...json.articles]);
    }

    function handleDisplayPages() {
        setNewsPage((prevNewsPage) => prevNewsPage + 1);
    }

    return (
        <>
            <Header setSearchParam={setSearchParam} handleSubmit={handleSubmit} searchParam={searchParam} />
            <main className='main'>
                <MyFavoritesPanel
                    favoritesList={favoritesList}
                    handleFavoritesChange={handleFavoritesChange}
                    handleClearFavoritesList={handleClearFavoritesList}
                />
                <DisplayResults
                    newsResult={newsResult}
                    newsPage={newsPage}
                    handleDisplayPages={handleDisplayPages}
                    favoritesList={favoritesList}
                    handleFavoritesChange={handleFavoritesChange}
                    searchParam={search.current}
                    handleLoadMoreResults={handleLoadMoreResults}
                />
            </main>
        </>
    );
}

export default Home;

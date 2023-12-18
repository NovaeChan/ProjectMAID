import Card from '../components/Card'
import SearchInput from '../components/SearchInput';

import '../style/pages/Home.css'

function Home() {
    const title = "Unveiling Anime Insights with MyAnimeInData";
    const description = "MyAnimeInData is a dedicated platform for anime enthusiasts, offering an immersive experience to explore and analyze detailed information about anime series from popular sites such as AniList and MyAnimeList. Users can discover in-depth statistics and relevant insights into their favorite anime series and movies."
    return (
        <div className='wrapper'>
            <Card title={title} content={description}/>
            <SearchInput />
            <div className="mostWatched-wrapper">
                <Card title="Genre" content="Action" className="card-mostWatched"/>
                <Card title="Release Date" content="2013" className="card-mostWatched"/>
                <Card title="Studio" content="Mappa" className="card-mostWatched"/>
                <Card title="Author" content="Isayama" className="card-mostWatched"/>
            </div>
        </div>
    );
}

export default Home;
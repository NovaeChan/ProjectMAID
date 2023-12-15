import '../style/components/__SearchInput.css'
function SearchInput () {
    return (   
        <div className="input-wrapper">
            <input className="input" type="text" placeholder="Enter AniList username"></input>
            <div className="search-icon"></div>
        </div>
    );
}

export default SearchInput;
import './searchBar.css'
function SearchBar({searchClick, handleChange, user}){

    return(
        <>
            <h2 id="search-header">{user ? `Welcome ${user.username}!` : 'Login to add favorites!'}</h2>
        <div className="search-box">
            <form id="search-bar" action="/tracks/" method="GET" onSubmit={(e)=> searchClick(e)}>
                <label htmlFor="header-search">
                    <span className="visually-hidden"></span>
                </label>
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search Songs"
                    name="s" 
                    onChange={(e)=> handleChange(e.target.value)}
                />
                <button type="submit" id="search-btn">🔍 Search</button>
            </form>
        </div>
        </>
    )
}

export default SearchBar
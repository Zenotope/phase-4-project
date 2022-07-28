

function Search(){
    return(
        <div>
            <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Songs"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
        </div>
    )
}

export default Search
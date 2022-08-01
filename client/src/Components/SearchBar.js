
function SearchBar({searchClick, handleChange}){
  


    return(
        <div>
            <form action="/tracks/" method="GET" onSubmit={(e)=> searchClick(e)}>
                <label htmlFor="header-search">
                    <span className="visually-hidden"></span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search Songs"
                    name="s" 
                    onChange={(e)=> handleChange(e.target.value)}
                />
                <button type="submit" >Search</button>
            </form>
   
        </div>
    )
}

export default SearchBar
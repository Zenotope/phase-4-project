import TextField from "@mui/material/TextField";

function Search(){
    return(
        <div>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>
        </div>
    )
}

export default Search
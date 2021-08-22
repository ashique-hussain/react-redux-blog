import { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState();
    const history = useHistory();
    const handleSearch = (event: any) => {
        setSearch(event?.target.value)
    }
    const handleRedirect = () => {
        history.push(`/search?s=${search}`)
    }
    return (
        <form onSubmit={handleRedirect} className="d-flex">
            <div className="input-group">
                <input name='s' type="search" onChange={handleSearch} className="form-control" placeholder="search blog..." aria-label="search blog" aria-describedby="search" />
                <span className="input-group-text pointer" id="search" onClick={handleRedirect}><i className="bi bi-search"></i></span>
            </div>
        </form>
    )
}

export default Search;
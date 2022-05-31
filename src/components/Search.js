const Search = (props) => {
    const filterItems = (searchValue) => {
        props.sendFilter(searchValue);
    }

    return (
        <input className="search" placeholder={props.placeholder} onChange={(e) => filterItems(e.target.value)} />
    )
}

export default Search;
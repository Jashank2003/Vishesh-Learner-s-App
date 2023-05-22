import React, {useState} from "react";
import Scroll from "../data/scroll";
import SearchList from "../data/searchList";

function Search({ details }) {

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);
  
    const filteredItems = details.filter(
      item => {
        return (
          item
          .name
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
          item
          .description
          .toLowerCase()
          .includes(searchField.toLowerCase())
        );
      }
    );
      

    
    const handleChange = e => {
      setSearchField(e.target.value);
      if(e.target.value===""){
        setSearchShow(false);
      }
      else {
        setSearchShow(true);
      }
    };
  
    function searchList() {
      if(searchShow){
        return (
          <Scroll>
            <SearchList filteredItems={filteredItems} />
          </Scroll>
        );
      }
    }
  
    return (
      <section className="SearchSection">
        <div className="SearchDiv">
          <input 
            className="SearchInput"
            type = "search" 
            placeholder = "Search your Drugs" 
            onChange = {handleChange}
          />
        </div>
        {searchList()}
      </section>
    );
  }
  
  export default Search;
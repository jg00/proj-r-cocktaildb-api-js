import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  // After component renders we have access to our input
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  // Kick off search
  let timer;
  const searchCocktail = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setSearchTerm(searchValue.current.value);
    }, 1000);
  };

  // Prevent user submitting on enter
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

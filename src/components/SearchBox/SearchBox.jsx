import s from "./SearchBox.module.css";
import PropTypes from "prop-types";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter name"
        />
      </label>
    </div>
  );
};

SearchBox.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBox;

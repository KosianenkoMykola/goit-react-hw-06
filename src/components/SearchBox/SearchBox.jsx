import css from "../SearchBox/SearchBox.module.css";
import { useId } from "react";
import { MdPersonSearch } from "react-icons/md";

export default function SearchBox({value, onFilter}) {
  const id = useId()

    return (
      <div className={css.container}>
        <label className={css.label} htmlFor={`search-${id}`}>Find contacts by name<MdPersonSearch className={css.searchIcon}/>
        </label>
        <input
        className={css.input}
          id={`search-${id}`}
          type="text"
          value={value}
          onChange={(event) => onFilter(event.target.value)}/>
      </div>
    );
}


import "./NavBar.css";

const NavBar = (props) => {
  const selectPageHandler = (event) => {
    const page = event.target.innerText;
    props.onSavePage(page);
  };

  return (
    <ul className="navbar">
      <li className="navbar__items">
        <button type="button" onClick={selectPageHandler}>
          Home
        </button>
      </li>
      <li className="navbar__items">
        <button type="button" onClick={selectPageHandler}>
          Padel Club
        </button>
      </li>
      <li className="navbar__items">
        <button type="button" onClick={selectPageHandler}>
          Padel Gear
        </button>
      </li>
    </ul>
  );
};

export default NavBar;

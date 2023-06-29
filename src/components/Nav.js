import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryToggle, setLibraryToggle }) => {
  return (
    <nav>
      <h3>Chill</h3>
      <button onClick={() => setLibraryToggle(!libraryToggle)}>
        <FontAwesomeIcon icon={faMusic} />
        <p>Library</p>
      </button>
    </nav>
  );
};

export default Nav;

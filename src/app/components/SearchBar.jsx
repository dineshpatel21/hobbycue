import search from "../../../public/search.png";
import Image from "next/image";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <div
      style={{ marginLeft: 34.37 }}
      className="resp1 input-group mb-3 rounded d-flex align-items-center"
      //   style={{ maxWidth: "400px" }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Search here..."
        aria-label="Search"
      />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button">
          <Image priority src={search} height={16} width={16} alt="logo" />
        </button>
      </div>

      <Image
        priority
        src={search}
        height={16}
        width={16}
        alt="logo"
        className="resp"
      />
    </div>
  );
};

export default SearchBar;

import brand from "../../img/brand.svg";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link to="/" className="brand-container">
      <img src={brand} alt="Libros" title="Libros" />
    </Link>
  );
}

export default Brand;
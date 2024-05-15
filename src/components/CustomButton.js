import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

const Button = ({ id, name }) => {
  return <Link to={`/details/${id}`}>Read more about {name}</Link>;
};

export default Button;

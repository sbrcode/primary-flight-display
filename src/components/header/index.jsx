import { Link } from "react-router-dom"
import "../../index.css"

const Header = () => (
  <nav className="nav">
    <Link to="/" className="link">
      Home
    </Link>
    <Link to="databoard" className="link">
      Datas
    </Link>
  </nav>
)

export default Header

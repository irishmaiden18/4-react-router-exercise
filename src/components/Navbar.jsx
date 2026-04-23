import { Link } from "react-router"

const Navbar = () => {
  return (
    <>
        <nav className="navbar">

            <div className="nav-links">

                {/* for internal links (different pages in your application) use the Link tag to make it so your page doens't need to load when navigating */}
                {/* instead React-Router will swap out the current component with the one we are trying to navigate to via the path we st up in "to" */}
                <Link to="/">Home</Link>
                <Link to="/users">User List</Link>

            </div>

        </nav>
    </>
  )
}

export default Navbar
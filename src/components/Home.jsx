import { Link } from "react-router"

const Home = () => {
  return (
    <>
        <h1>Home</h1>
        <h2>Welcome to the User Homepage!</h2>
        <Link to="/users">
            <button>Users List</button>
        </Link>
    </>
  )
}

export default Home
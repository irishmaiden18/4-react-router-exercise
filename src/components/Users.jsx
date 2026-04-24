import { Link } from "react-router"
import useFetch from "../hooks/useFetch"

const Users = () => {

    const {data} = useFetch("https://jsonplaceholder.typicode.com/users")
    // console.log(data)

  return (
    <>
        <h1>User List</h1>
        <ol>
        {data && data.map((user) => (
            <Link to={`/users/${user.id}`}>
                <li key={user.id}>
                    <h4>{user.username}</h4>
                </li>
            </Link>
        ) )}
        </ol>
    </>
  )
}

export default Users
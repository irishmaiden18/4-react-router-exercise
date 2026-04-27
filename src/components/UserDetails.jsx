import { Link, useParams } from "react-router"
import useFetch from "../hooks/useFetch"

const UserDetails = () => {

    // get access to our id parameter
    // const {paramName} = useParams()
    // useParams gives us access to the parameters we set up in our Route
    const {id} = useParams()

    const {data} = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    // console.log(data)

    // if user isn't found,
    // this stops the rest of the comonenet content from displaying because the return statement is in the component scope rather than a function's scope
    if (!data) {
        return <h1>User NOT found!</h1>
    }

  return (
    <>
        {data && (
            <>
                <h1>{data.username}'s Details</h1>
                <p><b>Id: </b>{id}</p>
                <p><b>Name: </b>{data.name}</p>
                <p><b>Email: </b>{data.email}</p>
                <p><b>Company Catchphrase </b>{data.company.catchPhrase}</p>
            </>
        )}
        <Link to="/users"><button>Go Back!</button></Link>
    </>
  )
}

export default UserDetails
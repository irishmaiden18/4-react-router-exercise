import { useEffect, useState } from "react"

const useFetch = (URL) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchURL = async () => {
            const res = await fetch(URL)
            const resData = await res.json()
            setData(resData)
        }

        fetchURL()

    }, [])

    return {data}
}

export default useFetch
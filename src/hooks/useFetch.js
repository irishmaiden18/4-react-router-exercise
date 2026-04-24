import { useEffect, useState } from "react"

const useFetch = (URL) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchURL = async () => {
            const res = await fetch(URL)
            const resData = await res.json()
            console.log(`log: ${resData}`)
            // Object.keys - checks to see how many keys are in your object
            if (Object.keys(resData).length === 0) {
                setData(null)
            } else {
                setData(resData)
            }
            
        }

        fetchURL()

    }, [])

    
    return {data}
}

export default useFetch
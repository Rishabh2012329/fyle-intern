import { useEffect, useState } from "react"
import fetchUserDetails from "../actions/user/fetchUserDetails"

export default function UserDetails () {
    const [state, setState] = useState({loading:true})

    const loadData = async () => {
        let userData = await fetchUserDetails()
        setState(userData)
    }

    useEffect(()=>{
        loadData()
    },[])
    
    return (
        <div className="mb-8">
            <div className="flex flex-row justify-between max-w-md">
                {/* Image */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-gray-200 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 flex justify-center items-center">
                        <p className="font-bold text-gray-400">Image</p>
                    </div>
                </div>
                <div className="flex flex-col justify-around">
                    <h1 className="font-600 text-3xl">{state?.name??"John Doe"}</h1>
                    <h2>{state?.bio||"Bio Here"}</h2>
                    <h2 className="flex flex-row "><img src="/location.svg" className="mr-2"/>{state?.location||"Location"}</h2 >
                    <h2>Twitter: {state?.twitter||"Twitter"}</h2>
                </div>
            </div>
            <div className="flex flex-row mt-8">
                <img src="/link.png" className="mr-4"/> http://github.com/Rishabh2012329
            </div>
        </div>
    )
}
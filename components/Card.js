export default function Card ({name}) {
    
    return (
        <div className="border-black border-2 p-2 m-4">
            <h1 className="text-3xl text-blue-400 mb-1">{name}</h1>
            <p className="mb-2">Description</p>
            <div className="w-15 rounded-sm bg-blue-400 text-center text-xs p-1 text-white" >Javascript</div>
        </div>
    )
}
import {useState, useEffect} from 'react'
import fetchProjects from '../actions/projects/fetchProjects'
import Card from './Card'


export default function Pagination(){
    const [state, setState] = useState({loading:true})
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState([])
    const [displayPages,setDisplay] = useState(5)

    const onPageChange = async (value) => {
        if(!state[value]){
            let projectData = await fetchProjects(value)

            if(pages.length==0){
                let pageArr = []
                for(let i=0;i<projectData.pageCount;i++){
                    if(i>=displayPages)
                        break;
                    pageArr.push(i+1)
                }
                setPages(pageArr)
            }

            setState({...state, [value]: projectData.projects, pageCount: projectData.pageCount,loading:false})
        }
        setPage(()=>value)
    }

    const newer = (value) => {
        onPageChange(value)
        if(!pages.includes(value)){
            let pageArr=[]
            let after = state.pageCount - value +1
            for(let i=value;i<=state.pageCount;i++){
                if(i-value>displayPages)
                    break;
                pageArr.push(i)
            }
            let before = displayPages - after
            for(let i=value-1;i>=value-before;i--){
                pageArr=[i,...pageArr]
            }
            setPages(pageArr)
        }
    }

    const older = (value) => {
        onPageChange(value)
        if(!pages.includes(value)){
            let pageArr=[]
            
            let before = value
            for(let i=value;i>0;i--){
                if(before - i > displayPages)
                    break;
                pageArr=[i,...pageArr]
            }
            let left = displayPages-before
            for(let i=value+1;i<=value+left;i++){
                pageArr.push(i)
            }
            setPages(pageArr)
        } 
    }

    useEffect(()=>{
       onPageChange(1)
    },[])

    const prevPages = () => {  
        let pageArr = []
        let toDec =  pages[0] - 1 
        
        for(let i=1;i<=displayPages-toDec;i++){
            pageArr.push(pages[i-1])
        }

        for(let i=pages[0]-1;i>=1;i--){
            if(pages[0]-i>displayPages)
                break;
            pageArr=[i,...pageArr]
        }

        setPages(pageArr)
    }

    const addPages = () => {  
        let pageArr = []
        let toAdd = state.pageCount - pages[pages.length - 1] 
        
        for(let i=toAdd+1;i<=displayPages;i++){
            pageArr.push(pages[i-1])
        }

        for(let i=pages[pages.length - 1];i<state.pageCount;i++){
            if(i - pages[pages.length - 1]>=displayPages)
                break;
            pageArr.push(i+1)
        }

        setPages(pageArr)
    }

    return(state.loading?
        <div className='w-full flex justify-center items-center'>
            <svg role="status" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
      </div>
        :
        <div>
            <div className='w-full grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                {state[page]?.map((obj,index)=><Card key={"Card-"+index} name={obj.name}/>)}
            </div>
            <div className='w-max m-auto mt-8'>
                <button className={`${page==1&&"text-gray-300"} mr-2`} disabled={pages==1} onClick={() => older(page-1)}>
                    prev
                </button>
                {pages.map((num,index)=><button key={"page-"+index} onClick={() => onPageChange(num)} className={`w-8 h-8 ${page==num?"bg-blue-400 text-white":"border border-gray-300"} rounded-sm`}>{num}</button>)}
                <button className={`${page==state.pageCount&&"text-gray-300"} ml-2`} disabled={pages==state.pageCount} onClick={() => newer(page+1)}>
                   next
                </button>
            </div>
            <div className='w-max m-auto flex flex-row mt-4'>

            <button onClick={()=>prevPages()} disabled={pages[0]==1} className={`flex flex-row border ${pages[0]==1?'border-gray-500 text-gray-500':"border-blue-400  text-blue-400"} items-center text-sm justify-center rounded-full text-sm p-1 w-28 mr-8`}>
                 Older
            </button>
               
            <button onClick={()=>addPages()} disabled={pages[displayPages - 1]==state.pageCount} className={`flex flex-row border ${pages[displayPages - 1]==state.pageCount?'border-gray-500 text-gray-500':"border-blue-400  text-blue-400"} items-center justify-center rounded-full text-sm p-1 w-28`}>
                Newer  
            </button>
                
            </div>
        </div>
    )
}
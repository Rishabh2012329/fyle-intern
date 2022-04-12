import axios from 'axios'

const fetchProjects = async (page) => {
    try{
        const response = await axios.post('/api/projects',{page: page})
        return response.data
    }catch(err){
        return {}
    }
}

export default fetchProjects

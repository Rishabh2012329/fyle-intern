import axios from 'axios'

const fetchUserDetails = async () => {
    try{
        const response = await axios.get('/api/userDetails')
        return response.data
    }catch(err){
        return {}
    }
}

export default fetchUserDetails

import axios from 'axios';

const Api_Url = 'http://localhost:5000';

export const uploadFile = async (data: () => void) => {
    try {
       let response = await axios.post(`${Api_Url}/upload`, data)
       return response.data;
    } catch (error: any){
        console.log('Error while is calling the api', error.message)
    }
}
import axios from "axios";

let postData = (url , payload) =>{
    axios.post(url , payload)
    .then(({data})=>{
        return data
    })
    .catch(({response})=>{
        toast.error(response.data.error)
        return response.data;
    })
}


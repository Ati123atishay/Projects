import axios from "axios";

class Web_service{
    
    getAPICall(url){
        const res = axios.get(url);
        return res; 
    }

}

export default new Web_service ();
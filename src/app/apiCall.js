import { errorRemove, setError, setUsers } from "./appSlice";
import axios from 'axios';

  //fetch data function
  export const fetchData = async (page, per_page,dispatch,name) => {   
    try {
        const data = await axios.get(`https://api.github.com/search/users?q=${name}&page=${page}&per_page=${per_page}&sort=asc`)
        dispatch(setUsers(data.data))
    } catch (error) {
        dispatch(setError())
        setTimeout(() => {
            dispatch(errorRemove())
        }, 3000);
    }


}
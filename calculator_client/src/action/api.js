/**
    * @description      : 
    * @author           : yaelm
    * @group            : 
    * @created          : 20/06/2021 - 20:59:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/06/2021
    * - Author          : yaelm
    * - Modification    : 
**/
import axios from 'axios';

const baseUrl = "http://localhost:51801/api/"


export default {
    calculation(url = baseUrl + 'Calculations/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}
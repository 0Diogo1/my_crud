import api from "../utils/api"
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'


export default function useCrud(){

    async function register(studant){
        Swal.showLoading()
        try{
            const data = await api.post('/student/register', studant).then((response) => {
                return response.data
            })
            Swal.close()
            Swal.fire({
                icon:'success',
                title:'Salvo'
            })
        }catch(error){
            console.log(error)
        }
    }
    return {register}
}

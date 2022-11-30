import styles from "./Content.module.css"
import {Link, useNavigate, useRouteLoaderData} from 'react-router-dom'
import {useState, useContext, useEffect} from 'react'
import Swal from 'sweetalert2'

//context

import api from "../utils/api"


const Content = () => {
    const [studants, setStudants] = useState()
    const navigate = useNavigate()
    
    useEffect(() =>{
        getStudants()
    }, [])
    
    function getStudants(){
        api.get('/student').then((response) => {
            setStudants(response.data.studants)
        })
    }
    function deleteStudant(e){
       const data = api.delete(`student/delete/${e.target.value}`).then((response) => {
            return response.data.message
        })
        Swal.fire({
            icon:'success',
            title:'Estudante removido com sucesso'
        })
        getStudants()
    }
    return(
        <section className={styles.section_content}>
            <h1>Lista de Alunos da Escola</h1>
            <hr/>
            <div className={styles.content_layout}>
                {studants?.map((i, _id) => {
                    return( <ul className={styles.ul_content} key={_id}>
                        <li>id: {_id + 1}</li>
                        <li>Nome: {i.name}</li>
                        <li>Idade: {i.age}</li>
                        <li>Série/Ano: {i.degree}</li>
                        <li>Situação: {i.status}</li>
                        <li>
                            <button type='button' className="btn btn-success"><Link to={`/student/${i._id}`}>Editar</Link></button>
                            <button type='button' className="btn btn-danger" value = {i._id} onClick={deleteStudant}>Excluir</button>
                        </li>
                    </ul>)
                })}
            </div>
            

        </section>
    )
}

export default Content
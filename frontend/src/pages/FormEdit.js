import styles from "./FormEdit.module.css"
import Swal from 'sweetalert2'
//components
import Input from "../components/Input"

import {useState, useEffect, useDebugValue} from "react"
import api from "../utils/api"

function FormEdit(){
    const [studant, setStudant] = useState({})
    const id = window.location.href.slice(30)
    

    useEffect(() => {
        api.get(`student/${id}`).then((response) => {
            setStudant(response.data)
        })
    }, [])
    function handleChange(e){
        setStudant({...studant, [e.target.name]: e.target.value})
        console.log(studant)
    }
    async function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData()

        const studantFormData = await Object.keys(studant).forEach((key) => formData.append(key, studant[key]))

        formData.append('studant', studantFormData)

        setStudant(formData)

        api.patch(`/student/update/${studant._id}`, studant).then((response) => {
            return response.data
        }).catch((error) => {return error})

        Swal.fire({
            icon:'success',
            title:'Dados do aluno atualizados'
        })

        api.get(`student/${id}`).then((response) => {
            setStudant(response.data)
        })

    }
    return(
        <section className={styles.section_form}>
            <h1>Editar Aluno</h1>
            <form onSubmit={handleSubmit} className='mb-3'>
                <Input 
                    label='Nome'
                    type='text'
                    name='name'
                    placeholder='Digite o nome do aluno'
                    value={studant.name || ''}
                    handleonChange={handleChange}
                />
                <Input
                    label='Idade'
                    type='text'
                    name='age'
                    placeholder='Digite a idade do aluno'
                    value={studant.age || ''}
                    handleonChange={handleChange}
                />
                <Input
                    label='Série/Ano'
                    type='text'
                    name='degree'
                    placeholder='Digite a série ou ano do aluno'
                    value={studant.degree || ''}
                    handleonChange={handleChange}
                />
                <Input
                    label='Situação'
                    type='text'
                    name='status'
                    placeholder='Digite a situação do anluno na escola'
                    value={studant.status || ''}
                    handleonChange={handleChange}
                />
                <input type="submit" value="Editar"/>
            </form>
        </section>
    )
}

export default FormEdit
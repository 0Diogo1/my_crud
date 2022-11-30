import styles from "./Form.module.css"
import { Link } from "react-router-dom"
import {useState, useContext} from 'react'

//components
import Input from "../components/Input"

//context

import { Context } from "../context/StudantContext"

const Form = () => {

    const [studant, setStudant] = useState({})
    const {register} = useContext(Context)

    function handleChange(e){
        setStudant({...studant, [e.target.name]: e.target.value})
    }
    function resetInput(){
        Array.from(document.querySelectorAll('#inputName')).forEach(input => (input.value = ''))
        document.querySelector("input").focus()
    }
    function handleSubmit(e){
        e.preventDefault()
        register(studant) 
    }
    return(
        <section className={styles.section_form}>
            <h1>Registrar Aluno</h1>
            <form onSubmit={handleSubmit} className='mb-3'>
                <Input 
                    label='Nome'
                    type='text'
                    name='name'
                    placeholder='Digite o nome do aluno'
                    handleonChange={handleChange}
                />
                <Input
                    label='Idade'
                    type='text'
                    name='age'
                    placeholder='Digite a idade do aluno'
                    handleonChange={handleChange}
                />
                <Input
                    label='Série/Ano'
                    type='text'
                    name='degree'
                    placeholder='Digite a série ou ano do aluno'
                    handleonChange={handleChange}
                />
                <Input
                    label='Situação'
                    type='text'
                    name='status'
                    placeholder='Digite a situação do anluno na escola'
                    handleonChange={handleChange}
                />
                <input type="submit" value="Adicionar" onClick={resetInput}/>
            </form>
        </section>
    )
}

export default Form
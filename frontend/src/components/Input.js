import styles from "./Input.module.css"

const Input = ({type, label,  placeholder, value, name, handleonChange}) => {
    return(
        <div className={`mb-3 ${styles.div_s}`}>
            <label htmlFor={name} className={`form-label ${styles.label_s}`}>{label}</label>
            <input id="inputName" className="form-control"
                type={type} 
                name={name} 
                placeholder={placeholder}
                value={value}
                onChange={handleonChange}
             />
        </div>
    )
}

export default Input
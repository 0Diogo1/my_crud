import styles from "./Footer.module.css"

function Footer(){
    return(
        <footer className={styles.footer}>
            <p><span className="bold">Crud</span> &copy; 2022</p>
        </footer>
    )
}

export default Footer
import styles from "./Display.module.css"
const Display = ({cval}) => {
    return (
       <input className={styles.display} type="text" value={cval} ></input>
    )
}
export default Display;
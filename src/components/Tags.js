import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/App'

//ESTILOS
import styles from '../styles/components/Tags.module.css'

const Tags = (props) => {
    const value = []
    const { filters, setFilters } = useContext(AppContext)

    const handleOnClick = (e) => {
        // console.log(e.target.firstChild.data)
        value.push(e.target.firstChild.data)
        setFilters(value)
        console.log(filters)
    }

    return(
       <button className={ styles.Tags } type='button' aria-label='Tags' onClick={ handleOnClick }>
           <h2>{ props.tag }</h2>
       </button>
    )
}

export default Tags
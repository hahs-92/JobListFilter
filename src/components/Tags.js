import { useContext } from 'react'
//CONTEXT
import AppContext from '../context/App'
//ESTILOS
import styles from '../styles/components/Tags.module.css'

// ______________________________________________________________________

const Tags = (props) => {
    const { setFilters } = useContext(AppContext)

    const handleOnClick = (e) => {
        let key = e.target.parentElement.value || e.target.value
        let value = e.target.innerText 
        let newTag = { [key] : value }

        setFilters(filters => [ ...filters, newTag ])
    }

    return(
    
        <button className={ styles.Tags } type='button' aria-label='Tags' onClick={ handleOnClick }  value={ props.value }  >
            <h2>{ props.tag }</h2>
        </button>
    )
}

export default Tags
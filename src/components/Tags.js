import { useContext } from 'react'
//CONTEXT
import AppContext from '../context/App'
//ESTILOS
import styles from '../styles/components/Tags.module.css'

// ______________________________________________________________________

const Tags = (props) => {
    const { filters, setFilters } = useContext(AppContext)

    const filtersFlat = () => {
       let count = []

        filters.forEach( item => {
            count.push(Object.values(item))
        })

        return count
    }

    const verifyFilterExist = (count, value, newTag) => {
        if(count.flat().includes(value)){
            return false
        } else {
            setFilters(filters => [ ...filters, newTag ])
        }
    }

    const handleOnClick = (e) => {
        let key = e.target.parentElement.value || e.target.value
        let value = e.target.innerText 
        let newTag = { [key] : value }

        let count =  filtersFlat()
        verifyFilterExist(count, value, newTag)
    }

    return(
    
        <button className={ styles.Tags } type='button' aria-label='Tags' onClick={ handleOnClick }  value={ props.value }  >
            <h2>{ props.tag }</h2>
        </button>
    )
}

export default Tags
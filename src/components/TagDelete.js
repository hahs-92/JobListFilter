import { useContext } from 'react'
//CONTEXT
import AppContext from '../context/App'
//ESTILOS
import styles from '../styles/components/TagDelete.module.css'

// _________________________________________________________________________________________


const TagDelete = (props) => {
    const { filters, setFilters } = useContext(AppContext)

    const filterItem = (target) => {
        // let filterDelete = filters.filter( item => item !== target)
        let filterDelete = filters.filter( item => {
            let value = Object.values(item)
            // eslint-disable-next-line
            if(value != target) { 
                return true
            } else {
                return false
            }
        })
        return filterDelete
    }

    const removeTag = (e) => {
        // let filterDelete = filters.filter( item => item !== e.target.parentElement.innerText)
        // let key = e.target.value
        let value = e.target.parentElement.innerText
        let newFilter = filterItem(value)

        setFilters(newFilter)
    }

    return(
        <button className={ styles.TagDelete } onClick={ removeTag } value={ props.value } name={ props.name }></button>
    )
}

export default TagDelete
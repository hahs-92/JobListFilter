import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/App'

//ESTILOS
import styles from '../styles/components/TagDelete.module.css'

const TagDelete = (props) => {
    const { filters, setFilters } = useContext(AppContext)

    const filterItem = (target) => {
        let filterDelete = filters.filter( item => item !== target)
        console.log(filterDelete)
        return filterDelete
    }

    const removeTag = (e) => {
        // let filterDelete = filters.filter( item => item !== e.target.parentElement.innerText)
        let newFilter = filterItem(e.target.parentElement.innerText)
        setFilters(newFilter)
        // console.log(e.target.parentElement.innerText)
    }

    return(
        <button className={ styles.TagDelete } onClick={ removeTag } value={ props.value } name={ props.name }>

        </button>
    )
}

export default TagDelete
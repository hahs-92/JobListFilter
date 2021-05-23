import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/App'

//ESTILOS
import styles from '../styles/components/TagDelete.module.css'

//DATA
import data from '../dataInitial'

const TagDelete = (props) => {
    const { filters, setFilters, newData, setNewData } = useContext(AppContext)

    const filterItem = (target) => {
        // let filterDelete = filters.filter( item => item !== target)
        let filterDelete = filters.filter( item => {
            let value = Object.values(item)
            if(value != target) {
                return true
            } else {
                return false
            }
        })
        return filterDelete
    }

    // const upDateData = (key, value) => {
    //     let newInfo = [...data]
    //     newInfo = newInfo.filter(item => item[key] !== value)
    //     setNewData(newInfo)
    // } 

    const removeTag = (e) => {
        // let filterDelete = filters.filter( item => item !== e.target.parentElement.innerText)
        let key = e.target.value
        let value = e.target.parentElement.innerText
        let newFilter = filterItem(value)

        setFilters(newFilter)
        // console.log(e.target.parentElement.innerText)

        setNewData(newData)
    
        // upDateData(key, value)

    }

    return(
        <button className={ styles.TagDelete } onClick={ removeTag } value={ props.value } name={ props.name }>

        </button>
    )
}

export default TagDelete
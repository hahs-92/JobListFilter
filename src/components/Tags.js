import { useContext, useState } from 'react'

//CONTEXT
import AppContext from '../context/App'

//DATA 
import data from '../dataInitial' 

//ESTILOS
import styles from '../styles/components/Tags.module.css'

const Tags = (props) => {
    const { filters, setFilters, newData, setNewData } = useContext(AppContext)

    const changeData = (key, value) => {
        let nd = [ ...data]

        if(key === 'role' || key === 'level') {
            nd = nd.filter(item => item[key] === value)
        } else {
            nd = nd.filter(item => item[key].includes(value) )
        }

        setNewData(nd)
    }

    const handleOnClick = (e) => {
        let key = e.target.parentElement.value || e.target.value
        let value = e.target.innerText 
        let newTag = { [key] : value }

        setFilters(filters => [ ...filters, newTag ])
        // changeData(key, value)
    }

    return(
    
        <button className={ styles.Tags } type='button' aria-label='Tags' onClick={ handleOnClick }  value={ props.value }  >
            <h2>{ props.tag }</h2>
        </button>
        
    )
}

export default Tags
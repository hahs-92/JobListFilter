import { useEffect, useState } from 'react'

//COMPONENETS
import Card from './components/Card'
import Tags from './components/Tags'
import TagDelete from './components/TagDelete'

//ESTILOS
import './styles/Global.css'
import styles from './styles/App.module.css'

//INFO
import data from './dataInitial'

//CONTEXT
import AppContext from './context/App'

// __________________________________________________________________________________________________


function App() {
  const [ filters, setFilters ] = useState([])
  const [ newData, setNewData ] = useState([])

  const removeFilters = () => {
    setFilters([])
  } 

  const updateData = (filters) => {
    let info = data
    if(filters.length === 0) {
      info = data
    } else {

      filters.forEach( item => {
        let arr = Object.entries(item)
        let key = arr[0][0]
        let value = arr[0][1]
        info = info.filter( item => item[key] === value || item[key].includes(value))
      })
    }
    setNewData(info)
  }

  useEffect(() => {
    updateData(filters)
  },[filters])

 
  return (
    <AppContext.Provider  value={ { filters, setFilters, newData, setNewData }}>

      <section className={ styles.App }>
        <header className={ styles.Header }></header>

        {
         filters.length > 0 &&
          <section className={ styles.Filter } >
            <div className={ styles.FilterWrapper }>
              {
                filters.map(item => {
                  let value = Object.entries(item)
                  return(
                    <article key={ value[0][1] } className={ styles.CardTag }>
                      <Tags  key={ value[0][1] } tag={ value[0][1] } value={ value[0][0] } />
                      <TagDelete key={ value[0][0] } value={ value[0][0] }/>
                    </article>
                  )
                })
              }
            
            </div>
            <div className={ styles.ButtonWrapper }>
              <button aria-label='clear button' type='button' onClick={ removeFilters }>
                  <h3>Clear</h3>
              </button>
            </div>
          </section>
        }

        <main className={ styles.Main }> 
            {
              newData.map( item => (
                <Card  
                  key={ item.id } 
                  company={ item.company } 
                  logo={ item.logo } 
                  new={ item.new }
                  featured={ item.featured }
                  position={ item.position } 
                  postedAt = { item.postedAt }
                  contract={ item.contract }
                  location={ item.location }
                  role={ item.role }
                  level={ item.level }
                  languages={ item.languages }
                  tools={ item.tools }
                  />
              ))
            
            }
        </main>
      </section>

    </AppContext.Provider>
  )
}

export default App;

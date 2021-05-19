import { useState } from 'react'

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


function App() {
  const [ filters, setFilters ] = useState([])

  const removeFilters = () => {
    setFilters([])
  } 

  return (
    <AppContext.Provider  value={ { filters, setFilters }}>

      <section className={ styles.App }>
        <header className={ styles.Header }></header>

       {
         filters.length > 0 &&
          <section className={ styles.Filter }>
            <div className={ styles.FilterWrapper }>
              {
                filters.map(item => (
                  <article key={ item } className={ styles.CardTag }>
                    <Tags  key={ item } tag={ item } value={ item.item } name={ item }/>
                    <TagDelete />
                  </article>
                ))
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
            data.map( item => (
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

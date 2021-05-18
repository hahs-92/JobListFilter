import { useState } from 'react'

//COMPONENETS
import Card from './components/Card'

//ESTILOS
import './styles/Global.css'
import styles from './styles/App.module.css'

//INFO
import data from './dataInitial'

//CONTEXT
import AppContext from './context/App'


function App() {
  const [ filters, setFilters ] = useState([])

  return (
    <AppContext.Provider  value={ { filters, setFilters }}>

      <section className={ styles.App }>
        <header className={ styles.Header }></header>

        <section className={ styles.Filter }>
          <div className={ styles.FilterWrapper }>
          
          </div>
        </section>

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

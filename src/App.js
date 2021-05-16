//COMPONENETS
// import IconAccount from './components/IconAccount'
// import IconAirCompany from './components/IconAirCompany'
// import IconEyeCam from './components/IconEyeCam'
// import IconFaceit from './components/IconFaceit'
// import IconInsure from './components/IconInsure'
// import IconLoopStudios from './components/IconLoopStudios'
// import IconManage from './components/IconManage'
// import IconMyHome from './components/IconMyHome'
// import IconPhotoSnap from './components/IconPhotoSnap'
// import IconShortly from './components/IconShortly'
import Tags from './components/Tags'


//ESTILOS
import './styles/Global.css'
import styles from './styles/App.module.css'


function App() {

  return (
    <section className={ styles.App }>
      <header className={ styles.Header }>

      </header>
      <main className={ styles.Main }> 
        <Tags />
      </main>
    </section>
  )
}

export default App;

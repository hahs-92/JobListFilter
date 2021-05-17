//COMPONENTS
import Tags from './Tags'
import IconAccount from './IconAccount'

//ESTILOS
import styles from '../styles/components/Card.module.css'

const Card = () => {
    return (
        <article className={ styles.Card }>
            
            <section className={ styles.Logo }>
                <IconAccount />
            </section>

            <section className={ styles.Wrapper }>

                <div className={ styles.Info }>
                    <div className={ styles.Company }>
                        <h2>Company name</h2>
                    </div>
                    <div className={ styles.Rol }>
                        <h1>Senior Frontend developer</h1>
                    </div>
                    <div className={ styles.InfoAdd }>
                        <h3>Full Time</h3>
                    </div>
                </div>

                <div className={ styles.Tags }>
                    <Tags />
                    <Tags />
                    <Tags />
                    <Tags />
                </div>

            </section>
        </article>
    )
}

export default Card
//COMPONENTS
import Tags from './Tags'

//ESTILOS
import styles from '../styles/components/Card.module.css'

const Card = (props) => {
    const tags = [ ...props.languages]
    tags.unshift(...props.tools)
    tags.unshift(props.level)
    tags.unshift(props.role )
    return (
        <article className={ styles.Card }>
            
            <section className={ styles.Logo }>
                <img src={  props.logo } alt="logo de la compañia" />
            </section>

            <section className={ props.featured ?  `${ styles.Wrapper } ${ styles.WrapperBorder }` : styles.Wrapper }>

                <div className={ styles.Info }>
                    <div className={ styles.Company }>
                        <h2>{ props.company }</h2>
                    </div>

                    <div className={ props.new && props.featured ? styles.Items : `${ styles.Items } ${ styles.ItemsEmpty }` }>

                        {
                            props.new && 
                                <div className={ styles.ItemsNew }>
                                    <h3>new</h3>
                                </div>
                        }
                        {
                            props.featured &&
                                <div className={ styles.ItemsFeatured }>
                                    <h3>featured</h3>
                                </div>
                        }
                    </div>

                    <div className={ styles.Position }>
                        <h1>{ props.position }</h1>
                    </div>

                    <div className={ styles.InfoAdd }>
                        <h3>{ props.postedAt }</h3>
                        <h2>·</h2>
                        <h3>{ props.contract }</h3>
                        <h2>·</h2>
                        <h3>{ props.location }</h3>
                    </div>
                </div>

                <div className={ styles.Tags }>
                    {
                        tags.map(item => (
                            <Tags key={ item } tag={ item } />
                        ))
                    }
            
                </div>

            </section>
        </article>
    )
}

export default Card
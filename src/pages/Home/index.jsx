import {Pokemon} from '../../components/pokemon'
import pokelogo from '../../assets/imgs/pokemon_logo.png'
import styles from './styles.module.css'

export const Home = () => {
  return (
    <div className={styles.container} >

        <img className={styles.image} src={pokelogo} alt="pokemon logo" >
        </img>
        <Pokemon idade="25" name="Charizarde"/>
        <Pokemon name="Charmander" tipo="Raio"/>
        <Pokemon name="Squirtle"/>
        <Pokemon name="Ditto" />
       
    </div>
    )    
}

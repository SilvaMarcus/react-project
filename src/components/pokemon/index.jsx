import styles from './styles.module.css'


// props é um objeto que é passado como argumento de uma funcao
 // é como um src de uma img, ele é o argumento da funcao que renderiza a imagem na tela.

 // adiciona props separando por virgula 
 
 export const Pokemon = ({name}) => ( 
      <h2 className={styles.name}> {name}</h2>    
 )

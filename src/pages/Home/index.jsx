import {Link} from 'react-router-dom'; 

export const Home = () => {
  
     return (
          <>
               <h1>Home</h1>
               <button> <Link to='/login'> Fazer Login</Link></button>
          </>
     )
}
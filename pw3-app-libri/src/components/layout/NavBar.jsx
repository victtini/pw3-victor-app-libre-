import { Outlet, Link } from 'react-router-dom';
import style from './NavBar.module.css';



const NavBar =()=>{
    return(
    <>
        <nav className={style.NavBar}>
                
            <ul className={style.list}>

            <Link to='/'>
            <li><img src='./witch.png' alt="" className={style.logo} /></li>
            </Link>

            <Link to='/'>
                <li className={style.item}>home</li>
            </Link>

            <Link to='/createBook'>
                <li className={style.item}>cadastrar livro</li>
            </Link>

            <Link to='/ListBooks'>
                <li className={style.item}>listar livro</li>
            </Link>
            
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default NavBar
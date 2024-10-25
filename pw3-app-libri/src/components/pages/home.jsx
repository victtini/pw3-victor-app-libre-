import React from "react"

import style from './Home.module.css'

const Home = () => {
    return (

        <section className={style.home_container}> 
            <h1>BEM VINDO AO<span>LIBRI</span></h1> 
            <p>Sua plataforma web de gestão de livros</p>
            <img src="./book_home.jpg"/>
        </section>

    )
}

export default Home
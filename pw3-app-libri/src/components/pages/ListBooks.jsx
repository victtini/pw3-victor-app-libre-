import React from "react";
import style from './ListBooks.module.css';
import Container from "../layout/Container";
import ContainerBook from '../layout/ContainerBook'

/* IMPORTA O useState E useEffect PARA GUARDAR OS ESTADOS DE DADOS DOS PROJETOS */
import { useState, useEffect } from "react";

import BookCard from '../CardBooks'

import cavernas from '../../assets/cavernas_aco.jpg'

const ListBooks = () => {
    /* CRIAÇAO DO STATE DOS DADOS DOS LIVROS */
    const [books, setBooks] = useState([]);

     /* RECUPERA OS DADOS DOS LIVROS DO BACKEND */
     useEffect(()=>{

    fetch('http://localhost:5000/listagemLivros', {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        },
    })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log('LIVROS: ' + data.data);
            setBooks(data.data);
            console.log('STATE: ' + books);
        })
        .catch((err)=>{console.log(err)});

}, []);

    return (

        <Container>

        <section className={style.list_book_container}>
            
            <h1>LIST BOOKS</h1>
        <ContainerBook>
                {
                    books.map((book)=>(
                        // console.log(book.nome_livro)
                        <BookCard
                            // cod_livro={book.cod_livro}
                            titulo={book.nome_livro}
                            autor={book.autor_livro}
                            imagem={cavernas}
                            cod_livro={book.cod_livro}
                            key={book.cod_livro}
                        />
                    ))
                }
        </ContainerBook>
        </section>

    </Container>
)

    
}

export default ListBooks
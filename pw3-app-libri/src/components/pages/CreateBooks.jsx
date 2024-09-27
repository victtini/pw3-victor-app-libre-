import React, { useState, useEffect } from "react";
import style from "./CreateBooks.module.css";
import Input from "../forms/input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks = () => {
    // Define state for categories
    const [categorias, setCategorias] = useState([]);

    // State for book data
    const [book, setBook] = useState({});

    // Handler to capture input data (book name, author, and description)
    function handlerChangeBook(event) {
        setBook({ ...book, [event.target.name]: event.target.value });
        console.log(book);
    }

    // Fetch categories from API
    useEffect(() => {
        fetch('http://localhost:5000/listagemCateorias', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(resp => resp.json())
        .then(data => {
            console.log('DATA', data.data);
            setCategorias(data.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    // Function to create a book
    function createBook(book) {
        fetch('http://localhost:5000/inserirLivro', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(book)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            // Optionally navigate or show a success message here
        })
        .catch(err => {
            console.log(err);
        });
    }

    // Submit function
    function submit(event) {
        event.preventDefault();
        createBook(book);
    }

    return (
        <section className={style.create_books_container}>
            <h1>Cadastro de livros</h1>

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="nome_livro"
                    placeholder="Digite o nome do seu livro aqui" // Fixed here
                    text="Título do livro"
                    handlerChangeBooks={handlerChangeBook}
                />

                <Input
                    type="text"
                    name="autor_livro"
                    placeholder="Digite o nome do autor" // Fixed here
                    text="Nome do autor"
                    handlerChangeBooks={handlerChangeBook}
                />

                <Input
                    type="text"
                    name="descrição_livro"
                    placeholder="Digite a descrição do livro" // Fixed here
                    text="Descrição do livro"
                    handlerChangeBooks={handlerChangeBook}
                />
                
                <Select
                    name='categoria' // Changed to lowercase for consistency
                    text='Escolha uma categoria de livro'
                    options={categorias}
                />
                
                <Button
                    rotulo='Cadastrar Livro'
                />
            </form>
        </section>
    );
}

export default CreateBooks;
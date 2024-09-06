import React from "react";
import Style from './CreateBooks.module.css'
import Input from "../forms/input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks =()=>{
    return(
        <section className={Style.create_book_container}>
            <h1>createBooks</h1>
            <Input 
            type= 'text'
            name='txt_texto'
            text= 'titulo do livro'
            placeHolder ='digite o nome do seu livro aqui'
            />
        
             <Input 
            type= 'text'
            name='txt_autor'
            text= 'autor do livro'
            placeHolder ='digite o autor do seu livro aqui'
            />

             <Input 
            type= 'text'
            name='txt_texto'
            text= 'descrição'
            placeHolder ='digite a descrição do seu livro aqui'
            />
            <Select
            name='categoria'
            text= 'escolha um livro'
            />
            <Button 
                rotulo ='cadastrar livro'
            />
        </section>
    )

}
export default CreateBooks;
import Style from './Select.module.css';

function Select({name, text}){
    return(
        <div>
        
        <label htmlFor={name}>{text}</label>
        <select name={name} id ={name}>
            <option>ficção cientifica</option>
            <option>fantasia heroica</option>
            <option>suspence</option>
            <option>terro</option>
        </select>

        </div>
    )
}

export default Select;
import './CampoTexto.css';

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
           <p><label>{props.label}</label></p>
           <p><input placeholder={props.placeholder} type='text'/></p>
           
        </div>
    )
}

export default CampoTexto;
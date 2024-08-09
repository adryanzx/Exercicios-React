function Titulo(props){
    const nome = props.nome;
    const sobrenome = props.sobrenome
    return (
      <h1>primeiro app react - {nome}{sobrenome}</h1>
    );
  }

export default Titulo;
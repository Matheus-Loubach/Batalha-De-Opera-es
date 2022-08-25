import "./Menu.css"


const Menu = ({ModoAdicao, ModoSubtracao, ModoMultiplicacao, ModoDivisao, ModoTodas}) => {

  return (
    <div className="body">
      <div className="container">
      <h1 className="titulo_menu">Batalha de Operações</h1>
      <h2 className="sub_menu">Modos de jogo</h2>
      <ul>
        <li><button onClick={ModoAdicao} className="botao_inicial">Adição</button></li>
        <li><button onClick={ModoSubtracao} className="botao_inicial">Subtração</button></li>
        <li><button onClick={ModoMultiplicacao} className="botao_inicial">Multiplicação</button></li>
        <li><button onClick={ModoDivisao} className="botao_inicial">Divisão</button></li>
        <li> <button onClick={ModoTodas} className="botao_inicial">Todas Operações</button></li>
      </ul>
      </div>
    </div>
  )
}

export default Menu


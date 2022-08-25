import "./Menu.css"


const GamerOver = ({menu}) => {

  return (
    <div className="body">
      <p className="topo_final">Continue Praticando</p>

      <div className="container">
      <h1 className="titulo_menu">Não deixe que sua pontuação fique abaixo de ZERO.</h1>
      <h2 className="sub_menu">Fim de Jogo</h2>
      <button className="botao_final" onClick={menu}>Menu Principal</button>
     <footer className="sub_menu"> 
Developed by - Matheus Loubach <footer/>
      </div>
    </div>
  )
}

export default GamerOver


import { useState } from 'react';
import './App.css';
import Adicao from './components/Adicao';
import Subtracao from './components/Subtracao';
import Multiplicacao from './components/Multiplicacao';
import Divisao from './components/Divisao';
import TodasOperacoes from './components/TodasOperacoes';
import GamerOver from './components/GamerOver';






import Menu from './components/Menu';

const estagios = [
  {id:0, name: 'menu'},
  {id:1, name: 'adicao'},
  {id:2, name: 'subtracao'},
  {id:3, name: 'multiplicacao'},
  {id:4, name: 'divisao'},
  {id:5, name: 'todas'},
  {id:6, name: 'end'},
];


function App() {
  const [GameEstagios, setGameEstagio] = useState(estagios[0].name)

   //iniciar menu
   const menu = () =>{
    setGameEstagio(estagios[0].name);
  }

  const ModoAdicao = () =>{
    setGameEstagio(estagios[1].name);
  }
 
  const ModoSubtracao = () =>{
    setGameEstagio(estagios[2].name);
  }
  const ModoMultiplicacao = () =>{
    setGameEstagio(estagios[3].name);
  }
  const ModoDivisao = () =>{
    setGameEstagio(estagios[4].name);
  }
  const ModoTodas = () =>{
    setGameEstagio(estagios[5].name);
  }
  const FimDeJogo = () =>{
    setGameEstagio(estagios[6].name);
  }


  return (
    <div>
      {GameEstagios === 'menu' && <Menu ModoAdicao={ModoAdicao} ModoSubtracao={ModoSubtracao} ModoMultiplicacao={ModoMultiplicacao} ModoDivisao={ModoDivisao} ModoTodas={ModoTodas}/>}
      {GameEstagios === 'adicao' && <Adicao menu={menu} GamerOver={FimDeJogo}/>}
      {GameEstagios === 'subtracao' && <Subtracao menu={menu} GamerOver={FimDeJogo}/>}
      {GameEstagios === 'multiplicacao' && <Multiplicacao menu={menu} GamerOver={FimDeJogo}/>}
      {GameEstagios === 'divisao' && <Divisao menu={menu} GamerOver={FimDeJogo}/>}
      {GameEstagios === 'todas' && <TodasOperacoes menu={menu} GamerOver={FimDeJogo}/>}
      {GameEstagios === 'end' && <GamerOver menu={menu}/>}
    </div>
  );
}

export default App;

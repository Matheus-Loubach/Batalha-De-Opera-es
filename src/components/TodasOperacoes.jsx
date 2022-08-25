import { useEffect, useRef } from "react";
import { useState } from "react";
import "./Calculo.css"
import "./Responsive.css"

const Adicao = ({menu, GamerOver}) => {

  const qtdRandom = 10;
  const valorTempo = 60;
  const Ref = useRef(null);

  //Ultimo Score
  const [lastScore, setLastScore] = useState(0);


  //numeros e sinais sorteados
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sinal, setSinal] = useState('-');

  //resposta user
  const [userNumber, setUserNumber] = useState(0);

  //score
  const [useScore, setScore] = useState(0);

  // The state timer
  const [timer, setTimer] = useState('');

  //sortendo numeros
  const randomNumber1 = () =>{
    var sinalRandom = '';
    var sinais = "+-/*";
    var sinaisTamanho = sinais.length;

    const randomNumber = Math.floor(Math.random() * qtdRandom);
    setNum1((atualScore) => atualScore = randomNumber);

    const randomNumber2 = Math.floor(Math.random() * qtdRandom);
    setNum2(randomNumber2);

    sinalRandom += sinais.charAt(Math.floor(Math.random() * sinaisTamanho));
    setSinal(sinalRandom);

  }

  //answer from player
  const handleSubmit= (e) =>{
    e.preventDefault();

    if(sinal === '+' )
    {
      if(num1 + num2 == userNumber)
      {
        console.log('acertou');
        randomNumber1();
        setUserNumber('');
        setScore((atualScore) => atualScore += 10);
      }else{
        console.log('Errou')
        randomNumber1();
        setUserNumber('');
        setScore((atualScore) => atualScore -= 10);
      }
    }
    else{
      console.log(userNumber);
    }
    if(sinal === '-' )
    {
      if(num1 - num2 == userNumber)
      {
        console.log('acertou');
        randomNumber1();
        setUserNumber('');
        setScore((atualScore) => atualScore += 10);
      }else{
        console.log('Errou')
        randomNumber1();
        setUserNumber('');
        setScore((atualScore) => atualScore -= 10);
      }
    }
    else{
      console.log(userNumber);
    }
    if(sinal === '/' )
    {
      var respostaDivisao = num1 / num2.toFixed(2);
      if(respostaDivisao == userNumber)
      {
        console.log('acertou');
        randomNumber1();
        setUserNumber('');
        setScore((atualScore) => atualScore += 10);
      }else{
        console.log('Errou')
        randomNumber1();
        setUserNumber('');
        setScore((atualScore) => atualScore -= 10);
      }
    }
    else{
      console.log(userNumber);
    }
    if(sinal === '*' )
    {
      if(num1 * num2 == userNumber)
      {
        console.log('acertou');
        randomNumber1();
        setUserNumber('');
        setScore((atualScore) => atualScore += 10);
      }else{
        console.log('Errou')
        randomNumber1();
        setUserNumber('');
        setScore((atualScore) => atualScore -= 10);
      }
    }
    else{
      console.log(userNumber);
    }
  }

  
  const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % valorTempo);
      return {total, seconds};
  }
  const startTimer = (e) => {
    let { total, seconds } = getTimeRemaining(e);
    if (total >= 0) {
        setTimer((seconds > 9 ? seconds : '0' + seconds))
    }
}

const clearTimer = (e) => {
  setTimer('60');
    if (Ref.current) 
    clearInterval(Ref.current);
    const id = setInterval(() => {
        startTimer(e);
    }, 1000)
    Ref.current = id;
}

const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60);
   return deadline;
}

useEffect(() => {
    clearTimer(getDeadTime());
}, []);

const onClickReset = () => {
    clearTimer(getDeadTime());
    clearStates();
}

// resetar userStates
const clearStates = () =>{
  setScore(0);
  setNum1(10);
  setNum2(10);
  setUserNumber(0);
}


//verificar quando o tempo acabar //fim de jogo
useEffect(()=>{
  if(timer <= 0){
    setLastScore(useScore);
    //reset all states
    clearTimer(getDeadTime());
    clearStates();  
  }
 },[timer])
 
 useEffect(() =>{
  if(useScore < 0){
  GamerOver();
  }
 },[useScore])


  return (
    <>

        
<div className="container_ts">
      <div className="container_menu">
      <h2 className="score">Tempo: <span>{timer}</span></h2>
      <p className="score">Pontuação: <span>{useScore}</span></p>
      <p className="score">Última Pontuação: <span>{lastScore}</span></p>
      <button onClick={onClickReset}>Resetar</button>
      <button onClick={menu}>Menu</button>
      </div>
      </div>

      <div className="container_contas">
      <form onSubmit={handleSubmit}>
      <p className="operacao">{num1} {sinal} {num2} = {userNumber}</p>
      <div>
      <input type="text" name="text" placeholder="Digite a resposta" required value={userNumber} onChange={(e) => setUserNumber(e.target.value)}/>
      <button disabled={timer <= 0}>Enviar</button>
      </div>
      </form>
      </div>
    </>
  )
}

export default Adicao
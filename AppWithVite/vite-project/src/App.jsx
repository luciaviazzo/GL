import { useState, useEffect, useRef } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import styles from './App.module.css'

//Para que la funcion sea un componente de react debe devolver una etiqueta jsx
/*function ShowSum(props) {
  
  const number1 = props.number1
  const number2 = props.number2

  const result = number1 + number2

  return <p>La suma de {number1} y {number2} es: {result}</p>
}*/

function ShowSum({ number1, number2 }) {

  const result = number1 + number2
  const [showResult, setShowResult] = useState(false)
  const referencia = useRef(null)

  //Cuando hago click se muestra el resultado
  const handleClick = () => {
    setShowResult((prev) => {
      return (!prev)
    })
  }

  /*
  useEffect(() => {
    console.log('El componente se monto')

    return () => {
      console.log('El componente se desmonto')
    }

  }, [])*/

  useEffect(() => {
    console.log(referencia.current)
  }, [showResult]
  )

  return (
    <div className={styles.component}>
      <p ref={referencia}>La suma de {number1} y {number2}</p>
      <button onClick={handleClick}>
        {showResult ? 'Ocultar resultado' : 'Ver Resultado'}
      </button>
      {showResult && <p>{result}</p>}
    </div>
  )
}

function ShowSubtraction({ number1, number2 }) {
  const result = number1 - number2
  const [showResult, setShowResult] = useState(false)
  const referencia = useRef(null)

  const handleClick = () => {
    setShowResult(prev => !prev)
  };

  useEffect(() => {
    console.log(referencia.current);
  }, [showResult])

  return (
    <div className={styles.component}>
      <p ref={referencia}>La resta de {number1} y {number2}</p>
      <button onClick={handleClick}>
        {showResult ? 'Ocultar resultado' : 'Ver Resultado'}
      </button>
      {showResult ? <p>{result}</p> : null}
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className={styles.component}>
      <p>Valor: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}


//Solo puede devolver una etiqueta (englobarlo dentro de un div)
function App() {

  const [showComponent, setShowComponent] = useState(true)

  return (
    <div className={styles.app}>
      <h1> Abajo hay componentes</h1>
      <button onClick={() => setShowComponent(false)}>OCULTAR COMPONENTES</button>
      {showComponent && (
        <>
          <ShowSum number1={10} number2={7} />
          <Counter />
          <ShowSubtraction number1={10} number2={7} />
        </>
      )}
    </div>
  )
}

export default App

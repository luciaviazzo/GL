import { useState, useEffect, useRef } from 'react'
import './App.css'

//Cuando hay un cambio se rereneriza el componente
//Los unicos valores que se guardan son los que son un estado 
function App() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const abortControllerRef = useRef(null)

  //Para indicar que el efecto se lanza cuando se monta el componete se pone []
  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          signal: abortControllerRef.current.signal //Controla cuando cancelar la transaccion
        })

        if (!response.ok) {
          console.log('Error al realizar la solicitud')
          return
        }
        const data = await response.json()
        setData(data)

        setData(response)
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message)
        setError('Error al cargar los datos. Por favor, intenta nuevamente.')
      } finally {
        setIsLoading(false)
      }
    }
    //Cada vez que se rerenderiza el componente no se genera una nueva señal 
    abortControllerRef.current = new AbortController()
    fetchData()

    //Se desmonta el componente
    return () => (
      abortControllerRef.current.abort()
    )
  }, [])


  if (isLoading) {
    return (
      <main>Cargando datos...</main>
    )
  }

  if (error !== '') {
    return (
      <main>{error}</main>
    )
  }

  return (
    <main>
      <h1>Publicaciones:</h1>
      <ul>
        {data.length > 0 ? map(post => (
          <li key={post.id}>{post.title}</li>
        )) : null}
      </ul>
    </main >
  )
}

export default App
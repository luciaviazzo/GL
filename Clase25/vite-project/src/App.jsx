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
          signal: abortController.signal //Controla cuando cancelar la transaccion
        })

        if (!response.ok) {
          console.log('Error al realizar la solicitud')
          return
        }
        const data = await response.json()

        setData(response)
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message)
        setError('Error al cargar los datos. Por favor, intenta nuevamente.')
      } finally {
        setIsLoading(false)
      }
    }
  },[])




  return (
    <div>
      {isLoading ? (
        <p>Cargando datos...</p>
      ) : (
        <div>
          {error ? (
            <p>{error}</p>
          ) : (
            <div>
              <h1>Publicaciones:</h1>
              <ul>
                {data.map(post => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
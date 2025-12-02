// import NavBar from './components/layouts/Navbar';
// import Footer from './components/layouts/Footer';
// import { BrowserRouter } from 'react-router-dom';
// import RoutesClient from './routes/routes';




import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      // console.log(response.data);
      // setJokes(response.data)
    })
    .catch((error) => {
      console.log(error) 
    })
  }, [])

  return (
    <>

    {/* <div className="bg-black text-white flex items-center text-2xl justify-center flex-col h-screen w-full">
      <h1>Virtual</h1>
      <p>Jokes: {jokes.length}</p>

      {/* {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      } */}
      {/* {
      Array.isArray(jokes) && jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </div> */} */


    {/* <BrowserRouter>
        <div className={`min-h-[50vh] flex flex-col bg-gray-200 mt-25`}>
          <NavBar />
          <main>
            <RoutesClient />
          </main>
          <Footer />
        </div>
      </BrowserRouter> */}



    </>
  )
}

export default App

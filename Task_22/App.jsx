import { useFetch } from './useFetch.js'
import { Item_Box } from './Icon.jsx'
import './App.css'




function App() {
  const {data , loading , error} = useFetch('https://jsonplaceholder.typicode.com/photos')
  if(loading){
    return(<div className='load1'><h1 className='txt3'>Loading...</h1></div>)
  }

  if(error){
    return(<div className='err1'><h3>{error.message}</h3></div>)
  }
  return (
    
        <div id='pag1'>
            <div id='txt2'>Images</div>
            {data.map((item) => (
                    <Item_Box key={item.id} text1={item.title} img_url={item.url}></Item_Box>
            ))}
            
        </div>

  
  )
}

export default App

import {Routes,Route} from 'react-router'
import MainPage from './pages/mainPage'
import './App.css'

function App() {

  return (
  <Routes>
    <Route index element={<MainPage/>}/>
  </Routes>
  )
}

export default App

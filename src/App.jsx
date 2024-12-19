import Navbar from './Components/Navbar'
import ProfileBanner from './Components/ProfileBanner'

import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div>
          <Navbar/>
          
         
        
          <Routes>
            <Route path='/' element={<ProfileBanner/>}/>
            

          </Routes>
        
          
    </div>
  )
}

export default App
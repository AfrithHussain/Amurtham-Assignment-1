import Navbar from './Pages/Navbar'
import ProfileBanner from './Pages/ProfileBanner'

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

export default App;
import Navbar from './components/Navbar'
import ProfileBanner from './components/ProfileBanner'

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
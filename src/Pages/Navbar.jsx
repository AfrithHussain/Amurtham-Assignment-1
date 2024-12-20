import { useState } from 'react'
import Logo from '../assets/image 45.png'
import { Link } from 'react-router-dom'



function Navbar() {

    let [textColor, setTextColor] = useState('');
  return (
    <div>
        <div className="flex justify-between px-32 items-center logo py-3 pt-5">
            <img className='w-44' src={Logo} alt="" />
            <div className="flex gap-10 font-bold  text-neutral-600 text-sm">
                <Link onClick={()=>setTextColor('home')}   to={'/home'}><p className={`${textColor === 'home' ?  'text-lime-900' : ''} `}>Home</p></Link>
                <Link onClick={()=>setTextColor('find')} to={'/'}><p className={`${textColor === 'find' ?  'text-lime-900' : ''} `}>Find Doctors</p></Link>
                <Link onClick={()=>setTextColor('about')} to={'/aboutus'}> <p className={`${textColor === 'about' ?  'text-lime-900' : ''} `}>About Us</p></Link>

            </div>
            
            <div className="flex gap-10">
             <button className='border-lime-900 border py-2 px-4 rounded-lg text-lime-900 font-semibold'>Login</button>
             <button className='bg-lime-900 border py-2 px-6 rounded-lg text-white font-semibold'>Sign-up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
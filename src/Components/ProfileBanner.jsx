import Banner from '../assets/banner.png'
import Profile from '../assets/profile.png'
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Hero from './Hero';

function ProfileBanner() {
  return (
    <div className="mx-20 mt-10">
         <div className="w-full  h-52 border rounded-t-2xl">
          <img className='h-[220px] rounded-t-2xl w-full' src={Banner} alt="" />
         </div>
         

         {/* MAIN FLEX */}
         <div className="border w-full banner -translate-y-24 flex justify-around items-center gap-10 py-1 pb-3 ">

            {/* DIV 1 */}
            <div className="flex items-center gap-6">
              <img src={Profile} className='w-32 object-cover rounded-full h-32 -translate-y-5 ' alt="" />
              <div className="">
                <div className="flex items-center text-lg gap-1 ">
                <h1 className='text-neutral-800 font-bold text-xl'>Dr. Bruce Willis </h1>
                <MdVerified className='text-blue-700 '/>
                </div>

                <p className='text-lime-900'>Gynecologist</p>

                <div className="flex items-center gap-1 mt-2">
                    <p>4.2</p>
                   <div className='flex  '>
                     <FaStar className="flex text-orange-400"/>
                     <FaStar className="flex text-orange-400"/>
                     <FaStar className="flex text-orange-400"/>
                     <FaStar className="flex text-orange-400"/>
                   </div>
                </div>
              </div>

            </div>

            {/* DIV 2 */}

              <div className="">
                <div className="flex items-center  poppins-regular gap-20 ">
                  <div className="">
                   <p className='text-lime-900 '>Followers</p>
                   <p className='text-neutral-900 font-bold  '>850</p>
                  </div>
                  <div className="">
                   <p className='text-lime-900 '>Following</p>
                   <p className='text-neutral-900 font-bold '>18k</p>
                  </div>

                  <div className="">
                   <p className='text-lime-900 '>Posts</p>
                   <p className='text-neutral-900 font-bold  '>250</p>
                  </div>
                </div>
              </div>

              {/* DIV 3 */}
            <div className="">
            <button className='bg-lime-900 border py-2 px-6 rounded-lg text-white font-semibold'>Book an Appointment</button>
            </div>
         </div>

         <div className="">
          <Hero/>
         </div>
    </div>
  )
}

export default ProfileBanner
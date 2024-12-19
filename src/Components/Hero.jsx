import { SlSocialFacebook } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { PiTwitterLogoLight } from "react-icons/pi";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import home from '../assets/homelogo.png'
import { FaStar } from "react-icons/fa6";
import UserProfile from '../assets/userprofile.png'
import UserProfile2 from '../assets/Frame 1000006264 (1).png'

import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



function Hero() {
  
    const dates = [
      { day: "Mon", date: "10 Oct", slots: "10 slots", highlight: "lime" },
      { day: "Tue", date: "11 Oct", slots: "02 slots", highlight: "red" },
      { day: "Wed", date: "12 Oct", slots: "05 slots", highlight: "yellow" },
      { day: "Thu", date: "13 Oct", slots: "03 slots", highlight: "yellow" },
      { day: "Fri", date: "14 Oct", slots: "01 slots", highlight: "red" },
  
      // Add more dates as needed
    ];
  return (
    <div className="-translate-y-14">

      {/* MAIN DIV */}
      <div className="flex justify-center w-full  ">
           {/* DIV 1 */}
          <div className="w-1/2 flex flex-col gap-10">
            {/* INNER CART 1*/}
            <div className="w-[70%] border rounded-lg h-72 flex flex-col gap-3 ">
                  <div className="flex items-center justify-between px-5 mixcolor py-2">
                    <p>A Little About me</p>
                    <div className="flex border border-lime-900 text-neutral-700 p-1 px-3 rounded-lg">
                      <p>Follow</p>
                      <p>+</p>
                    </div>
                  </div>

                  <p className="text-neutral-600 mx-5 leading-6 font-semibold text-sm">Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </p>
 
                  <div className="flex items-center justify-center gap-4">
                    <hr className="w-72" />
                    <p className="underline">Read More</p>
                  </div>

                  <div className="flex items-center gap-10 text-sm mx-5 ">
                    <p className="font-semibold">Language Spoken</p>
                    <p className="bg-neutral-200 text-neutral-700 rounded-md p-1 px-2">English</p>
                    <p className="bg-neutral-200 text-neutral-700 rounded-md p-1 px-2">Hindi</p>
                    <p className="bg-neutral-200 text-neutral-700 rounded-md p-1 px-2">Telugu</p>
                  </div>

                  <div className="flex items-center gap-4 mt-1 mx-5 mb-2">
                    <SlSocialFacebook className="text-lime-900 bg-neutral-100 text-4xl p-2 rounded-full hover:bg-lime-900 hover:text-white"/>
                    <CiInstagram className="text-lime-900 bg-neutral-100 text-4xl p-2 rounded-full hover:bg-lime-900 hover:text-white"/>
                    <PiYoutubeLogoLight className="text-lime-900 bg-neutral-100 text-4xl p-2 rounded-full hover:bg-lime-900 hover:text-white"/>
                    <PiTwitterLogoLight className="text-lime-900 bg-neutral-100 text-4xl p-2 rounded-full hover:bg-lime-900 hover:text-white"/>

                  </div>
           </div>

           {/*INNER CART 2 */}

           <div className="w-[70%] border h-44  rounded-lg">
           <div className=" px-5 mixcolor py-3">
                    <p>A Little About me</p>
            </div>

            <div className="flex gap-5 w-24 h-24 mt-4 ml-5">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
             </div>
                  
           </div>

           {/* INNER CART 3 */}
              
           <div className="w-[70%] border h-44  rounded-lg">
           <div className=" px-5 mixcolor py-3">
                    <p>The Concerns I Treat</p>
            </div>

            <div className="flex text-xs poppins-regular gap-3 mx-2 mt-6">
            
                    <p className="bg-neutral-100 text-lime-900 rounded-2xl p-2 ">Skin Treatment</p>
                    <p className="bg-neutral-100 text-lime-900 rounded-2xl p-2 ">Pregnancy</p>
                    <p className="bg-neutral-100 text-lime-900 rounded-2xl p-2">Period Doubts</p>
                    <p className="bg-neutral-100 text-lime-900 rounded-2xl p-2 ">Endometriosis</p>

            </div>

            <div className="flex text-xs poppins-regular gap-3 mx-2 mt-6">
            
            <p className="bg-neutral-100 text-lime-900 rounded-2xl p-2 ">Skin Treatment</p>
            <p className="bg-neutral-100 text-lime-900 rounded-2xl p-2 ">Pregnancy</p>
            <p className="bg-white border text-lime-900 rounded-2xl p-2">+5 more</p>

    </div>

           
                  
           </div>


           {/* INNER CART 4 */}
           <div className="w-[70%] border h-64  rounded-lg">
           <div className=" px-5 mixcolor py-3">
                    <p>My Work Experience</p>
            </div>
            <div className="flex flex-col gap-3 mx-5 mt-5">
              <p className="text-lime-900 font-semibold text-sm">I HAVE BEEN IN PRAACTICE FOR : 7+ YEARS</p>
              <hr className="w-72" />
            </div>

            <div className="flex justify-between mx-6 mt-5 items-center gap-1 poppins-regular text-sm">
              <div className="flex items-center gap-2">
                 <img src={home} alt="" />
                 <div className="">
                  <p>Midtown Medical Clinic</p>
                  <p className="text-neutral-600">Senior doctor</p>
                 </div>
              </div>

              <div className="">
                  <p className="text-neutral-600">2016-PRESENT</p>
              </div>
            </div>

            <div className="flex justify-between mx-6 mt-7 items-center gap-1 poppins-regular text-sm">
              <div className="flex items-center gap-2">
                 <img src={home} alt="" />
                 <div className="">
                  <p>Midtown Medical Clinic</p>
                  <p className="text-neutral-600">Senior doctor</p>
                 </div>
              </div>

              <div className="">
                  <p className="text-neutral-600">2010-2015</p>
              </div>
            </div>
           </div>

           {/* INNER CART 5 */}

           <div  className="w-[70%] border rounded-lg h-[450px] flex flex-col ">
           <div className=" px-5 mixcolor py-3">
                    <p>Featured Reviews (102)</p>
            </div>
              
              <div className="w-[85%] mx-auto rounded-md bg-neutral-100 border h-40 mt-5 flex flex-col gap-4 justify-center  ">
                <img className="w-[360px] mx-2 " src={UserProfile} alt="" />
               
                    <div className='flex mx-2 '>
                                         <FaStar className="flex text-orange-400"/>
                                         <FaStar className="flex text-orange-400"/>
                                         <FaStar className="flex text-orange-400"/>
                                         <FaStar className="flex text-orange-400"/>
                    </div>

                    <p className="text-xs mx-2 leading-5 text-neutral-700 ">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                     

               </div>   


               <div className="w-[85%] mx-auto rounded-md bg-neutral-100 border h-40 mt-7 flex flex-col gap-4 justify-center  ">
                <img className="w-[360px] mx-2 " src={UserProfile2} alt="" />
               
                    <div className='flex mx-2 '>
                                         <FaStar className="flex text-orange-400"/>
                                         <FaStar className="flex text-orange-400"/>
                                         <FaStar className="flex text-orange-400"/>
                                         <FaStar className="flex text-orange-400"/>
                    </div>

                    <p className="text-xs mx-2 leading-5 text-neutral-700 ">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                     

               </div>

           </div>



          </div>



       {/* DIV 2 */}

       <div className="border  w-[40%]  h-[900px] rounded-md">
               <div className="flex border p-1 justify-between mx-10 mt-6 px-5 py-2 rounded-xl">
                <p>Appointment Fee</p>
                <p className="text-lime-900 font-semibold">₹699.00</p>
               </div>

               {/* mode session */}

               <div className="flex justify-center items-center gap-5 mt-9 ">
                <p className="font-bold">Select your mode of session</p>
                <hr  className="w-52"/>
               </div>

               <div className="flex text-sm justify-evenly mt-8 ">
                   <div className="border rounded-md p-2 px-6 hover:bg-lime-50 hover:text-lime-900">
                       <p className="font-semibold">In-clinic</p>
                       <p className="text-neutral-500">45 Mins</p>
                   </div>
                  <div className="border rounded-md p-2 px-6  hover:bg-lime-50 hover:text-lime-900">
                  <p className="font-semibold">Video</p>
                  <p className="text-neutral-500">45 Mins</p>
                  </div>

                  <div className="border rounded-md p-2 px-6  hover:bg-lime-50 hover:text-lime-900">
                  <p className="font-semibold">Chat</p>
                  <p className="text-neutral-500">10 Mins</p>
                  </div>
               </div>

               {/* time booking */}

               <div className="">
                         

               <div className="flex justify-center items-center gap-9 mt-9 ">
                <p className="font-bold">Pick a Time slot</p>
                <hr  className="w-52"/>
                <input type="date" className="w-5" />
               </div>
                 

                 {/* ----------------------carousel ------------------ */}
              
               <div className="mx-16 mt-7">
               <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {dates.map((item, index) => (
          <CarouselItem key={index} className="text-xs  basis-[130px] cursor-pointer ">
            <div className={`p-1 ${index === 0 ? "" : ""}`}>
              <Card className={`border ${index === 0 ? "" : "border-gray-300"} active:bg-neutral-100 active:transition-all active:duration-75`}>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className={` font-semibold ${index === 0 ? "text-lime-900" : "text-black"}`}>
                    {item.day}, {item.date}
                  </span>
                  <span className={`mt-1 text-sm ${item.highlight === "lime" ? "text-gray-600 c" : item.highlight === "red" ? "text-red-500" : "text-yellow-500"}`}>
                    {item.slots}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
               </div>

               {/* morning time */}
              
               <div className="mt-10 ">
                  <p className="ml-16 font-semibold">Morning</p>
                
                <div className="flex text-sm gap-7 justify-start mx-16 mt-6">
                   <p className="border p-2 rounded-xl py-3 hover:bg-lime-900 hover:text-white cursor-pointer">9:00 AM</p>
                   <p className="border p-2 rounded-xl py-3 hover:bg-lime-900 hover:text-white cursor-pointer">9:30 AM</p>
                   <p className="border p-2 rounded-xl py-3 hover:bg-lime-900 hover:text-white cursor-pointer">10:00 AM</p>
                   <p className="border p-2 rounded-xl py-3 hover:bg-lime-900 hover:text-white cursor-pointer">10.15 AM</p>
                </div>


                <div className="flex text-sm gap-7 justify-start mx-16 mt-6">
                   <p className="border p-2 rounded-xl py-3 hover:bg-lime-900 hover:text-white cursor-pointer">10:45 AM</p>
                   <p className="border p-2 rounded-xl py-3 bg-lime-900 text-white cursor-pointer">11:00 AM</p>
                  
                </div>



               </div>


               {/* Evening time */}

               <div className="mt-10 ">
                  <p className="ml-16 font-semibold">Evening</p>
                
                <div className="flex text-sm gap-7 justify-start mx-16 mt-6">
                   <p className="border p-2 rounded-xl py-3 hover:bg-lime-900 hover:text-white cursor-pointer">4:00 PM</p>
                   <p className="border p-2 rounded-xl py-3 hover:bg-lime-900 hover:text-white cursor-pointer">4:15 PM</p>
                   <p className="border p-2 rounded-xl py-3 hover:bg-lime-900 hover:text-white cursor-pointer">4:30 PM</p>
                   <p className="border p-2 rounded-xl py-3 hover:bg-lime-900 hover:text-white cursor-pointer">4.45 PM</p>
                </div>


                <div className="flex text-sm gap-7 justify-start mx-16 mt-6">
                   <p className="border p-2 rounded-xl py-3 hover:bg-lime-900 hover:text-white cursor-pointer">5:15 PM</p>
                   
                  
                </div>



               </div>

               {/* btn */}

                      <div className="text-center mt-7">
            <button className='bg-lime-900 border py-2 px-24  rounded-lg text-white font-semibold'>Make an Appointment</button>

                      </div>





               </div>
       </div>

      </div>
          
    </div>
  )
}

export default Hero;
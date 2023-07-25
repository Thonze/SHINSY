import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body>
    <nav className="relative container mx-auto p-6 border-b-4">
      <div className="flex items-center justify-between">
       <div className='logo'>
        <h3 className='text-purple-500'>SHINSY</h3>
       </div>
       <div className='hidden md:flex space-x-6 text-sm '>
        <div className=' flex item center mx-6 '>
          <a className='hover:font-bold  p-3 px-3 pt-2' href="/">Home</a>
          <a className='hover:font-bold  p-3 px-3 pt-2' href="/about">Self-test</a>
          <a className='hover:font-bold  p-3 px-3 pt-2' href="/massa">Diagonistic</a>
          <a className='hover:font-bold  p-3 px-3 pt-2' href="/massa">Article</a>
          <a className='hover:font-bold  p-3 px-3 pt-2' href="/massa">About us</a>
        </div>
          <div className=' md:flex space-x-3 '>
          <a className='hover:font-bold p-3 px-6 pt-2 rounded-md  bg-white shadow-md ' href="#">Contact us</a>
          <a className=' hidden md:block  p-3 px-6 pt-2 text-white bg-blue-900 rounded-md
      baseline hover:font-bold shadow-md' href="/massa">Sign  in</a>
      </div>
      </div>
      <button id='menu' className='lg:hidden'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8
        ' fill='none' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' 
          d='M4 6h16M4 12h16M418h16'/>
        </svg>
      </button>
      <div role='menubar' className='hidden flex flex-col gap-4 absolute right-0
      left-0 top-16 p-6'>
      <a className='hover:font-bold  p-3 px-3 pt-2' href="/">Home</a>
          <a role='menuitem' className='hover:font-bold  p-3 px-3 pt-2' href="/about">Self-test</a>
          <a role='menuitem' className='hover:font-bold  p-3 px-3 pt-2' href="/massa">Diagonistic</a>
          <a role='menuitem' className='hover:font-bold  p-3 px-3 pt-2' href="/massa">Article</a>
          <a role='menuitem' className='hover:font-bold  p-3 px-3 pt-2' href="/massa">About us</a>
        </div> 
      </div>
    </nav>
    
    <div className='container mx-auto py-3 my-6 px-3'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2'>      
        <div className=' py-6 col-span-1 '>
          <span className='text-xs p-2 max-w-sm text-center items-center  bg-blue-100 rounded-full text-purple-900 drop-shadow-md'>Best Phsycology Consultant In The Country</span>
          <h1 className='lg:text-6xl text-4xl  py-6 pt-3'>ASSISTING YOUR MENTAL HEALTH WITH OUR BEST SERVICES</h1>
          <p className='text-sm'>We are experienced phsycology consultation for decades, with our services we believe we can achieve better for your mental health</p>
          <button className=' hidden md:block  p-3 text-center mt-6 text-white bg-purple-500 rounded-md
          baseline hover:bg-red-400 shadow-md text-sm'>Book Consultation Now</button>
      </div>
      <div className=' col-span-1  '>
        <img src="main.jpg"  alt='image' className='rounded-md shadow-md'/>
        </div>
      </div>
    </div>


    <div>
      <p className='font-medium text-center text-xl'>
        Shinsy has an experience in psycology, mental health assistance and healing alot of people
      </p>
      <div className='container mx-auto py-3 my-6'>
        <div className='grid gap-2 lg:grid-cols-3 md:grid-cols-1 md:gap-4 text-center '>
          <div className='col-span-1'>
          <span className='text-3xl text-purple-500 font-medium'>67000+</span><span className='text-gray-500 text-sm font-light'>People</span><p className='font-bold text-xs'>are Healed</p>
          </div>
          <div className='col-span-1 border-l-2 border-r-2'>
          <span className='text-3xl text-purple-500 font-medium'>27</span><span className='text-gray-500 text-sm font-light'>Years</span><p className='font-bold text-xs'>of Experiences</p>
          </div>
          <div className='col-span-1'>
          <span className='text-3xl text-purple-500 font-medium'>8521</span><span className='text-gray-500 text-sm font-light'>Hours</span><p className='font-bold text-xs'>of Works</p>
          </div>
        </div>
      </div>
      {/* <div className='container mx-auto'> */}
      
      {/* </div> */}
    </div>


    <section>
        
        <div className='container mx-auto p-3'>
          <div className='py-6'>
            <div className='text-center text-green-500  '>
              <a  href="#" className=' text-xs  p-1  font-medium rounded-full bg-green-200'>Phsycological issues</a>
            </div>
            <p className=' font-medium text-center'>
              We Deal with Phsycological issues
            </p>
          </div>
          <div className='grid gap-4 lg:grid-cols-3  md:grid-grid-cols-2'>   
          <div className="relative col-span-1">
              <img src="anxiety.jpg" alt="My Image" className="w-full h-auto"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 text-black p-4">
                {/* <h1 className="text-2xl font-bold">My Title</h1> */}
                <p className="mt-2 bg-white rounded-md text-black text-md text-center">Lost and truama</p>
              </div>
            </div>
          <div className="relative col-span-1">
              <img src="angry.jpg" alt="My Image" className="w-full h-auto"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 text-black p-4">
                {/* <h1 className="text-2xl font-bold">My Title</h1> */}
                <p className="mt-2 bg-white rounded-md text-black text-md text-center">anger management</p>
              </div>
            </div>
            <div className="relative col-span-1">
              <img src="truama.jpg" alt="My Image" className="w-full h-auto"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 text-black p-4">
                {/* <h1 className="text-2xl font-bold">My Title</h1> */}
                <p className="mt-2 bg-white rounded-md text-black text-md text-center">Anxiety problem</p>
              </div>
            </div>
          <div className="relative col-span-1">
              <img src="depression.jpg" alt="My Image" className="w-full h-auto"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 text-black p-4">
                {/* <h1 className="text-2xl font-bold">My Title</h1> */}
                <p className="mt-2 bg-white rounded-md text-black text-md text-center">depression</p>
              </div>
            </div>
            <div className="relative col-span-1">
              <img src="growth.jpg" alt="My Image" className="w-full h-auto"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 text-black p-4">
                {/* <h1 className="text-2xl font-bold">My Title</h1> */}
                <p className="mt-2 bg-white rounded-md text-black text-md text-center">Personal Growth</p>
              </div>
            </div>
          <div className="relative col-span-1">
              <img src="special.jpg" alt="My Image" className="w-full h-auto"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 text-black p-4">
                {/* <h1 className="text-2xl font-bold">My Title</h1> */}
                <p className="mt-2 bg-white rounded-md text-black text-md text-center">Special Needs</p>
              </div>
            </div>
          </div>
          <div className='m-3 text-center'>
          <a  href="#" className='bg-white text-xs  p-2 rounded-full   outline-1 outline-offset-1 outline-slate-500 shadow-md'>show more</a>
          </div>
        </div>
  </section>
    
    

    {/* Another section */}
    <section className='my-6'>
    <div>
      <div className='text-center text-green-500  '>
              <a  href="#" className=' text-xs  p-1  font-medium rounded-full bg-green-200 shadow-md'>We are here to help</a>
      </div>
      <p className='font-medium text-center text-xl py-3'>
        We have the Best Phsycologist services in the country with high and international standard
      </p>
    </div>
    <div className='container mx-auto '>
      <div className='grid gap-2 lg:grid-cols-2 md:grid-cols-1'>
        <div className='col-span-1'>
          <img src='/main2.jpg' alt='img' />
        </div>
        <div className='mx-3'>
          <div className='col-span-1'>
            <div className='flex flex-col px-3 py- hover:bg-purple-400 rounded-md'>
              <h1 className='font-medium'>Online 1 on 1 consultation</h1>
              <p className='text-xs py-3'>The bestonline Therapy & Counseling Experience from the Verified Professionals.
              Top Therapist for your mental health.
              </p>
            </div>
            <div className='flex flex-col px-3 py-3 hover:bg-purple-400 rounded-md'>
              <h1 className='font-medium'>Supervision</h1>
              <p className='text-xs py-3'>Supervision is an act or instance of directing,managing or oversight.
                We can help get you back on track
              </p>
            </div>
            <div className='flex flex-col px-3 py-3 hover:bg-purple-400 rounded-md'>
              <h1 className='font-medium'>Phsycoeducation</h1>
              <p className='text-xs py-3'>Phsycoeducation can include: information given verbally in a therapy session, written materials.
                in the form Physcology Tools information handouts
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
    </section>
    
    <section className='my-6'>
    <div className='my-6'>
      <div className='text-center text-green-500  '>
        <a  href="#" className=' text-xs  p-1  font-medium rounded-full bg-green-200 shadow-md'>We are here to help</a>
      </div>
      <p className='font-medium text-center text-xl'>
        Trusted by  personal, company and education institution
      </p>
      <div className='container mx-auto p-3 my-6'>
      <div className='grid gap-2 lg:grid-cols-3 md:grid-cols-1 md:flex justify-center'>   
      <div className='col-span-1'>
        <img src='partners-1.jpg' alt='img'/>
      </div>
      <div className='col-span-1'>
        <img src='partners-2.jpg' alt='img'/>
      </div>
      <div className='col-span-1'>
        <img src='partners-3.jpg' alt='img'/>
      </div>
      <div className='col-span-1'>
        <img src='partners-4.jpg' alt='img'/>
      </div>
      <div className='col-span-1'>
        <img src='partners-5.jpg' alt='img'/>
      </div>
      </div>
      </div>
    </div>
    </section>

    <section className='py-6 mx-3 bg-red-100 '>
      <div className='container mx-auto md:m-3'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 shadow-md border-b-slate-500 md:px-3 '>
          <div className='col-span-1'>
            <h1 className='font-medium'>
              The managed to get me share the problems i experienced. The also listened and Discussed the problems
              i was experiencing in great details without being patronizing or Judging
            </h1>
            <div className='flex flex-row space-x-2 py-2'>
                <div className='flex flex-row '>
                  <span className='text-2xl bg-purple-500 text-white px-2 text-center '>"</span> 
                </div>
                <div className='flex flex-row'>
                  <h1 className='font-medium py-4'>
                    Gladys Howard
                    <p className='text-xs font-light'>Young Lady</p>
                  </h1>
              </div>
            </div>
          </div>
          <div className='col-span-1 py-6'>
            <div>
            <img src='testimonial-1.png' alt='img' className='float-right  py-6 rounded-lg shadow-md'/>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 md  py-3 text-center'>
        <div className='col-span-1 '>
          <div className='float-left'>
            <a href='#' className=' hover:bg-blue-950 over:text-white text-xs outline outline-1 rounded-full p-2 shadow-md '>Show Other Reviews</a>
            </div>
        </div>
        <div className='col-span-1'>
            <div className=' float-right'>
              {/* <button  className=' hover:bg-blue-950 hover:text-white text-xs z- border border-blue-300 rounded-full p-2 mx-2'>back</button>
              <button  className='hover:bg-blue-950 hover:text-white text-xs z- border border-blue-300 rounded-full p-2 mx-2'>next</button> */}
            </div>
        </div>
        </div>

      </div>
    </section>

    <section className='my-6 py-6  bg-slate-100'>
      <div className='text-center font-medium py-3 my-3'>
        <h1>
          Frequently Asked Questions
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 text-center '>
          <div className='col-span-1  bg-white m-3 p-3 rounded-md font-medium'>
            <h2>What is Shisy</h2>
          </div>
          <div className='col-span-1  bg-white m-3 p-3 rounded-md font-medium'>
            <h2>Where i can find Shisy office</h2>
          </div>
          <div className='col-span-1  bg-white m-3 p-3 rounded-md font-medium'>
            <h2>Is Shisy a phsycologycal clinic</h2>
          </div>
          <div className='col-span-1  bg-white m-3 p-3 rounded-md font-medium'>
            <h2>How Shisy handles phsycology consultations</h2>
          </div>
          <div className='col-span-1  bg-white m-3 p-3 rounded-md font-medium'>
            <h2>How can we get best phsycologist </h2>
          </div>
          <div className='col-span-1  bg-white m-3 p-3 rounded-md font-medium'>
            <h2>How does online consultation work?</h2>
          </div>
          <div className='col-span-1  bg-white m-3 p-3 rounded-md font-medium'>
            <h2>How to talk to a phsycologist online</h2>
          </div>
          <div className='col-span-1  bg-white m-3 p-3 rounded-md font-medium flex flex-row space-x-20'>
            <h2> What condition that we need Therapy?</h2>
          </div>

        </div>
         
      </div>
      <div className='text-center'>
       <button className='outline outline-1 outline-ash-100 shadow-md rounded-full text-xs px-6 pt-2 bg-white p-2 baseline'>Ask Another question</button>
       </div>
    </section>

    <section className='bg-blue-900 mx-3'>
      <div className='container mx-auto text-center my-6  text-white py-24'>
        <h1 className='text-xl text-medium'>
          Let start your consultation for better feeling to start your days
        </h1>
        <p className='text-xs'>We are always available for you anytime and anyWhere you need</p>
        <button className='p-3 bg-purple-500 my-3 text-xs rounded-md font-medium shadow-md'>Book Consultation Now</button>
        <button className='p-3 outline outline-1 outline-white my-3  mx-3 rounded-md text-xs font-medium shadow-md'>Learn More</button>
      </div>
    </section>

    
    <footer>
      <div className='container mx-auto flex md:flex-col '>
          <div className="flex lg:flex-row flex-col justify-evenly">

            <div className='flex flex-col  px-3'>
              <div className='flex  px-3 py-3'>
              <div className='flex flex-col space-y-3'>
                <div>
                    <img src='' alt='SHINSY' className='h-8 text-purple-400'/>
                  </div>
                  <a href='#' className='text-sm w-24'>8520 Preston Rd. inglewood, Marine 98580</a>
                  <a href='#' className='text-sm w-24'>1570 555 000</a>
                  <a href='#' className='text-sm w-24'>shiny@gmail.com</a>
              </div>
              </div>
              </div>
              <div className='flex md:flex-col px-3 py-3'>
              <div className='flex flex-col space-y-3'>
                <a href='#' className='font-medium'>Patients</a>
                <a href='#' className='text-sm'>How it works</a>
                <a href='#' className='text-sm'>What we treat</a>
                <a href='#' className='text-sm'>What is cost</a>
                <a href='#' className='text-sm'>Testimonial</a>
                <a href='#' className='text-sm'>Our Providers</a>
              </div>
          </div>
         
            <div className='flex px-6 py-3'>
              <div className='flex flex-col space-y-3'>
               <a href='#' className='font-medium'>Company</a>
                <a href='#' className='text-sm'>Contact us</a>
                <a href='#' className='text-sm'>Blog</a>
                <a href='#' className='text-sm'>Resources</a>
                <a href='#' className='text-sm'>Careers</a>
                <a href='#' className='text-sm'>News and Information</a>
                <a href='#' className='text-sm'>Upcoming Events</a>
              </div>
          </div>
            <div className='flex px-6 py-3'>
              <div className='flex flex-col space-y-3'>
                <a href='#' className='font-medium'>Business</a>
                <a href='#' className='text-sm'>Health Systems</a>
                <a href='#' className='text-sm'>Employers</a>
                <a href='#' className='text-sm'>Resellers and TPA</a>
                <a href='#' className='text-sm'>Government</a>
              </div>
          </div>
           <div className='flex px-3 py-3'>
              <div className='flex flex-col space-y-3'>
                 <a href='#' className='font-medium'>Legal</a>
                <a href='#' className='text-sm'>Terms of use</a>
                <a href='#' className='text-sm'>Privacy policy</a>
                <a href='#' className='text-sm'>Cookies</a>
                <a href='#' className='text-sm'>Licences</a>
                <a href='#' className='text-sm'>Disclaimer</a>
                <a href='#' className='text-sm'>Compliance Hotline</a>
                <a href='#' className='text-sm'>ADA Policy</a>
              </div>
          </div>
            
          </div>    
      </div>
    </footer>
  
    </body>
  )
}

import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-screen bg-[#2b2b2b] text-black flex justify-center items-center p-4'>
            <div className='flex flex-col justify-center items-center  w-full h-full'>
                <div className='max-w-[1000px] w-full'>
                    <form method='POST' action='https://getform.io/f/2b4f2cee-0e5e-4370-84ba-7469f7a5f3a2' className='flex flex-col max-w-[1000px] w-full items-center'>
                        <div className='text-center'>
                        <h2 className="text-4xl inline border-b-4 border-[#dc585d] py-2">Contact</h2>
                            <p className='py-6'>Please feel free to fill out the form to get in contact with us!</p>
                        </div>
                        <input className='w-2/3 mb-4 p-3 text-[#2b2b2b] shadow-md shadow-[#dae8e3] border-8 border-double border-[#dae8e3]' type="text" placeholder='Name' name='name' />
                        <input className='w-2/3 mb-4 p-3 text-[#2b2b2b] shadow-md shadow-[#dae8e3] border-8 border-double border-[#dae8e3]' type="email" placeholder='Email' name='email' />
                        <textarea className='w-2/3 mb-4 p-3 text-[#2b2b2b] shadow-md shadow-[#dae8e3] border-8 border-double border-[#dae8e3]' name='message' rows="15" placeholder='Your message..'></textarea>
                        <button className='text-center w-1/3 py-2 shadow-md shadow-[#dae8e3] text-black text-lg border-8 border-double border-[#dae8e3] hover:bg-[#dae8e3] hover:text-black hover:shadow-md hover:shadow-[#e9ecef]'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

const Contact = () => {
    return (
        // Contact page container
        <div className='w-full text-stone-800 flex justify-center items-center md:p-4'>
            {/* container to place form and text */}
            <div className='flex flex-col justify-center items-center px-6 pt-4 py-4 md:py-8 sm:pt-[30px] mx-auto'>
                {/* form header */}
                <div className='text-center'>
                    <h2 className="text-4xl inline border-b-4 border-pcCoral py-2">Contact</h2>
                    <p className='py-6'>Please use our contact form if you have feedback for us.</p>
                </div>
                {/* form */}
                <form method='POST' action='https://getform.io/f/2b4f2cee-0e5e-4370-84ba-7469f7a5f3a2' className='p-2 md:p-4 md:p-6 w-full sm:space-y-4 md:space-y-6 text-stone-800 shadow-md shadow-pcGreen border-8 border-double border-pcGreen'>
                    {/* name */}
                    <div>
                        <label for="name" className="block pt-3 text-stone-800">Your name</label>
                        <input type="text" name="name" className="bg-stone-50 border-2 border-pcGreen focus: outline-pcGreen hover:shadow-lg w-full mb-4 p-3" />
                    </div>
                    {/* email */}
                    <div>
                        <label for="email" className="block text-stone-800">Email address</label>
                        <input type="email" name="email" className="bg-stone-50 border-2 border-pcGreen focus: outline-pcGreen hover:shadow-lg w-full mb-4 p-3" />
                    </div>
                    {/* message */}
                    <div>
                        <label for="message" className="block text-stone-800">Your message</label>
                        <textarea name="message" rows="8" className="bg-stone-50 border-2 border-pcGreen focus: outline-pcGreen hover:shadow-lg w-full mb-4 p-3" />
                    </div>
                    {/* button */}
                    <div className="flex items-center md:items-start ">
                        <button className='mx-auto text-center w-1/3 md:py-2 shadow-md shadow-pcGreen text-lg border-8 border-double border-pcGreen hover:bg-pcGreen  hover:shadow-md hover:shadow-pcGreen'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

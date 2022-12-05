const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-stone-200 text-stone-600">
      {/* Container */}
      <div className="container flex flex-col justify-between items-center md:items-start md:flex-row pt-1 px-2 lg:px-8 md:py-4 md:space-x-4 mx-auto">
        {/* Footer Flex Container */}
        <div className="flex flex-col justify-center max-w-fit md:flex-row md:space-y-0 ">
          {/* Resources Container */}
          <div className='flex flex-col md:flex-row md:space-x-8 border-b border-b-black md:border-b-transparent'>
            {/* Resources Header */}
            <h2 className="text-center font-bold md:items-start">Resource Links</h2>
            {/* Possible Future Release */}
            <h2 className="hidden mb-6 font-bold uppercase ">Legal</h2>
            {/* Menu Container */}
            <ul className="flex flex-col items-center md:items-start">
              <li>
                <a href="https://www.plannedparenthood.org/learn/abortion" className="hover:underline ">Planned Parenthood</a>
              </li>
              <li>
                <a href="https://prochoice.org/" className="hover:underline ">National Abortion Federation</a>
              </li>
              <li>
                <a href="https://www.hopewomenscenters.com/" className="hover:underline">Hope Women's Centers</a>
              </li>
            </ul>
            <ul className="flex flex-col items-center md:items-start">
              <li>
                <a href="https://abortionfunds.org/need-abortion/" className="hover:underline">Abortion Funds</a>
              </li>
              <li>
                <a href="https://www.instagram.com/prochoiceamerica/?hl=en" className="hover:underline ">Pro-Choice America Instagram</a>
              </li>
              <li>
                <a href="https://exhaleprovoice.org/resources/" className="hover:underline ">Support after Abortion</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-fit md:space-y-1 pt-1 " >
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Github svg and link */}
            <a href="https://github.com/JenniferByrnes/project-choice" className="text-stone-500 hover:text-pcCoral">
              <svg className="w-5 h-5 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
          {/* Copywrite */}
          <span className=" italic font-light md:text-base text-center md:text-start">© 2022 <a href="https://github.com/JenniferByrnes/project-choice" className="hover:underline">Projects Choice</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
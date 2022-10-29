import { motion } from "framer-motion";
import mainLogo from "../../assets/mainLogo/fullLogo.png";
import "./homepage.css";
// bg-[#dae8e3]

function Homepage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="homepage w-full p-6 md:h-screen"
    >
      <div className="p-0 ">
        <div className="pb-10 pt-20 flex justify-center w-full h-full homepage-logo">
          <img
            className="homepageLogo"
            src={mainLogo}
            style={{ width: "350px", height: "350px" }}
            alt="cover"
          />
        </div>
        <div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="p-0">
              <div className="border-8 border-double border-red-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen justify-center items-center p-4 flex-row columns-2">
        <div className="flex flex-col justify-center items-center">
          <div className="overflow-hidden border-8 border-double sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="font-extrabold leading-10">
                ABORTION IS HEALTH CARE.
              </div>
              At Project Choice we believe in body autonomy and the womans
              absolute right to chose. The last thing that should stand in your
              way is lack of information, and so our project was born.
              <br />
              <br />
              By filling out this form you will be connected with clinics
              closest to you, laws in your area, and many other resources to
              help keep you safe and healthy.
              <br />
              <br />
              If you have any additional questions, please contact us!
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="overflow-hidden border-8 border-double sm:rounded-md justify-center items-center">
            <div className="bg-white px-4 py-5 sm:p-6 justify-center items-center">
              <div className="font-extrabold leading-10">
                To find out more about abortion regulations in your State click
                below.
              </div>
              <div className="flex flex-col items-center">
                <a href="/policies">
                  <button className='mt-10 mb-10 py-1 px-5 shadow-md shadow-[#dae8e3] text-black text-lg border-8 border-double border-[#dae8e3] hover:bg-[#dae8e3] hover:text-black hover:shadow-md hover:shadow-[#e9ecef]'>Policies</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* start form code */}
    </motion.div>
  );
}

export default Homepage;

import { motion } from "framer-motion";
import mainLogo from "../../assets/mainLogo/fullLogo.png";
import posterTile from "../../assets/posterTile/poster.jpeg";
import "./about.css";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      name="about-tiles"
      className="w-full mb-6 p-6 md:h-screen text-[#2b2b2b]"
    >
      <div className="mt-12 p-6 flex flex-col justify-center w-full h-full">
        <div className="about-heading pb-12 text-center">
          <h2 className="text-4xl inline border-b-4 border-[#dc585d] py-2">
            About Project Choice
          </h2>
        </div>

        <div className="pb-6 grid grid-cols-2 auto-cols-max gap-x-4 gap-y-8">
          <div className="shadow-lg shadow-[#dae8e3] group container flex justify-center text-center items-center mx-auto border-8 border-double border-[#dae8e3]">
            <motion.div
              // animate={{
              //   scale: [1, 2, 2, 1, 1],
              //   rotate: [0, 0, 270, 270, 0],
              //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              // }}
            >
              <img
                className="homepageLogo"
                src={mainLogo}
                style={{ width: "300px", height: "300px" }}
                alt="cover"
              />
              <div className="pt-8 text-center "></div>
            </motion.div>
          </div>

          <div className="p-4 shadow-lg shadow-[#dae8e3] group container flex justify-center text-center items-center mx-auto border-8 border-double border-[#dae8e3]">
            <h2>
              At Project Choice we believe in body autonomy and the womans
              absolute right to chose. The last thing that should stand in your way is lack of information, and so our project was born.
            </h2>
          </div>

          <div className="p-4 shadow-lg shadow-[#dae8e3] group container flex justify-center text-center items-center mx-auto border-8 border-double border-[#dae8e3] ">
            <h2>
              We partner with companies that believe abortion is health care. On
              top of giving you to date information about Clinics and services
              near you, we also donate 100% of the proceeds from our shop to the
              National Abortion Federation.
            </h2>
          </div>

          <div className="p-4 shadow-lg shadow-[#dae8e3] group container flex justify-center text-center items-center mx-auto border-8 border-double border-[#dae8e3]">
            <div>
              <img
                className="homepageLogo"
                src={posterTile}
                style={{ width: "300px", height: "300px" }}
                alt="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
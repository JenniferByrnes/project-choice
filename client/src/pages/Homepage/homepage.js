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
                To find out more about abortion regulations in your State select
                your State below below.
              </div>
              <select
                id="period"
                className="mt-1 block w-full rounded-md border-4 bg-white py-2 px-3 shadow-sm  sm:text-sm"
              >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <div className="flex flex-col items-center">
                <a href="/policies">
                  <button className="mt-10 mb-10 py-1 px-5 shadow-md shadow-[#dae8e3] text-black text-lg border-8 border-double border-[#dae8e3] hover:bg-[#dae8e3] hover:text-black hover:shadow-md hover:shadow-[#e9ecef]">
                    Policies
                  </button>
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

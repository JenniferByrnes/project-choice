import { useState } from "react";
import mainLogo from "../../assets/mainLogo/fullLogo.png";

export default function Homepage() {
  const [state, setState] = useState("Alabama");

  function handleSelect(e) {
    setState(e.target.value);
  }
  return (
    <section>
      {/* Logo and optional divider line */}
      <div className="hidden md:block">
        <div className="pb-10 pt-16 max-w-6xl mx-auto">
          <img
            className="mx-auto"
            src={mainLogo}
            style={{ width: "350px", height: "350px" }}
            alt="cover"
          />
        </div>
        {/* Section Dividing line for larger screens */}
        <div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="p-0">
              <div className="border-8 border-double border-pcTan" />
            </div>
          </div>
        </div>
      </div>

      {/* Container for main content */}
      <div className="container flex flex-col mx-auto p-6 lg:flex-row lg:mb-0">
        {/* Select your state */}
        <div className="overflow-hidden border-8 border-pcTan border-double sm:rounded-md justify-center items-center ">
          <div className="bg-white px-4 py-5 sm:p-6 justify-center items-center">
            <div className="font-extrabold text-center leading-10">
              To find the abortion regulations in your area select your State.
            </div>

            <select
              id="period"
              className="mt-1 block w-full rounded-md border-4 bg-white py-2 px-3 shadow-sm  sm:text-sm"
              onChange={handleSelect}
            >
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="District of Columbia">District of Columbia</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>
            <div className="flex flex-col items-center">
              <a href={`/policies/${state}`}>
                <button className="mt-3 mb-3 md:mt-10 md:mb-10 py-1 px-5 shadow-md shadow-stone-300 text-black text-lg sm-rounded border-8 border-double border-pcTan hover:scale-110 hover:shadow-lg hover:shadow-stone-500">
                  Policies
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden border-8 border-double border-pcTan sm:rounded-md justify-center items-center">
          <div className="bg-white px-4 py-5 sm:p-6 text-center lg:text-left">
            <div className="font-extrabold leading-10 text-center lg:text-left">
              ABORTION IS HEALTH CARE!
            </div>
            At Project Choice we believe in body autonomy and the woman's
            absolute right to chose. The last thing that should stand in the way
            is lack of information, and that is the reason for this project.
            <br />
            <br />
            Simply select your state to see policies in your area to include
            legality, gestational limits, waiting periods, and special rules for
            minors. We have a shop with branded merchandise whose proceeds
            benefit Planned Parenthood. At the footer are links to organizations
            that can help.
            <br />
            <br />
            If you have any suggestions for us, please use our Contact Form!
          </div>
        </div>
      </div>
      {/* start form code */}
    </section>
  );
}

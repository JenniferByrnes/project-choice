// import mainLogo from "../../assets/mainLogo/fullLogo.png";
import posterTile from "../../assets/posterTile/poster.jpeg";
import Tile from "../../assets/posterTile/unite.png";

function About() {
  return (
    <div
      name="about-tiles"
      className="w-full mb-6 p-6 md:h-screen text-[#2b2b2b]"
    >
      <div className="mt-12 p-6 flex flex-col justify-center w-full">
        <div className="about-heading pb-12 text-center">
          <h2 className="text-4xl inline border-b-4 border-[#dc585d] py-3">
            About Project Choice
          </h2>
        </div>

        <div className="pb-6 grid grid-cols-2 auto-cols-max gap-x-4 gap-y-8">
          <div className="shadow-lg shadow-[#dae8e3] group container flex justify-center text-center items-center mx-auto border-8 border-double border-[#dae8e3]">

            <img
              className="pt-4 pb-2"
              src={Tile}
              style={{ width: "300px", height: "300px" }}
              alt="cover"
            />

          </div>

          <div className="p-4 shadow-lg shadow-[#dae8e3] group container flex justify-center text-center items-center mx-auto border-8 border-double border-[#dae8e3]">
            <h2>
              <h2>
                At Project Choice we believe in body autonomy and the womans
                absolute right to chose. The last thing that should stand in
                someones way is lack of information, and with this passion in
                mind- Project Choice came to be.
                <br />
                <br />
                By filling out a simple form, we
                connect users to clinics closest to them, laws in their
                surrounding areas, resources, and even a shop with all proceeds
                going to Planned Parenthood.
              </h2>
            </h2>
          </div>

          <div className="p-4 shadow-lg shadow-[#dae8e3] group container flex justify-center text-center items-center mx-auto border-8 border-double border-[#dae8e3] ">
            <h2>
              We partner with companies that believe abortion is health care. Our partners include Planned Parenthood, The National Abortion Federation, Abortionfunds.org, and local politicians to make lasting change in policy.
              <br />
              <br />
              In the future, we will have a direct link from our site to Planned Parenthood. Our main goal is to make women's healthcare easy and complete.
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
    </div>
  );
}

export default About;

import posterTile from "../../assets/posterTile/poster.jpeg";
import Tile from "../../assets/posterTile/unite.png";

export default function About() {
  return (
    <div
      className="container mx-auto p-6 text-stone-800"
    >
      <div className="md:mt-12 p-6 flex flex-col justify-center w-full">
        <div className="pb-6 md:pb-12 text-center">
          <h2 className="text-4xl inline border-b-4 border-pcCoral py-3">
            About Project Choice
          </h2>
        </div>

        <div className="md:pb-6 grid md:grid-cols-2 gap-x-4 gap-y-8 ">
          <div className="hidden md:flex shadow-lg shadow-pcGreen container justify-center text-center items-center mx-auto border-8 border-double border-pcGreen">

            <img
              className="pt-4 pb-2"
              src={Tile}
              style={{ width: "300px", height: "300px" }}
              alt="cover"
            />

          </div>

          <div className="p-4 shadow-lg shadow-pcGreen container flex justify-center text-center items-center mx-auto border-8 border-double border-pcGreen">
            <h2>
              <h2>
                At Project Choice we believe in body autonomy and the woman's
                absolute right to chose. The last thing that should stand in
                someone's way is lack of information, and with this passion in
                mind - Project Choice came to be.
                <br />
                <br />
                We provide information about the laws in all 50 states provided by the AbortionAPI
                The laws displayed cover whether or not abortion is legal, any special age restrictions, waiting periods, and Medicare coverage.  We also have a faux shop with all with our branded merchandise.
              </h2>
            </h2>
          </div>

          <div className="p-4 shadow-lg shadow-pcGreen container flex justify-center text-center items-center mx-auto border-8 border-double border-pcGreen ">
            <h2>
              Below are links to excellent resources for current information.  To take action for keep abortion and all women's healthcare safe, legal and affordable, contact your local politicians to make lasting change in policy.
              <br />
              <br />
              Our first goal is to provide information.  Our long range goal is to keep decisions about women's healthcare where these decisions belong - with the woman.  In a future version of our program, our shop would be live and proceeds would benefit organizations that help women.
            </h2>
          </div>

          <div className="hidden md:flex p-4 shadow-lg shadow-pcGreen container justify-center text-center items-center mx-auto border-8 border-double border-pcGreen">
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

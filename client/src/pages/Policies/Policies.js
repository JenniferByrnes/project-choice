import { useParams } from "react-router-dom";
import RegulationsGest from "../../components/RegulationsGest";
import RegulationsMinor from "../../components/RegulationsMinor";
import RegulationsWait from "../../components/RegulationsWait";
import RegulationsInsurance from "../../components/RegulationsInsurance";

export default function Policies() {
  const { state } = useParams();

  return (
    <section
      className="w-full mb-6 p-6">

      <div className="mt-4 p-6 flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center">
          <h2 className="text-4xl inline border-b-4 border-pcCoral py-2">
            {state}
          </h2>
        </div>

        <div className="pb-3 flex flex-col lg:flex-row  gap-x-4 gap-y-8">
          <div className="p-3 shadow-md shadow-pcTan group container justify-center items-center mx-auto md:min-w-[48] border-8 border-double border-pcTan">
            <RegulationsGest stateUS={state}></RegulationsGest>
          </div>
          <div className="p-3 shadow-md shadow-pcTan group container justify-center items-center mx-auto md:min-w-[48] border-8 border-double border-pcTan">
            <RegulationsMinor stateUS={state}></RegulationsMinor>
          </div>
          <div className="p-3 shadow-md shadow-pcTan group container justify-center text-left items-center md:min-w-[48] mx-auto border-8 border-double border-pcTan">
            <RegulationsWait stateUS={state}></RegulationsWait>
          </div>
          <div className="p-3 shadow-md shadow-pcTan group container justify-center text-left items-center md:min-w-[48] mx-auto border-8 border-double border-pcTan">
            <RegulationsInsurance stateUS={state}></RegulationsInsurance>
          </div>
        </div>
      </div>
    </section>
  );
}

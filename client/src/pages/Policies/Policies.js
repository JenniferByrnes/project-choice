import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RegulationsGest from "../../components/RegulationsGest";
import RegulationsMinor from "../../components/RegulationsMinor";
import RegulationsWait from "../../components/RegulationsWait";
import RegulationsInsurance from "../../components/RegulationsInsurance";


export default function Policies() {
  const { state } = useParams();
  const [waiting, setWaiting] = useState();
  const options = {
    headers: {
      token: "O+Pe+i+97g5AJTkg",
    },
  };

  // Currently not used - non functioning.  API call must be back end or we use our own DB to populate these fields
  useEffect(() => {
    // fetch(
    //   `https://api.abortionpolicyapi.com/v1/waiting_periods/states/${state}`,
    //   options
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setWaiting(data);
    //   });
  }, []);
  //   console.log(waiting);



  const medicaidRegulations = { "medicaid_exception_rape_or_incest": true, "medicaid_exception_life": true, "exchange_coverage_no_restrictions": true, "private_coverage_no_restrictions": true, "medicaid_exception_fetal": "Serious fetal anomaly", "Last Updated": "2021-05-21T22:14:49.000Z" }
  const minorRegulations = { "parental_consent_required": true, "judicial_bypass_available": true, "below_age": 18, "parents_required": 1 }
  const waitingPeriodRegulations = { "waiting_period_hours": 24, "counseling_visits": 1 }
  const stateLaws = { "exception_rape_or_incest": true, "exception_health": "Physical", "banned_after_weeks_since_LMP": 0, "exception_life": true, "Last Updated": "2022-08-29T21:34:59.000Z" }



  return (
    <div
      className="w-full mb-6 p-6 pt-[60px]">

      <div className="mt-4 p-6 flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center">
          <h2 className="text-4xl inline border-b-4 border-pcCoral py-2">
            {state}
          </h2>
        </div>

        <div className="pb-3 grid grid-cols-2 auto-cols-max gap-x-4 gap-y-8">
          <div className="p-3 shadow-md shadow-pcTan group container justify-center items-center mx-auto border-8 border-double border-pcTan">
            <div className="p-3 text-center text-2xl underline ">Restrictions</div>
 
              <RegulationsGest stateUS={state}></RegulationsGest>
              <RegulationsMinor stateUS={state}></RegulationsMinor>

          </div>

          <div className="p-3 shadow-md shadow-pcTan group container justify-center text-left items-center mx-auto border-8 border-double border-pcTan">
            <div className="p-3">
              <div className="pb-3 text-center text-2xl underline">Restrictions</div>

              <RegulationsWait stateUS={state}></RegulationsWait>
              <RegulationsInsurance stateUS={state}></RegulationsInsurance>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

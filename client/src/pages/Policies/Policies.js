import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RegulationsGest from "../../components/RegulationsGest";
import RegulationsMinor from "../../components/RegulationsMinor";
import RegulationsWait from "../../components/RegulationsWait";
import RegulationsMedicaid from "../../components/RegulationsMedicaid";


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
            <div className="p-3 text-center underline ">Restrictions</div>
            <div className="p-3 underline ">Laws based on gestation</div>
            <ul className=" p-3 list-disc">
              <RegulationsGest stateUS={state}></RegulationsGest>
              <RegulationsMinor stateUS={state}></RegulationsMinor>
              <RegulationsMedicaid stateUS={state}></RegulationsMedicaid>
              <RegulationsWait stateUS={state}></RegulationsWait>

              <br /><br /><br />
              <li>Colorado law limits public funding for abortion.</li>
              <br />
              <li>
                The state generally requires that parents or legal guardians be
                notified about a minor’s abortion
              </li>
              <br />
              <li>
                Alternatively, a judge can approve a minor’s petition without
                parental notification.
              </li>
              <br />
              <li>
                Colorado law requires abortion providers to submit reports to the
                state.
              </li>
              <br />
              <li>
                On November 3, 2020, voters rejected a ballot initiative that
                would have prohibited abortion after 22 weeks
              </li>
              <br />
              <li>In 2022, Colorado enacted a statutory protection for abortion as a fundamental right.</li>
              <br />
            </ul>
          </div>

          <div className="p-3 shadow-md shadow-pcTan group container justify-center text-left items-center mx-auto border-8 border-double border-pcTan">
            <div className="p-3">
              <div className="pb-3 text-center underline">Clinics</div>
              <ul className="list-disc">
                <li className="p-2">
                  Planned Parenthood of the Rocky Mountains, Inc. Denver, CO
                  http://pprm.org (303) 321-2458
                </li>
                <li className="p-2">
                  Comprehensive Women's Health Center Denver, CO
                  http://cwhccolorado.com (303) 724-8576
                </li>
                <li className="p-2">
                  Boulder Abortion Clinic Boulder, CO http://drhern.com (303)
                  447-1361
                </li>
                <li className="p-2">
                  Planned Parenthood of the Rocky Mountains, Inc. Fort Collins, CO
                  http://pprm.org (970) 493-0281
                </li>
                <li className="p-2">
                  Planned Parenthood of the Rocky Mountains, Inc. Littleton, CO
                  http://pprm.org (303) 798-0963
                </li>
                <li className="p-2">
                  Healthy Futures, P.C. Englewood, CO
                  http://healthyfuturesforwomen.com (303) 991-7700
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

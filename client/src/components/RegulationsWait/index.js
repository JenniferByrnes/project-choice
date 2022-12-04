export default function RegulationsWait(props) {

  //Test cases
  const waitingPeriodRegulations = {}
  //const waitingPeriodRegulations = { "waiting_period_hours": 24, "counseling_visits": 1 }
  //const waitingPeriodRegulations = { waiting_period_hours: 24, waiting_period_notes: 'The ultrasound must take place at least 24 hours before the abortion unless the patient lives more than 100 miles from an abortion provider or if the pregnancy is the result of rape or incest or if the fetus has a lethal anomaly.', counseling_visits: 2 }

  // Check exceptionHealth
  function exceptionHealth() {
    return (
      <div>
        {(waitingPeriodRegulations.exception_health === undefined) ?
          // Yes, it's undefined (not present) - no data available
          (<></>) :
          // data is present

          <li>The counseling requirement can be waived under certain conditions: {waitingPeriodRegulations.exception_health} </li>

        }
      </div>
    )
  }

  function waitingPeriodHours() {
    return (
      <div>
        {(waitingPeriodRegulations.waiting_period_hours === undefined) ?
          // Yes, it's undefined (not present) - no data available
          (<li>{props.stateUS} does not have a mandatory waiting period.</li>) :
          // data is present
          <>
            <li>{props.stateUS} requires a {waitingPeriodRegulations.waiting_period_hours} between receiving state mandated abortion counseling and obtaining an abortion. </li>
            <li>Note that all states waive mandatory waiting period requirements in a medical emergency or when the woman's life or health is threatened. </li>
          </>
        }
      </div>
    )
  }
  function waitingPeriodNotes() {
    return (
      <div>
        {(waitingPeriodRegulations.waiting_period_notes === undefined) ?
          // Yes, it's undefined (not present) - no data available
          (<></>) :
          // data is present

          <li>Special notes about waiting periods for {props.stateUS}: {waitingPeriodRegulations.waiting_period_notes} </li>

        }
      </div>
    )
  }

  // Check the data in the "exception_rape_or_incest field"
  function counselingVisits() {
    return (
      <div>
        {(waitingPeriodRegulations.counseling_visits === undefined) ?
          // It's undefined (not present)
          (<li>No counseling visits are required by the state.</li>) :
          // data is present
          (<div>
            <div>
              {(() => {
                switch (waitingPeriodRegulations.counseling_visits) {
                  case 1:
                    return <li>Counseling is required by the state.</li>
                  case 2:
                    return <li>Abortion counseling or ultrasound must be obtained at the facility before the waiting period begins, requiring two trips to the clinic.</li>
                  default:
                    return <li>No counseling data is available.</li>
                }
              })()}
            </div>
          </div>)
        }
      </div>
    )
  }

  return (
    <div>
      <div>
        <div className="text-xl p-3">Laws about Waiting Periods</div>
        <ul className=" p-3 list-disc">

          {/* Check for waiting period hours requirement*/}
          {waitingPeriodHours()}

          {/* Check for required counseling visits() */}
          {counselingVisits()}

          {/* Check exception_health */}
          {exceptionHealth()}

          {/* Check waitingPeriodNotes() */}
          {waitingPeriodNotes()}

        </ul>
      </div>
    </div>)
}
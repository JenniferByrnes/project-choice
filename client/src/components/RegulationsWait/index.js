export default function RegulationsWait(props) {

  //Test cases
  const waitingPeriodRegulations = {}
  //const waitingPeriodRegulations = { "waiting_period_hours": 24, "counseling_visits": 1 }
  //const waitingPeriodRegulations = { waiting_period_hours: 24, waiting_period_notes: 'The ultrasound must take place at least 24 hours before the abortion unless the patient lives more than 100 miles from an abortion provider or if the pregnancy is the result of rape or incest or if the fetus has a lethal anomaly.', counseling_visits: 2 }

  // Check exceptionHealth
  function exceptionHealth() {
    if (waitingPeriodRegulations.exception_health === undefined)
      return;
    else
      return (
        <li>The counseling requirement can be waived under certain conditions: {waitingPeriodRegulations.exception_health} </li>
      )
  }

  function waitingPeriodHours() {
    if (waitingPeriodRegulations.waiting_period_hours === undefined)
      return <li>{props.stateUS} does not have a mandatory waiting period.</li>;
    else
      return <>
        <li>{props.stateUS} requires a {waitingPeriodRegulations.waiting_period_hours} between receiving state mandated abortion counseling and obtaining an abortion. </li>
        <li>Note that all states waive mandatory waiting period requirements in a medical emergency or when the woman's life or health is threatened. </li>
      </>

  }

  function waitingPeriodNotes() {
    if (waitingPeriodRegulations.waiting_period_notes === undefined)
      return;
    else
      return <li>Special notes about waiting periods for {props.stateUS}: {waitingPeriodRegulations.waiting_period_notes} </li>
  }

  // Check the data in the "exception_rape_or_incest field"
  function counselingVisits() {
    if (waitingPeriodRegulations.counseling_visits === undefined)
      return <li>No counseling visits are required by the state.</li>
    else
      switch (waitingPeriodRegulations.counseling_visits) {
        case 1:
          return <li>Counseling is required by the state.</li>
        case 2:
          return <li>Abortion counseling or ultrasound must be obtained at the facility before the waiting period begins, requiring two trips to the clinic.</li>
        default:
          return <li>No counseling data is available.</li>
      }
  }

  return (
    <>
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
    </>)
}
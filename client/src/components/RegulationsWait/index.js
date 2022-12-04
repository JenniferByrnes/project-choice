export default function RegulationsWait(props) {

  //Test cases
  //const gestationalRegulations = {}
  //const gestationalRegulations = { "banned_after_weeks_since_LMP": 0, "exception_life": false }
  //const gestationalRegulations = { "banned_after_weeks_since_LMP": 15, "exception_life": true }
  const waitingPeriodRegulations = { "waiting_period_hours": 24, "counseling_visits": 1 }
  const regulations= {
    waiting_period_hours: 24,
    counseling_waived_condition: 'The ultrasound must take place at least 24 hours before the abortion unless the patient lives more than 100 miles from an abortion provider or if the pregnancy is the result of rape or incest or if the fetus has a lethal anomaly.',
    counseling_visits: 2
  }
  
  const gestationalRegulations = { "banned_after_weeks_since_LMP": 99, "exception_life": true }

  return (
    <div>
      <div>
      <div className="text-xl p-3">Waiting Periods</div>
            <ul className=" p-3 list-disc">
        {/* Is the data present? */}
        {(gestationalRegulations.banned_after_weeks_since_LMP === undefined) ?
          // Yes, it's undefined (not present) - there are no restrictions
          (<li>{props.stateUS} has no gestational laws limiting abortions.</li>) :

          (<div>
            {/* Is it 99 weeks (no limit)? */}
            {(gestationalRegulations.banned_after_weeks_since_LMP === 99) ?
              // Yes, it's 99 - no time limit
              (<li>{props.stateUS} has no gestation time limit concerning abortions.</li>) :
              // There's a time time limit
              (<div>
                {(gestationalRegulations.banned_after_weeks_since_LMP === 0) ?
                  // Yes, it's 0
                  (<li>{props.stateUS} does not allow abortions for any gestational age.</li>) :
                  // There's a time time limit
                  (<li>{props.stateUS} allows abortions up to {gestationalRegulations.banned_after_weeks_since_LMP} weeks.</li>)
                }
              </div>)

            }</div>)
        }
        </ul>
      </div>
    </div>)
}
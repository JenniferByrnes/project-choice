export default function RegulationsMedicaid(props) {

  //Test cases
  //const gestationalRegulations = {}
  //const gestationalRegulations = { "banned_after_weeks_since_LMP": 0, "exception_life": false }
  //const gestationalRegulations = { "banned_after_weeks_since_LMP": 15, "exception_life": true }
  const medicaidRegulations = { "medicaid_exception_rape_or_incest": true, "medicaid_exception_life": true, "exchange_coverage_no_restrictions": true, "private_coverage_no_restrictions": true, "medicaid_exception_fetal": "Serious fetal anomaly", "Last Updated": "2021-05-21T22:14:49.000Z" }

  
  const gestationalRegulations = { "banned_after_weeks_since_LMP": 99, "exception_life": true }

  return (
    <div>
      <div>
        {/* Is the data present? */}
        {(gestationalRegulations.banned_after_weeks_since_LMP === undefined) ?
          // Yes, it's undefined (not present) - there are no restrictions
          (<li>{props.stateUS} has no gestational laws limiting abortions.</li>) :

          (<div>
            {/* Is it 99 weeks (no limit)? */}
            {(gestationalRegulations.banned_after_weeks_since_LMP === 99) ?
              // Yes, it's 99 - no time limit
              (<li>{props.stateUS} has no gestation time limit concerning abortions.</li>) :
              // There's a time limit
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
      </div>
    </div>)
}
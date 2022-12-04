export default function RegulationsMinor(props) {

  //Test cases
  //const gestationalRegulations = {}
  //const gestationalRegulations = { "banned_after_weeks_since_LMP": 0, "exception_life": false }
  //const gestationalRegulations = { "banned_after_weeks_since_LMP": 15, "exception_life": true }

  const minorRegulations = { "parental_consent_required": true, "judicial_bypass_available": true, "below_age": 18, "parents_required": 1 }
  
  const gestationalRegulations = { "banned_after_weeks_since_LMP": 99, "exception_life": true }

  return (
    <div>
      <div>
      <div className="text-xl p-3">Laws concerning Minors</div>
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
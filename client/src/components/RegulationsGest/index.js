export default function RegulationsGest(props) {

  //Test cases
  //const gestationalRegulations = {}
  //const gestationalRegulations = { "banned_after_weeks_since_LMP": 0, "exception_life": false }
  //const gestationalRegulations = { "banned_after_weeks_since_LMP": 15, "exception_life": true, "exception_health": "only for immenent death" }
  //const gestationalRegulations = { "banned_after_weeks_since_LMP": 15, "exception_life": true }
  const gestationalRegulations = { "banned_after_weeks_since_LMP": 99, "exception_life": true, "exception_rape_or_incest": false }

  // Check the data in the "banned_after_weeks_since_LMP field"
  function allowAbortion() {
    return (
      <div>
        {(() => {
          switch (gestationalRegulations.banned_after_weeks_since_LMP) {
            case 0:
              return <li>{props.stateUS} does not allow abortion.</li>
            case 28:
              return <li>{props.stateUS} has a third trimester ban.</li>
            case 99:
              return <li>{props.stateUS} has a ban after the viability of the fetus.</li>
            default:
              return <li>{props.stateUS} allows abortions up to {gestationalRegulations.banned_after_weeks_since_LMP} weeks after the last menstual period.</li>
          }
        })()}
      </div>
    )
  }

  // Check the data in the "banned_after_weeks_since_LMP field"
  function exceptionLife() {
    return (
      <div>
        {(() => {
          switch (gestationalRegulations.exception_life) {
            case true:
              return <li>Abortion is not banned if necessary to save the pregnant person's life.</li>
            default:
              return <li>There are no exceptions for the life of the pregnant person.</li>
          }
        })()}
      </div>
    )
  }

  // Check the data in the "banned_after_weeks_since_LMP field"
  function exceptionHealth() {
    return (
      <div>
        <li>An abortion may be allowed for the following medical issue: {gestationalRegulations.exception_health}.</li>
      </div>
    )
  }

  // Check the data in the "exception_rape_or_incest field"
  function exceptionRape() {
    return (
      <div>
        {(() => {
          switch (gestationalRegulations.exception_rape_or_incest) {
            case true:
              return <li>Exceptions may be granted in cases or rape or incest.</li>
            default:
              return <li>There are no exceptions for cases or rape or incest.</li>
          }
        })()}
      </div>
    )
  }

  return (
    <div>
      <div>
        <div className="text-xl p-3">Laws based on gestation</div>
        <ul className=" p-3 list-disc">
          {/* Check banned_after_weeks_since_LMP */}
          {(gestationalRegulations.banned_after_weeks_since_LMP === undefined) ?
            // Yes, it's undefined (not present) - there are no restrictions
            (<li>{props.stateUS} has no gestational laws limiting abortions.</li>) :
            // data is present
            (<div>
              {allowAbortion()}
            </div>)
          }
          {/* Check exception_life */}
          {(gestationalRegulations.exception_life === undefined) ?
            // Yes, it's undefined (not present) - there are no restrictions
            (<li>We have no data for {props.stateUS} on this issue.</li>) :
            // data is present
            (<div>
              {exceptionLife()}
            </div>)
          }
          {/* Check exception_health */}
          {(gestationalRegulations.exception_health === undefined) ?
            // Yes, it's undefined (not present) - there are no restrictions
            (<div></div>) :
            // data is present
            (<div>
              {exceptionHealth()}
            </div>)
          }
          {/* Check exception_health */}
          {(gestationalRegulations.exception_rape_or_incest === undefined) ?
            // Yes, it's undefined (not present) - there are no restrictions
            (<div></div>) :
            // data is present
            (<div>
              {exceptionRape()}
            </div>)
          }
        </ul>
      </div>
    </div>)
}
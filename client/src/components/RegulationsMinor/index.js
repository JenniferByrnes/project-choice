export default function RegulationsMinor(props) {

  //Test cases
  const minorRegulations = { "parental_consent_required": true, "judicial_bypass_available": true, "below_age": 18, "parents_required": 1 }
  //const minorRegulations = {}

  // Check the data in the "banned_after_weeks_since_LMP field"
  function parentsRequired() {
    return (
      <div>
        {(minorRegulations.parents_required === undefined) ?
          // It's undefined (not present) - no statement needed
          (<div></div>) :
          // data is present
          (<div>
            <div>
              {(() => {
                switch (minorRegulations.parents_required) {
                  case 1:
                    return <li>One parent must be notified.</li>
                  case 2:
                    return <li>Both parents must be notified.</li>
                  default:
                    return <li>There are no restrictions on minors' abortions currently being enforced.</li>
                }

              })()}
              <li>Many, but not all, states have extended the definition of "parent" to include other adult guardians. If parents meeting the state's definition cannot be located, a minor would often need to secure a judicial bypass.</li>
            </div>
          </div>)
        }
      </div>
    )
  }

  // Check the text data in the "banned_after_weeks_since_LMP field"
  function belowAge() {
    return (
      <div>
        {(minorRegulations.below_age === undefined) ?
          // Yes, it's undefined (not present) - there are no restrictions
          (<li>There are no restrictions on minor's abortions currently being enforced in {props.stateUS}.</li>) :
          // data is present
          <li>Abortions restrictions for minors end at age {minorRegulations.below_age}.</li>
        }
      </div>
    )
  }
  function parentalConsentRequired() {
    return (
      <div>
        {(minorRegulations.parental_consent_required !== true) ?
          // Not checked - no comment needed 
          (<></>) :
          // Yes, a parent or parents must give permission for the minor to have an abortion.
          (<li>A parent or parents must give permission for the minor to have an abortion.</li>)
        }
      </div>
    )
  }

  // Check the data in the "exception_rape_or_incest field"
  function judicialBypassAvailable() {
    return (
      <div>
        {(minorRegulations.judicial_bypass_available === undefined) ?
          // It's undefined (not present) - no statement needed
          (<div></div>) :
          // data is present
          (<div>
            <div>
              {(() => {
                switch (minorRegulations.judicial_bypass_available) {
                  case true:
                    return <li>A judge can excuse a minor from the required parental consent and/or notification.</li>
                  default:
                    return <li>A judge cannot excuse a minor from the required parental consent and/or notification.</li>
                }
              })()}
              <li>A judicial bypass is available in most states with restrictions, and in some the patient can be excused by a doctor.</li>
            </div>
          </div>)
        }
      </div>
    )
  }

  return (
    <div>
      <div>
        <div className="text-xl p-3">Laws concerning Minors</div>
        <ul className=" p-3 list-disc">

          {/* Check exception_life */}
          {belowAge()}

          {/* Check exception_health */}
          {parentsRequired()}

          {/* Check parental_consent_required */}
          {parentalConsentRequired()}

          {/* Check for availablitiy of judicial bypass */}
          {judicialBypassAvailable()}

        </ul>
      </div>
    </div>)
}
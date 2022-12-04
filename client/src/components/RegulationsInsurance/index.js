export default function RegulationsInsurance(props) {

  //Test cases
  //const insuranceRegulations = {}
  const insuranceRegulations = {"medicaid_exception_rape_or_incest": true,"medicaid_exception_life": true, "exchange_exception_life": true,"private_exception_life": true}
  //const insuranceRegulations = { medicaid_exception_health: 'Major Bodily Function',medicaid_exception_rape_or_incest: true, medicaid_exception_life: true,exchange_coverage_no_restrictions: true, private_coverage_no_restrictions: true,medicaid_exception_fetal: 'Serious fetal anomaly' }



  // Check the data in the "banned_after_weeks_since_LMP field"
  function exceptionLife() {
    return (
      <div>
        {(() => {
          switch (insuranceRegulations.medicaid_exception_life) {
            case true:
              return <li>Medicaid coverage is allowed if the abortion is necessary to save the pregnant person's life.</li>
            default:
              return <li>There are no exceptions in Medicaid coverage for the life of the pregnant person.</li>
          }
        })()}
      </div>
    )
  }

  // Check the text data in the "banned_after_weeks_since_LMP field"
  function exceptionHealth() {
    return (
      <div>
        <li>Medicaid coverage may be allowed for the following medical issue: {insuranceRegulations.medicaid_exception_health}.</li>
      </div>
    )
  }

  // Check the data in the "exception_rape_or_incest field"
  function exceptionRape() {
    return (
      <div>
        {(() => {
          switch (insuranceRegulations.medicaid_exception_rape_or_incest) {
            case true:
              return <li>Medicaid coverage may be granted in cases or rape or incest.</li>
            default:
              return <li>There are no Medicaid exceptions for cases or rape or incest.</li>
          }
        })()}
      </div>
    )
  }

  return (
    <div>
      <div>
        <div className="text-xl p-3">Laws governing insurance coverage</div>
        <ul className=" p-3 list-disc">
          {/* Check exception_life */}
          {(insuranceRegulations.medicaid_exception_life === undefined) ?
            // Yes, it's undefined (not present) - there are no restrictions
            (<li>We have no data for {props.stateUS} on this issue.</li>) :
            // data is present
            (<div>
              {exceptionLife()}
            </div>)
          }
          {/* Check exception_health */}
          {(insuranceRegulations.medicaid_exception_health === undefined) ?
            // Yes, it's undefined (not present) - there are no restrictions
            (<div></div>) :
            // data is present
            (<div>
              {exceptionHealth()}
            </div>)
          }
          {/* Check exception_health */}
          {(insuranceRegulations.medicaid_exception_rape_or_incest === undefined) ?
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
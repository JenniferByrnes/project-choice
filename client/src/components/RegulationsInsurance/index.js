export default function RegulationsInsurance(props) {

  //Test cases
  //const insuranceRegulations = {}
  //const insuranceRegulations = { "medicaid_exception_rape_or_incest": true, "medicaid_exception_life": true, "exchange_exception_life": true, "private_exception_life": true }
  const insuranceRegulations = { medicaid_exception_health: 'Major Bodily Function', medicaid_exception_rape_or_incest: true, medicaid_exception_life: true, exchange_coverage_no_restrictions: true, private_coverage_no_restrictions: true, medicaid_exception_fetal: 'Serious fetal anomaly' }


  // Check the data in the "banned_after_weeks_since_LMP field"
  function exceptionLife() {
    if (insuranceRegulations.medicaid_exception_life === true)
      return (
        <li>Medicaid coverage is allowed if the abortion is necessary to save the pregnant person's life.</li>
      )
  }

  // Check the text data in the "banned_after_weeks_since_LMP field"
  function exceptionHealth() {
    if (insuranceRegulations.medicaid_exception_health !== null)
      return (
        <li>Medicaid coverage may be allowed for the following medical issue: {insuranceRegulations.medicaid_exception_health}.</li>
      )
  }

  // Check the data in the "exception_rape_or_incest field"
  function exceptionRape() {
    if (insuranceRegulations.medicaid_exception_rape_or_incest === undefined)
      return;
    else
      switch (insuranceRegulations.medicaid_exception_rape_or_incest) {
        case true:
          return <li>Medicaid coverage may be granted in cases or rape or incest.</li>
        default:
          return <li>There are no Medicaid exceptions for cases or rape or incest.</li>
      }
  }

  return (
    <div>
      <div className="text-xl p-3">Laws governing insurance coverage</div>
      <ul className=" p-3 list-disc">
        
        {/* Check exception_life */}
        {exceptionLife()}

        {/* Check exception_health */}
        {exceptionHealth()}

        {/* Check exception_rape_or_incest */}
        {exceptionRape()}

      </ul>
    </div>)
}
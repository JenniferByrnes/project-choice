import { QUERY_INSURANCE } from '../../utils/queries';
import { useQuery } from '@apollo/client';

export default function RegulationsInsurance(props) {

  const { loading, error, data } = useQuery(QUERY_INSURANCE, { variables: { state: props.stateUS } });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const insuranceRegulations = data.insuranceRegs.insuranceRegulations[0]
  console.log("JKBinsuranceRegulations=")
  console.log(insuranceRegulations)

  // Check the data in the "banned_after_weeks_since_LMP field"
  function exceptionLife() {
    if (insuranceRegulations.medicaid_exception_life === true)
      return <li>Medicaid coverage is allowed if the abortion is necessary to save the pregnant person's life.</li>
  }

  // Check the text data in the "banned_after_weeks_since_LMP field"
  function exceptionHealth() {
    if (insuranceRegulations.medicaid_exception_health === true)
      return <li>Medicaid coverage may be allowed for the following medical issue: {insuranceRegulations.medicaid_exception_health}.</li>
  }

  // Check the data in the "exception_rape_or_incest field"
  function exceptionRape() {
    if (insuranceRegulations.medicaid_exception_rape_or_incest === true)
      return <li>Medicaid coverage may be granted in cases or rape or incest.</li>
  }

  // Check the data in the "exception_fetal field"
  function exceptionFetal() {
    if (insuranceRegulations.medicaid_exception_fetal)
      return <li>An exception can be made for the following fetal issue: {insuranceRegulations.medicaid_exception_fetal}</li>
  }

  // Check the data in the "banned_after_weeks_since_LMP field"
  function exceptionExchLife() {
    if (insuranceRegulations.exchange_exception_life === true)
      return <li>Exchange coverage is allowed if the abortion is necessary to save the pregnant person's life.</li>
  }

  // Check the text data in the "banned_after_weeks_since_LMP field"
  function exceptionExchHealth() {
    if (insuranceRegulations.exchange_exception_health === true)
      return <li>Exchange coverage may be allowed for the following medical issue: {insuranceRegulations.medicaid_exception_health}.</li>
  }

  // Check the data in the "exception_rape_or_incest field"
  function exceptionExchRape() {
    if (insuranceRegulations.exchange_exception_rape_or_incest === true)
      return <li>Exchange coverage may be granted in cases or rape or incest.</li>
  }

  return (
    <div>
      <div className="text-xl p-3">Laws governing insurance coverage</div>
      <ul className=" p-3 list-disc">

        {/* Check Medicaid exception_life */}
        {exceptionLife()}

        {/* Check Medicaid exception_health */}
        {exceptionHealth()}

        {/* Check Medicaid exception_rape_or_incest */}
        {exceptionRape()}

        {/* Check Medicaid exception_fetal */}
        {exceptionFetal()}

        {/* Check exchange exception_life */}
        {exceptionExchLife()}

        {/* Check exchange exception_health */}
        {exceptionExchHealth()}

        {/* Check exchange exception_rape_or_incest */}
        {exceptionExchRape()}

      </ul>
    </div>)
}
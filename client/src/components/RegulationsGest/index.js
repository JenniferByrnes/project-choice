import { QUERY_GESTATION } from '../../utils/queries';
import { useQuery } from '@apollo/client';

export default function RegulationsGest(props) {

  const { loading, error, data } = useQuery(QUERY_GESTATION, { variables: { state: props.stateUS } });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

    //const gestationalRegulations = ((status === "success") ? data.gestationRegs.gestationalRegulations[0] : "")
  // if (data === null) {
  //   return <li>There is no data on this category for {props.stateUS}</li>
  //   }
  //const gestationalRegulations = ((status === "success") ? data.gestationRegs.gestationalRegulations[0] : "")
  const gestationalRegulations =  data.gestationRegs.gestationalRegulations[0] 
  console.log("JKBgestationalRegulations=")
  console.log(gestationalRegulations)

// if (data) {
//   const gestationalRegulations = data.gestationRegs.gestationalRegulations[0]}
//   if (!gestationalRegulations) {
//     return <li>There is no data on this category for {props.stateUS}</li>
//   }

  // Check the data in the "banned_after_weeks_since_LMP field"
  function allowAbortion() {
    if (!gestationalRegulations.banned_after_weeks_since_LMP)
      return <li>{props.stateUS} has no gestational laws limiting abortions.</li>;
    else
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
  }

  // Check the data in the "exception_life"
  function exceptionLife() {
    if (gestationalRegulations.exception_life === true)
      return (
        <li>Abortion is not banned if necessary to save the pregnant person's life.</li>
      )
  }

  // Check the data in the "exception_health"
  function exceptionHealth() {
    if (!gestationalRegulations.exception_health)
      return;
    else
      return (
        <li>An abortion may be allowed for the following patient medical issue: {gestationalRegulations.exception_health}.</li>
      )
  }

  // Check the data in the "exception_fetal"
  function exceptionFetal() {
    if (!gestationalRegulations.exception_fetal)
      return;
    else
      return (
        <li>An abortion may be allowed for the following fetal medical issue: {gestationalRegulations.exception_fetal}.</li>
      )
  }

  // Check the data in the "exception_rape_or_incest field"
  function exceptionRape() {
    if (!gestationalRegulations.exception_rape_or_incest)
      return;
    else
      return (
        <li>An exception may be granted in cases or rape or incest.</li>
      )
  }

  return (
    <div>
      <div className="text-xl p-3">Laws based on gestation</div>
      <ul className=" p-3 list-disc">

        {/* Check banned_after_weeks_since_LMP */}
        {allowAbortion()}

        {/* Check exception_life */}
        {exceptionLife()}

        {/* Check exception_health */}
        {exceptionHealth()}

        {/* Check exception_health */}
        {exceptionFetal()}

        {/* Check exception_rape_or_incest */}
        {exceptionRape()}

      </ul>
    </div>)
}
import { QUERY_MINOR } from '../../utils/queries';
import { useQuery } from '@apollo/client';

export default function RegulationsMinor(props) {

  const { loading, error, data } = useQuery(QUERY_MINOR, { variables: { state: props.stateUS } });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  const minorRegulations =  data.minorRegs.minorRegulations[0] 
  console.log("JKBminorRegulations=")
  console.log(minorRegulations)

  // Check the data in the "banned_after_weeks_since_LMP field"
  function parentsRequired() {
    const parentDef = <li>Many, but not all, states have extended the definition of "parent" to include other adult guardians. If parents meeting the state's definition cannot be located, a minor would often need to secure a judicial bypass.</li>
    if (minorRegulations.parents_required === undefined)
      return <li>There are no restrictions on minors' abortions currently being enforced.</li>
    else {
      switch (minorRegulations.parents_required) {
        case 1:
          return <><li>One parent must be notified.</li>{parentDef}</>
        case 2:
          return <><li>Both parents must be notified.</li>{parentDef}</>
        default:
          return <li>There are no restrictions on minors' abortions currently being enforced.</li>
      }
    }
  }

  // Check the text data in the "banned_after_weeks_since_LMP field"
  function belowAge() {
    if (minorRegulations.below_age === undefined)
      return <li>There are no restrictions on minor's abortions currently being enforced in {props.stateUS}.</li>
    else
      return <li>Abortions restrictions for minors end at age {minorRegulations.below_age}.</li>
  }

  function parentalConsentRequired() {
    if (minorRegulations.parental_consent_required === true)
      return <li>A parent or parents must give permission for the minor to have an abortion.</li>
  }

  // Check the data in the "exception_rape_or_incest field"
  function judicialBypassAvailable() {
    if (minorRegulations.judicial_bypass_available === true)
      return <li>A judge can excuse a minor from the required parental consent and/or notification.</li>
    else
      return <li>A judicial bypass is available in most states with restrictions, and in some the patient can be excused by a doctor.</li>
  }

  return (
    <>
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
    </>)
}
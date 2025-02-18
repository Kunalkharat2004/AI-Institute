import InstituteDetails from './InstitutionDetails'
import InstituteTrust from './InstituteTrust'
import PrincipalDetails from './PrincipleDetails'
import ProfilePicture from './ProfilePicture'
import University from './University'
import RegistrationSPOC from './RegistrationSPOC'
import InstituteInfoIntake from './InstituteInfoIntake'
import FinancialManagement from './FinancialManagement'

const Form = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-2 md:p-4">
        <div className="p-8 space-y-8">
          <div className="grid md:grid-cols-2 justify-center gap-8">
            <ProfilePicture />
            <InstituteDetails />
          </div>
          <University/>
          <InstituteTrust />
          <PrincipalDetails/>
          <RegistrationSPOC />
          <InstituteInfoIntake />
          <FinancialManagement />
        </div>
      </div>
  )
}

export default Form
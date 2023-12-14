// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from 'react'
    // IMPORTING COMPONENTS
import Launchpadcontainer from '../components/LaunchpadPage/Launchpadcontainer'
import Overview from '../components/LaunchpadPage/Overview'
import Team from '../components/LaunchpadPage/team'

// A FUNCTION THAT RETURNS THE LAUNCHPADPAGE
export default function LaunchpadPage(){
    // A BOOLEAN TO KEEP TRACK OF WHETHER OR NOT TO VIEW THE TEAM SECTION
    const [viewTeam, setViewTeam] = React.useState(false)

    // A FUNCTION TO GENERATE THE TEAM SECTION
    function TeamGenerator() {
        const TeamArray = []

        for(let i = 0; i < 5; i++){
            TeamArray.push(<Team/>)
        }

        return TeamArray
    }

  return (
    <div className='min-h-[100vh] scroll-smooth box-border transition-all duration-500 ease-in-out p-[20px]'>
      <Launchpadcontainer/>

      <div className="launchpad_container__viewOverviewToggle flex items-center gap-[20px] my-0 mx-[20px] mt-[100px] w-full sm:w-[95%] sm:my-0 sm:mx-auto sm:mt-[150px] md:w-full md:ml-[20px] lg:mt-[50px] lg:gap-[50px]">
            <p 
                onClick={() => setViewTeam(false)}
                
                style={
                    
                    viewTeam
                        ? 
                    null 
                        : 
                    {
                        "backgroundColor": "#EE9E26",
                        "border": "2px solid black",
                        "borderRadius": "20px",
                        "padding": "10px"
                    }
                }

                className='text-[#FFF] font-[Inter] text-[20px] not-italic font-[400] leading-normal cursor-pointer transition-all duration-500 ease-in-out'
            >Overview</p>

            <p 
                onClick={() => setViewTeam(true)}
                
                style={
                    viewTeam 
                        ? 
                    {
                        "backgroundColor": "#EE9E26",
                        "border": "2px solid black",
                        "borderRadius": "20px",
                        "padding": "10px"
                    } 
                        : 
                    null
                }

                className='text-[#FFF] font-[Inter] text-[20px] not-italic font-[400] leading-normal cursor-pointer transition-all duration-500 ease-in-out'
            >Team</p>
        </div>
                
        <div className={viewTeam ? "grid grid-flow-row grid-cols-2 my-[80px] mx-auto py-0 px-[10px] gap-y-[20px] gap-x-[10px] w-full lg:grid-cols-3" : ""}>
            {viewTeam ? TeamGenerator() : 
            <Overview/>}
        </div>
    </div>
  )
}

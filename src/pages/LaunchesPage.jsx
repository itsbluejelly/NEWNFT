
import React from "react"
import { useKeenSlider } from "keen-slider/react"
    // IMPORTING NECESSARY COMPONENTS
import LiveCollection from "../components/LaunchesPage/LiveCollection"
import PastCollection from "../components/LaunchesPage/PastCollection"
import CarouselEntry from "../components/LaunchesPage/CarouselEntry"
    // IMPORTING NECESSARY DATABASES
import {launchpadCollectionsData} from '../database/launchpadCollectionsData'
    // IMPORTING CSS FILE
import "keen-slider/keen-slider.min.css"

export default function LaunchesPage(){
    const [viewPastCollections, setViewPastCollections] = React.useState(false)
    // A BOOLEAN TO KEEP TRACK OF OPACITIES
    const [opacities, setOpacities] = React.useState([])

    // OBTAINING THE DATA FROM DATABASE OF LIVE AND PAST COLLECTIONS
    const {liveCollections, pastCollections, carouselCollections} = launchpadCollectionsData

    // GETTING THE USEREF FROM REACT SLIDER
    const [sliderRef] = useKeenSlider(
        { 
            loop: true,
            slides: carouselCollections.length,

            detailsChanged(s) {
                const new_opacities = s.track.details.slides.map((slide) => slide.portion)
                setOpacities(new_opacities)
            }
        },

        [
            (slider) => {
                let timeout
                let mouseOver = false
                
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }

                function nextTimeout() {
                    clearTimeout(timeout)
                    
                    if (mouseOver) return
                
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })

                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                
                    nextTimeout()
                })

                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            }
        ]
    )

    // A FUNCTION TO GENERATE AN ARRAY OF LIVE COLLECTIONS
    function liveCollectionsGenerator() {
        const liveCollectionsArray = []

        for(let i = 0; i < 20; i++){
            liveCollectionsArray.push(<LiveCollection
                key = {i}
                image = {liveCollections.cardImage}
                title = {liveCollections.cardTitle}
                banner = {liveCollections.cardBanner}
                price = {liveCollections.price}
                id = {i}
            />)
        }

        return liveCollectionsArray
    }

    // A FUNCTION TO GENERATE AN ARRAY OF PAST COLLECTIONS
    function pastCollectionsGenerator() {
        const pastCollectionsArray = []

        for(let i = 0; i < 20; i++){
            pastCollectionsArray.push(<PastCollection
                key = {i}
                image = {pastCollections.cardImage}
                title = {pastCollections.cardTitle}
                banner = {pastCollections.cardBanner}
                price = {pastCollections.price}
                id = {i}
            />)
        }

        return pastCollectionsArray
    }

    // AN ARRAY OF CAROUSELENTRIES
    const generatedEntriesArray = carouselCollections.map(
        (detail, index) => (
            <div 
                className="keen-slider__slide"
                key={detail._id}
                style={{ opacity: opacities[index] }}
            >
                <CarouselEntry 
                    image={detail.cardImage}
                    heading={detail.cardTitle}
                    description={detail.cardInfo}
                    id={detail._id}
                />
            </div>
        )
    )

    return(
        <div className="min-h-screen scroll-smooth box-border transition-all duration-500 ease-in-out">
            <div className="keen-slider md:min-h-[80vh] md:mb-5 lg:mb-0 lg:h-[100%]" ref={sliderRef}>
                {generatedEntriesArray}
            </div>

            <div className="flex items-center gap-[20px] my-0 mx-[20px] mt-[100px] w-full sm:w-[70%] sm:my-0 sm:mx-auto sm:mt-[150px] md:w-full md:ml-[12%] lg:mt-[50px] lg:gap-[50px]">
                <p 
                     onClick={() => setViewPastCollections(false)}
                    
                     style={
                         viewPastCollections 
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

                     className="text-[#FFF] font-[Inter] text-[20px] not-italic font-[400] leading-normal cursor-pointer transition-all duration-500 ease-in-out"
                 >Live and upcoming</p>

                 <p 
                     onClick={() => setViewPastCollections(true)}
                    
                     style={
                         viewPastCollections 
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

                     className="text-[#FFF] font-[Inter] text-[20px] not-italic font-[400] leading-normal cursor-pointer transition-all duration-500 ease-in-out"
                 >Past</p>
             </div>

             <div className="grid grid-flow-row grid-cols-2 my-[80px] mx-auto py-0 px-[10px] gap-y-[20px] gap-x-[10px] w-full lg:grid-cols-3">
                 {viewPastCollections ? pastCollectionsGenerator() : liveCollectionsGenerator()}
             </div>
         </div>
    
  
  );
  
}


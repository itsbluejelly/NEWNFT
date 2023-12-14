// IMPORTING NECESSARY FILES
  // IMPORTING NECESSARY COMPONENTS
import Carousel from "../../components/HomePage/HomePageCarousel";
import WhaleActivityContainer from "../../components/HomePage/WhaleActivityContainer";
import Table from "../../components/HomePage/Table";
import { Icon } from "@iconify/react";
import AllCollectionsPageCard from "../../components/AllCollectionsPage/AllCollectionsPageCard";
  
  // IMPORTING DATABASES
import allCollectionsCardData from "../../database/allCollectionsCardData";

// A FUNCTION THAT RETURNS THE HOMEPAGE
export default function HomePage() {
  // A FUNCTION TO GENERATE AN ARRAY OF COLLECTION CARDS
  function collectionCardsArrayGenerator(){
    return allCollectionsCardData.map((cardData, index) => (
      <AllCollectionsPageCard
        key = {index}
        cardImage = {cardData.cardImage}
        cardTitle = {cardData.cardTitle}
        volume = {cardData.volume}
      />
    ))
  }

  return ( 
    <div>
      <Carousel />
      <WhaleActivityContainer />
      <Table />

      <div className="main-content">
        <div className="top flex flex-col flex-nowrap items-center  p-5 md:flex-row">
          <div className=" flex flex-row flex-nowrap gap-1 items-center text-left mr-20  ">

            <div className="flex flex-row flex-nowrap gap-2 items-center whitespace-nowrap text-2xl mr-auto w-full justify-self-start text-left ">Top collections
              <div className="flex flex-row flex-nowrap gap-1">
                <span className="text-[#76a9fa] text-2xl font-bold flex flex-row flex-nowrap items-center">Generative</span>
              
                <Icon
                  icon="mingcute:down-fill"
                  color="#76a9fa"
                  width="26"
                  height="26"
                />
              </div>
            </div>
          </div>

          <button
            className="generative-btn flex items-center justify-center px-8 py-4 h-10 cursor-pointer ml-auto "
            style={{ cursor: "pointer" }}
            onClick={() => location.assign("/allcollections")}
          >
            View all
          </button>
        </div>
        
        <div>
          <div className="cards gap-3 py-10 px-5 grid sm:grid-cols-3 lg:grid-cols-5 lg:px-20">
            {collectionCardsArrayGenerator()}
          </div>
        </div>
      </div>
    </div>
  );
}

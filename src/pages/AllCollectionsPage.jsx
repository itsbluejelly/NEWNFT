// IMPORTING NECESSARY FILES
  // IMPORTING MODULES
import { useState } from "react";
  // IMPORTING COMPONENTS
import AllCollectionsPageCard from "../components/AllCollectionsPage/AllCollectionsPageCard"
import FilterBar from "../components/FilterBar"
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import AllCollectionsPageModal from "../components/AllCollectionsPage/AllCollectionsPageModal";
  // IMPORTING DATABASE
import allCollectionsCardData from "../database/allCollectionsCardData";

// A FUNCTION TO EXPORT THE ALLCOLLECTIONSPAGE
export default function AllCollectionsPage(){
  // A BOOLEAN TO KEEP TRACK OF OPENING AND CLOSING OF MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  // A FUNCTION TO KEEP MODAL OPEN
  const toggleModal = () => {
    setIsModalOpen(true);
  };

  // A FUNCTION TO KEEP MODAL CLOSED
  const closeModal = () => {
    setIsModalOpen(false)
  }

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
    <div className=" min-h-screen mt-[-40px]">
      <>
        <div className="flex justify-between p-4 ">
          <h3 className=" text-3xl collections-title mt-[20px]">
            Explore 
            
            <span className="text-blue-400">All Collections
              <KeyboardArrowDown className="text-blue-400" />
            </span>
          </h3>
        </div>

        <div className="flex justify-between items-center  mx-6 sticky top-2 md:hidden">
          <div className="flex items-center justify-between rounded-lg  border-2 border-gray-600 w-full " >
            <div className="relative">
              <input
                className="bg-transparent border-b border-gray-600   w-40 pl-1 rounded-md"
                type="text"
                placeholder="Search collections"
                name="searchInput"
              />
              
              <SearchIcon className="text-gray-600 absolute left-36 top-1/2 transform -translate-y-1/2" />
            </div>
            
            <div className="flex text-blue-400 px-4  cursor-pointer" onClick={toggleModal}> 
              <div className="vertical-line relative h-10  w-0.5  bg-slate-400 "></div>
                <span>
                  <TuneIcon className="text-2xl pr-1 my-2" />
                </span>

              <span className="my-2">Filter</span>
            </div>

            {isModalOpen && <AllCollectionsPageModal closeModal={closeModal} />}
          </div>
        </div>

        <div className='sticky hidden top-2 md:block' >
          <FilterBar />
        </div>
      
        <div>
          <div className="cards gap-3 py-10 px-5 grid sm:grid-cols-3 lg:grid-cols-5 lg:px-20">
            {collectionCardsArrayGenerator()}
          </div>
        </div>
      </>  
    </div>
  );
}

// IMPORTING NECESSARY FILES
// IMPORTING DATABASE
import Details from "../../database/NFTDetails";
// IMPORTING MODULES
import { useKeenSlider } from "keen-slider/react";
import React from "react";
// IMPORTING CSS FILES
import "keen-slider/keen-slider.min.css";
// IMPORTING COMPONENTS
import WhaleActivityCard from "./WhaleActivityCard";
import CarouselArrow from "../CarouselArrow";

// A FUNCTION THAT RETURNS A WHALEACTIVITYCONTAINER
export default function WhaleActivityContainer() {
  // A USESTATE TO KEEP TRACK OF CURRENT SLIDE INDEX
  const [currentSlide, setCurrentSlide] = React.useState(0);
  // A USESTATE TO CHECK IF COMPONENT HAS LOADED OR NOT
  const [loaded, setLoaded] = React.useState(false);

  // A SLIDERREF FOR USE KEEN SLIDER
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },

    created() {
      setLoaded(true);
    },

    slides: {
      perView: 3,
      spacing: 5,
    },
  });

  // AN ARRAY OF CAROUSEL CARDS
  function whaleActivityCardArrayGenerator() {
    return Details.map((detail, index) => (
      <div className="keen-slider__slide" key={index}>
        <WhaleActivityCard
          cardImage={detail.cardImage}
          index={detail.index}
          cardTitle={detail.cardTitle}
          price={detail.price}
          released={detail.released}
        />
      </div>
    ));
  }

  return (
    <div
      className="flex flex-col justify-center items-center keen-slider transition-all duration-500 my-[10px] px-8"
      ref={sliderRef}
    >
      <h1 className="title-sm  mr-auto px-4 mb-5 text-xl font-extrabold tracking-wider">
        Whale activity
      </h1>
      <div className="flex w-11/12 justify-normal items-center">
        <div className="flex w-full lg:w-4/5 px-1">
          {whaleActivityCardArrayGenerator()}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="max-[640px]:hidden">
          <CarouselArrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <CarouselArrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </div>
      )}

      {loaded && instanceRef.current && (
        <div className="justify-center flex py-[10px] sm:hidden">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "border-none w-[10px] h-[10px] rounded-[50%] my-0 mx-[5px] p-[5px] cursor-pointer focus:outline-none active:bg-black" +
                  (currentSlide === idx ? " bg-black" : " bg-blue-500")
                }
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}

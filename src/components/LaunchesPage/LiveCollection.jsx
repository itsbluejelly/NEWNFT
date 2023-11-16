/* eslint-disable react/prop-types */
// IMPORT NECESSARY MODULES
import {NavLink} from "react-router-dom"

// EXPORTING A LIVECOLLECTION FUNCTION
export default function LiveCollection(props){
    return(
        <NavLink 
            className="live_collection_container w-[170px] h-[300px] rounded-[20px] border-solid border-[0.5px] border-[#968E8E] transition-all duration-500 ease-in-out my-0 mx-auto active:scale-[1.2] active:shadow-search-container__search-bar sm:w-[300px] sm:h-[450px] md:w-[230px] md:h-[320px] lg:w-[300px] lg:h-[450px]"
            to={`/launchpad/launch details/?liveCollectionID=${props.id}`}
        >
            <figure>
                <img 
                    src={`${props.image}`} 
                    alt="live-collection-photo"
                    title="live-collection-photo"
                    loading="lazy"
                    width={100}
                    height={100}
                    className="w-full h-[80%]"
                />

                <figcaption className="text-[#FFF] font-[Inter] text-[15px] not-italic font-[600] leading-[130%] text-center">{props.title}</figcaption>
            </figure>

            <div className="flex justify-around mt-[10px]">
                <li className="text-[#298F27] font-[Inter] text-[15px] not-italic font-[500] leading-[130%] text-center">{props.banner}</li>
                <p className="text-[#968E8E] font-[Inter] text-[14px] not-italic font-[500] leading-[130%]">{props.price}</p>
                
                <span className="live_collection_container__data--calender">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.3514 0C6.84397 0 7.24329 0.41328 7.24329 0.923077V1.84615H16.1622V0.923077C16.1622 0.41328 16.5616 0 17.0541 0C17.5466 0 17.946 0.41328 17.946 0.923077V1.84615H20.6217C22.0994 1.84615 23.2973 3.08598 23.2973 4.61538V21.2308C23.2973 22.7601 22.0994 24 20.6217 24H2.78383C1.30609 24 0.108154 22.7601 0.108154 21.2308V4.61538C0.108154 3.08598 1.30609 1.84615 2.78383 1.84615H5.45951V0.923077C5.45951 0.41328 5.85882 0 6.3514 0ZM16.1622 3.69231V4.61538C16.1622 5.12518 16.5616 5.53846 17.0541 5.53846C17.5466 5.53846 17.946 5.12518 17.946 4.61538V3.69231H20.6217C21.1142 3.69231 21.5136 4.10559 21.5136 4.61538V7.38462H1.89194V4.61538C1.89194 4.10559 2.29126 3.69231 2.78383 3.69231H5.45951V4.61538C5.45951 5.12518 5.85882 5.53846 6.3514 5.53846C6.84397 5.53846 7.24329 5.12518 7.24329 4.61538V3.69231H16.1622ZM1.89194 9.23077V21.2308C1.89194 21.7405 2.29126 22.1538 2.78383 22.1538H20.6217C21.1142 22.1538 21.5136 21.7405 21.5136 21.2308V9.23077H1.89194ZM10.8109 12C10.8109 11.4902 11.2102 11.0769 11.7027 11.0769C12.1953 11.0769 12.5946 11.4902 12.5946 12C12.5946 12.5098 12.1953 12.9231 11.7027 12.9231C11.2102 12.9231 10.8109 12.5098 10.8109 12ZM15.2703 11.0769C14.7777 11.0769 14.3784 11.4902 14.3784 12C14.3784 12.5098 14.7777 12.9231 15.2703 12.9231C15.7629 12.9231 16.1622 12.5098 16.1622 12C16.1622 11.4902 15.7629 11.0769 15.2703 11.0769ZM17.946 12C17.946 11.4902 18.3454 11.0769 18.8379 11.0769C19.3304 11.0769 19.7298 11.4902 19.7298 12C19.7298 12.5098 19.3304 12.9231 18.8379 12.9231C18.3454 12.9231 17.946 12.5098 17.946 12ZM18.8379 14.7692C18.3454 14.7692 17.946 15.1825 17.946 15.6923C17.946 16.2021 18.3454 16.6154 18.8379 16.6154C19.3304 16.6154 19.7298 16.2021 19.7298 15.6923C19.7298 15.1825 19.3304 14.7692 18.8379 14.7692ZM14.3784 15.6923C14.3784 15.1825 14.7777 14.7692 15.2703 14.7692C15.7629 14.7692 16.1622 15.1825 16.1622 15.6923C16.1622 16.2021 15.7629 16.6154 15.2703 16.6154C14.7777 16.6154 14.3784 16.2021 14.3784 15.6923ZM11.7027 14.7692C11.2102 14.7692 10.8109 15.1825 10.8109 15.6923C10.8109 16.2021 11.2102 16.6154 11.7027 16.6154C12.1953 16.6154 12.5946 16.2021 12.5946 15.6923C12.5946 15.1825 12.1953 14.7692 11.7027 14.7692ZM7.24329 15.6923C7.24329 15.1825 7.64261 14.7692 8.13518 14.7692C8.62776 14.7692 9.02707 15.1825 9.02707 15.6923C9.02707 16.2021 8.62776 16.6154 8.13518 16.6154C7.64261 16.6154 7.24329 16.2021 7.24329 15.6923ZM4.56761 14.7692C4.07504 14.7692 3.67572 15.1825 3.67572 15.6923C3.67572 16.2021 4.07504 16.6154 4.56761 16.6154C5.06019 16.6154 5.45951 16.2021 5.45951 15.6923C5.45951 15.1825 5.06019 14.7692 4.56761 14.7692ZM3.67572 19.3846C3.67572 18.8749 4.07504 18.4615 4.56761 18.4615C5.06019 18.4615 5.45951 18.8749 5.45951 19.3846C5.45951 19.8943 5.06019 20.3077 4.56761 20.3077C4.07504 20.3077 3.67572 19.8943 3.67572 19.3846ZM8.13518 18.4615C7.64261 18.4615 7.24329 18.8749 7.24329 19.3846C7.24329 19.8943 7.64261 20.3077 8.13518 20.3077C8.62776 20.3077 9.02707 19.8943 9.02707 19.3846C9.02707 18.8749 8.62776 18.4615 8.13518 18.4615ZM10.8109 19.3846C10.8109 18.8749 11.2102 18.4615 11.7027 18.4615C12.1953 18.4615 12.5946 18.8749 12.5946 19.3846C12.5946 19.8943 12.1953 20.3077 11.7027 20.3077C11.2102 20.3077 10.8109 19.8943 10.8109 19.3846ZM15.2703 18.4615C14.7777 18.4615 14.3784 18.8749 14.3784 19.3846C14.3784 19.8943 14.7777 20.3077 15.2703 20.3077C15.7629 20.3077 16.1622 19.8943 16.1622 19.3846C16.1622 18.8749 15.7629 18.4615 15.2703 18.4615Z" fill="#F5F3F7"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.3514 0C6.84397 0 7.24329 0.41328 7.24329 0.923077V1.84615H16.1622V0.923077C16.1622 0.41328 16.5616 0 17.0541 0C17.5466 0 17.946 0.41328 17.946 0.923077V1.84615H20.6217C22.0994 1.84615 23.2973 3.08598 23.2973 4.61538V21.2308C23.2973 22.7601 22.0994 24 20.6217 24H2.78383C1.30609 24 0.108154 22.7601 0.108154 21.2308V4.61538C0.108154 3.08598 1.30609 1.84615 2.78383 1.84615H5.45951V0.923077C5.45951 0.41328 5.85882 0 6.3514 0ZM16.1622 3.69231V4.61538C16.1622 5.12518 16.5616 5.53846 17.0541 5.53846C17.5466 5.53846 17.946 5.12518 17.946 4.61538V3.69231H20.6217C21.1142 3.69231 21.5136 4.10559 21.5136 4.61538V7.38462H1.89194V4.61538C1.89194 4.10559 2.29126 3.69231 2.78383 3.69231H5.45951V4.61538C5.45951 5.12518 5.85882 5.53846 6.3514 5.53846C6.84397 5.53846 7.24329 5.12518 7.24329 4.61538V3.69231H16.1622ZM1.89194 9.23077V21.2308C1.89194 21.7405 2.29126 22.1538 2.78383 22.1538H20.6217C21.1142 22.1538 21.5136 21.7405 21.5136 21.2308V9.23077H1.89194ZM10.8109 12C10.8109 11.4902 11.2102 11.0769 11.7027 11.0769C12.1953 11.0769 12.5946 11.4902 12.5946 12C12.5946 12.5098 12.1953 12.9231 11.7027 12.9231C11.2102 12.9231 10.8109 12.5098 10.8109 12ZM15.2703 11.0769C14.7777 11.0769 14.3784 11.4902 14.3784 12C14.3784 12.5098 14.7777 12.9231 15.2703 12.9231C15.7629 12.9231 16.1622 12.5098 16.1622 12C16.1622 11.4902 15.7629 11.0769 15.2703 11.0769ZM17.946 12C17.946 11.4902 18.3454 11.0769 18.8379 11.0769C19.3304 11.0769 19.7298 11.4902 19.7298 12C19.7298 12.5098 19.3304 12.9231 18.8379 12.9231C18.3454 12.9231 17.946 12.5098 17.946 12ZM18.8379 14.7692C18.3454 14.7692 17.946 15.1825 17.946 15.6923C17.946 16.2021 18.3454 16.6154 18.8379 16.6154C19.3304 16.6154 19.7298 16.2021 19.7298 15.6923C19.7298 15.1825 19.3304 14.7692 18.8379 14.7692ZM14.3784 15.6923C14.3784 15.1825 14.7777 14.7692 15.2703 14.7692C15.7629 14.7692 16.1622 15.1825 16.1622 15.6923C16.1622 16.2021 15.7629 16.6154 15.2703 16.6154C14.7777 16.6154 14.3784 16.2021 14.3784 15.6923ZM11.7027 14.7692C11.2102 14.7692 10.8109 15.1825 10.8109 15.6923C10.8109 16.2021 11.2102 16.6154 11.7027 16.6154C12.1953 16.6154 12.5946 16.2021 12.5946 15.6923C12.5946 15.1825 12.1953 14.7692 11.7027 14.7692ZM7.24329 15.6923C7.24329 15.1825 7.64261 14.7692 8.13518 14.7692C8.62776 14.7692 9.02707 15.1825 9.02707 15.6923C9.02707 16.2021 8.62776 16.6154 8.13518 16.6154C7.64261 16.6154 7.24329 16.2021 7.24329 15.6923ZM4.56761 14.7692C4.07504 14.7692 3.67572 15.1825 3.67572 15.6923C3.67572 16.2021 4.07504 16.6154 4.56761 16.6154C5.06019 16.6154 5.45951 16.2021 5.45951 15.6923C5.45951 15.1825 5.06019 14.7692 4.56761 14.7692ZM3.67572 19.3846C3.67572 18.8749 4.07504 18.4615 4.56761 18.4615C5.06019 18.4615 5.45951 18.8749 5.45951 19.3846C5.45951 19.8943 5.06019 20.3077 4.56761 20.3077C4.07504 20.3077 3.67572 19.8943 3.67572 19.3846ZM8.13518 18.4615C7.64261 18.4615 7.24329 18.8749 7.24329 19.3846C7.24329 19.8943 7.64261 20.3077 8.13518 20.3077C8.62776 20.3077 9.02707 19.8943 9.02707 19.3846C9.02707 18.8749 8.62776 18.4615 8.13518 18.4615ZM10.8109 19.3846C10.8109 18.8749 11.2102 18.4615 11.7027 18.4615C12.1953 18.4615 12.5946 18.8749 12.5946 19.3846C12.5946 19.8943 12.1953 20.3077 11.7027 20.3077C11.2102 20.3077 10.8109 19.8943 10.8109 19.3846ZM15.2703 18.4615C14.7777 18.4615 14.3784 18.8749 14.3784 19.3846C14.3784 19.8943 14.7777 20.3077 15.2703 20.3077C15.7629 20.3077 16.1622 19.8943 16.1622 19.3846C16.1622 18.8749 15.7629 18.4615 15.2703 18.4615Z" fill="black" fillOpacity="0.2"/>
                    </svg>
                </span>
            </div>
        </NavLink>
    )
}
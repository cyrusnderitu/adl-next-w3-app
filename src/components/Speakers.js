import SpeakersList from "./SpeakersList";
import SpeakerToolbar from "./SpeakerToolbar";
import FilterContextProvider from "@/context/FilterContext";


const Speakers = () => {
  return (
    <FilterContextProvider sharedSession={true}>
          <SpeakerToolbar />
          <SpeakersList />
    </FilterContextProvider>
    
  );
};

export default Speakers;

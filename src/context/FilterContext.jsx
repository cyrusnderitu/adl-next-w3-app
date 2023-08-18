import React, { createContext } from "react";
import useFilter from "@/hooks/useFilter";

export const FilterContext = createContext();

const FilterContextProvider = ({ sharedSession, children, sharedYear}) => {
  const {
    showSession,
    setShowSession,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS,
    eventYear,
    setEventYear,
  } = useFilter(sharedSession,sharedYear);
  return (
    <FilterContext.Provider
      value={{
        showSession,
        setShowSession,
        searchQuery,
        setSearchQuery,
        EVENT_YEARS,
        eventYear,
        setEventYear,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeProvider";
import { FilterContext } from "@/context/FilterContext";

const SpeakerToolbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { showSession, setShowSession, setSearchQuery, setEventYear, eventYear, EVENT_YEARS } =
    useContext(FilterContext);
  return (
    <div className="toolbar dark-theme-header">
      <div className="container">
        <div className="flex justify-between">
          <ul className="toolrow flex flex-col lg:flex-row">
            <li className="flex flex-col md:flex-row">
              <b>Show Sessions&nbsp;&nbsp;</b>
              <label htmlFor="text" className="fav">
                <input
                  type="checkbox"
                  name=""
                  id="text"
                  defaultChecked={showSession}
                  onClick={() => {
                    setShowSession(!showSession);
                  }}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className="flex flex-col md:flex-row">
              <strong>Theme</strong>
              <label htmlFor="choose" className="dropdown">
                <select
                  value={theme}
                  id="choose"
                  className="form-control theme"
                  onChange={(e) => {
                    setTheme(e.target.value);
                  }}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
            <li>
              <div className="input-group">
                <input
                  type="text"
                  name="query"
                  id="query"
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Search..."
                />
                <div className="input-group-append">
                  <button type="button" className="btn btn-secondary">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </li>
            <li className="flex flex-col md:flex-row">
              <strong>Year</strong>
              <label htmlFor="year" className="dropmenu">
                <select
                  id="year"
                  className="form-control"
                  value={eventYear}
                  onChange={({ currentTarget }) => {
                    setEventYear(currentTarget.value);
                    console.log("The vent YEar choosen by select is: ", eventYear)
                  }}>
                    {EVENT_YEARS.map((year)=>{
                      return(
                        <option value={year} key={year}>{year}</option>
                      )
                    })}
                  </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpeakerToolbar;

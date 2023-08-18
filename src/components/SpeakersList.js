import React, { useEffect, useState, useContext } from "react";
import { data } from "../../SpeakerData";
import Speaker from "./Speaker";
import { FilterContext } from "@/context/FilterContext";

const SpeakersList = () => {
  const [speakerData, setSpeakerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [error, setError] = useState(false);

  const { eventYear, searchQuery } = useContext(FilterContext);


  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(1000);
        setIsLoading(false);
        setSpeakerData(data);
      } catch (error) {
        setIsLoading(true);
        setHasErrored(true);
        setError(error);
      }
    };
    delayFunc();
  }, []);

  const handleFavChange = (id) => {
    const SpeakerFav = speakerData.find((item) => item.id === id);
    const SpeakerFavUpdate = {
      ...SpeakerFav,
      favorite: !SpeakerFav.favorite,
    };
    //Map thru the prev Data by findind the speacific item that need changing
    // and replacing it with the new made data object
    const SpeakerDataUpdate = speakerData.map((item) => {
      return item.id === id ? SpeakerFavUpdate : item;
    });
    setSpeakerData(SpeakerDataUpdate);
  };

  if (hasErrored == true) {
    return (
      <div className="text-danger">
        Error: <b>loading the Speaker Data Failed {error}</b>
      </div>
    );
  }
  if (isLoading) return <div>Loading.....</div>;

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData
          .filter((speaker) => {
            console.log(speaker.first.toLowerCase())
            return (
              speaker.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
              speaker.last.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
          .filter((speaker) => {
            return speaker.sessions.find((session) => {
              return session.eventYear === eventYear;
            });
          })
          .map((speaker) => {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                handleChange={() => {
                  handleFavChange(speaker.id);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SpeakersList;

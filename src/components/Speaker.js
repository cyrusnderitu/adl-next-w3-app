import Image from "next/image";
import { FilterContext } from "@/context/FilterContext";
import { useContext } from "react";

const Session = ({ title, room }) => {
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
};

const Sessions = ({ sessions, showSession }) => {
  return (
    <>
      {showSession && (
        <div className="sessionBox card h-250">
          <Session {...sessions[0]} />
        </div>
      )}
    </>
  );
};

const SpeakerImage = ({ first, last, id }) => {
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <Image
        src={`/images/speaker-${id}.jpg`}
        alt={`${first} ${last}`}
        className="contain-fit h-auto w-[300px]"
        width={350}
        height={250}
        priority
      />
    </div>
  );
};

const SpeakerFav = ({ favourite, id, handleChange}) => {
  return (
    <div className="action pb-1">
      <span onClick={()=> handleChange({id})}>
        <i
          className={`fa ${
            favourite === true ? "fa-star orange" : "fa-star-o orange"
          }`}
          style={{ color: "#ffd43b" }}
        />{" "}
        Favourite{" "}
      </span>
    </div>
  );
};

const SpeakerBio = ({ details, handleChange }) => {
  const {id, first, last, bio, twitterHandle, favorite, company } = details;
  return (
    <div className="speaker-info my-3">
      <div className="d-flex justify-content-between mb-1">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <SpeakerFav favourite={favorite} id={id} handleChange={handleChange}/>
      <div>
        <p className="card-description mt-2">{bio}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const Speaker = ({ speaker, handleChange }) => {
  const {showSession}= useContext(FilterContext)
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage {...speaker} />
        <SpeakerBio details={speaker} handleChange={handleChange}/>
        <Sessions sessions={speaker.sessions} showSession={showSession} />
      </div>
    </div>
  );
};

export default Speaker;

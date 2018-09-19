import React from "react";
import SocialNav from "./SocialNav";
import "../styles/scss/Schedule.scss";

const Schedule = () => {
  return(
    <div className="schedule-component">
    <SocialNav/>
      <div className="schedule-body">
        <h1>Schedule</h1>
      </div>
    </div>
  )
}

export default Schedule;
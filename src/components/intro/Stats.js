import { useState } from "react";
import "../../assets/stats.css";
export function Stats({ data }) {
  const [experience, setExperience] = useState(0);
  const [impact, setImpact] = useState(0);
  const [hours, setHours] = useState(0);

  return (
    <>
      <div className="flex-wrapper">
        <div className="section-one">
          <h1>{experience} +</h1>
          <p>{data.experience.sub_title}</p>
        </div>
        <div className="section-two">
          <h1>{impact} +</h1>
          <p>{data.impact.sub_title}</p>
        </div>
        <div className="section-three">
          <h1>{hours} +</h1>
          <p>{data.hours.sub_title}</p>
        </div>
      </div>
    </>
  );
}

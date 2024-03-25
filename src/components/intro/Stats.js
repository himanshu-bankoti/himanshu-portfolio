import { useCallback, useEffect, useState } from "react";
import "../../assets/stats.css";
export function Stats({ data }) {
  const [experience, setExperience] = useState(0);
  const [impact, setImpact] = useState(0);
  const [hours, setHours] = useState(0);

  const updateStats = useCallback(async () => {
    const intervalId = setInterval(() => {
      let counter = 0;
      if(counter <= data.experience.count) {
        console.log('here');
        // setExperience(counter);
        counter = counter + 1;
      } else {
        clearInterval(intervalId);
      }    
    }, 1000)
  }, []);

  useEffect(() => {
    updateStats();
  }, [updateStats]);

  return (
    <>
      <div className="flex-wrapper">
        <div className="section-one">
          <h1>{experience} +</h1>
          <p>{data.experience.title}</p>
        </div>
        <div className="section-two">
          <h1>{impact} +</h1>
          <p>{data.impact.title}</p>
        </div>
        <div className="section-three">
          <h1>{hours} +</h1>
          <p>{data.hours.title}</p>
        </div>
      </div>
    </>
  );
}

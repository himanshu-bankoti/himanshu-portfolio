import { useCallback, useEffect, useState } from "react";
import "../../assets/stats.css";
export function Stats({ data }) {
  const [experience, setExperience] = useState(0);
  const [impact, setImpact] = useState(0);
  const [hours, setHours] = useState(0);

  const updateExpereincedStat = useCallback(async () => {
    let counter = 0;
    const intervalId = setInterval(() => {
      if (counter <= data.experience.count) {
        setExperience(counter);
        counter = counter + 1;
      } else {
        clearInterval(intervalId);
      }
    }, 150);
  }, [data.experience.count]);

  const updateImpactStat = useCallback(async () => {
    let counter = 0;
    const intervalId = setInterval(() => {
      if (counter < data.impact.count) {
        setImpact(() => {
          return counter;
        });
        counter = counter + 100;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
  }, [data.impact.count]);

  const updateHoursStat = useCallback(async () => {
    let counter = 0;
    const intervalId = setInterval(() => {
      if (counter < data.hours.count) {
        setHours(() => {
          return counter;
        });
        counter = counter + 100;
      } else {
        clearInterval(intervalId);
      }
    }, 85);
  }, [data.hours.count]);

  useEffect(() => {
    updateExpereincedStat();
    updateImpactStat();
    updateHoursStat();
  }, [updateExpereincedStat, updateImpactStat, updateHoursStat]);

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

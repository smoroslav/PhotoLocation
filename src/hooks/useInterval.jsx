/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useInterval = (clb, timeInterval) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (timeInterval != null) {
      const timer = setTimeout(() => {
        setTime(time + 1);
      }, timeInterval);

      return () => clearTimeout(timer);
    }
  }, [time]);

  useEffect(() => {
    if (time) {
      clb();
    }
  }, [time]);
};

export default useInterval;

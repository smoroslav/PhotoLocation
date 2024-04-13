import { useEffect, useState } from "react";
import useAppActions from "../redux/useAppActions";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/selectors";
import { useInterval } from "usehooks-ts";

const Geocoding = () => {
  const [timeout, setTimeout] = useState(null);
  const [inProgress, setInProgress] = useState(false);

  const items = useSelector(selectItems);

  const { updateItem } = useAppActions();

  useInterval(() => {
    // console.log("use interval start" + inProgress);
    const currentItem = items.find((item) => !item.geocoding && item.location);
    if (currentItem && !inProgress) {
      setInProgress(true);
      fetch(
        `https://geocode.maps.co/reverse?lat=${currentItem.location.lat}&lon=${currentItem.location.lon}&api_key=6600d465bd85c153561975kbgf5a9f6`
      )
        .then((res) => {
          //   console.log(res);
          return res.json();
        })
        .then((geocoding) => {
          console.log(geocoding);
          updateItem({
            id: currentItem.id,
            geocoding,
          });
          setInProgress(false);
        });
    }
  }, timeout);

  useEffect(() => {
    const qualifiedItem = items.find(
      (item) => !item.geocoding && item.location
    );
    if (qualifiedItem) {
      setTimeout(2000);
    } else {
      setTimeout(null);
    }
  }, [items]);

  return null;
};

export default Geocoding;

/* eslint-disable class-methods-use-this */
import EXIF from "exif-js";
import useAppActions from "../redux/useAppActions";
import { v4 as uuidv4 } from "uuid";

export const useUtils = () => {
  const { setItem } = useAppActions();

  const createPhotoItem = (file) => {
    if (file && file.name) {
      // console.log(file);

      EXIF.getData(file, function () {
        console.log(this);

        const location = getLocation(this.exifdata);
        const id = uuidv4();
        const name = file.name;
        const size = file.size;
        const dateTime = file.exifdata?.DateTimeOriginal;
        const exif = file.exifdata;
        const image = URL.createObjectURL(file);

        setItem({
          id,
          name,
          dateTime,
          size,
          exif,
          location,
          image,
        });
      });
    }
  };

  const getLocation = (exifData) => {
    if (exifData && exifData.GPSLatitude && exifData.GPSLongitude) {
      // get latitude from exif data and calculate latitude decimal
      const latDegree = exifData.GPSLatitude[0];
      const latMinute = exifData.GPSLatitude[1];
      const latSecond = exifData.GPSLatitude[2];
      const latDirection = exifData.GPSLatitudeRef;
      // console.log(latDegree);

      var lat = ConvertDMSToDD(latDegree, latMinute, latSecond, latDirection);
      //console.log(lat);

      // get longitude from exif data and calculate longitude decimal
      const lonDegree = 0 + exifData.GPSLongitude[0];
      const lonMinute = exifData.GPSLongitude[1];
      const lonSecond = exifData.GPSLongitude[2];
      const lonDirection = exifData.GPSLongitudeRef;

      const lon = ConvertDMSToDD(lonDegree, lonMinute, lonSecond, lonDirection);
      //console.log(lon);

      const location = { lat, lon };
      // console.log(location);

      const link = `http://www.google.com/maps/place/${location.lat},${location.lon}`;
      console.log(link);

      return location;
    }

    return undefined;
  };

  const fetchData = (files) => {
    return new Promise((resolve) => {
      files.map((file) => {
        if (file) {
          createPhotoItem(file);
          resolve(file);
        }
      });
    });
  };

  const parseFiles = (files) => {
    files.map((file) => {
      if (file) {
        parseOneFile(file);
      }
    });
  };

  const parseOneFile = (file) => {
    return new Promise((resolve) => {
      if (file) {
        createPhotoItem(file);
        resolve(file);
      }
    });
  };

  const ConvertDMSToDD = (degrees, minutes, seconds, direction) => {
    var dd = degrees + minutes / 60 + seconds / 3600;
    if (direction == "S" || direction == "W") {
      dd = dd * -1;
    }
    return dd;
  };

  const getNiceNameMetadata = (name) => {
    const splitedName = name.split(
      /(?<!(^|[A-Z]))(?=[A-Z])|(?<!^)(?=[A-Z][a-z])/
    );

    const str = splitedName.join(" ");

    const firstChar = str.charAt(0).toUpperCase();
    const remainingChars = str.slice(1);

    return `${firstChar}${remainingChars}`;
    // 'anaVoliMilovanaMMMMMarko' -> 'Ana  Voli  Milovana  MMMM  Marko'
  };

  return {
    fetchData,
    parseFiles,
    getNiceNameMetadata,
  };
};

export default useUtils;

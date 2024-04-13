export const useGeocodingGeneralInfo = () => {
  const getResolution = (exifdata) => {
    if (exifdata && exifdata.PixelXDimension && exifdata.PixelYDimension) {
      return `${exifdata.PixelXDimension} x ${exifdata.PixelYDimension}`;
    }
    return "-";
  };

  const getDevice = (exifdata) => {
    if (exifdata && exifdata.Make && exifdata.Model) {
      return `${exifdata.Make} ${exifdata.Model}`;
    }
    return "-";
  };

  const getGeolocation = (exifdata) => {
    if (
      exifdata &&
      exifdata.GPSLatitude &&
      exifdata.GPSLongitude &&
      exifdata.GPSLatitudeRef &&
      exifdata.GPSLongitudeRef
    ) {
      const lat = `${exifdata.GPSLatitude[0]}°${exifdata.GPSLatitude[1]}'${exifdata.GPSLatitude[2]}"${exifdata.GPSLatitudeRef}`;
      const lon = `${exifdata.GPSLongitude[0]}°${exifdata.GPSLongitude[1]}'${exifdata.GPSLongitude[2]}"${exifdata.GPSLongitudeRef}`;
      return `${lat}, ${lon}`;
    }
    return "-";
  };

  //   const useFileSizeFormat = (sizeInBytes) => {
  //     if (sizeInBytes < megabyte) {
  //       const kb = (Math.round((sizeInBytes / kilobyte) * 100) / 100).toFixed(0);
  //       return `${kb}KB`;
  //     } else {
  //       const mb = (Math.round((sizeInBytes / megabyte) * 100) / 100).toFixed(1);
  //       return `${mb}MB`;
  //     }
  //   };

  return {
    getResolution,
    getDevice,
    getGeolocation,
  };
};

export default useGeocodingGeneralInfo;

import PropTypes from "prop-types";

export const PhotoItemStruct = {
  id: PropTypes.string,
  name: PropTypes.string,
  dateTime: PropTypes.string,
  size: PropTypes.number,
  exif: PropTypes.object,
  location: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number,
  }),
  image: PropTypes.string,
  geocoding: PropTypes.object,
};

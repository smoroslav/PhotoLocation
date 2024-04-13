const kilobyte = 1024;
const megabyte = 1048576;

export const useFileSizeFormat = (sizeInBytes) => {
  if (!sizeInBytes) {
    return "-";
  }
  if (sizeInBytes < megabyte) {
    const kb = (Math.round((sizeInBytes / kilobyte) * 100) / 100).toFixed(0);
    return `${kb}KB`;
  } else {
    const mb = (Math.round((sizeInBytes / megabyte) * 100) / 100).toFixed(1);
    return `${mb}MB`;
  }
};

export default useFileSizeFormat;

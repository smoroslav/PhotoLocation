export const useSortByDate = (items) => {
  if (items) {
    let newArray = items.slice();
    newArray.sort(function (a, b) {
      if (a.dateTime < b.dateTime) {
        return -1;
      }
      if (a.dateTime > b.dateTime) {
        return 1;
      }
      return 0;
    });
    return newArray;
  }
  return items;
};

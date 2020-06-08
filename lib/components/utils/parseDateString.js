function parseDateString(str) {
  if (str) {
    var dateObject = new Date(str);
    return {
      year: dateObject.getFullYear(),
      month: dateObject.getMonth() + 1,
      date: dateObject.getDate(),
    };
  } else {
    var dateObject = new Date();
    return {
      year: dateObject.getFullYear(),
      month: dateObject.getMonth() + 1,
      date: dateObject.getDate(),
    };
  }
}
export default parseDateString;

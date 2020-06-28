const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

// console.log(formatAMPM(new Date()));

const formatDate = (date) => {
  const d = new Date(date);
  const currentMonth = monthNames[d.getMonth()];
  return `${currentMonth} ${d.getDate()} @ ${formatAMPM(d)} `;
};

const formatPrice = (price) => {
  return `$ ${(Math.round(price * 100) / 100).toFixed(2)}`;
};
export { formatDate, formatPrice };

import moment from "moment";

export const defaultConfig = {
  regEx: "^(?=.*[!@#$%^&*()_+.])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).+$",
  noChar: "^[a-zA-Z]+$",
  linkValidation:
    "^(?!mailto:)(?:(?:http|https|ftp)://|//|www.)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
};

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailOrPhoneRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

export const token = {
  persistKey: "ORTHO_CLI",
  persistKeySearch: "SearchParams",
};

export const networkFrom = {
  suggestion: "suggestion",
  follower: "follower",
  following: "following",
};

export const searchTabs = {
  people: "people",
  group: "group",
  content: "content",
  event: "event",
};

export const recentActivity = {
  commented: "commented on this",
  reacted: "liked this",
  created: "created this",
  shared: "shared this",
};

export const allMimeTypes = {
  doc: [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  excel: [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ],
  pdf: ["application/pdf"],
};

const timeStampGenerator = (unit, amount) => {
  const date = amount ? moment().add(amount, `${unit}`) : moment();
  const start = date.startOf(unit).unix();
  const end = date.endOf(unit).unix();
  return start + "-" + end;
};

export const pollAllowedMime = "video/*, image/png, image/jpeg";

export const libraries = ["places"];

export const pollDuration = ["1 day", "3 days", "1 week", "3 weeks"];

export const dateType = ["Today", "This Week", "Last week", "Last Month"];

export const eventDateType = [
  { name: "Today", id: timeStampGenerator("day") },
  { name: "This Week", id: timeStampGenerator("week") },
  { name: "Next week", id: timeStampGenerator("week", 1) },
  { name: "Next Month", id: timeStampGenerator("month", 1) },
];

export const popularity = ["Trending", "Most Viewed", "Recommended"];

export const timezones = [
  "(UTC-10) Hawaii Standard Time",
  "(UTC-9) Alaska Standard Time",
  "(UTC-8) Pacific Standard Time",
  "(UTC-7) Mountian Standard Time",
  "(UTC-6) Central Standard Time",
  "(UTC-5) Eastern Standard Time",
];

export const getDate = (date) => {
  return moment(date).calendar({
    sameDay: `[${moment(date).fromNow()}]`,
    lastDay: "[Yesterday]",
    lastWeek: "MMM DD",
    sameElse: function (now) {
      if (this.year() === now.year()) {
        return "MMM DD";
      } else {
        return "MMM DD YYYY";
      }
    },
  });
};

export const getEventDetailTime = (s, e, custom) => {
  let formatDefine = "MMM DD, YYYY, ";
  if (custom) {
    formatDefine = "ddd, MMM DD, YYYY, ";
  }
  const startDate = moment(s, "X").format(formatDefine);
  const endDate = moment(e, "X").format(formatDefine);

  const startTime = moment(s, "X").format("hh:mm a");
  const endTime = moment(e, "X").format("hh:mm a");

  if (startDate === endDate) {
    return startDate + startTime + " - " + endTime;
  } else {
    return startDate + startTime + " - " + endDate + endTime;
  }
};

export const getDuration = (date) => {
  const a = moment(date);
  const b = moment();
  const days = a.diff(b, "days");
  const hour = a.diff(b, "hour");
  const min = a.diff(b, "minute");

  if (days % 7 == 0 && days / 7 > 1) {
    const weeks = days / 7;
    return weeks > 1 ? `${weeks} weeks` : `${weeks} week`;
  }

  if (days > 0) {
    return days > 1 ? `${days} days` : `${days} day`;
  }

  if (hour >= 0 && min > 1) {
    return hour > 1 ? `${hour} hours` : `1 hour`;
  }

  return `0 hour`;
};

export const getGoogleCalendarUrl = (
  title,
  startD,
  endD,
  details,
  location
) => {
  const startDate = getDateTime(startD, startD);
  const endDate = getDateTime(endD, endD);
  return `https://calendar.google.com/calendar/r/eventedit?text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`;
};

export const getOutlookCalendarUrl = (
  title,
  startD,
  endD,
  details,
  location
) => {
  const startDate = getDateTimeOutlook(startD, startD);
  const endDate = getDateTimeOutlook(endD, endD);
  return `https://outlook.office.com/calendar/action/compose?startdt=${startDate}&enddt=${endDate}&subject=${title}&body=${details}&location=${location}`;
};

const getDateTime = (d, t) => {
  return moment(
    `${moment(d, "X").format("YYYY-MM-DD")} ${moment(t, "X").format(
      "hh:mm a"
    )}`,
    "YYYY-MM-DD hh:mm a"
  ).format("YYYYMMDDTHHmmssZ");
};

const getDateTimeOutlook = (d, t) => {
  return moment(
    `${moment(d, "X").format("YYYY-MM-DD")} ${moment(t, "X").format(
      "hh:mm a"
    )}`,
    "YYYY-MM-DD hh:mm a"
  ).format("YYYY-MM-DDTHH:mm:ssZ");
};

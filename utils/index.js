import dayjs from "dayjs";

export const formatDate = date => {
  return dayjs(date).format("D MMMM, YYYY");
};

export const formatWithDay = date => {
  return dayjs(date).format("dddd, D MMMM, YYYY, hh:00a");
};

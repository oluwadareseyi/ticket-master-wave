import dayjs from "dayjs";

export const formatDate = date => {
  return dayjs(date).format("D MMMM, YYYY");
};

export const formatWithDay = date => {
  return dayjs(date).format("dddd, D MMMM, YYYY, hh:00a");
};

export const defaultCart = () => {
  return [
    { type: "regular", name: "Regular", quantity: 0, amount: 1000 },
    { type: "VIP", name: "VIP", quantity: 0, amount: 100000 },
    { type: "table", name: "Table for 5", quantity: 0, amount: 1000000 }
  ];
};

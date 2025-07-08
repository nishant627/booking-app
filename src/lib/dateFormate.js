const dateFormate = (date) => {
  return new Date(date).toLocaleString("en-Us", {
    weekend: "short",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};
export default dateFormate;

const logger = (error) => {
  console.error("---------------------", new Date(), "-----------------------");
  console.log("------", error?.message, "--------");
};

export default logger;

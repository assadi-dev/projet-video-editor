export const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, ms);
  });
};

const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (status) => {
  try {
    return [
      ...(await promiseTheaterIXX()),
      ...(await promiseTheaterVGC()),
    ].reduce((prev, current) => {
      if (current?.hasil === status) {
        return (prev += 1);
      } else {
        return prev;
      }
    }, 0);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  promiseOutput,
};

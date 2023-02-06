import servise from "./myAxios";

const getData = (row, col) => {
  return servise({
    url: `getData/r${row}c${col}`,
    method: "get",
  });
};

export { getData };

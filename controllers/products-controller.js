const DUMMY_DATA = [
  { id: 1, productName: "Chleb" },
  { id: 2, productName: "Masło" },
  { id: 3, productName: "Warzywa" },
  { id: 4, productName: "Piwo" },
  { id: 5, productName: "Cola" },
];
const getAllProducts = (req, res) => {
  res.json({ data: DUMMY_DATA });
};

exports.getAllProducts = getAllProducts;

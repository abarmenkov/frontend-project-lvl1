const generateNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min + 1)) + min;

export default generateNumber;

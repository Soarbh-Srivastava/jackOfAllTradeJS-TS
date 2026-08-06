Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback(this[i], i, this);
    }
  }
  return result;
};

const num = [1, 2, 3, 4];
const double = num.myMap((n) => n * 2);
console.log(double);

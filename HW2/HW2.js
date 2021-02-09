let sum = 0;
let term = {
  USA: 18,
  Portugal: 21,
  Australia: 23,
  Brasil: 24,
  Belarus: 14,
}
for (let i in term) sum += term[i];
let averageterm = sum / Object.keys(term).length;
console.log("Средняя температура всех стран: " + averageterm);

function maxT(obj) {
  let max = 0;
  for (let i in obj) {
      if(max < obj[i]) max = obj[i];
  }
  return max;
}
let max = maxT(term);
console.log("Максимальная температура среди стран: " + max);
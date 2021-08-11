const fruits = ["Яблоко", "Банан", "Ананас"];

// as map
fruits.reduce((acc, w) => acc.concat(w.slice(0, 1)), []);

// as filter
fruits.reduce(
  (acc, w) =>
    (w.slice(0, 1).toLowerCase() === "а" && acc.concat(w)) || [...acc],
  []
);

// as forEach
fruits.reduce((acc, w, i) => acc.concat(`${i + 1}: ${w}`), []);

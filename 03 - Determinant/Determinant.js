const getDet = (a) => {
  if (a.length === 1) return Array.isArray(a[0]) ? a[0][0] : a[0];
  let d = 0;
  for (let i = 0; i < a.length; i++)
    d +=
      a[0][i] *
      getDet(a.slice(1).map((x) => x.filter((_, j) => i !== j))) *
      (-1) ** i;
  return d;
};

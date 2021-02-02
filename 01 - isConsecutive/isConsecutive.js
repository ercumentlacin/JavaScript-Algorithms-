function isConsecutive(s) {
  for (let i = 1; i < s.length; i++) {
    let arr = [];

    for (let j = 0; j < s.length; j += i) {
      let temp = s.slice(j, j + i);

      arr.push(temp);
    }

    let increasing = 0;
    let decreasing = 0;

    for (let k = 0; k < arr.length; k++) {
      if (+arr[k] + 1 == arr[k + 1]) {
        decreasing++;
      }
      if (arr[k] == +arr[k + 1] + 1) {
        increasing++;
      }
    }

    if (increasing + 1 === s.length / i || decreasing + 1 === s.length / i) {
      return true;
    } else {
      continue;
    }
  }

  return false;
}

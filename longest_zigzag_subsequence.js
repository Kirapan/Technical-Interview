function zigzag(a) {
  var z = [1, 1];
  var m = 1;

  if (a[1] > a[0]) {
    z[0] = 2;
    z[1] = 2;
  }
  if (a[1] < a[0]) {
    z[0] = 2;
    z[1] = 0;
  }

  for (var i = 2; i < a.length; i++) {
    if (a[i] > a[i - 1] && z[1] === 0) {
      z[0] += 1
      z[1] = 2;

    } else if (a[i] < a[i - 1] && z[1] === 2) {
      z[0] += 1
      z[1] = 0;
    } else {
      m = Math.max(z[0], m);
      if (a[i] > a[i - 1]) {
        z[0] = 2;
        z[1] = 2;
      } else if (a[i] < a[i - 1]) {
        z[0] = 2;
        z[1] = 0;
      } else {
        z = [1, 1]
      }
    }
  }
  return Math.max(z[0], m)
}
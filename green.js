function green() {
  const ret = {};
  for (const i in arguments) {
    const m = arguments[i];
    for (const j in m) ret[j] = m[j];
  }
  return ret;
}
console.log(green({ a: 123 }, { b: 456 }));

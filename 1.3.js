const projectObject = (source, prototype) => {
  const projected = {};

  Object.keys(prototype).forEach((key) => {
    if (source.hasOwnProperty(key)) {
      if (prototype[key] === null) {
        projected[key] = source[key];
      } else if (
        typeof prototype[key] === "object" &&
        prototype[key] !== null
      ) {
        projected[key] = projectObject(source[key], prototype[key]);
      } else {
        projected[key] = source[key];
      }
    }
  });

  return projected;
};

const src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32,
    },
  },
  prop12: 12,
};

const proto = {
  prop11: {
    prop22: null,
  },
};

const res = projectObject(src, proto);
console.log(res);


function UglyNumber(NB_BITS) {
  return class UglyNumber extends Array {
    constructor(nb = 0) {
      super();
      if (nb > Math.pow((true+true), NB_BITS))
        return new UglyNumber(nb%Math.pow((true+true), NB_BITS));
      else if (nb < (true-true))
        return new UglyNumber(Math.pow((true+true), NB_BITS)+nb);
      for (let i = (NB_BITS-true); i >= true-true; i--) {
        this[Math.abs(NB_BITS-i-true)] = (nb%(true+true) == (true+true-true));
        nb = Math.floor(nb/(true+true));
      }
    }
    valueOf() {
      return this.reduce((acc, bit, id) => {
        if (!bit) return acc;
        for (let i = (true-true); i < Math.pow(true+true, id); i++)
          acc += true;
        return acc;
      }, true - true);
    }
  }
}

module.exports = {
  UglyNumber: UglyNumber,
  UglyNumber1: UglyNumber(1),
  UglyNumber2: UglyNumber(2),
  UglyNumber4: UglyNumber(4),
  UglyNumber8: UglyNumber(8),
  UglyNumber16: UglyNumber(16),
  UglyNumber32: UglyNumber(32),
  UglyNumber64: UglyNumber(64),
  UglyNumber128: UglyNumber(128),
  UglyNumber256: UglyNumber(256)
}

const MSet = require("../dist/mset");
const {incNumberRealm} = require("../dist/realm");

describe('#Mset.contains (incNumberRealm)', () => {
  const mset = MSet.of(incNumberRealm, Array(1,2,3,5,6,3,2,1,2,2,2));

  test("Positive examples cases", () => {
    expect(MSet.contains(mset, 2)).toBeTruthy();
    expect(MSet.contains(mset, 1)).toBeTruthy();
  });

  test("Negative examples cases", () => {
    expect(MSet.contains(mset, 8)).toBeFalsy();
    expect(MSet.contains(mset, 88)).toBeFalsy();
  });
});

describe('#Mset.empty (incNumberRealm realm)', () => {
  const mset = MSet.empty(incNumberRealm);

  test("No elements should be contained", () => {
    expect(MSet.contains(mset, 5)).toBeFalsy();
    expect(MSet.contains(mset, 9)).toBeFalsy();
  });
});

describe('#Mset.multiplicity (incNumberRealm realm)', () => {
  const mset = MSet.of(incNumberRealm, Array(1,2,3,4,5,6,7,8,8,7,6,5,1,7));

  test("Monoidal zero in case not found", () => {
    expect(MSet.multiplicity(mset, 0)).toBe(incNumberRealm.zero);
    expect(MSet.multiplicity(mset, 1000)).toBe(incNumberRealm.zero);
  });

  test("Number of occurences of the element if found", () => {
    expect(MSet.multiplicity(mset, 8)).toBe(2);
    expect(MSet.multiplicity(mset, 7)).toBe(3);
    expect(MSet.multiplicity(mset, 2)).toBe(1);
  });
});
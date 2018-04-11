// @flow


/**
 * A Ream is a combination of:
 * 1. applicative monoid (one, concat)
 * 2. lattice (join and meet)
 */
export type Realm<M> = {
  zero: M,
  one: M,
  concat: (M, M) => M,
  join: (M, M) => M,
  meet: (M, M) => M
}

const booleanRealm: Realm<boolean> = {
  zero: false,
  one: true,
  concat: (a, b) => a || b,
  join: (a, b) => a || b,
  meet: (a, b) => a && b
};

const incNumberRealm: Realm<number> = {
  zero: 0,
  one: 1,
  concat: (a,b) => a + b,
  join: (a, b) => Math.max(a,b),
  meet: (a, b) => Math.min(a,b)
};

module.exports = {booleanRealm, incNumberRealm};


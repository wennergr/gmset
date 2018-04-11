// @flow

import type {Realm} from "./realm";

const {Map, Set} = require("immutable");

opaque type MSet<A,M> = {
  realm: Realm<M>,
  repr: Map<A,M>
};

const setInRepr = <A, M>(realm: Realm<M>, repr: Map<A, M>, a: A): Map<A, M> =>
  repr.set(a, realm.concat(realm.one, repr.get(a, realm.zero)));

// Public api

const empty = <A, M>(realm: Realm<M>): MSet<A, M> => ({
  realm: realm,
  repr: Map()
});

const of = <A, M>(realm: Realm<M>, arr: Array<A>): MSet<A, M> => ({
  realm: realm,
  repr: arr.reduce((acc, a) => setInRepr(realm, acc, a), Map())
});

const multiplicity = <A, M>(mset: MSet<A, M>, a: A): M =>
  mset.repr.get(a, mset.realm.zero);

const set = <A, M>(mset: MSet<A, M>, a: A): MSet<A, M> => ({
  realm: mset.realm,
  repr: setInRepr(mset.realm, mset.repr, a)
});

const contains = <A, M>(mset: MSet<A, M>, a: A): boolean =>
  multiplicity(mset, a) !== mset.realm.zero;

module.exports = {of, empty, multiplicity, set, contains};









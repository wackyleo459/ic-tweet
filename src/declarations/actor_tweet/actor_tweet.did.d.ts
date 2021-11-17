import type { Principal } from '@dfinity/principal';
export interface Post {
  'date' : Time,
  'author' : User,
  'message' : [] | [string],
}
export type Time = bigint;
export interface User {
  'id' : Principal,
  'userId' : [] | [string],
  'name' : [] | [string],
  'email' : [] | [string],
}
export interface _SERVICE {
  'addPost' : (arg_0: Post) => Promise<string>,
  'getAll' : () => Promise<Array<bigint>>,
}

import type { Principal } from '@dfinity/principal';
export interface Post { 'date' : string, 'author' : string, 'message' : string }
export interface _SERVICE {
  'addPost' : (arg_0: string, arg_1: string, arg_2: string) => Promise<
      Array<Post>
    >,
  'getAll' : () => Promise<Array<Post>>,
  'getCount' : () => Promise<bigint>,
}

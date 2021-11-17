export const idlFactory = ({ IDL }) => {
  const Post = IDL.Record({
    'date' : IDL.Text,
    'author' : IDL.Text,
    'message' : IDL.Text,
  });
  return IDL.Service({
    'addPost' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [IDL.Vec(Post)], []),
    'getAll' : IDL.Func([], [IDL.Vec(Post)], []),
    'getCount' : IDL.Func([], [IDL.Nat], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };

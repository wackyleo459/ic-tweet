export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const User = IDL.Record({
    'id' : IDL.Principal,
    'userId' : IDL.Opt(IDL.Text),
    'name' : IDL.Opt(IDL.Text),
    'email' : IDL.Opt(IDL.Text),
  });
  const Post = IDL.Record({
    'date' : Time,
    'author' : User,
    'message' : IDL.Opt(IDL.Text),
  });
  return IDL.Service({
    'addPost' : IDL.Func([Post], [IDL.Text], []),
    'getAll' : IDL.Func([], [IDL.Vec(IDL.Nat)], []),
  });
};
export const init = ({ IDL }) => { return []; };

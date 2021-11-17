import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Time "mo:base/Time";
import Buffer "mo:base/Buffer";
import Array "mo:base/Array";
import Debug "mo:base/Debug";


actor Tweet {
    public type Post = {
        date: Text;
        author: Text;
        message: Text;
    };

    let post1 : Post = {
        date = "Nov15";
        author = "sue";
        message = "hi";
    };

    stable var posts : [var Post] = Array.init<Post>(10, post1);


    type User = {
        userId: ?Text;
        name: ?Text;
        email: ?Text;
        id: Principal;
    };

    public func getAll(): async [Post] {
        Array.freeze(posts);
    };

    public shared(install) func addPost (message: Text): async [Post]{
        var newPost: Post = {
            date = "Nov16";
            author = "Sue";
            message = message;
        };
        posts := Array.append<Post>(posts, [newPost]);
        await getAll();

    };

};

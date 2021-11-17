import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Time "mo:base/Time";
import Buffer "mo:base/Buffer";
import Array "mo:base/Array";
import Debug "mo:base/Debug";


actor {
    public type Post = {
        date: Text;
        author: Text;
        message: Text;
    };

    let post1 : Post = {
        date = "";
        author = "";
        message = "";
    };

    stable var posts : [var Post] = Array.init<Post>(10, post1);

    stable var postCount : Nat = 0;

    type User = {
        userId: ?Text;
        name: ?Text;
        email: ?Text;
        id: Principal;
    };

    public func getAll(): async [Post] {
       return Array.freeze(posts);
    };
    public query func getCount(): async Nat {
        return postCount;
    };
    public shared(install) func addPost (inputMessage: Text, inputDate: Text, inputAuthor: Text): async [Post] {
        var newPost: Post = {
            date = inputDate;
            author = inputAuthor;
            message = inputMessage;
        };

        if (postCount < 10) {
            posts[postCount] := newPost;
        } else {
            var nPosts : [var Post] = Array.init<Post>(30, post1);
            return Array.mapEntries<Post, Post>(Array.freeze(nPosts), func (post : Post, ind : Nat) : Post {
                if (ind <= postCount) {
                    return posts[ind];
                };
                nPosts[ind];
            });
            posts := nPosts;
        };

        postCount += 1;
        // Array.append<Post>(posts, [newPost]);
        return Array.freeze(posts);// return nArr;
    };

};

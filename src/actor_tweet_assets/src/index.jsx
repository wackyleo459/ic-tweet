import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { actor_tweet } from "../../declarations/actor_tweet";

const MyHello = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [name, setName] = useState('anonymous');
  const [post, setPost] = useState({
    date: '',
    author: '',
    message: ''
  });
  const [response, setResponse] = useState({
    date: '',
    author: '',
    message: ''
  });
  const [tweets, addTweet] = useState([])

  function greet() {
    actor_tweet.getAll().then(message => console.log(message));
    setLogin(true);
    document.getElementById("greeting").innerText = `Hello ${name}, you are logged in`;
  }
  function getTweets() {
    actor_tweet.addPost(post.message, post.date, post.author).then(newArr => console.log(newArr));
    addTweet(orig => [post, ...orig]);

  }
  function nameChange(e) {
    setName(e.target.value);
    setPost({...post, author: e.target.value})
  }
  useEffect(() => {
    actor_tweet.getAll().then(result => {

      actor_tweet.getCount().then(count => {
        let posts = result.slice(0, Number(count));
        posts.forEach(entry => {
          addTweet(orig => [entry, ...orig]);
        })
      });
    });
  }, [])//useEffect for tweets

  return (
    <React.Fragment>
      <img src="logo.png" alt="DFINITY logo" />
      <section>
          <label for="name">Enter your Name: &nbsp;</label>
          <input
            id="name"
            value={name}
            type="text"
            onChange={ev => nameChange(ev)}
          ></input>
          <button id="clickLogin" onClick={greet}>Log In</button>
      </section>
      <section id="greeting"></section>
      {/* dynamically render {} */}

      <div id="postWindow">
        Write your tweet here...
        <div id="postMessage">
          <textarea
            onChange={(ev) => setPost( {...post, ...{
                date: new Date().toString().slice(0, 21),
                author: name,
                message: ev.target.value,
              }
            })}
          ></textarea>
          <button onClick={getTweets} style={{display: 'block'}}>Post Tweet!</button>
        </div>
      </div>

      <div id="tweets">
        {tweets.map((tweet, ind) => (
            <div className="tweet" key={ind}>
              <div className="tweetHeader">
                <span className="author">{tweet.author}</span>
                <em className="timestamp">{tweet.date}</em>
              </div>
              <div className="tweetMessage">{tweet.message}
              </div>
            </div>
          ))
        }
      </div>
    </React.Fragment>
  );
};

render(<MyHello />, document.getElementById("app"));
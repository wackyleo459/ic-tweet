import React, { useState } from "react";
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
    setLogin(true);
    document.getElementById("greeting").innerText = `Hello ${name}, you are logged in`;
  }
  function getTweets() {
    addTweet(og => [...og, post]);

  }
  function nameChange(e) {
    setName(e.target.value);
    setPost({...post, author: e.target.value})
  }

  return (
    <div>
      <img src="logo.png" alt="DFINITY logo" />
      <section>
          <label for="name">Enter your Name: &nbsp;</label>
          <input
            id="name"
            value={name}
            type="text"
            onChange={ev => nameChange(ev)}
          ></input>
          <button id="clickMeBtn" onClick={greet}>Log In</button>
      </section>
      <section id="greeting"></section>
      {/* dynamically render {} */}
      <div>
        <p>Greetings, from DFINITY!</p>
        <p>{" "}
          Type your post in the  input field, then click{" "}
          <b> Post Tweet </b> to display the result.
        </p>
      </div>
      <div style={{ margin: "30px" }}>
        <input
          onChange={(ev) => setPost( {...post, ...{
              date: new Date().toString().slice(0, 21),
              author: name,
              message: ev.target.value,
            }
          })}
        ></input>
        <button onClick={getTweets}>Get Greeting!</button>
      </div>
      <div>
        {tweets.map((tweet, ind) => (
            <div key={ind}>
              <li>
                {tweet.message}
              </li>
              <span>{tweet.author}</span>
              <span>{tweet.date}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

render(<MyHello />, document.getElementById("app"));
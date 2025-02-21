import React from "react";

export function Home() {
  return (
    <>
      <header></header>
      <main>
        <>
          <div className="hero-image">
            <div className="hero-text">
              <h1>Chuck Norris</h1>
              <p>American Hero</p>
              <button type="button" className="btn btn-warning">
                Let's play
              </button>
            </div>
          </div>

          <h2 className="container">
            Have you ever been to a party that was fabulous but missing
            something? I bet that something was Chuck Norris! Spruce up any
            party with the new Chuckinator™. Simply navigate to our "Chuck" page
            by clicking "Let's play" in the photo above. Once you're on the
            Chuck page, click "Hee-yah!" for a joke to pop up that's sure to
            have your entire party in stitches.
          </h2>

          <div id="subscribeDiv">
            <h4 className="container">
              Sign up for more <br />
              Chuck Norris
            </h4>
            <form className="container">
              <label htmlFor="firstName">First Name:</label>
              <br />
              <input type="text" id="firstName" name="firstName" />
              <br />
              <label htmlFor="lastName">Last Name:</label>
              <br />
              <input type="text" id="lastName" name="lastName" />
              <br />
              <label htmlFor="email">Email:</label>
              <br />
              <input type="email" id="email" name="email" />
              <br />

              <button
                type="button"
                className="btn btn-secondary"
                id="subscribeBtn"
              >
                Subscribe!
              </button>
            </form>
            <p id="subscribe" />
          </div>
        </>
      </main>
      <footer></footer>
    </>
  );
}

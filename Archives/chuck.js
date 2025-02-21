import React from "react";
import "./style.css";

function Chuck() {
  return (
    <>
      <h1>Chuck Norris</h1>
      <div id="heeyah">
        <button
          type="button"
          className="btn btn-danger"
          id="chuckBtn"
          onClick={() => handleHeeyah()}
        >
          Hee-Yah!
        </button>
        <h6 id="norrisGrandma" className="container"></h6>
      </div>

      <section className="Video Embed">
        <h1>Chuck Norris Grand-Champion Final Match (1966)</h1>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/nst4V8BKNF0"
          title="Chuck Norris vs. Allen Steen - Grand-Champion Final Match (International 1966)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}

export default Chuckinator;

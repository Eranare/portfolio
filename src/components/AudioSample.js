// AudioSample.js
function AudioSample({ data }) {
    return (
      <div>
        <button id ="reelButton">Play</button>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    );
  }
  export default AudioSample;
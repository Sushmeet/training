import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ title = "", duration = "" }) => {
  if (title === "") {
    return <div>Select a Song</div>;
  }

  return (
    <div className="right floated content">
      <h3>Details of the Song</h3>
      <p>
        Title: {title}
        <br />
        Duration: {duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("sushi--- state1", state);
  return {
    title: state?.selectedSong?.title,
    duration: state?.selectedSong?.duration,
  };
};

export default connect(mapStateToProps)(SongDetail);

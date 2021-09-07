import React from "react";

function Form() {
  return (
    <div>
      <input type="text" placeholder="Enter your name..." />
      <input type="text" placeholder="Enter your email..." />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Enter your comment..."
      ></textarea>
      <button type="submit">submit</button>
    </div>
  );
}

export default Form;

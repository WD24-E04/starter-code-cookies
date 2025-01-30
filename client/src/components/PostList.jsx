import React from "react";

const PostList = () => {
  return (
    <div>
      <h3></h3>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {/* Here We will render one li for each post using map */}
        <li
          key={index}
          style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
        ></li>
      </ul>
    </div>
  );
};

export default PostList;

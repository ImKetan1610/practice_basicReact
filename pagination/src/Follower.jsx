import React from "react";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className="card">
      <img src={avatar_url} alt={login} />
      <h4>Username: {login}</h4>
      <a className="btn" href={html_url}>
        view profile
      </a>
    </article>
  );
};

export default Follower;

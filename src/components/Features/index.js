import "./features.scss";

import React from "react";
import Server from "../../images/server.png";
import Server2 from "../../images/server2.png";

function Feature() {
  return (
    <div>
      <div className="features-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Features</h1>
            <p className="lead">
              Check out the features of Loruki that separates us from the
              competition
            </p>
          </div>
          <img src={Server} />
        </div>
      </div>
      <div className="features-sub-head bg-light py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">The Loruki Platform</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              repudiandae quidem, quo possimus sit laboriosam similique sed
              veniam impedit pariatur aliquam odit saepe, aliquid deleniti,
              ipsum repellat adipisci libero nesciunt!
            </p>
          </div>
          <img src={Server2} />
        </div>
      </div>
      <div className="features-main my-2">
        <div className="container grid-3">
          <div className="card flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repellendus placeat ipsum ipsa nemo maiores voluptatem
              quo repellat! Odio quod quo quis dicta, a tempore? Cumque
              inventore nemo corporis in.
            </p>
          </div>
          <div className="card flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repellendus placeat ipsum ipsa nemo maiores voluptatem
              quo repellat! Odio quod quo quis dicta, a tempore? Cumque
              inventore nemo corporis in.
            </p>
          </div>
          <div className="card flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repellendus placeat ipsum ipsa nemo maiores voluptatem
              quo repellat! Odio quod quo quis dicta, a tempore? Cumque
              inventore nemo corporis in.
            </p>
          </div>
          <div className="card flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repellendus placeat ipsum ipsa nemo maiores voluptatem
              quo repellat! Odio quod quo quis dicta, a tempore? Cumque
              inventore nemo corporis in.
            </p>
          </div>
          <div className="card flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repellendus placeat ipsum ipsa nemo maiores voluptatem
              quo repellat! Odio quod quo quis dicta, a tempore? Cumque
              inventore nemo corporis in.
            </p>
          </div>
          <div className="card flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repellendus placeat ipsum ipsa nemo maiores voluptatem
              quo repellat! Odio quod quo quis dicta, a tempore? Cumque
              inventore nemo corporis in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;

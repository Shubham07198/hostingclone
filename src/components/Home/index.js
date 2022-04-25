import "./home.scss";

import { faServer, faUpload } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cli from "../../images/cli.png";
import clojure from "../../images/logos/clojure.png";
import cloud from "../../images/cloud.png";
import csharp from "../../images/logos/csharp.png";
import go from "../../images/logos/go.png";
import node from "../../images/logos/node.png";
import php from "../../images/logos/php.png";
import python from "../../images/logos/python.png";
import ruby from "../../images/logos/ruby.png";
import scala from "../../images/logos/scala.png";

function Home() {
  return (
    <div>
      <div className="showcase">
        <div className="container grid">
          {/* Showcase */}
          <div className="showcase-text">
            <h1>Easier Deployment</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae tenetur ipsam, harum culpa in minus quia, mollitia
              iusto placeat esse exercitationem voluptas sequi aliquid fuga,
              nemo dolor? Ea, at laboriosam!
            </p>
            <a href="" className="btn btn-outline">
              Read more
            </a>
          </div>
          <div className="showcase-form card">
            <h2>Request a Demo</h2>
            <form>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <input type="button" value="submit" className="btn" />
            </form>
          </div>
        </div>
      </div>
      {/* STATS */}
      <div className="stats">
        <div className="container">
          <h3 className="stats-heading text-center my-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quo ipsam dicta delectus pariatur reprehenderit facere aliquid ad
            sit maiores sed officiis rem ullam architecto asperiores nostrum,
            amet tenetur quos.
          </h3>
          <div className="grid-3 text-center my-4">
            <div>
              <FontAwesomeIcon icon={faServer} size="2x" />
              <h3>10,349,405</h3>
              <p className="text-secondary">Deployments</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUpload} size="2x" />
              <h3>987 TB</h3>
              <p className="text-secondary">Published</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUpload} size="2x" />
              <h3>2,343,265</h3>
              <p className="text-secondary">Projects</p>
            </div>
          </div>
        </div>
      </div>
      {/* CLI */}
      <div className="cli">
        <div className="container grid">
          <img src={cli} />
          <div className="card">
            <h3>Easy to use cross platform CLI</h3>
          </div>
          <div className="card">
            <h3>Deploy in seconds</h3>
          </div>
        </div>
      </div>
      {/* Cloud */}
      <div className="cloud bg-primary my-2 py-2">
        <div className="container grid">
          <div className="text-center">
            <h2 className="lg">Extreme Cloud Hosting</h2>
            <p className="lead my-1">
              Cloud hosting like you've never seen. Fast, efficient and scaable
            </p>
            <a
              href="
                  "
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
          <img src={cloud} alt="cloud" />
        </div>
      </div>
      {/* Languages */}
      <div className="languages">
        <h2 className="md text-center my-2">Supported Language</h2>
        <div className="container flex">
          <div className="card">
            <h4>Node.js</h4>
            <img src={node} />
          </div>
          <div className="card">
            <h4>Python</h4>
            <img src={python} />
          </div>
          <div className="card">
            <h4>C#</h4>
            <img src={csharp} />
          </div>
          <div className="card">
            <h4>PHP</h4>
            <img src={php} />
          </div>
          <div className="card">
            <h4>Scala</h4>
            <img src={scala} />
          </div>
          <div className="card">
            <h4>Ruby</h4>
            <img src={ruby} />
          </div>
          <div className="card">
            <h4>Go</h4>
            <img src={go} />
          </div>
          <div className="card">
            <h4>Clojure</h4>
            <img src={clojure} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

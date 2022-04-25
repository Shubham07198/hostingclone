import "./documentation.scss";

import Doc from "../../images/docs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function Documentation() {
  return (
    <div>
      <div className="docs-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Docs</h1>
            <p className="lead">Learn how to work with the Loruki platform.</p>
          </div>
          <img src={Doc} />
        </div>
      </div>
      <div className="docs-main my-4">
        <div className="container grid">
          <div className="card bg-light p-3">
            <h3 className="my-2">Essentials</h3>
            <nav>
              <ul>
                <li>
                  <a className="text-primary" href="">Introduction</a>
                </li>
                <li>
                  <a href="">About Loruki</a>
                </li>
                <li>
                  <a href="">Installation</a>
                </li>
              </ul>
            </nav>
            <h3 className="my-2">Delpoyment</h3>
            <nav>
              <ul>
                <li>
                  <a href="">Introduction</a>
                </li>
                <li>
                  <a href="">About Loruki</a>
                </li>
                <li>
                  <a href="">Installation</a>
                </li>
              </ul>
            </nav>
            <h3 className="my-2">Setting up container</h3>
            <nav>
              <ul>
                <li>
                  <a href="">Introduction</a>
                </li>
                <li>
                  <a href="">About Loruki</a>
                </li>
                <li>
                  <a href="">Installation</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="card">
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              corrupti, dolor molestiae aperiam iusto cupiditate non aspernatur
              quam, aliquam recusandae quia. Neque praesentium, corporis saepe
              ea voluptates cum atque voluptatem!
            </p>
            <div className="alert alert-success">
              <div><FontAwesomeIcon
                icon={faExclamationCircle}
                size={"1x"}
                color="white"
              /></div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis ullam fuga deleniti exercitationem alias tempora saepe
              molestiae hic sed impedit!
            </p>
            <a href="" className="btn btn-primary">
              Install CLI
            </a>
            <h3>Requirements</h3>
            <ul>
              <li>Windows 10, Mac OSX, Linux</li>
              <li>Node.js v12 or higher</li>
            </ul>
            <h3>Install</h3>
            <p>Mac (Homebrew)</p>
            <pre>
              <code>$brew install loruki-cli</code>
            </pre>
            <p>NPM</p>
            <pre>
              <code>$npm install loruki-cli</code>
            </pre>
            <p>Yarn</p>
            <pre>
              <code>$yarn install loruki-cli</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;

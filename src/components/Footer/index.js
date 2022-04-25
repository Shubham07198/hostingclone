import {
    faFacebook,
    faGithub,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

function Footer() {
    return (
        <div>
             {/* Footer */}
        <footer className="footer bg-dark py-5">
          <div className="container grid-3">
            <div>
              <h1>Loruki</h1>
              <p>Copyright &copy; 2020</p>
            </div>
          
          <nav>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Docs</li>
            </ul>
          </nav>
          <div className="social">
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} size="2.5x" />
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
            </ul>
          </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer

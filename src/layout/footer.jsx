import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/biljana-pavlovic-29a0907b/"
        target="_blanc"
      >
        <img
          src="/portfolio/img/soc-ico/linkedin.png"
          className="soc-ico"
          alt="soc-ico"
        />
      </a>
      <a href="https://github.com/BiljanaPavlovic" target="_blanc">
        <img
          src="/portfolio/img/soc-ico/github.png"
          className="soc-ico"
          alt="soc-ico"
        />
      </a>
      <a href="https://www.instagram.com/biljana_pavlovic_111/" target="_blanc">
        <img
          src="/portfolio/img/soc-ico/instagram.png"
          className="soc-ico"
          alt="soc-ico"
        />
      </a>
      <a href="https://www.facebook.com/biljana.pavlovic1/" target="_blanc">
        <img
          src="/portfolio/img/soc-ico/facebook.png"
          className="soc-ico"
          alt="soc-ico"
        />
      </a>
      <a href="/portfolio/img/BiljanaPavlovicCV1.pdf" download>
        <img
          src="/portfolio/img/soc-ico/DownloadCV.png"
          alt="Download CV"
          className="soc-ico"
        />
      </a>
      <li>
        <img
          src="/portfolio/img/soc-ico/gmail.png"
          className="soc-ico"
          alt="soc-ico"
        />
        zabiljanupavlovic@gmail.com
      </li>

      <p> &copy; Made by Biljana Pavlovic 2020.</p>
    </div>
  );
}

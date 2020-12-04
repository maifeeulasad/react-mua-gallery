import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Gallery from "react-mua-gallery";
// @ts-ignore
import "react-mua-gallery/dist/dist/index.css";

ReactDOM.render(
  <React.StrictMode>
	
        <Gallery
          galleryName={"Gallery"}
          owner={"MUA"}
          slogan={
            "Yet another fun template by MUA, based on other open-sourced projects for another open-sourced projects"
          }
          licenseLink={"https://www.github.com/maifeeulasad"}
          socials={[
            { socialNetwork: "github", socialHandle: "maifee" },
            { socialNetwork: "facebook", socialHandle: "maifee" },
            { socialNetwork: "twitter", socialHandle: "maifee" }
          ]}
          images={[
            {
              url:
                "https://raw.githubusercontent.com/maifeeulasad/Icon-collection/master/background/horizontal/blurry/01.jpg",
              title: "test0",
              details: "test0_"
            },
            {
              url:
                "https://raw.githubusercontent.com/maifeeulasad/Icon-collection/master/background/horizontal/blurry/02.jpg",
              title: "test1",
              details: "test1_"
            },
            {
              url:
                "https://raw.githubusercontent.com/maifeeulasad/Icon-collection/master/background/horizontal/blurry/03.jpg",
              title: "test2",
              details: "test2_"
            },
            {
              url:
                "https://raw.githubusercontent.com/maifeeulasad/Icon-collection/master/background/horizontal/blurry/04.jpg",
              title: "test3",
              details: "test3_"
            }
          ]}
          licenseTitle={"lOve"}
        />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

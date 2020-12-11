# react-mua-gallery

> Just another Gallery template for React.js

[![NPM](https://img.shields.io/npm/v/react-mua-gallery.svg)](https://www.npmjs.com/package/react-mua-gallery) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-mua-gallery
```

## Usage

```jsx
import React, { Component } from 'react'

import Gallery from "react-mua-gallery";
// @ts-ignore
import "react-mua-gallery/dist/dist/index.css";

ReactDOM.render(
  <React.StrictMode>
        <Gallery
          galleryName={"Your Gallery Name"}
          owner={"YOU"}
          slogan={
            "Something that represents you"
          }
          licenseLink={"https://github.com/maifeeulasad/react-mua-gallery/blob/main/LICENSE"}
          socials={[
            { socialNetwork: "github", socialHandle: "maifeeulasad" },
            ...
          ]}
          images={[
            {
              url:
                "https://raw.githubusercontent.com/maifeeulasad/Icon-collection/master/background/horizontal/blurry/01.jpg",
              title: "A beatiful title for a beautiful image",
              details: "Something that opens the third eye"
            },
            ...
          ]}
          licenseTitle={"MIT License"}
        />
  </React.StrictMode>
, document.getElementById('root'))

```

# Sample : 
 - https://maifeeulasad.github.io/react-mua-gallery/
 - https://codesandbox.io/s/react-mua-gallery-example-onh3e?file=/src/index.js

![react-mua-gallery](https://github.com/maifeeulasad/react-mua-gallery/blob/gh-pages/Screenshot.png)

## License

MIT © [maifeeulasad](https://github.com/maifeeulasad)

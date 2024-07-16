import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="gtag-js"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-FQPM4RJT8X"
    ></script>,
    <script
      key="gtag-inline"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FQPM4RJT8X');
        `,
      }}
    ></script>,
  ]);
};
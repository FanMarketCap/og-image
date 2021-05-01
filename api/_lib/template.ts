import { readFileSync } from "fs";
import marked from "marked";
import { sanitizeHtml } from "./sanitizer";
import { ParsedRequest } from "./types";
const twemoji = require("twemoji");
const twOptions = { folder: "svg", ext: ".svg" };
const emojify = (text: string) => twemoji.parse(text, twOptions);

const rglr = readFileSync(
  `${__dirname}/../_fonts/Inter-Regular.woff2`
).toString("base64");
const bold = readFileSync(`${__dirname}/../_fonts/Inter-Bold.woff2`).toString(
  "base64"
);
const mono = readFileSync(`${__dirname}/../_fonts/Vera-Mono.woff2`).toString(
  "base64"
);

function getCss(fontSize: string) {
  let foreground = "black";
  return `
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${rglr}) format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }

    @font-face {
        font-family: 'Vera';
        font-style: normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${mono})  format("woff2");
      }

      body {
        background: white;
        background-size: 100px 100px;
        height: 100vh;
        display: flex;
        margin: 0;
        padding: 0;
      }

    code {
        color: #D400FF;
        font-family: 'Vera';
        white-space: pre-wrap;
        letter-spacing: -5px;
    }

    code:before, code:after {
        content: '\`';
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .logo {
        margin: 0 75px;
    }

    .plus {
        color: #BBB;
        font-family: Times New Roman, Verdana;
        font-size: 100px;
    }

    .spacer {
        margin: 150px;
    }

    .emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
    }

    .heading {
        font-family: 'Inter', sans-serif;
        font-size: ${sanitizeHtml(fontSize)};
        font-style: normal;
        color: ${foreground};
        line-height: 1.2;
        max-width: 50%;
    }

    .content {
        font-family: "Inter", sans-serif;
        display: flex;
      }

      .content .item {
        margin-right: 12rem;
      }

      .content p,
      .content h3 {
        margin: 0;
      }

      .content h3 {
        font-size: 54px;
        color: #999;
        font-weight: 500;
      }

      .content p {
        font-size: 76px;
        font-weight: 700;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .container {
        width: 100%;
        padding: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    `;
}

export function getHtml(parsedReq: ParsedRequest) {
  const { text, md, fontSize, images, widths, heights, price, h24, l24 } = parsedReq;
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(fontSize)}
    </style>
    <body>
    <div class="container">
        <div class="header">
            <div class="heading">${emojify(
                md ? marked(text) : sanitizeHtml(text)
              )}
            </div>
            <div class="logo-wrapper">
                ${images
                    .map(
                      (img, i) =>
                        getPlusSign(i) + getImage(img, widths[i], heights[i])
                    )
                    .join("")}
            </div>
        </div>
        <div class="content">
            <div class="item">
                <h3>Price</h3>
                <p>${emojify(
                    md ? marked(price) : sanitizeHtml(price)
                  )}</p>
            </div>
            <div class="item">
                <h3>Highest 24h</h3>
                <p>${emojify(
                    md ? marked(h24) : sanitizeHtml(h24)
                  )}</p>
            </div>
            <div class="item">
                <h3>Lowest 24h</h3>
                <p>${emojify(
                    md ? marked(l24) : sanitizeHtml(l24)
                  )}</p>
            </div>
      </div>
    </div>
    </body>
</html>`;
}

function getImage(src: string, width = "auto", height = "225") {
  return `<img
        class="logo"
        alt="Generated Image"
        src="${sanitizeHtml(src)}"
        width="${sanitizeHtml(width)}"
        height="${sanitizeHtml(height)}"
    />`;
}

function getPlusSign(i: number) {
  return i === 0 ? "" : '<div class="plus">+</div>';
}

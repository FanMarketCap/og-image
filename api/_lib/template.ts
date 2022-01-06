import { readFileSync } from "fs";
import marked from "marked";
import { sanitizeHtml } from "./sanitizer";
import { ParsedRequest } from "./types";
const twemoji = require("twemoji");
const twOptions = { folder: "svg", ext: ".svg" };
const emojify = (text: string) => twemoji.parse(text, twOptions);

const rglr = readFileSync(
  `${__dirname}/../_fonts/Poppins-Regular.ttf`
).toString("base64");
const bold = readFileSync(`${__dirname}/../_fonts/Poppins-Bold.ttf`).toString(
  "base64"
);

function getCss(change_24h: any) {
  const isSuccess = parseFloat(change_24h) > 0;
  const isFlat = parseFloat(change_24h) === 0;

  return `
    @font-face {
        font-family: 'Poppins';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${rglr});
    }

    @font-face {
        font-family: 'Poppins';
        font-style:  normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${bold});
    }

    * {
      box-sizing: border-box;
    }

    body {
      background: white;
      background-size: 100px 100px;
      height: 100vh;
      display: flex;
      margin: 0;
      padding: 0;
      color: #1a202c;
      font-family: "Poppins";
    }

    code {
      color: #d400ff;
      font-family: "Poppins";
      white-space: pre-wrap;
      letter-spacing: -5px;
    }

    code:before,
    code:after {
      content: "\`";
    }

    .logo-wrapper {
      display: flex;
      align-items: center;
    }

    .logo {
      margin-right: 64px;
    }

    .heading {
      font-family: "Poppins", sans-serif;
      font-size: 100px;
      font-weight: 700;
      font-style: normal;
      line-height: 1.2;
      margin-right: 60px;
    }

    .content {
      font-family: "Poppins", sans-serif;
      display: flex;
      flex-shrink: 0;
    }

    .content .item {
      margin-right: 12rem;
    }

    .content p,
    .content h3 {
      margin: 0;
    }

    .highest {
      color: #48bb78;
    }

    .lowest {
      color: #f56565;
    }

    .content h3 {
      font-size: 34px;
      color: #718096;
      font-weight: 500;
    }

    .content p {
      font-size: 76px;
      font-weight: 700;
    }

    .header {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }

    .container {
      width: 100%;
      padding: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
    }

    .price-container {
      display: flex;
      align-items: center;
    }

    .price-container p {
      font-size: 120px;
    }

    .second-line p {
      font-size: 66px;
    }

    .second-line h3 {
      font-size: 44px;
    }

    .icons {
      margin-left: 1rem;
      display: flex;
      align-items: center;
      font-size: 56px;
      background: ${isSuccess ? "#48bb78" : isFlat ? "transparent" : "#f56565"};
      border-radius: 16px;
      padding: 0 24px;
      color: ${isFlat ? "#1a202c" : "#FFF"};
    }

    .fmc-logo {
      max-height: 90px;
      margin-right: auto;
    }

    .up, .down {
      margin-right: 4px;
    }

    .grid-4-column {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(4, minmax(0px, 1fr));
      margin-top: 1rem;
    }

    .grid-3-column {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(3, minmax(0px, 1fr));
      margin-top: 1rem;
    }

    .grid-2-column {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(2, minmax(0px, 1fr));
      margin-top: 1rem;
      width: 100%;
    }

    .alert-item {
      display: flex;
      -moz-box-pack: justify;
      justify-content: space-between;
      background: #f7fafc;
      border-radius: 12px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      padding: 1rem;
      min-height: 74px;
      width: 100%;
    }

    .alert-item__left {
      display: flex;
      -moz-box-align: center;
      align-items: center;
      -moz-box-pack: start;
      justify-content: flex-start;
      width: 100%;
      align-self: center;
      min-width: 0;
      max-width: 100%;
    }

    .css-wco78n {
      display: flex;
      flex-shrink: 0;
      position: relative;
      width: 64px;
      height: 64px;
    }

    .css-13ay1w {
      display: flex;
      -moz-box-align: center;
      align-items: center;
      margin-left: 0.75rem;
      width: 100%;
      min-width: 0px;
    }

    .css-14unkk7 {
      font-size: 2.5rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -moz-box-orient: vertical;
      -webkit-line-clamp: 2;
      --chakra-line-clamp: 2;
    }

    .css-1xkxh1k {
      display: inline-block;
      white-space: nowrap;
      vertical-align: middle;
      padding-inline-start: 0.25rem;
      padding-inline-end: 0.25rem;
      text-transform: uppercase;
      font-size: 2rem;
      border-radius: 2px;
      font-weight: 600;
      background: rgba(0, 0, 0, 0.06);
      color: rgba(0, 0, 0, 0.8);
      margin-left: 0.5rem;
    }

    .alert-item__right {
      max-width: 200px;
      margin-left: 0.5rem;
      margin-bottom: 0px;
      text-align: right;
      align-self: center;
      flex-shrink: 0;
    }

    .css-re17zb {
      font-size: 2rem;
      white-space: nowrap;
    }

    .css-1o01fup {
      font-size: 2.5rem;
      font-weight: 600;
    }

    .price-alert__title {
      font-size: 3rem;
    }

    .price-alert-content {
      width: 80%;
    }
  `;
}

function getIcon(change_24h: any) {
  const isSuccess = parseFloat(change_24h) > 0;
  const isFlat = parseFloat(change_24h) === 0;

  if (isSuccess) {
    return `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="up"
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>`;
  }

  if (isFlat) {
    return `<svg></svg>`;
  }

  return `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="down"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `;
}

function formatPercent(value: any) {
  if (isNaN(value)) {
    return "-";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(value < 0 ? (value * -1) / 100 : value / 100);
}

function getTokenHeader(parsedReq: ParsedRequest) {
  const { text, md, images, widths, heights, price, change_24h } = parsedReq;

  return `
  <div class="header">
    <div class="logo-wrapper">
      <div>
        ${images
          .map(
            (img, i) => getPlusSign(i) + getImage(img, widths[i], heights[i])
          )
          .join("")}
      </div>
      <div class="heading">
        ${emojify(md ? marked(text) : sanitizeHtml(text))}
      </div>
    </div>
    <div class="content">
      <div>
        <h3>Price</h3>
        <div class="price-container">
          <p>${emojify(md ? marked(price) : sanitizeHtml(price))}</p>
          <div class="icons">
            ${getIcon(change_24h)}
            <div class="percent">${formatPercent(change_24h)}</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function getTokenContent(parsedReq: ParsedRequest) {
  const { md, h24, l24, marketcap } = parsedReq;

  return `
  <div>
    <div class="content second-line">
      <div class="item">
        <h3>Marketcap</h3>
        <p>${emojify(md ? marked(marketcap) : sanitizeHtml(marketcap))}</p>
      </div>
      <div class="item highest">
        <h3>Highest 24h</h3>
        <p>${emojify(md ? marked(h24) : sanitizeHtml(h24))}</p>
      </div>
      <div class="item lowest">
        <h3>Lowest 24h</h3>
        <p>${emojify(md ? marked(l24) : sanitizeHtml(l24))}</p>
      </div>
    </div>
  </div>`;
}

function getUserContent(parsedReq: ParsedRequest) {
  const { alerts } = parsedReq;

  if (alerts) {
    const alertsArray = JSON.parse(decodeURIComponent(alerts));

    if (alertsArray.length > 0) {
      return `
      <div class="price-alert-content">
        <h2 class="price-alert__title">Price Alerts</h2>
        <div class="grid-2-column">
          ${alertsArray
            .map((item: any) => {
              return `
              <div class="alert-item">
                <div class="alert-item__left">
                  <div class="css-wco78n">
                    <img src="${item.token.logo}" />
                  </div>
                  <div class="css-13ay1w">
                    <p class="chakra-text css-14unkk7">${item.token.name}</p>
                    <span class="chakra-badge css-1xkxh1k">${item.symbol}</span>
                  </div>
                </div>
                <div class="alert-item__right">
                  <span class="chakra-text css-re17zb">Target Price</span>
                  <span class="chakra-text css-1o01fup">$${item.value}</span>
                </div>
              </div>
            `;
            })
            .join("")}
        </div>
      </div>
    `;
    }

    return ``;
  }

  return ``;
}

function getUserHeader(parsedReq: ParsedRequest) {
  const { username, md } = parsedReq;

  return `
  <div class="header">
    <div class="logo-wrapper">
      <div class="heading">
        ${emojify(md ? marked(username) : sanitizeHtml(username))}
      </div>
    </div>
  </div>`;
}

function getLogo() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 411.08 109.41" class="fmc-logo"><path class="prefix__cls-1" d="M23.2 92.07a4.45 4.45 0 0 1-2.88-1 5.66 5.66 0 0 1-1.9-3.3 19.63 19.63 0 0 1-.35-3.77q-.11-18.84-.14-37.4a22.09 22.09 0 0 1-4.29.49 8.64 8.64 0 0 1-3.59-.77 5.53 5.53 0 0 1-2.67-3 4.32 4.32 0 0 1-.28-1.51 3.77 3.77 0 0 1 .7-2.14 6.76 6.76 0 0 1 2.2-1.46 49.11 49.11 0 0 1 8.75-3.37l.74-20a37.25 37.25 0 0 1-7.21.7 38.31 38.31 0 0 1-6.89-.63Q1 14.2.07 11.46a5.39 5.39 0 0 1-.07-.88Q0 4.85 16 3a182.29 182.29 0 0 1 23.87-1.8Q54.42 1.2 57 3.38a6 6 0 0 1 2.39 5A5.2 5.2 0 0 1 58 11.92a6.75 6.75 0 0 1-4.47 1.76h-.83a25.52 25.52 0 0 1-4.29-.36 37.12 37.12 0 0 0-3.8-.17q-5.62 0-14.23.84l-.11 1.83q-.7 7.2-.7 14.45v2a75.69 75.69 0 0 1 9.49-.6q2.64 0 5.31.18a5.5 5.5 0 0 1 2.64.66Q49 33.83 49 38a4.88 4.88 0 0 1-.45 2q-1 1.62-4.08 2.07-8 1.41-16.07 2.78-1 14.52-1 29.07 0 8.52.14 10.9a12 12 0 0 1 .07 1.34 23.7 23.7 0 0 1-.14 2.42 3.61 3.61 0 0 1-1.23 2.43 5.24 5.24 0 0 1-3.04 1.06zm50.07-11.84a3.35 3.35 0 0 1-1.41-.39 6.74 6.74 0 0 1-2.25-2.43A36.1 36.1 0 0 1 65 66a43.31 43.31 0 0 1-5 8.08 9.93 9.93 0 0 1-2.67 2.54 4.21 4.21 0 0 1-2.26.66q-2.91 0-5.09-3.69a21.39 21.39 0 0 1-3-10.86c0-.24 0-1.41.09-3.53s.95-4.91 2.66-8.35q3.75-7.74 10.44-9.53a5.56 5.56 0 0 1 1.54-.21 10.13 10.13 0 0 1 2.29.35 3.92 3.92 0 0 1 2.39 2.25 7.34 7.34 0 0 0 .53-2.29 4.71 4.71 0 0 1 2.63-4.18 2.51 2.51 0 0 1 1.23-.32 3 3 0 0 1 2.29 1.16 7.36 7.36 0 0 1 1.83 3.77 15.17 15.17 0 0 1 .14 2 48 48 0 0 1-.56 5.06 104.55 104.55 0 0 0-1.38 14.7 47.09 47.09 0 0 0 1.66 12.65 4.07 4.07 0 0 1 .24 1.26 8.51 8.51 0 0 1-.12 1.2A2 2 0 0 1 74 80a1.28 1.28 0 0 1-.73.23zM57.23 69c.71 0 1.49-.71 2.36-2.14a49.69 49.69 0 0 0 4.78-11.39A26.32 26.32 0 0 0 65.74 49c0-.59-.13-.88-.38-.88a5.18 5.18 0 0 0-3.63 1.51q-3.09 3-4.71 8.93a27.75 27.75 0 0 0-1.05 7Q56 69 57.23 69zM84 78.43q-5.24-.17-5.76-7c-.24-3.07-.35-6.13-.35-9.17a111.4 111.4 0 0 1 1.44-17.9 16.77 16.77 0 0 1 .51-2.46 8.24 8.24 0 0 1 1-2.25 4.45 4.45 0 0 1 1.79-1.62 3.48 3.48 0 0 1 1.72-.45 3.11 3.11 0 0 1 .67.07 4.14 4.14 0 0 1 2.71 2.05 7.79 7.79 0 0 1 1 3.5v.92c0 .63 0 1.26-.07 1.89s-.07 1.08-.07 1.62a17 17 0 0 0 .21 2.64c.43-1.17.91-2.32 1.45-3.45a13.8 13.8 0 0 1 2-3.11 8.36 8.36 0 0 1 3-2.2 6.55 6.55 0 0 1 2.66-.51 6.37 6.37 0 0 1 4.09 1.54 8.9 8.9 0 0 1 2.22 2.67 15.92 15.92 0 0 1 1.65 6.65c0 1 .07 2 .07 2.91 0 1.64-.06 3.27-.17 4.89s-.18 3.23-.18 4.85c0 1.36 0 2.72.14 4.08a5.11 5.11 0 0 0 .53 1.92 1.82 1.82 0 0 0 1.44 1.07c.89 0 1.62-.7 2.18-2.11a68.64 68.64 0 0 0 3.69-14.2 3.74 3.74 0 0 1 .56-1.59 1.16 1.16 0 0 1 1-.66c.85 0 1.27.72 1.27 2.18v.31q-.91 10.38-3.45 16.21a9.73 9.73 0 0 1-4 4.64 6.56 6.56 0 0 1-2.92.7 9.62 9.62 0 0 1-3.3-.79A8.7 8.7 0 0 1 99 73.09a16.91 16.91 0 0 1-2.49-9.63c0-1.08.07-2.56.21-4.43q.18-1.94.18-3.87a38 38 0 0 0-.22-4.11c0-.78-.39-1.16-1-1.16a2.53 2.53 0 0 0-1 .24q-2.28 1.34-3.48 5.35a55.07 55.07 0 0 0-2.39 16.13v.74a9.67 9.67 0 0 1-.52 3.2A4.94 4.94 0 0 1 84 78.43z"/><path class="prefix__cls-1" d="M119 92.36a4.69 4.69 0 0 1-3-1.09 5.93 5.93 0 0 1-1.9-3.31q-.63-2.8-.63-15.92 0-12.24 1-27.46a307.29 307.29 0 0 1 4.09-33.15 31.93 31.93 0 0 1 1-4.22 10.23 10.23 0 0 1 2-3.73 8.11 8.11 0 0 1 6.06-2.64 8.65 8.65 0 0 1 7 3.8 17.89 17.89 0 0 1 2.22 7.1A224.64 224.64 0 0 1 139.36 44q3.27-17.86 7.49-35.58a14.2 14.2 0 0 1 2.15-5.5A7.52 7.52 0 0 1 155.18 0a8 8 0 0 1 4.61 1.48 9.92 9.92 0 0 1 3.51 5.38 30.58 30.58 0 0 1 1.09 7.59q.53 14.06.53 28.19 0 16.61-.42 43.88V87a9.2 9.2 0 0 1-.5 3 4 4 0 0 1-4 2.32 5.16 5.16 0 0 1-4.39-2.08 6.45 6.45 0 0 1-1-2.51 22.55 22.55 0 0 1-.29-2.73q-1.62-27.42-1.62-54.91v-6.75a202.07 202.07 0 0 0-7 38.46 20 20 0 0 1-.28 2.44 7.17 7.17 0 0 1-.82 2.31 4.5 4.5 0 0 1-1.6 1.69 3.16 3.16 0 0 1-1.48.38c-1.2 0-2.27-.76-3.24-2.28a37.7 37.7 0 0 1-4.81-11.78A156.61 156.61 0 0 1 129.92 37q-1.24-8.88-2.2-17.86a360.7 360.7 0 0 0-3.79 52.18q0 5.73.24 14a21.93 21.93 0 0 1-.17 2.48 5.7 5.7 0 0 1-1.17 2.8 4.8 4.8 0 0 1-3.83 1.76zm76.89-12.13a3.35 3.35 0 0 1-1.41-.39 6.92 6.92 0 0 1-2.25-2.43 36.07 36.07 0 0 1-4.6-11.41 42.84 42.84 0 0 1-5 8.08 9.79 9.79 0 0 1-2.63 2.53 4.15 4.15 0 0 1-2.25.66c-1.95 0-3.64-1.23-5.1-3.69a21.48 21.48 0 0 1-3-10.86c0-.24 0-1.41.09-3.53s.94-4.91 2.65-8.35q3.76-7.74 10.44-9.53a5.63 5.63 0 0 1 1.55-.21 10 10 0 0 1 2.28.35A3.93 3.93 0 0 1 189 43.7a7.34 7.34 0 0 0 .52-2.29 4.74 4.74 0 0 1 2.64-4.18 2.45 2.45 0 0 1 1.23-.32 3 3 0 0 1 2.28 1.16 7.36 7.36 0 0 1 1.83 3.77 13.64 13.64 0 0 1 .14 2 45.33 45.33 0 0 1-.56 5.06 105.81 105.81 0 0 0-1.37 14.7 47.09 47.09 0 0 0 1.65 12.65 4.07 4.07 0 0 1 .21 1.27 8.51 8.51 0 0 1-.12 1.2 2 2 0 0 1-.86 1.3 1.31 1.31 0 0 1-.7.21zM179.86 69c.7 0 1.49-.71 2.35-2.14A49.66 49.66 0 0 0 187 55.48a26.82 26.82 0 0 0 1.37-6.48c0-.59-.13-.88-.39-.88a5.16 5.16 0 0 0-3.62 1.51q-3.09 3-4.71 8.93a27.81 27.81 0 0 0-1.06 7c0 2.29.41 3.44 1.27 3.44zm28.55 9a5.6 5.6 0 0 1-4.59-3 21.32 21.32 0 0 1-2.62-7.37 48.34 48.34 0 0 1-.74-8.58v-3.23a39.55 39.55 0 0 1 1-7.23 22.89 22.89 0 0 1 2.64-7.27c1.14-1.87 2.52-2.81 4.17-2.83a2.64 2.64 0 0 1 1.74.91 4.61 4.61 0 0 1 1 3.13q.28 7 .28 7.56v1a22.68 22.68 0 0 1 4.45-8.09c1.95-2.25 3.76-3.43 5.43-3.52a7.77 7.77 0 0 1 4.46 1.34 5.87 5.87 0 0 1 2 2.53 4.24 4.24 0 0 1 .42 1.47c0 .38-.23.67-.7.88a1.73 1.73 0 0 1-.81.18 4.59 4.59 0 0 1-.77-.11 3.64 3.64 0 0 1-1.48-1 1 1 0 0 0-.7-.28 1.06 1.06 0 0 0-.6.17 20.64 20.64 0 0 0-6 7.69 41.4 41.4 0 0 0-3.23 10.24 70.87 70.87 0 0 0-1.17 10.9 4.55 4.55 0 0 1-1.54 3.25 4.12 4.12 0 0 1-2.64 1.26zm30.72 11.93a3.74 3.74 0 0 1-2.53-1.37 8.14 8.14 0 0 1-1.33-1.69 30.62 30.62 0 0 1-3.38-12.23 123.94 123.94 0 0 1-.63-13.12 222.55 222.55 0 0 1 1.93-29.07 127.56 127.56 0 0 1 4.19-19.55q1.16-4.82 4.42-4.81a2.81 2.81 0 0 1 2 .87q1.66 1.56 1.66 5a195 195 0 0 1-1.38 20.32q-.84 7.84-1.33 15.44a60.25 60.25 0 0 1 5.13-10.45q3.63-5.65 7.1-5.66a5.2 5.2 0 0 1 3.94 1.55c1.85 1.92 2.78 4.94 2.78 9v1.58a23.33 23.33 0 0 1-.54 4.08 16.15 16.15 0 0 1-8.2 11.39 16.82 16.82 0 0 1-8.33 2.18h-1.23a41.27 41.27 0 0 0 3.32 2.71 19.08 19.08 0 0 0 3.66 2.09 10 10 0 0 0 4 .83q4 0 8-5.07a54.29 54.29 0 0 0 5.27-8.47c.4-.72.73-1.3 1-1.72a1.23 1.23 0 0 1 1.07-.63 1.32 1.32 0 0 1 1.09.52 1.27 1.27 0 0 1 .28.81 32.49 32.49 0 0 1-1.58 4.85 54.48 54.48 0 0 1-5.73 11.57q-4.25 6.22-8.65 6.22a12.09 12.09 0 0 1-8.79-3.2 20.74 20.74 0 0 1-4.11-5.94l-.35-.7c-.09 3.87-.14 7.72-.14 11.57v1.93c.05.89.07 1.86.07 2.92q0 1.19-.12 3a4.34 4.34 0 0 1-1.18 2.83 2.13 2.13 0 0 1-1.38.42zm6.19-37.09a4.78 4.78 0 0 0 2.78-1.48 20.56 20.56 0 0 0 6.5-12 9.21 9.21 0 0 0 .07-.92.69.69 0 0 0-.35-.63.66.66 0 0 0-.32-.07.86.86 0 0 0-.38.1 16.62 16.62 0 0 0-4.19 5.35q-.43.81-1.43 2.9a61.12 61.12 0 0 0-3.16 6.68 1.66 1.66 0 0 0 .48.07z"/><path class="prefix__cls-1" d="M281.39 78c-3.77-.09-6.76-1.08-9-3q-5.52-4.65-5.52-13.61a45.17 45.17 0 0 1 .35-4.57 24.12 24.12 0 0 1 2.42-7.5 20.14 20.14 0 0 1 5.44-7.07 12.19 12.19 0 0 1 7.75-2.79 9.5 9.5 0 0 1 6.61 2.18 8.92 8.92 0 0 1 2.56 6.77 15.52 15.52 0 0 1-.65 4.17 12.53 12.53 0 0 1-2.19 4.34 15.66 15.66 0 0 1-6.61 5 10.44 10.44 0 0 1-3.34.7 12.19 12.19 0 0 1-1.37-.07c-.78-.1-1.17-.25-1.17-.46v.67a14.16 14.16 0 0 0 1.13 5.89 4.15 4.15 0 0 0 3.9 2.58q5.7-.1 10.48-7a49.26 49.26 0 0 0 5.69-10.76.91.91 0 0 1 .92-.59.92.92 0 0 1 .49.14 1 1 0 0 1 .53.87 1.15 1.15 0 0 1-.07.36 72.17 72.17 0 0 1-6.26 15.25q-4.93 8.41-12.09 8.5zm-2.67-20.46a5.45 5.45 0 0 0 3.09-1 9.06 9.06 0 0 0 2.71-3 13.41 13.41 0 0 0 1.55-3.54 11.31 11.31 0 0 0 .63-3.31 4.27 4.27 0 0 0-.23-1.32q-.23-.67-1.32-.75a4.76 4.76 0 0 0-3.37 1.88 16.94 16.94 0 0 0-2.78 4.67 30.39 30.39 0 0 0-1.79 6.17 6 6 0 0 0 1.51.21z"/><path class="prefix__cls-1" d="M307.86 77a15.91 15.91 0 0 1-2.53-.35 7.28 7.28 0 0 1-3.76-2.61A12.73 12.73 0 0 1 299 69.4a49.54 49.54 0 0 1-1.48-13.64q0-6.12 1-18a20.59 20.59 0 0 1-6.27-1.88c-1.66-.85-2.48-1.93-2.48-3.22a1.8 1.8 0 0 1 .67-1.24 3.35 3.35 0 0 1 2.28-.72c.17 0 .84-.06 2-.16s2.74-.22 4.64-.34a77.38 77.38 0 0 1 2.74-11.35 10.19 10.19 0 0 1 1.59-3.34 4.17 4.17 0 0 1 1.44-1.16 3 3 0 0 1 1.26-.28h.56A3.23 3.23 0 0 1 309.3 16a8.83 8.83 0 0 1 .81 3.2c.1 1.43.14 2.86.14 4.29s-.08 3.59-.24 6.12h5.34a3.47 3.47 0 0 1 2.41 1.09 3.07 3.07 0 0 1 .93 1.93 4.29 4.29 0 0 1-2.69 3.46 19.23 19.23 0 0 1-6.38 1.81c-.12 2.18-.29 5-.53 8.51q-.45 6.26-.63 12.51c0 .82-.07 1.72-.14 2.71a45.83 45.83 0 0 0-.25 4.71 10.36 10.36 0 0 0 .74 4.08 1.65 1.65 0 0 0 1.58 1.12c.57 0 1.11-.4 1.62-1.19a20.46 20.46 0 0 0 2.2-4.8q.8-2.55 1.39-5.19a57.71 57.71 0 0 1 1.58-5.94q.49-1.44 1.41-1.44c.68.05 1 .63 1 1.76l-.07.77q-.81 15.85-7.74 20.43a7.86 7.86 0 0 1-3.92 1.06z"/><path class="prefix__cls-1" d="M335.25 92.53a10.64 10.64 0 0 1-4-1 13.56 13.56 0 0 1-4.7-3.6 26.9 26.9 0 0 1-3.88-5.55 48.58 48.58 0 0 1-5.13-16.49 67.81 67.81 0 0 1-.57-8.79 115.13 115.13 0 0 1 .67-11.81 115.58 115.58 0 0 1 5.66-27.25q3.17-9.35 8.65-14.45a14.52 14.52 0 0 1 3.66-2.39 8.18 8.18 0 0 1 3.65-.84 7.84 7.84 0 0 1 4.61 1.51 11.19 11.19 0 0 1 3.27 3.58 11.4 11.4 0 0 1 1.54 5.66c0 2.28-.6 3.92-1.82 4.93a2.2 2.2 0 0 1-1.41.56 2.05 2.05 0 0 1-.81-.18 2.22 2.22 0 0 1-1.23-1.68 8.08 8.08 0 0 1-.1-1.31c0-.53 0-1.07.07-1.61a5.25 5.25 0 0 0-.6-2.48q-.6-1.14-1.41-1.14-3.72 0-7.13 9.63a112.67 112.67 0 0 0-4.89 22.25A148.28 148.28 0 0 0 328 59q0 3 .23 7.31a52.43 52.43 0 0 0 1.23 8.76 19.72 19.72 0 0 0 2.83 7 5.48 5.48 0 0 0 4.61 2.58 3.9 3.9 0 0 0 2.6-.88 12.36 12.36 0 0 0 3.1-4.77 16 16 0 0 1 1.4-2.61c1.15-1.73 2.23-2.6 3.23-2.6a1.89 1.89 0 0 1 1.57.81 3 3 0 0 1 .61 1.9 6.82 6.82 0 0 1-.38 2.22 28 28 0 0 1-3.78 7.82 14.33 14.33 0 0 1-6.67 5.39 10 10 0 0 1-3.33.6zm40.54-12.3a3.35 3.35 0 0 1-1.41-.39 6.74 6.74 0 0 1-2.25-2.43A36.1 36.1 0 0 1 367.52 66a43.31 43.31 0 0 1-4.95 8.08 9.83 9.83 0 0 1-2.68 2.54 4.15 4.15 0 0 1-2.25.66q-2.91 0-5.09-3.69a21.39 21.39 0 0 1-3-10.86c0-.24 0-1.41.09-3.53s.94-4.91 2.66-8.35q3.75-7.74 10.44-9.53a5.56 5.56 0 0 1 1.54-.21 10.13 10.13 0 0 1 2.29.35 3.92 3.92 0 0 1 2.39 2.25 7.34 7.34 0 0 0 .53-2.29 4.71 4.71 0 0 1 2.63-4.18 2.51 2.51 0 0 1 1.23-.32 3 3 0 0 1 2.29 1.16 7.36 7.36 0 0 1 1.83 3.77 15.17 15.17 0 0 1 .14 2 48 48 0 0 1-.61 5.05 104.55 104.55 0 0 0-1.38 14.7 47.09 47.09 0 0 0 1.66 12.65 4.07 4.07 0 0 1 .21 1.27 7.46 7.46 0 0 1-.13 1.2 2 2 0 0 1-.86 1.3 1.28 1.28 0 0 1-.71.21zM359.75 69c.71 0 1.49-.71 2.36-2.14a49.69 49.69 0 0 0 4.78-11.39 26.82 26.82 0 0 0 1.37-6.47c0-.59-.13-.88-.38-.88a5.18 5.18 0 0 0-3.63 1.51q-3.09 3-4.71 8.93a27.75 27.75 0 0 0-1.05 7q0 3.44 1.26 3.44zm26.62 40.41h-.25a5.2 5.2 0 0 1-5.24-4.54q-1-9.18-1.19-17.33c-.05-3-.07-5.71-.07-8.05q0-12.63.67-21.45a103.37 103.37 0 0 1 2.35-15.47 10.64 10.64 0 0 1 1.36-3.44 3.51 3.51 0 0 1 2.88-1.62 3 3 0 0 1 2.68 1.76q1.23 2.25 1.4 7.94a13.84 13.84 0 0 1 1.85-3 10.45 10.45 0 0 1 2.93-2.53 8.14 8.14 0 0 1 4.19-1 8 8 0 0 1 5.48 2.46q5.67 5.37 5.66 15.15 0 10.34-5.38 15.64a8.48 8.48 0 0 1-6 2.78q-7.28 0-8.08-4.85c-.1 1.24-.19 1.86-.29 1.86s-.29-.84-.45-2.53q-.11 3.66-.11 7.31 0 4.89.21 11.68.25 12.61.28 14a5.24 5.24 0 0 1-1.35 3.64 5.16 5.16 0 0 1-3.53 1.59zm8.51-40.15q3.62 0 4.95-5.56a26 26 0 0 0 .63-6 33.86 33.86 0 0 0-.29-4.52 17.14 17.14 0 0 0-.9-3.8c-.4-1-.83-1.56-1.3-1.56a3.17 3.17 0 0 0-2.5 1.76 18.25 18.25 0 0 0-2 4.5A41.13 41.13 0 0 0 392.1 60a37 37 0 0 0-.49 5.82 3.08 3.08 0 0 0 .45 1.23 5.92 5.92 0 0 0 1.22 1.54 2.31 2.31 0 0 0 1.6.67z"/></svg>
  `;
}

export function getHtml(parsedReq: ParsedRequest) {
  const { change_24h, username } = parsedReq;

  return `
  <!DOCTYPE html>

  <html>
      <meta charset="utf-8">
      <title>Generated Image</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
          ${getCss(change_24h)}
      </style>
      <body>
        <div class="container">

          ${username ? getUserHeader(parsedReq) : getTokenHeader(parsedReq)}

          ${username ? getUserContent(parsedReq) : getTokenContent(parsedReq)}

          ${getLogo()}

        </div>
      </body>
  </html>
`;
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

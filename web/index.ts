import { ParsedRequest, Theme, FileType } from "../api/_lib/types";
const { H, R, copee } = window as any;
let timeout = -1;

interface ImagePreviewProps {
  src: string;
  onclick: () => void;
  onload: () => void;
  onerror: () => void;
  loading: boolean;
}

const ImagePreview = ({
  src,
  onclick,
  onload,
  onerror,
  loading,
}: ImagePreviewProps) => {
  const style = {
    filter: loading ? "blur(5px)" : "",
    opacity: loading ? 0.1 : 1,
  };
  const title = "Click to copy image URL to clipboard";
  return H(
    "a",
    { className: "image-wrapper", href: src, onclick },
    H("img", { src, onload, onerror, style, title })
  );
};

interface DropdownOption {
  text: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onchange: (val: string) => void;
  small: boolean;
}

const Dropdown = ({ options, value, onchange, small }: DropdownProps) => {
  const wrapper = small ? "select-wrapper small" : "select-wrapper";
  const arrow = small ? "select-arrow small" : "select-arrow";
  return H(
    "div",
    { className: wrapper },
    H(
      "select",
      { onchange: (e: any) => onchange(e.target.value) },
      options.map((o) =>
        H("option", { value: o.value, selected: value === o.value }, o.text)
      )
    ),
    H("div", { className: arrow }, "▼")
  );
};

interface TextInputProps {
  value: string;
  oninput: (val: string) => void;
}

const TextInput = ({ value, oninput }: TextInputProps) => {
  return H(
    "div",
    { className: "input-outer-wrapper" },
    H(
      "div",
      { className: "input-inner-wrapper" },
      H("input", {
        type: "text",
        value,
        oninput: (e: any) => oninput(e.target.value),
      })
    )
  );
};

interface ButtonProps {
  label: string;
  onclick: () => void;
}

const Button = ({ label, onclick }: ButtonProps) => {
  return H("button", { onclick }, label);
};

interface FieldProps {
  label: string;
  input: any;
}

const Field = ({ label, input }: FieldProps) => {
  return H(
    "div",
    { className: "field" },
    H(
      "label",
      H("div", { className: "field-label" }, label),
      H("div", { className: "field-value" }, input)
    )
  );
};

interface ToastProps {
  show: boolean;
  message: string;
}

const Toast = ({ show, message }: ToastProps) => {
  const style = { transform: show ? "translate3d(0,-0px,-0px) scale(1)" : "" };
  return H(
    "div",
    { className: "toast-area" },
    H(
      "div",
      { className: "toast-outer", style },
      H(
        "div",
        { className: "toast-inner" },
        H("div", { className: "toast-message" }, message)
      )
    )
  );
};

const themeOptions: DropdownOption[] = [
  { text: "Light", value: "light" },
  { text: "Dark", value: "dark" },
];

const fileTypeOptions: DropdownOption[] = [
  { text: "PNG", value: "png" },
  { text: "JPEG", value: "jpeg" },
];

const markdownOptions: DropdownOption[] = [
  { text: "Plain Text", value: "0" },
  { text: "Markdown", value: "1" },
];

const imageOptions: DropdownOption[] = [
  {
    text: "BARCA",
    value:
      "https://brian.fanmarketcap.com/storage/Q9SRo1LHg2YtMbcJmBNT2W1MjSSBffZN0YLNmrDV.png",
  },
  {
    text: "PSG",
    value:
      "https://brian.fanmarketcap.com/storage/zl0QDwRAe6A9j9Bo1ouoNtyZFodkT7vWVLgr0cka.png",
  },
  {
    text: "JUV",
    value:
      "https://brian.fanmarketcap.com/storage/RjfyJbaKRPlXJUaj8MDYpHTdrx0ase87exH5i37j.png",
  },
  {
    text: "GAL",
    value:
      "https://brian.fanmarketcap.com/storage/iOMYHg59lKoiy3rhGRl0ai0UCIFJiPR1OFeIDh56.png",
  },
  {
    text: "ACM",
    value:
      "https://brian.fanmarketcap.com/storage/l8WXSFc1iTvkJ9e4Az3IDk6HzLeaZQdvqKotQgLD.png",
  },
  {
    text: "ATM",
    value:
      "https://brian.fanmarketcap.com/storage/uqXUq7EsTBKIyUxwCC5Auq602i6KXbabQExl77jF.png",
  },
  {
    text: "OG",
    value:
      "https://brian.fanmarketcap.com/storage/NBE05yVIVZBQa5kijsDdFQnpgj9jaHuxiZajiGEu.png",
  },
  {
    text: "NAVI",
    value:
      "https://brian.fanmarketcap.com/storage/BgXlbgbrNzbbfKRxbZIwCQgJBfjj2DcW4PidoyWR.png",
  },
  {
    text: "ASR",
    value:
      "https://brian.fanmarketcap.com/storage/OGJv0Wfp6gDhPbvWqKMgeIYtHzUwViiwUFNsRJCE.png",
  },
  {
    text: "STV",
    value:
      "https://brian.fanmarketcap.com/storage/Ac124jyygHyZuAfYa2YSW1XdUVmhkne0WzKlgyzg.png",
  },
  {
    text: "TRA",
    value:
      "https://brian.fanmarketcap.com/storage/EEfHEsistKzzQiP8Na3KbP0zb5AuGPRnOoZrVavz.png",
  },
  {
    text: "TH",
    value:
      "https://brian.fanmarketcap.com/storage/Ts2atk3vHtlNKx2mzUrSIS7qd26C73fFrWOeL6yC.png",
  },
  {
    text: "APL",
    value:
      "https://brian.fanmarketcap.com/storage/NigULJhxofpI4cv7jFvEjPEYU9N7GBqnvfaTVfdX.png",
  },
  {
    text: "PFL",
    value:
      "https://brian.fanmarketcap.com/storage/A2JZZ9XnFpP8OBn8jF4Ubv3Ewz820AkS8zPdXFoc.png",
  },
  {
    text: "YBO",
    value:
      "https://brian.fanmarketcap.com/storage/C6AOh3si2W2c6lnOgas0saKB3oMRMLUgleahIFyX.png",
  },
  {
    text: "ALL",
    value:
      "https://brian.fanmarketcap.com/storage/q6X3Qdpd5lVGXEye7MTOJw2GQffuoE1pdxbzHXmf.png",
  },
  {
    text: "CAI",
    value:
      "https://brian.fanmarketcap.com/storage/fS7dNOLdfNf0p320rwjo3RMK03x1WzVh4txvZmUY.png",
  },
  {
    text: "IBFK",
    value:
      "https://brian.fanmarketcap.com/storage/tQ3v4dgRyVsSkBN6rwl6lMNKjPgWiuj237WdoFAK.png",
  },
  {
    text: "NOV",
    value:
      "https://brian.fanmarketcap.com/storage/MmmgYeFKB8vSFbxr6IgsSH3mG96JSu8y1Rm71VxB.png",
  },
  {
    text: "CITY",
    value:
      "https://brian.fanmarketcap.com/storage/mJgwTHzCVVCJlqo1tF0NWP57igOYSXr5k1Vqvomd.png",
  },
  {
    text: "GOZ",
    value:
      "https://brian.fanmarketcap.com/storage/uPBcuAuWYBYPrMIf39FRfPyTXjnJR9B9rxOwIzqM.png",
  },
  {
    text: "UCH",
    value:
      "https://brian.fanmarketcap.com/storage/IYEdWfZTNYCvfSeuiKw53HgCWRaPQm51um3zL7N5.png",
  },
  {
    text: "SSU",
    value:
      "https://brian.fanmarketcap.com/storage/csXX0LzDKatlvlOpSGrStChRvMplMrKDfwT1u6u9.png",
  },
  {
    text: "LEG",
    value:
      "https://brian.fanmarketcap.com/storage/rhY1Ak6ANp5oA7AhgQgpr5SVwtO0pRP3UKOjqSzm.png",
  },
  {
    text: "FOR",
    value:
      "https://brian.fanmarketcap.com/storage/5p5phe5YWstSKxQpGulQ962KfxO046klq3ftaTDw.png",
  },
];

const widthOptions = [
  { text: "width", value: "auto" },
  { text: "50", value: "50" },
  { text: "100", value: "100" },
  { text: "150", value: "150" },
  { text: "200", value: "200" },
  { text: "250", value: "250" },
  { text: "300", value: "300" },
  { text: "350", value: "350" },
];

const heightOptions = [
  { text: "height", value: "auto" },
  { text: "50", value: "50" },
  { text: "100", value: "100" },
  { text: "150", value: "150" },
  { text: "200", value: "200" },
  { text: "250", value: "250" },
  { text: "300", value: "300" },
  { text: "350", value: "350" },
];

interface AppState extends ParsedRequest {
  loading: boolean;
  showToast: boolean;
  messageToast: string;
  selectedImageIndex: number;
  widths: string[];
  heights: string[];
  overrideUrl: URL | null;
}

type SetState = (state: Partial<AppState>) => void;

const App = (_: any, state: AppState, setState: SetState) => {
  const setLoadingState = (newState: Partial<AppState>) => {
    window.clearTimeout(timeout);
    if (state.overrideUrl && state.overrideUrl !== newState.overrideUrl) {
      newState.overrideUrl = state.overrideUrl;
    }
    if (newState.overrideUrl) {
      timeout = window.setTimeout(() => setState({ overrideUrl: null }), 200);
    }

    setState({ ...newState, loading: true });
  };
  const {
    fileType = "png",
    theme = "light",
    md = true,
    text = "**Hello** World",
    price = "-",
    l24 = "-",
    h24 = "-",
    marketcap = "-",
    change_24h = "-",
    images = [imageOptions[0].value],
    widths = [],
    heights = [],
    showToast = false,
    messageToast = "",
    loading = true,
    selectedImageIndex = 0,
    overrideUrl = null,
  } = state;
  const mdValue = md ? "1" : "0";
  const url = new URL(window.location.origin);
  url.pathname = `${encodeURIComponent(text)}.${fileType}`;
  url.searchParams.append("theme", theme);
  url.searchParams.append("md", mdValue);
  url.searchParams.append("h24", h24);
  url.searchParams.append("l24", l24);
  url.searchParams.append("price", price);
  url.searchParams.append("change_24h", change_24h);
  url.searchParams.append("marketcap", marketcap);
  for (let image of images) {
    url.searchParams.append("images", image);
  }
  for (let width of widths) {
    url.searchParams.append("widths", width);
  }
  for (let height of heights) {
    url.searchParams.append("heights", height);
  }

  return H(
    "div",
    { className: "split" },
    H(
      "div",
      { className: "pull-left" },
      H(
        "div",
        H(Field, {
          label: "Theme",
          input: H(Dropdown, {
            options: themeOptions,
            value: theme,
            onchange: (val: Theme) => {
              const options = imageOptions;
              let clone = [...images];
              clone[0] = options[selectedImageIndex].value;
              setLoadingState({ theme: val, images: clone });
            },
          }),
        }),
        H(Field, {
          label: "File Type",
          input: H(Dropdown, {
            options: fileTypeOptions,
            value: fileType,
            onchange: (val: FileType) => setLoadingState({ fileType: val }),
          }),
        }),
        H(Field, {
          label: "Text Type",
          input: H(Dropdown, {
            options: markdownOptions,
            value: mdValue,
            onchange: (val: string) => setLoadingState({ md: val === "1" }),
          }),
        }),
        H(Field, {
          label: "Text Input",
          input: H(TextInput, {
            value: text,
            oninput: (val: string) => {
              console.log("oninput " + val);
              setLoadingState({ text: val, overrideUrl: url });
            },
          }),
        }),
        H(Field, {
          label: "Price",
          input: H(TextInput, {
            value: price,
            oninput: (val: string) => {
              console.log("oninput " + val);
              setLoadingState({ price: val, overrideUrl: url });
            },
          }),
        }),
        H(Field, {
          label: "Highest 24",
          input: H(TextInput, {
            value: h24,
            oninput: (val: string) => {
              console.log("oninput " + val);
              setLoadingState({ h24: val, overrideUrl: url });
            },
          }),
        }),
        H(Field, {
          label: "Lowest 24",
          input: H(TextInput, {
            value: l24,
            oninput: (val: string) => {
              console.log("oninput " + val);
              setLoadingState({ l24: val, overrideUrl: url });
            },
          }),
        }),
        H(Field, {
          label: "Image 1",
          input: H(
            "div",
            H(Dropdown, {
              options: imageOptions,
              value: imageOptions[selectedImageIndex].value,
              onchange: (val: string) => {
                let clone = [...images];
                clone[0] = val;
                const selected = imageOptions.map((o) => o.value).indexOf(val);
                setLoadingState({
                  images: clone,
                  selectedImageIndex: selected,
                });
              },
            }),
            H(
              "div",
              { className: "field-flex" },
              H(Dropdown, {
                options: widthOptions,
                value: widths[0],
                small: true,
                onchange: (val: string) => {
                  let clone = [...widths];
                  clone[0] = val;
                  setLoadingState({ widths: clone });
                },
              }),
              H(Dropdown, {
                options: heightOptions,
                value: heights[0],
                small: true,
                onchange: (val: string) => {
                  let clone = [...heights];
                  clone[0] = val;
                  setLoadingState({ heights: clone });
                },
              })
            )
          ),
        }),
        ...images.slice(1).map((image, i) =>
          H(Field, {
            label: `Image ${i + 2}`,
            input: H(
              "div",
              H(TextInput, {
                value: image,
                oninput: (val: string) => {
                  let clone = [...images];
                  clone[i + 1] = val;
                  setLoadingState({ images: clone, overrideUrl: url });
                },
              }),
              H(
                "div",
                { className: "field-flex" },
                H(Dropdown, {
                  options: widthOptions,
                  value: widths[i + 1],
                  small: true,
                  onchange: (val: string) => {
                    let clone = [...widths];
                    clone[i + 1] = val;
                    setLoadingState({ widths: clone });
                  },
                }),
                H(Dropdown, {
                  options: heightOptions,
                  value: heights[i + 1],
                  small: true,
                  onchange: (val: string) => {
                    let clone = [...heights];
                    clone[i + 1] = val;
                    setLoadingState({ heights: clone });
                  },
                })
              ),
              H(
                "div",
                { className: "field-flex" },
                H(Button, {
                  label: `Remove Image ${i + 2}`,
                  onclick: (e: MouseEvent) => {
                    e.preventDefault();
                    const filter = (arr: any[]) =>
                      [...arr].filter((_, n) => n !== i + 1);
                    const imagesClone = filter(images);
                    const widthsClone = filter(widths);
                    const heightsClone = filter(heights);
                    setLoadingState({
                      images: imagesClone,
                      widths: widthsClone,
                      heights: heightsClone,
                    });
                  },
                })
              )
            ),
          })
        ),
        H(Field, {
          label: `Image ${images.length + 1}`,
          input: H(Button, {
            label: `Add Image ${images.length + 1}`,
            onclick: () => {
              const nextImage =
                images.length === 1
                  ? "https://cdn.jsdelivr.net/gh/remojansen/logo.ts@master/ts.svg"
                  : "";
              setLoadingState({ images: [...images, nextImage] });
            },
          }),
        })
      )
    ),
    H(
      "div",
      { className: "pull-right" },
      H(ImagePreview, {
        src: overrideUrl ? overrideUrl.href : url.href,
        loading: loading,
        onload: () => setState({ loading: false }),
        onerror: () => {
          setState({
            showToast: true,
            messageToast: "Oops, an error occurred",
          });
          setTimeout(() => setState({ showToast: false }), 2000);
        },
        onclick: (e: Event) => {
          e.preventDefault();
          const success = copee.toClipboard(url.href);
          if (success) {
            setState({
              showToast: true,
              messageToast: "Copied image URL to clipboard",
            });
            setTimeout(() => setState({ showToast: false }), 3000);
          } else {
            window.open(url.href, "_blank");
          }
          return false;
        },
      })
    ),
    H(Toast, {
      message: messageToast,
      show: showToast,
    })
  );
};

R(H(App), document.getElementById("app"));

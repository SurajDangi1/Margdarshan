module.exports = {
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      zero: "0rem",
      "title-1": "42px",
      "title-2": "36px",
      "title-3": "32px",
      "title-4": "28px",
      "title-5": "24px",
      "title-6": "20px",
      "title-7": "18px",
      "body-1": "16px",
      "body-2": "15px",
      "body-3": "14px",
      "body-4": "13px",
      "body-5": "12px",
      "body-6": "11px",
      "body-7": "10px",
    },
    lineHeight: {
      tight: "125%",
      loose: "150%",
    },
    colors: {
      primary: "#CC313D",
      secondary: "#F7C5CC",
      black: "#000",
      white: "#fff",
      danger: "#F64B3C",
      success: "#4EC33D",
      warning: "#FFB726",
      info: "#65ACF0",
      surface: {
        grey: "#F7F5F5",
        red: "#FFEDED",
        green: "#F0FFF5",
        yellow: "#FEFFF0",
        blue: "#F5F9FF",
      },
      transparent: "transparent", // used for making elements not shift, in case of some border being applied on hover
      grey: {
        100: "#F0F0F0",
        200: "#E0E0E0",
        300: "#CCCCCC",
        400: "#BABABA",
        500: "#8F8F8F",
        600: "#7A7A7A",
        700: "#545454",
        800: "#2E2E2E",
        900: "#1A1A1A",
      },
      red: {
        100: "#FAEDED",
        200: "#FAD4D4",
        300: "#FAB6B6",
        400: "#FA8E8E",
        500: "#F55353",
        600: "#DE1B1B",
        700: "#B80D0D",
        800: "#8F0E0E",
        900: "#661414",
      },
      cherry: {
        100: "#F9EAEB",
        200: "#F4D5D8",
        300: "#DB6E77",
        400: "#E0838A",
        500: "#D14550",
        500: "#B72C36",
        600: "#A32730",
        700: "#8E222A",
        800: "#7A1D24",
        900: "#66181E",
      },
      pink: {
        100: "#FEF9F9",
        200: "#FDF3F4",
        300: "#FCEDEF",
        400: "#F9D6DB",
        500: "#D14550",
        500: "#F7CAD1",
        600: "#DEB1B7",
        700: "#C59DA3",
        800: "#AC898E",
        900: "#94767A",
      },
      yellow: {
        100: "#FFFCED",
        200: "#FFF3BF",
        300: "#FFEC99",
        400: "#FFE066",
        500: "#FFD43B",
        600: "#F0C105",
        700: "#EDAA00",
        800: "#E08E00",
        900: "#DE7300",
      },
      green: {
        100: "#DCFAE8",
        200: "#8EF5B7",
        300: "#46E385",
        400: "#1EC963",
        500: "#0AA648",
        600: "#038537",
        700: "#056B2E",
        800: "#075426",
        900: "#09401F",
      },
      blue: {
        100: "#EDF5FF",
        200: "#D0E2FF",
        300: "#65BDFC",
        400: "#3389FE",
        500: "#1D77F2",
        600: "#1D5BBF",
        700: "#293787",
        800: "#1F2C70",
        900: "#172154",
      },
      teal: {
        100: "#E5FFF9",
        200: "#B7F7F3",
        300: "#85DED8",
        400: "#4EC2BA",
        500: "#0EA197",
        600: "#08827A",
        700: "#086962",
        800: "#09524D",
        900: "#0C4746",
      },
      purple: {
        100: "#E5CCFF",
        200: "#DCABFF",
        300: "#D288F7",
        400: "#B064E9",
        500: "#9D44DB",
        600: "#8E22D6",
        700: "#6A27CE",
        800: "#591CBB",
        900: "#3C1BAD",
      },
    },
    opacity: {
      100: "1",
      50: "0.5",
      25: "0.25",
      12: "0.12",
      40: "0.4",
      0: "0",
    },
    extend: {
      spacing: {
        sidebar: "280px",
        // "main":"calc(100vw - 280px)",
        rightbar: "347px",
        15: "60px",
      },
      margin: {
        15: "60px",
        18: "72px",
      },
      padding: {
        15: "60px",
        18: "72px",
      },
      screens: {
        md: `1000px`,
        xs: "350px",
      },
      fontSize: {
        zero: "0rem",
      },
      gridTemplateColumns: {
        18: "repeat(18,minmax(0,1fr))",
      },
      gridColumnEnd: {
        19: "19",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      backgroundImage: {
        "grad-yellow-tmdm":
          "linear-gradient(2.47deg, #FFC826 2.23%, #FFD55A 34.23%, #FFD55A 52.51%, #FFE599 97.76%)",
        "grad-blue-tmdm":
          "linear-gradient(111.27deg, #7183E5 0.44%, #152A98 100%)",
        "grad-yellow-tlbr":
          "linear-gradient(291.34deg, #FFC826 0%, #FFD55A 33.49%, #FFD55A 52.63%, #FFE599 100%)",
        "grad-blue-tmdm":
          "linear-gradient(111.27deg, #7183E5 0.44%, #152A98 100%)",
      },
      borderRadius: {
        small: "4px",
        medium: "6px",
        large: "8px",
        huge: "20px",
        full: "50%",
        none: "0",
      },
    },
  },
  variants: {
    extend: {
      // opacity: ["disabled"],
      cursor: ["disabled"],
      borderWidth: ["focus", "disabled"],
      borderColor: ["disabled"],
      backgroundColor: ["disabled", "focus", "odd", "even", "visited"],
      boxShadow: ["active", "visited"],
      opacity: ["hover"],
      borderWidth: ["hover"],
    },
  },

  safelist: [
    {
      pattern: /(bg|border|text|grid)-.+-\d+/,
      variants: ["hover"],
    },
    {
      pattern: /(bg|border|text|font)-.+/,
      variants: ["hover"],
    },
  ],
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addBase, theme }) {
      // this function essentially adds all the colors mentioned above as css variables in the code
      // which can be very helpful
      // https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574

      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === "string"
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
};

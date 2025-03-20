import plugin from "tailwindcss/plugin";

export default plugin(function ({ addUtilities }) {
  addUtilities({
    ".text-display-lg": {
      fontSize: "57px",
      lineHeight: "64px",
      letterSpacing: "calc(0.25px * -1)",
    },
    ".text-display-md": {
      fontSize: "45px",
      lineHeight: "52px",
    },
    ".text-display-sm": {
      fontSize: "36px",
      lineHeight: "44px",
    },
    ".text-headline-lg": {
      fontSize: "32px",
      lineHeight: "40px",
    },
    ".text-headline-md": {
      fontSize: "28px",
      lineHeight: "36px",
    },
    ".text-headline-sm": {
      fontSize: "24px",
      lineHeight: "32px",
    },
    ".text-title-lg": {
      fontSize: "22px",
      lineHeight: "28px",
    },
    ".text-title-md": {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
      fontWeight: "500",
    },
    ".text-title-sm": {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.1px",
      fontWeight: "500",
    },
    ".text-label-lg": {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.1px",
      fontWeight: "500",
    },
    ".text-label-md": {
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.5px",
      fontWeight: "500",
    },
    ".text-label-sm": {
      fontSize: "11px",
      lineHeight: "16px",
      letterSpacing: "0.5px",
      fontWeight: "500",
    },
    ".text-body-lg": {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.5px",
    },
    ".text-body-md": {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    },
    ".text-body-sm": {
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.4px",
    },
  });
});

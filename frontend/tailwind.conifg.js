import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // follow OS preference, default DaisyUI behavior
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  // no daisyui property, so default themes load (light + dark)
};

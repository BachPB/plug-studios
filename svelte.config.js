import adapter from "@sveltejs/adapter-auto";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    mdsvex({
      extensions: [".md"],
    }),
  ],
  kit: {
    adapter: adapter({
      runtime: "nodejs20.x",
    }),
  },
};

export default config;

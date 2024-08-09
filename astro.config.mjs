import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import starlightBlog from "starlight-blog";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: "The SemiFinals",
      logo: {
        src: "./src/assets/cash-vault.png",
      },
      favicon: "./src/assets/cash-vault.png",
      social: {
        github: "https://github.com/thesemifinals/the-finals",
        discord: "https://discord.gg/DUhrGJxW",
      },
      editLink: {
        baseUrl: "https://github.com/thesemifinals/the-finals/edit/main/",
      },
      sidebar: [
        {
          label: "Maps",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Kyoto",
              slug: "maps/kyoto/index",
            },
            {
              label: "Las Vegas",
              slug: "maps/las-vegas",
            },
            {
              label: "Monaco",
              slug: "maps/monaco",
            },
            {
              label: "Seoul",
              slug: "maps/seoul",
            },
            {
              label: "Skyway Stadium",
              slug: "maps/skyway-stadium",
            },
            {
              label: "SYS$Horizon",
              slug: "maps/sys-horizon",
            },
          ],
        },
        {
          label: "Weapons",
          items: [
            {
              label: "AKM",
              slug: "weapons/akm",
            },
            {
              label: "CL-40",
              slug: "weapons/cl-40",
            },
            {
              label: "Dual Blades",
              slug: "weapons/dual-blades",
            },
            {
              label: "FAMAS",
              slug: "weapons/famas",
            },
            {
              label: "FCAR",
              slug: "weapons/fcar",
            },
            {
              label: "Model 1887",
              slug: "weapons/model-1887",
            },
            {
              label: "R.357",
              slug: "weapons/r357",
            },
          ],
        },
        {
          label: "Classes",
          items: [
            {
              label: "Light",
              slug: "classes/light",
            },
            {
              label: "Medium",
              slug: "classes/medium",
            },
            {
              label: "Heavy",
              slug: "classes/heavy",
            },
          ],
        },
      ],
      plugins: [starlightBlog()],
    }),
  ],
  output: "server",
  adapter: netlify(),
});

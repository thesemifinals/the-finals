import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import starlightBlog from "starlight-blog";

import netlify from "@astrojs/netlify";
import { AllWeapons } from "./src/data/resources/weapons";
import { AllClasses } from "./src/data/resources/classes";
import { AllGadgets } from "./src/data/resources/gadgets";

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
              slug: "maps/kyoto",
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
          label: "Classes",
          items: AllClasses.map((cls) => {
            return {
              label: cls.name,
              slug: cls.slug,
            };
          }),
        },
        {
          label: "Weapons",
          items: AllWeapons.map((weapon) => {
            return {
              label: weapon.name,
              slug: weapon.slug,
            };
          }),
        },
        {
          label: "Gadgets",
          items: AllGadgets.map((gadget) => {
            return {
              label: gadget.name,
              slug: gadget.slug,
            };
          }),
        },
      ],
      plugins: [starlightBlog()],
    }),
  ],
  output: "server",
  adapter: netlify(),
});

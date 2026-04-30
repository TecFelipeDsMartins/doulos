import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import dynamic from "next/dynamic";

const TagembedWidget = dynamic(
  () => import("./components/TagembedWidget"),
  { ssr: false }
);

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "bf7ZpqcDZT91H8yQGdFMvm",
      token: "F1Lhj3pHiRFVTAj3qqO1zKc3O0CJkla1nHoF7xtLrC8Ce40Bf9mtkLU6y5GZfNRmaOLYEVBiN6zIQ2vZN8OA",
    },
  ],
  preview: false,
});

PLASMIC.registerComponent(TagembedWidget, {
  name: "TagembedWidget",
  props: {
    widgetId: {
      type: "string",
      defaultValue: "212784",
    },
    minHeight: {
      type: "string",
      defaultValue: "400px",
    },
  },
});
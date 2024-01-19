import type { Preview } from "@storybook/react";
//import need it for dev enviroment
import "@cuyo-proyects/cuyo-craft/dist/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

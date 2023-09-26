import { URL } from "url";

export const getIcons = function (icon) {
  const BASE_PATH = "https://linaria.dev/dist/";

  switch (icon) {
    case "logo": {
      const url = new URL(`${BASE_PATH}/62f658e6bb6e95783a3b.svg`);

      return {
        backgroundImage: `url(${url})`,
        height: `24px`,
        width: `24px`,
      };
    }
  }
};

import { defineRouting } from "next-intl/routing";

const isDev = process.env.NODE_ENV === "development";

export const routing = defineRouting({
  // A list of all locales that are supported.
  locales: ["en-US", "ja-JP"],

  // Used when no locale matches.
  defaultLocale: "en-US",

  // Match specific domain to the default language.
  domains: [
    {
      domain: isDev ? "localhost:3000" : "en.knottystudios.com",
      defaultLocale: "en-US",
      locales: ["en-US"],
    },
    {
      domain: isDev ? "localhost:3001" : "ja.knottystudios.com",
      defaultLocale: "ja-JP",
      locales: ["ja-JP"],
    },
  ],

  // Clean prefix as needed.
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      "en-US": "/en",
      "ja-JP": "/ja",
    },
  },
});

// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Esto nos inicializará un servidor que solo lo usará cuando lo necesite (componentes dinámicos, server:defer).
  output: "server",
  integrations: [tailwind()],
  // Esto nos permite leer las variables de entorno y tiparlas como queramos.
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        default: true, // Por defecto será true (por si se te olvida ponerle valor en el archivo .env)
        context: "server", // Dónde queremos usar la variable.
        access: "public", // Tipo de acceso. Un token por ejemplo tiene que ser secreto.
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: "server", // Si la variable de entorno tiene como contexto el cliente, su uso es distinto.
        access: "public",
      }),
    },
  },
});

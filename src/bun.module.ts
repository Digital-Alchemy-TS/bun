import { CreateLibrary } from "@digital-alchemy/core";
import { LIB_HASS } from "@digital-alchemy/hass";
import { LIB_SYNAPSE } from "@digital-alchemy/synapse";

import { BunSQLite } from "./extensions";

export const LIB_BUN = CreateLibrary({
  depends: [LIB_HASS, LIB_SYNAPSE],
  name: "bun",
  services: {
    sqlite: BunSQLite,
  },
});

declare module "@digital-alchemy/core" {
  export interface LoadedModules {
    bun: typeof LIB_BUN;
  }
}

import { TServiceParams } from "@digital-alchemy/core";
import { Database } from "bun:sqlite";

export function BunSQLite({ synapse }: TServiceParams) {
  synapse.sqlite.setDriver(Database);
}

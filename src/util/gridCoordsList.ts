import { flatten } from "lodash";
import { NUMBER_OF_GRID_COLUMNS, NUMBER_OF_GRID_ROWS } from "../constants";

const row = (rowLevel: number) =>
  Array(NUMBER_OF_GRID_COLUMNS)
    .fill(undefined)
    .map((_, i) => [i, rowLevel]);

export const gridCoordsList = flatten(
  Array(NUMBER_OF_GRID_ROWS)
    .fill(undefined)
    .map((_, i) => row(i))
);

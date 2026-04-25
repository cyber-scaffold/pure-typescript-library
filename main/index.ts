import { fromPairs } from "lodash";

export function execute() {
  console.log(fromPairs([["param_1", 1], ["param_2", 2]]));
};
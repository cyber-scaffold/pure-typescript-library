import { program } from "commander";

import { developmentAction } from "./actions/development";
import { productionAction } from "./actions/production";

program
  .name("Npm Package Development Tool")
  .description("This Script Is Useing To Pack Server Code")
  .version("1.0.0")

program
  .command("dev")
  .description("Start To Delevepment Server Code")
  .action(developmentAction);

program
  .command("prod")
  .description("Pack Server Code")
  .action(productionAction);

program.parse();
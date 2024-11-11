import G1Portal from "./portais/g1_portal";
import TecMundoPortal from "./portais/tecmundo_portal";
import TerraPortal from "./portais/terra_portal";
import UolPortal from "./portais/uol_portal";
import ServiceReadAll from "./services/read_all";
import cron from "node-cron";

const serviceReadAll = new ServiceReadAll([
  new UolPortal(),
  new TecMundoPortal(),
  new G1Portal(),
  new TerraPortal(),
]);

let crontab = "* * * * * *";

// Run every second
crontab = "*/10 * * * * *";

// // Run every minute from x second
// crontab = "0 * * * * *";

// // Run every day at midnight
// crontab = "0 0 0 * * *";

cron.schedule(crontab, async () => {
  await serviceReadAll.execute();
});

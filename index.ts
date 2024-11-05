import ServiceReadAll from "./services/read_all";

let cron = require("node-cron");

const serviceReadAll = new ServiceReadAll();

cron.schedule("* * * * *", () => {
  serviceReadAll.execute();
});

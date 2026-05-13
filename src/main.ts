import { ApiExpress } from "./api/express/api.express";
import { HealthController } from "./api/express/controllers/health.controller";

function main() {
  const api = ApiExpress.build();

  const controller = HealthController.build();

  api.addGetRoute("/health", controller.test);

  api.start(3001);
}

main();

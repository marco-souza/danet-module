import { DanetApplication } from "danet/mod.ts";
import { MyModule } from "./app.ts";

export const bootstrap = async () => {
  const application = new DanetApplication();
  await application.init(MyModule);
  return application;
};

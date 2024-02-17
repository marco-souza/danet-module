import { Module } from "danet/mod.ts";
import { TemplateService } from "./service.ts";

@Module({
  injectables: [TemplateService],
})
class TemplateModule {}

export { TemplateDecorator } from "./decorators.ts";
export { TemplateModule, TemplateService };

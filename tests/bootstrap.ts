import { DanetApplication } from "danet/mod.ts";
import { Controller, Get, Module, Query } from "danet/mod.ts";
import { TemplateModule } from "../mod.ts";
import { TemplateService } from "../mod.ts";

@Controller()
class TestController {
  constructor(private service: TemplateService) {}

  @Get()
  getSomething(@Query("name") name?: string) {
    return this.service.greetings(name);
  }
}

@Module({
  imports: [TemplateModule],
  controllers: [TestController],
})
export class TestModule {}

export const bootstrap = async () => {
  const application = new DanetApplication();
  await application.init(TestModule);
  return application;
};

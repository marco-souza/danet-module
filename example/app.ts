import { Controller, Get, Injectable, Module } from "danet/mod.ts";
import { TemplateDecorator, TemplateModule } from "../mod.ts";

@Injectable()
class MyService {
  getSomething() {
    return "OK";
  }

  @TemplateDecorator("metadata")
  doSomething() {
    console.log("do someting");
  }
}

@Controller("my-endpoint")
class MyController {
  constructor(private service: MyService) {}

  @Get()
  getSomething() {
    return this.service.getSomething();
  }
}

@Module({
  imports: [TemplateModule],
  controllers: [MyController],
  injectables: [MyService],
})
export class MyModule {}

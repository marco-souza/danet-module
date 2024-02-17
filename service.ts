import { OnAppBootstrap, OnAppClose } from "danet/src/hook/interfaces.ts";
import { Injectable, Logger } from "danet/mod.ts";

@Injectable()
export class TemplateService implements OnAppBootstrap, OnAppClose {
  private logger = new Logger();

  onAppBootstrap(): void | Promise<void> {
    this.logger.log("initializing my module");
  }

  onAppClose(): void | Promise<void> {
    this.logger.log("tear down my module");
  }
}

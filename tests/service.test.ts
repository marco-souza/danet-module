import { TemplateService } from "../mod.ts";
import { assertEquals } from "./deps.ts";

Deno.test("Template Service", async (t) => {
  const service = new TemplateService();

  await t.step("validate api response", async () => {
    const res = service.greetings();
    assertEquals(res, "Hello, world");
  });

  await t.step("validate api response with name", async () => {
    const name = "Lucy";
    const res = service.greetings(name);

    assertEquals(res, `Hello, ${name}`);
  });
});

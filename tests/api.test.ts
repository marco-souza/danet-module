import { bootstrap } from "./bootstrap.ts";
import { assertEquals } from "./deps.ts";

Deno.test("Template Module", async (t) => {
  const app = await bootstrap();
  const listenEvent = await app.listen(0);

  await t.step("validate api call", async () => {
    const name = "Lucy";
    const res = await fetch(
      `http://localhost:${listenEvent.port}/?name=${name}`,
      { method: "GET" },
    );

    assertEquals(res.status, 200);
    assertEquals(await res.text(), `Hello, ${name}`);
  });

  await app.close();
});

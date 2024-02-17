import { bootstrap } from "./bootstrap.ts";

const application = await bootstrap();
await application.listen(Number(Deno.env.get("PORT") || 3000));

import {
  assertEquals,
  assertThrowsAsync,
} from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { load } from "../mod.ts";

Deno.test("unquoted", async () => {
  await load({ path: "./tests/.env" });

  assertEquals(Deno.env.get("FOO"), "bar");
});

Deno.test("quoted", async () => {
  await load({ path: "./tests/.env" });

  assertEquals(Deno.env.get("HELLO"), '"world"');
});

Deno.test("prioritize existing env", async () => {
  Deno.env.set("FOO", "bear");
  await load({ path: "./tests/.env", priorityEnv: true });

  assertEquals(Deno.env.get("FOO"), "bear");
});

Deno.test("throws if file not found", () => {
  assertThrowsAsync(
    async () => {
      await load({ path: "./tests/.env2" });
    },
    undefined,
    "No such file or directory",
  );
});

Deno.test("does not throw if file not found", async () => {
  await load({ path: "./tests/.env2", ignoreMissingFile: true });
});

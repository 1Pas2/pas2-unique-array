import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import * as api from "../dist/index.js";
test("values preserve order", () =>
  assert.deepEqual(api.unique([2, 1, 2, NaN, NaN]), [2, 1, NaN]));
test("keys retain first record", () =>
  assert.deepEqual(
    api.uniqueBy(
      [
        { id: 1, n: "a" },
        { id: 1, n: "b" },
      ],
      (x) => x.id,
    ),
    [{ id: 1, n: "a" }],
  ));
test("empty", () => assert.deepEqual(api.unique([]), []));

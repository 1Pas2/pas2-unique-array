import { uniqueBy } from "../dist/index.js";
console.log(uniqueBy([{ id: 1 }, { id: 1 }, { id: 2 }], (item) => item.id));

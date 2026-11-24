import * as fs from "node:fs";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", "unread", "utf8");

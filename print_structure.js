const fs = require("fs");
const path = require("path");

const EXCLUDE = ["node_modules", "dist", "snap3d_backend", ".github"];
let output = "";

function isHiddenOrExcluded(name) {
  return name.startsWith(".") || EXCLUDE.includes(name);
}

function printTree(dir, prefix = "") {
  const items = fs.readdirSync(dir).filter((item) => !isHiddenOrExcluded(item));
  items.forEach((item, i) => {
    const fullPath = path.join(dir, item);
    const isLast = i === items.length - 1;
    const connector = isLast ? "+-- " : "|-- ";
    output += prefix + connector + item + "\n";
    if (fs.statSync(fullPath).isDirectory()) {
      printTree(fullPath, prefix + (isLast ? "    " : "|   "));
    }
  });
}

printTree(".");
fs.writeFileSync("structure.txt", output, { encoding: "utf8" });

console.log("✅ Saved file structure to structure.txt");

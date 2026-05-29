// Creates placeholder images for development
const fs = require("fs");
const path = require("path");

// Minimal 1x1 white pixel JPEG
const tinyJpeg = Buffer.from(
  "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=",
  "base64"
);

const imagePaths = [
  "public/images/hero.jpg",
  "public/images/og-image.jpg",
  "public/images/services/01.jpg",
  "public/images/services/02.jpg",
  "public/images/services/03.jpg",
  "public/images/services/04.jpg",
  "public/images/services/05.jpg",
  "public/images/services/06.jpg",
  "public/images/gallery/01.jpg",
  "public/images/gallery/02.jpg",
  "public/images/gallery/03.jpg",
  "public/images/gallery/04.jpg",
  "public/images/gallery/05.jpg",
  "public/images/gallery/06.jpg",
  "public/images/about/01.jpg",
  "public/images/about/02.jpg",
  "public/images/about/03.jpg",
  "public/images/about/04.jpg",
];

for (const imgPath of imagePaths) {
  const fullPath = path.join(__dirname, "..", imgPath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, tinyJpeg);
    console.log("Created:", imgPath);
  } else {
    console.log("Exists: ", imgPath);
  }
}
console.log("Done.");

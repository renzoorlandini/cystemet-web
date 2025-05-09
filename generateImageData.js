import fs from "fs";
import path from "path";

// Function to get the current directory from import.meta.url
const getCurrentDir = () => {
  const url = import.meta.url;
  const filePath = new URL(url).pathname;
  return path.dirname(filePath);
};

const generateImageData = (folderName) => {
  const folderPath = path.join("public", "images", folderName); // Fixed this line
  console.log("Looking for folder at:", folderPath);

  const imageFiles = fs
    .readdirSync(folderPath)
    .filter((file) => file.match(/\.(jpg|jpeg|png|gif)$/i));

  const imageData = imageFiles.map((file, index) => ({
    id: index + 1,
    url: `./images/${folderName}/${file}`,
  }));

  const jsFileName = `${folderName.toLowerCase()}.js`;
  const jsContent = `const ${folderName.toLowerCase()} = ${JSON.stringify(
    imageData
  )};\n\nexport default ${folderName.toLowerCase()};\n`;

  fs.writeFileSync(path.join(process.cwd(), jsFileName), jsContent, "utf8");

  console.log(`${jsFileName} created successfully.`);
};

// Get the folder name from the command-line argument
const folderName = process.argv[2];
if (!folderName) {
  console.error("Please provide a folder name.");
  process.exit(1);
}

generateImageData(folderName);

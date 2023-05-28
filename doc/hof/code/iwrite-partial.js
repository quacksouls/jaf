const imgWriter = (format) => (name, width, height) => {
    // Insert code to write image to file
    console.log("Image is written to file");
    console.log(`Name: ${name}`);
    console.log(`Format: ${format}`);
    console.log(`Dimensions: ${width} x ${height}`);
};

const pngWriter = imgWriter("PNG");
const jpgWriter = imgWriter("JPEG");
const gifWriter = imgWriter("GIF");
pngWriter("cuteCat.png", 200, 400);
jpgWriter("puppy.jpg", 300, 600);
gifWriter("hamsterDance.gif", 300, 400);

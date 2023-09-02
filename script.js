const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('span');
    colorBox.textContent = "404 BIT";
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
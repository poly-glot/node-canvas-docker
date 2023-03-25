const fs = require('fs');
const path = require('path');
const { registerFont, createCanvas } = require('canvas');

const width = 480;
const height = 192;
const lineHeight = 16;

const basepath = process.env.IMAGEPATH ? process.env.IMAGEPATH : __dirname;
const filename = process.env.MODEL ? process.env.MODEL : 'text';
const background = process.env.BACKGROUND ? process.env.BACKGROUND : '#D93D76';
const pageText = process.env.PAGETEXT ? process.env.PAGETEXT : 'HEADING GOES HERE';
const componentText = process.env.COMPONENTTEXT ? process.env.COMPONENTTEXT : '';
const subComponentText = process.env.SUBCOMPONENTTEXT ? process.env.SUBCOMPONENTTEXT : '';

registerFont('fonts/Roboto-Black.ttf', { family: 'RobotoBlack' });
registerFont('fonts/Roboto-Bold.ttf', { family: 'RobotoBold' });
registerFont('fonts/Roboto-Regular.ttf', { family: 'Roboto' });

const x = 15;
const y = 15;

const canvas = createCanvas(width, height);

const context = canvas.getContext('2d');
context.quality = 'bilinear';
context.textDrawingMode = 'glyph';

context.fillStyle = background;
context.fillRect(0, 0, width, height);

context.font = '40px RobotoBlack';
context.textBaseline = 'top';
context.textAlign = 'left';
context.fillStyle = '#ffffff';
context.fillText(pageText, x, y);

if (componentText) {
    context.font = '32px RobotoBold';
    context.textBaseline = 'top';
    context.textAlign = 'left';
    context.fillStyle = '#ffffff';
    context.fillText(componentText, x, y + 40 + lineHeight);
}

if (subComponentText) {
    context.font = '24px Roboto';
    context.textBaseline = 'top';
    context.textAlign = 'left';
    context.fillStyle = '#ffffff';
    context.fillText(subComponentText, x, y + 40 + lineHeight + 32 + lineHeight);
}

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(basepath, `${filename}.png`)))

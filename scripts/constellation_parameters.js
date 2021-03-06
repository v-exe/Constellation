//   ______     ______     __   __     ______     ______   ______     __         __         ______     ______   __     ______     __   __   
//  /\  ___\   /\  __ \   /\ "-.\ \   /\  ___\   /\__  _\ /\  ___\   /\ \       /\ \       /\  __ \   /\__  _\ /\ \   /\  __ \   /\ "-.\ \  
//  \ \ \____  \ \ \/\ \  \ \ \-.  \  \ \___  \  \/_/\ \/ \ \  __\   \ \ \____  \ \ \____  \ \  __ \  \/_/\ \/ \ \ \  \ \ \/\ \  \ \ \-.  \ 
//   \ \_____\  \ \_____\  \ \_\\"\_\  \/\_____\    \ \_\  \ \_____\  \ \_____\  \ \_____\  \ \_\ \_\    \ \_\  \ \_\  \ \_____\  \ \_\\"\_\
//    \/_____/   \/_____/   \/_/ \/_/   \/_____/     \/_/   \/_____/   \/_____/   \/_____/   \/_/\/_/     \/_/   \/_/   \/_____/   \/_/ \/_/
//                                                                                                                                          

var Const = {};

//-------------GENERAL-------------//

//creates reference to html canvas
//put your canvas' ID where 'userCanvas' is
Const.canvas = document.getElementById('userCanvas');

//number of dots
Const.dotCount = 300;

//minimum distance between dots necessary to draw a line connecting them
Const.lineDistance = 140;

//-------------INTERACTION-------------//

//the following code will only work if interactive = true

//whether or not the animation will interact with mouse position
Const.interactive = true;

//distance from the mouse at which lines will stop being visible 
Const.mouseFalloff = 150;

//whether or not there is a smooth opacity falloff as drawn lines get further from mouse 
Const.opacityFalloff = true;

//amount of opacity falloff (the higher the number, the less opaque things will be when further from the mouse)
//at mouseFalloff * 1, the lines nearest to the mouse will reach an opacity value of exactly 1
//anything bigger never allows lines nearest to the mouse reach full opacity
//anything smaller creates a larger circle of full opacity lines near the mouse
Const.falloffAmount = Const.mouseFalloff * 1;

//-------------COLORS-------------//

//RGBA for dots (takes values between 0 and 255 for RGB, and between 0 and 1 for alpha)
Const.dotRed = 255;
Const.dotGreen = 255;
Const.dotBlue = 255;
Const.dotOpacity = 1;

//RGBA for lines (takes values between 0 and 255 for RGB, and between 0 and 1 for alpha)
Const.lineRed = 255;
Const.lineGreen = 255;
Const.lineBlue = 255;

//line opacity is automatically overwritten if interactive = true
Const.lineOpacity = 0.7;

//RGBA canvas background (takes values between 0 and 255 for RGB, and between 0 and 1 for alpha)
Const.bgRed = 0;
Const.bgGreen = 0;
Const.bgBlue = 0;
Const.bgOpacity = 1;

//-------------SIZES-------------//

//minimum possible size of a dot
Const.dotSizeMin = 0.4;

//maximum possible size of a dot
Const.dotSizeMax = 1.4;

//thickness of lines
Const.lineSize = 0.7;

//-------------SPEEDS-------------//

//speed range of dots
Const.dotSpeed = 0.2;

//-------------LINKS AND GLOBALS-------------//

//canvas context setup
Const.ctx = Const.canvas.getContext('2d');

//global variables for cursor location
Const.cursorX;
Const.cursorY;

//array holding dot objects
Const.points = new Array(Const.dotCount);

//color preparation for objects
Const.lineRGB = "rgba(" + Const.lineRed + ", " + Const.lineGreen + ", " + Const.lineBlue + ", " + Const.lineOpacity + ")";
Const.dotRGB = "rgba(" + Const.dotRed + ", " + Const.dotGreen + ", " + Const.dotBlue + ", " + Const.dotOpacity + ")";

//set canvas background color
Const.canvas.style.background = "rgba(" + Const.bgRed + ", " + Const.bgGreen + ", " + Const.bgBlue + ", " + Const.bgOpacity + ")";
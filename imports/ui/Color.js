let currentColor = 0;

export let existingColors = [[255,0,0], [0,255,0], [0,0,255], [255,0,255]];

export function incrementColor(){
    currentColor++;
    currentColor %= existingColors.length;
}

export function getColor(){
    return existingColors[currentColor];
}

export function getX3DColor(){
    const c = getColor();
    return "" + c[0] / 255 + " " + c[1] / 255 + " " + c[2]/255;
}

export function getCssColor(){
    return "rgb(" + c[0] + " " + c[1] + " " + c[2] + ")";
}

export function setColor(c){
    switch(c){
        case "red":
            currentColor = 0; break;
        case "blue":
            currentColor = 2; break;
        case "green": 
            currentColor = 1; break;
    }
}
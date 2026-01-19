export function add(a, b){
    return {x: a.x + b.x, y: a.y + b.y, z: a.z + b.z};
}

export function remove(a, b){
    return {x: a.x - b.x, y: a.y - b.y, z: a.z - b.z};
}

export function abs(a){
    return {x: Math.abs(a.x), y: Math.abs(a.y), z: Math.abs(a.z)};
}

export function biggestDirection(a){
    const absa = abs(a);

    if (absa.x >= absa.y && absa.x >= absa.z){
        return {x: (a.x > 0 ? 1 : -1), y: 0, z: 0}        
    }
    if (absa.y >= absa.x && absa.y >= absa.z){
        return {x: 0, y: (a.y > 0 ? 1 : -1), z: 0}        
    }
    return {x: 0, y: 0, z: (a.z > 0 ? 1 : -1)}
}

export function scale(a, factor){
    return {x: a.x * factor, y: a.y * factor, z: a.z * factor};
}
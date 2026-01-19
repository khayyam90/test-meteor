import { Template } from 'meteor/templating';
import { CubesCollection } from '../api/CubesCollection';
import { abs, add, biggestDirection, remove } from '../utils/vec3d';

import './Cube.html';
import { getColor } from './Color';

Template.cube.helpers({
    color(){
        const instance = Template.instance();
        return instance.data.color ?? "1 0 0";
    }
})

Template.cube.events({
    'mouseup .cube'(event, instance) {
        const cubeCenter = {x: instance.data.x, y: instance.data.y, z: instance.data.z};

        const direction = remove(
            {x: event.worldX, y: event.worldY, z: event.worldZ},
            cubeCenter
        );

        let d = biggestDirection(direction);
        
        if (event.button == 1){
            const newPosition = add(cubeCenter, d);
            CubesCollection.insert({...newPosition, color: getColor()} );
        }else{
            CubesCollection.remove(instance.data._id);
        }
    }
});
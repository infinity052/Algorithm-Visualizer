export default {

    iterator_colors : ["blue","#dc3545","#28a745"],

    addIterator : async function (objects,i,color){
        if(i>=0 && i<objects.length)
        objects[i].style.backgroundColor = this.iterator_colors[color];
    },
    removeIterator : async function (objects,i){
        if(i>=0 && i<objects.length)
        objects[i].style.backgroundColor = "white";
    },
    sortingEnd : async function(objects,curr_speed,height_obj){
        for(let obj of objects){
            let h = await height_obj(obj);
            obj.style.backgroundColor = this.iterator_colors[0];
            await playNote(h*3);
            await sleep(curr_speed);
            obj.title=h + " px";
        }
        for(let obj of objects){
            obj.style.backgroundColor = "white";
            await sleep(curr_speed);
        }
    }
};


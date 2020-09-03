var iterator = {
        addIterator : async function (i,color){
            if(i>=0 && i<objects.length)
                objects[i].style.backgroundColor = iterator_colors[color];
        },
        removeIterator : async function (i){
            if(i>=0 && i<objects.length)
                objects[i].style.backgroundColor = "white";
        },
        sortingEnd : async function(){
            for(let obj of objects){
                obj.style.backgroundColor = iterator_colors[0];
                await sleep(120-speed);
            }
            for(let obj of objects){
                obj.style.backgroundColor = "white";
                await sleep(120-speed);
            }
        }
};

var iterator_colors = ["blue","#dc3545","#28a745"];

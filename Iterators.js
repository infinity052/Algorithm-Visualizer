var iterator = {
        addIterator : async function (i,color){
            if(i>=0 && i<objects.length)
                objects[i].style.background = iterator_colors[color];
        },
        removeIterator : async function (i){
            if(i>=0 && i<objects.length)
                objects[i].style.background = "white";
        },
        sortingEnd : async function(){
            for(let obj of objects){
                obj.style.background = iterator_colors[0];
                await sleep(50);
            }
            for(let obj of objects){
                obj.style.background = "white";
                await sleep(50);
            }
        }
};

var iterator_colors = ["blue","red","green"];

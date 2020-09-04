async function swap(i,j){
    let temp = objects[i].style.height;
    objects[i].style.height = objects[j].style.height;
    objects[j].style.height = temp;
}
async function height(i){
    let s = objects[i].style.height;
    return parseInt(s.slice(0,s.length-2));
}

async function assign(src,dest,assign_to){

    switch(assign_to){
        case "index" : objects[dest].style.height = objects[src].style.height; break;
        case "height": objects[dest].style.height = src+"px"; break;
        case "object": objects[dest].style.height = src.style.height; break;
        default : return;
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, parseFloat(ms)));
}
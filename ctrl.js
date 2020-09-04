var objects = [], btn_press = false, type = -1, speed = 50, size = 50;
window.addEventListener('load',()=>{
    randomize();
});

function select(t){
    if(type!=-1){
        document.querySelector("#btn-"+type).style.backgroundColor="";
    }
    document.querySelector("#btn-"+t).style.backgroundColor="#dc3545";
    type = t;
}
async function sort(){
    if(btn_press){
        alert("Awesome sorting in progress. Please wait and observe"); 
        return;
    }
    btn_press = true;
    switch(type){
        case -1: alert("Please select a sort type"); break;
        case 0 : await bubbleSort(); break;
        case 1 : await insertionSort(); break;
        case 2 : await mergeSort(); break;
        case 3 : await selectionSort(); break;
        case 4 : await quickSort(); break;
        case 5 : await heapSort(); break;
        default :await randomize(); break;
    }
    btn_press = false;
}

function speedToggle(value){
    speed = value;
}

async function frequencyToggle(value){
    
    size = value;
    await randomize();
}

async function randomize(){
    if(btn_press){
        alert("Awesome sorting in progress. Please wait and observe"); 
        return;
    }
    btn_press = true;
    var arr = [];
    objects = [];
    var area = document.querySelector("#bars");
    let h = area.style.height;
    h = parseInt(h.slice(0,h.length-2) - 50);
    area.innerHTML = "";
    for(var i = 0; i < size; i++)
        arr.push(Math.floor(Math.random()*h + 1));

    
    for(var i = 0; i < size; i++){
        var bar = document.createElement("div");
        bar.className = "bar";
        var attr = document.createAttribute("style");
        attr.value = "height: "+arr[i]+"px; background-color: white;";
        bar.setAttributeNode(attr);
        area.appendChild(bar);
        objects.push(bar);
    }
    btn_press = false;
}


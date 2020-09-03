var objects = [], btn_press = false;
window.addEventListener('load',randomize);

async function sort(type){
    if(btn_press){
        alert("Awesome sorting in progress. Please wait and observe"); 
        return;
    }
    btn_press = true;
    switch(type){
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

async function randomize(){

    var arr = [];
    objects = [];
    var area = document.querySelector("#bars");
    area.innerHTML = "";
    for(var i = 0; i < 10; i++)
        arr.push(Math.floor(Math.random()*100 + 1));

    
    for(var i = 0; i < 10; i++){
        var bar = document.createElement("div");
        bar.className = "bar";
        var attr = document.createAttribute("style");
        attr.value = "height: "+arr[i]*3+"px; background: white;";
        bar.setAttributeNode(attr);
        area.appendChild(bar);
        objects.push(bar);
    }

}


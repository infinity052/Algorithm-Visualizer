import SortAlgorithms from './Algorithms.js';
import {back} from '../app.js'


var objects = [], speed = 50, size = 50,s;

function goBackFromSort(){
    back(s);
}

async function sort(){
    if(s && s.inProgress){
        alert("Awesome sorting in progress. Please wait and observe"); 
        return;
    }
    if(s){
        s.setObjects(objects);
    }else{
        s = new SortAlgorithms(objects,speed);
    }
    switch(type){
        case -1: alert("Please select a sort type"); break;
        case 0 : s.bubbleSort(); break;
        case 1 : s.insertionSort(); break;
        case 2 : s.mergeSort(); break;
        case 3 : s.selectionSort(); break;
        case 4 : s.quickSort(); break;
        case 5 : s.heapSort(); break;
        default: randomize(); break;
    }
}

function speedToggle(value){
    speed = value;
    if(s)
        s.setSpeed(value);
}

async function frequencyToggle(value){
    
    size = value;
    await randomize();
}
function mute_unmute(){
    var muteBtn = $('#mute');
    if(!mute){
        mute = true;
        muteBtn.text('Unmute');
        muteBtn.removeClass('btn-outline-danger');
        muteBtn.addClass('btn-danger');
    }else{
        mute = false;
        muteBtn.text('Mute');
        muteBtn.removeClass('btn-danger');
        muteBtn.addClass('btn-outline-danger');
    }
    
}
async function randomize(){

    if(s && s.inProgress){
        alert("Awesome sorting in progress. Please wait and observe"); 
        return;
    }
    var arr = [];
    objects = [];
    var area = document.querySelector("#bars");
    let h = parseInt($('#bars').height()) - 50;
    area.innerHTML = "";
    for(var i = 0; i < size; i++)
        arr.push(Math.floor(Math.random()*h + 1));

    
    for(var i = 0; i < size; i++){
        var bar = document.createElement("div");
        bar.className = "bar";
        bar.title=arr[i]+" px";
        var attr = document.createAttribute("style");
        attr.value = "height: "+arr[i]+"px; background-color: white;";
        bar.setAttributeNode(attr);
        area.appendChild(bar);
        objects.push(bar);
    }
}
export {randomize,speedToggle,frequencyToggle,sort,mute_unmute,goBackFromSort};

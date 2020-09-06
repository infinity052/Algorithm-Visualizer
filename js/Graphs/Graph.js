import GraphAlgorithms from './Algorithms.js';
import {back} from '../app.js';

var arr = [], mouseDown = false, draggingSrc = false, draggingDest = false, g;
var start, end;

const src=`<div style="height:0px; width:0px; display:flex; align-items:center; pointer-events:none;"><i class="fas fa-running" style="font-size: 150%" aria-hidden="true"></i></div>`;
const dest = `<div style="height:0px; width:0px; display:flex; align-items:center; pointer-events: none;"><i class="fa fa-flag-checkered" style="font-size:150%;" aria-hidden="true"></i></div>`;

document.addEventListener('mouseup',()=>{mouseDown = false});

function markVisited(obj){
    obj.className = "cell visited";
}
function markEmpty(obj){
    obj.className = "cell";
}
function markFinalPath(obj){
    obj.className = "cell final"
}
function isFinal(obj){
    return obj.className == "cell final"
}
function isSrc(obj){
    return obj.innerHTML == src;
}
function isDest(obj){
    return obj.innerHTML == dest;
}
function isVisited(obj){
    return obj.className == "cell visited";
}
function isObstacle(obj){
    return obj.className == "cell obstacle";
}
function isEmpty(obj){
    return obj.className == "cell" && obj.innerHTML=="";
}
function markObstacle(obj){
    obj.className = "cell obstacle";
}
function goBackFromGraph(){
    back(g);
}
async function createCells(){
    
    if(g && g.inProgress){
        alert("A traversal already in progress. Please wait.");
        return;
    }
    
    $('#bars').hide();
    $('#table').show();
    $('#table').html("");
    arr=[];
    mouseDown = false;
    draggingSrc = false;
    draggingDest = false; 
    g=null;
    var table = $('#table');
    var height = table.height(), width = table.width(); 
    for(let i = 0; i<=height; i+=30){
        var row = document.createElement('tr');
        row.id="row"+(i/30);
        var matrix_row = [];
        for(let j = 0; j<=width; j+=30){
            var col = document.createElement('td');
            col.id=i/30+","+j/30;
            markEmpty(col);
            
            var mouse_down = function(e){
                mouseDown = true;
                if(isSrc(e.target))
                draggingSrc = true;
                else if(isDest(e.target))
                draggingDest = true;
            }
            
            col.addEventListener('touchstart',(e)=>{
                e.preventDefault();
                mouse_down(e);
            })
            
            col.addEventListener('mousedown',(e)=>{
                mouse_down(e);
            });
            
            var mouse_move = function(e){
                if(!mouseDown || isSrc(e.target) || isDest(e.target)) return;
                if(draggingSrc){
                    e.target.innerHTML = src;
                    start = [parseInt(e.target.id.split(',')[0]),parseInt(e.target.id.split(',')[1])];
                }
                else if(draggingDest){
                    e.target.innerHTML = dest;
                    end = [parseInt(e.target.id.split(',')[0]),parseInt(e.target.id.split(',')[1])];
                }
                
                else if(isEmpty(e.target)){
                    markObstacle(e.target);
                    e.target.isObstacle = true;
                }
                
            }
            
            var mouse_out = function(e){
                if(!mouseDown) return;
                if(draggingSrc && !isDest(e.target) || draggingDest && !isSrc(e.target)){
                    e.target.innerHTML = "";
                    if(e.target.isObstacle) 
                    markObstacle(e.target);
                    else
                    markEmpty(e.target);
                }
                
            }
            
            
            col.addEventListener('touchmove',(e)=>{
                e.preventDefault();
                var src = {target: document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)};
                if(src.target.tagName === "TD"){
                    if(draggingSrc){
                        mouse_out(prevSrc);
                        prevSrc = src;
                    }else if(draggingDest){
                        mouse_out(prevDest);
                        prevDest = src;
                    }
                    mouse_move(src);
                    prevSrc = src;
                }
                
                
            });
            
            col.addEventListener('mouseover',(e)=>{
                mouse_move(e);
            });
            
            col.addEventListener('mouseout', (e)=>{
                mouse_out(e);
            });
            
            
            var mouse_up = function(){
                draggingDest = false;
                draggingSrc = false;
            }
            
            col.addEventListener('mouseup', mouse_up);
            
            col.addEventListener('touchend',(e)=>{
                e.preventDefault();
                mouse_up();
            }); 
            
            
            row.appendChild(col);
            matrix_row.push(col);
        }
        table.append(row);
        arr.push(matrix_row);
    }
    let i = parseInt(arr.length/2);
    let j1 = parseInt(arr[0].length/4);
    let j2 = parseInt(arr[0].length/4)*3;
    $(arr[i][j1]).append(src);
    $(arr[i][j2]).append(dest);
    start = [i,j1];
    end = [i,j2];
    var prevSrc = {target: arr[i][j1]}, prevDest = {target: arr[i][j2]};
}

function graph_start(){
    if(g && g.inProgress){
        alert("A traversal already in progress. Please wait.");
        return;
    }
    reset((obj)=>{
        return isVisited(obj) || isFinal(obj);
    });
    if(g){
        g.setStart(start);
        g.setEnd(end);
    }else{
        g = new GraphAlgorithms(arr,start,end);
    }
    switch(type){
        case 6: g.aStarPathFinding(); break;
        case 7: g.dijkstra(); break;
        case 8: g.dfs(); break;
        case 9: g.bfs(); break;
        default: alert("Please select an algorithm first");
    }
}

function reset(callback){
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            if(callback(arr[i][j]))
            arr[i][j].className = "cell";
        }
    }
}

export {createCells,graph_start,markVisited,markFinalPath,isVisited,isObstacle,reset,goBackFromGraph};
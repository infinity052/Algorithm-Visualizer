
var objects = [];
window.addEventListener('load',()=>{
    var arr = [];
    for(var i = 0; i < 10; i++)
        arr.push(Math.floor(Math.random()*100 + 1));
    
        visualize(arr);
    
});

function visualize(arr){
    var area = document.querySelector("#bars");
    for(var i = 0; i < 10; i++){
        var bar = document.createElement("div");
        bar.className = "bar";
        var attr = document.createAttribute("style");
        var data = document.createAttribute("data-height");
        attr.value = "height: "+arr[i]*3+"px; ";
        data.value = arr[i]*3;
        bar.setAttributeNode(attr);
        bar.setAttributeNode(data);
        area.appendChild(bar);
        objects.push(bar);
    }

}
async function bubbleSort(){
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 9; j++){
            if(parseInt(objects[j].dataset.height) > parseInt(objects[j+1].dataset.height)){
                var temp = objects[j].style.height;
                objects[j].style.height = objects[j+1].style.height;
                objects[j+1].style.height = temp;

                temp = objects[j].dataset.height;
                objects[j].dataset.height = objects[j+1].dataset.height;
                objects[j+1].dataset.height = temp;

            }
           await sleep(10);
          
        }
       
    }
}

async function insertionSort(){
    for(var i = 1; i < 10; i++){
        for(var j = 0; j < i; j++){

            if(parseInt(objects[j].dataset.height)>=parseInt(objects[i].dataset.height)){
                    var data = objects[i].dataset.height;
                    var height = objects[i].style.height;
                for(var k = i; k > j; k--){

                    objects[k].dataset.height = objects[k-1].dataset.height;
                    objects[k].style.height = objects[k-1].style.height;
                }
                objects[j].dataset.height = data;
                objects[j].style.height = height;
            }
           await sleep(10);

        }
    }
}



async function mergeSort(){
    async function merge_sort(start, end){
        if(start>=end) return;
        var mid = parseInt(start + (end-start)/2);
        await merge_sort(start,mid);
        await merge_sort(mid+1,end);
        await merge(start,end);
    }
    async function merge(start,end){
        var mid = parseInt(start + (end-start)/2);
        var temp = [];
        var i = start, j = mid+1;
        while(i<=mid && j<=end){
            if(parseInt(objects[i].dataset.height)<parseInt(objects[j].dataset.height)){
                temp.push({height: objects[i].style.height , data : objects[i].dataset.height});
                i++;
            }else{
                temp.push({height : objects[j].style.height, data: objects[j].dataset.height});
                j++;
            }
            await sleep(10);
        }
        while(i<=mid){
            temp.push({height: objects[i].style.height , data : objects[i].dataset.height});
            i++;
            await sleep(10);
        }
        while(j<=end){
            temp.push({height : objects[j].style.height, data: objects[j].dataset.height});
            j++;
            await sleep(10);
        }
        var idx = 0;
        for(i = start; i<=end;i++){
            objects[i].dataset.height = temp[idx].data;
            objects[i].style.height = temp[idx].height;
            idx++;
            await sleep(10);
        }
    
    }
    
    var start = 0, end = 9;
    await merge_sort(start,end);
}

async function selectionSort(){
    for(var i = 0; i < 9; i++){
        var min = Number.MAX_SAFE_INTEGER;
        var idx = i;
        for(var j = i; j < 10; j++){
            if(min>parseInt(objects[j].dataset.height)){
                min = parseInt(objects[j].dataset.height);
                idx = j;
            }
        }
        objects[idx].dataset.height = objects[i].dataset.height;
        objects[idx].style.height = objects[i].style.height;
        objects[i].dataset.height = min;
        objects[i].style.height = min+"px";

    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
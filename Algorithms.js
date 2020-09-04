async function bubbleSort(){
    var n = size, i = 0, end = n-1;
    for(; i < n-1; i++){
        
        var isSorted = true, j = 0;
        
        for(; j < n - i - 1; j++){
            await iterator.addIterator(j,0);
            await sleep(100-speed);
            if(await height(j) > await height(j+1)){
                await swap(j,j+1);
                isSorted = false;
                await sleep(100-speed);
            }
            await iterator.removeIterator(j);

        }
        if(isSorted){
            if(end<n-1)
            for(;end>0;end--){
                await iterator.addIterator(end,1);
                await sleep(100-speed);
            }
            
            break;
        }
        await iterator.addIterator(end,1);
        end--;
    }
    await iterator.sortingEnd();
}


async function insertionSort(){
    var n = size;
    var i = 1;
    for(; i < n; i++){
        await iterator.addIterator(i,0);
        await sleep(100-speed);
        var key = await height(i) , j = i-1;
        while(j>=0 && await height(j) > key){
            await assign(j,j+1,"index");
            j--;
            await sleep(100-speed);
        }
        await iterator.addIterator(j+1,1);
        await sleep(100-speed);

        await assign(key,j+1,"height");
        await sleep(100-speed);
        await iterator.removeIterator(j+1);
        await iterator.removeIterator(i);
        await sleep(100-speed);
    }
    
    await iterator.sortingEnd();
}



async function mergeSort(){
    async function merge_sort(start, end){
        if(start>=end) return;
        var mid = parseInt(start + (end-start)/2);
        await merge_sort(start,mid);
        await merge_sort(mid+1,end);
        await iterator.addIterator(start,0);
        await iterator.addIterator(end,0);
        await merge(start,end);
        await iterator.removeIterator(start);
        await iterator.removeIterator(end);
    }
    async function merge(start,end){
        var mid = parseInt(start + (end-start)/2);
        var temp = [];
        var i = start, j = mid+1;
        while(i<=mid && j<=end){
            let height_i = await height(i), height_j = await height(j);
            if(height_i < height_j){
                temp.push(height_i);
                i++;
            }else{
                temp.push(height_j);
                j++;
            }
        }
        while(i<=mid){
            temp.push(await height(i));
            i++;
        }
        while(j<=end){
            temp.push(await height(j));
            j++;
        }
        
        for(i = start , k=0; i<=end; i++,k++){
           await assign(temp[k],i,"height");
           if(i!=start && i!=end)
           await iterator.addIterator(i,1);
           await sleep(100-speed);    
        }
        for(i = start+1; i<end; i++)
            await iterator.removeIterator(i);
    
    }
    
    var start = 0, end = size - 1;
    await merge_sort(start,end);
    await iterator.sortingEnd(100-speed);
}

async function selectionSort(){
    var n = size;
    for(let i = 0; i < n-1; i++){
        var min = await height(i), min_index = i;
        for(let j = i+1; j < n; j++){
            
            await iterator.addIterator(j,0);
            await sleep(100-speed);
            if(await height(j) < min){
                min = await height(j);
                min_index = j;
            }
            await iterator.removeIterator(j);
        }
        await swap(min_index,i,"index");
        await iterator.addIterator(i,1);
        await sleep(100-speed);
    }
    await iterator.sortingEnd(100-speed);
}
async function quickSort(){
    async function quick_sort(start,end){
        if(start>=end) 
            return;
        await iterator.addIterator(end,2);
        var pivot = await height(end), i = -1, j = 0;

        for(;j<end;j++){
            await iterator.addIterator(j,0);
            await sleep(101-speed);
            await iterator.removeIterator(j);
            if(await height(j) <= pivot){
                i++;
                await swap(i,j);
                await sleep(101-speed);
                await iterator.addIterator(i,1);
            }
        }
            
        
        await swap(i+1,end);
        await iterator.removeIterator(end);
        await iterator.addIterator(i+1);
        for(let x = 0; x <= i+1; x++)
            await iterator.removeIterator(x);
        await sleep(101-speed);
        await quick_sort(start,i);
        await quick_sort(i+2,end);
    }
    var start = 0 , end = parseInt(size - 1);
    await quick_sort(start,end);
    await iterator.sortingEnd(101-speed);
}

async function heapSort(){
    async function downHeapify(parent,n){
        await iterator.addIterator(parent,0);
        let leftChild = (parseInt(parent) * 2) + 1, rightChild = (parseInt(parent) * 2) + 2;
        if(leftChild<n)
        await iterator.addIterator(leftChild,1);
        if(rightChild<n)
        await iterator.addIterator(rightChild,1);
        await sleep(110 - speed);
        if(leftChild >= n  && rightChild >= n)
            return;
        let largestIndex = parent;
        if(leftChild < n && await height(leftChild) > await height(largestIndex))
            largestIndex = leftChild;
        if(rightChild < n && await height(rightChild) > await height(largestIndex))
            largestIndex = rightChild;
        
        if(parent != largestIndex){
            await swap(largestIndex,parent);
            await sleep(110 - speed);
            await iterator.addIterator(parent,0);
            await iterator.addIterator(largestIndex,1);
            await iterator.removeIterator(parent);
            await iterator.removeIterator(rightChild);
            await iterator.removeIterator(leftChild);
            await downHeapify(largestIndex,n);
        }
            await iterator.removeIterator(parent);
            await iterator.removeIterator(rightChild);
            await iterator.removeIterator(leftChild);
    }
    async function buildHeap(n){
        var start = parseInt(parseInt(n)/2 + 1);
        for(let i = start; i >= 0; i--){
            await downHeapify(i,n);
        }
    }
    async function heap_sort(start,end){
        await buildHeap(end+1);
        for(let i = end; i>=1; i--){
            await swap(0,i);
            await sleep(110 - speed);
            await downHeapify(0,i);
            await iterator.addIterator(i,2);
        }
    }
    await heap_sort(0,size-1);
    await iterator.sortingEnd(120-speed);
}

import iterator from './Iterators.js';
class SortAlgorithms{
    constructor(objects,speed){
        this.objects = objects;
        this.inProgress = false;
        this.size = objects.length;
        this.speed = speed;
    }
    setObjects(objects){
        this.objects = objects;
        this.size = objects.length;
    }
    setSpeed(speed){
        this.speed = speed;
    }
    async bubbleSort(){
        this.inProgress = true;
        var n = this.size, i = 0, end = n-1;
        for(; i < n-1; i++){
            
            var isSorted = true, j = 0;
            
            for(; j < n - i - 1; j++){
                await iterator.addIterator(this.objects,j,0);
                await sleep(100-this.speed);
                playNote((await this.height(j+1)*3));
                if(await this.height(j) > await this.height(j+1)){
                    await this.swap(j,j+1);
                    isSorted = false;
                    await sleep(100-this.speed);
                }
                await iterator.removeIterator(this.objects,j);
                
            }
            if(isSorted){
                if(end<n-1)
                for(;end>0;end--){
                    await iterator.addIterator(this.objects,end,1);
                    await sleep(100-this.speed);
                }
                
                break;
            }
            await iterator.addIterator(this.objects,end,1);
            end--;
        }
        await iterator.sortingEnd(this.objects,100-this.speed,this.height_obj);
        this.inProgress = false;
    }
    
    
    async insertionSort(){
        this.inProgress = true;
        var n = this.size;
        var i = 1;
        for(; i < n; i++){
            await playNote((await this.height(i)*3));
            await iterator.addIterator(this.objects,i,0);
            await sleep(100-this.speed);
            var key = await this.height(i) , j = i-1;
            while(j>=0 && await this.height(j) > key){
                await this.assign(j,j+1,"index");
                await playNote((await this.height(j)*3));
                
                j--;
                await sleep(100-this.speed);
            }
            await iterator.addIterator(this.objects,j+1,1);
            await sleep(100-this.speed);
            
            await this.assign(key,j+1,"height");
            await sleep(100-this.speed);
            await iterator.removeIterator(this.objects,j+1);
            await iterator.removeIterator(this.objects,i);
            await sleep(100-this.speed);
        }
        
        await iterator.sortingEnd(this.objects,100-this.speed,this.height_obj);
        this.inProgress = false;
    }
    
    
    async merge_sort(start, end){
        if(start>=end) return;
        var mid = parseInt(start + (end-start)/2);
        await this.merge_sort(start,mid);
        await this.merge_sort(mid+1,end);
        await iterator.addIterator(this.objects,start,0);
        await iterator.addIterator(this.objects,end,0);
        await this.merge(start,end);
        await iterator.removeIterator(this.objects,start);
        await iterator.removeIterator(this.objects,end);
    }
    async merge(start,end){
        var mid = parseInt(start + (end-start)/2);
        var temp = [];
        var i = start, j = mid+1,k=0;
        while(i<=mid && j<=end){
            let height_i = await this.height(i), height_j = await this.height(j);
            if(height_i < height_j){
                temp.push(height_i);
                i++;
            }else{
                temp.push(height_j);
                j++;
            }
        }
        while(i<=mid){
            temp.push(await this.height(i));
            i++;
        }
        while(j<=end){
            temp.push(await this.height(j));
            j++;
        }
        
        for(i = start, k=0; i<=end; i++,k++){
            await this.assign(temp[k],i,"height");
            await playNote(await this.height(i)*3);
            if(i!=start && i!=end)
            await iterator.addIterator(this.objects,i,1);
            await sleep(100-this.speed);    
        }
        for(i = start+1; i<end; i++)
        await iterator.removeIterator(this.objects,i);
        
    }
    async mergeSort(){
        this.inProgress = true;       
        var start = 0, end = this.size - 1;
        await this.merge_sort(start,end);
        await iterator.sortingEnd(this.objects,100-this.speed,this.height_obj);
        this.inProgress = false;
    }
    
    async selectionSort(){
        this.inProgress = true;
        var n = this.size;
        for(let i = 0; i < n-1; i++){
            var min = await this.height(i), min_index = i;
            for(let j = i+1; j < n; j++){
                var curr_height = await this.height(j)
                await playNote(curr_height)*3;
                await iterator.addIterator(this.objects,j,0);
                await sleep(100-this.speed);
                if(curr_height < min){
                    min = curr_height;
                    min_index = j;
                }
                await iterator.removeIterator(this.objects,j);
            }
            await this.swap(min_index,i,"index");
            await iterator.addIterator(this.objects,i,1);
            await sleep(100-this.speed);
        }
        await iterator.sortingEnd(this.objects,100-this.speed,this.height_obj);
        this.inProgress = false;
    }
    async quick_sort(start,end){
        if(start>=end) 
        return;
        await iterator.addIterator(this.objects,end,2);
        var pivot = await this.height(end), i = -1, j = 0;
        
        for(;j<end;j++){
            var curr_height = await this.height(j);
            await playNote(curr_height)*3;
            await iterator.addIterator(this.objects,j,0);
            await sleep(101-this.speed);
            await iterator.removeIterator(this.objects,j);
            if(curr_height <= pivot){
                i++;
                await this.swap(i,j);
                await sleep(101-this.speed);
                await iterator.addIterator(this.objects,i,1);
            }
        }
        
        
        await this.swap(i+1,end);
        await iterator.removeIterator(this.objects,end);
        await iterator.addIterator(this.objects,i+1);
        for(let x = 0; x <= i+1; x++)
        await iterator.removeIterator(this.objects,x);
        await sleep(101-this.speed);
        await this.quick_sort(start,i);
        await this.quick_sort(i+2,end);
    }
    async quickSort(){
        this.inProgress = true;
        var start = 0 , end = parseInt(this.size - 1);
        await this.quick_sort(start,end);
        await iterator.sortingEnd(this.objects,101-this.speed,this.height_obj);
        this.inProgress = false;
    }
    async downHeapify(parent,n){
        await playNote(await this.height(parent)*3);
        await iterator.addIterator(this.objects,parent,0);
        let leftChild = (parseInt(parent) * 2) + 1, rightChild = (parseInt(parent) * 2) + 2;
        if(leftChild<n)
        await iterator.addIterator(this.objects,leftChild,1);
        if(rightChild<n)
        await iterator.addIterator(this.objects,rightChild,1);
        await sleep(110 - this.speed);
        if(leftChild >= n  && rightChild >= n)
        return;
        let largestIndex = parent
        if(leftChild < n && await this.height(leftChild) > await this.height(largestIndex))
        largestIndex = leftChild;
        if(rightChild < n && await this.height(rightChild) > await this.height(largestIndex))
        largestIndex = rightChild;
        
        if(parent != largestIndex){
            await this.swap(largestIndex,parent);
            await sleep(110 - this.speed);
            await iterator.addIterator(this.objects,parent,0);
            await iterator.addIterator(this.objects,largestIndex,1);
            await iterator.removeIterator(this.objects,parent);
            await iterator.removeIterator(this.objects,rightChild);
            await iterator.removeIterator(this.objects,leftChild);
            await this.downHeapify(largestIndex,n);
        }
        await iterator.removeIterator(this.objects,parent);
        await iterator.removeIterator(this.objects,rightChild);
        await iterator.removeIterator(this.objects,leftChild);
    }
    async buildHeap(n){
        var start = parseInt(parseInt(n)/2 + 1);
        for(let i = start; i >= 0; i--){
            await this.downHeapify(i,n);
        }
    }
    async heap_sort(start,end){
        await this.buildHeap(end+1);
        for(let i = end; i>=1; i--){
            await this.swap(0,i);
            await sleep(110 - this.speed);
            await this.downHeapify(0,i);
            await iterator.addIterator(this.objects,i,2);
        }
    }
    async heapSort(){
        this.inProgress = true;
        
        
        await this.heap_sort(0,this.size-1);
        await iterator.sortingEnd(this.objects,120-this.speed,this.height_obj);
        this.inProgress = false;
    }
    

    async swap(i,j){
        let temp = this.objects[i].style.height;
        this.objects[i].style.height = this.objects[j].style.height;
        this.objects[j].style.height = temp;
    }
    
    async height(i){
        let s = this.objects[i].style.height;
        return parseInt(s.slice(0,s.length-2));
    }
    
    async assign(src,dest,assign_to){
    
        switch(assign_to){
            case "index" : this.objects[dest].style.height = this.objects[src].style.height; break;
            case "height": this.objects[dest].style.height = src+"px"; break;
            case "object": this.objects[dest].style.height = src.style.height; break;
            default : return;
        }
    
    }
    
    height_obj(obj){
        var h = obj.style.height;
        return parseInt(h.slice(0,h.length-2));
    }

}
export default SortAlgorithms;

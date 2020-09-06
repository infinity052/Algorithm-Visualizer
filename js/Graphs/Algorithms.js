import {markVisited,markFinalPath,isVisited,isObstacle,reset} from './Graph.js';

class GraphAlgorithms{
    
    constructor(arr,start,end){
        this.arr = arr;
        this.start = start;
        this.end = end;
        this.inProgress = false;
    }
    
    setStart(start){
        this.start = start;
    }
    setEnd(end){
        this.end = end;
    }
    setNewArr(arr){
        this.arr = arr;
    }
    
    async aStarPathFinding(){ 
        this.inProgress = true;
        var start = this.start, end = this.end, arr = this.arr;
        
        var openSet = new Set([JSON.stringify([start[0],start[1]])]);
        var closedSet = new Set();
        
        var g_array = [], f_array=[], parent=[];
        
        for(let i = 0; i < arr.length; i++){
            var temp = [];
            var temp1 = [];
            var temp2 = [];
            for(let j = 0; j < arr[0].length; j++){
                temp.push(Number.MAX_VALUE); 
                temp1.push(Number.MAX_VALUE); 
                temp2.push([-1,-1]); 
                
            }
            
            g_array.push(temp);
            f_array.push(temp1);
            parent.push(temp2);
        }
        g_array[start[0]][start[1]] = 0;
        f_array[start[0]][start[1]] = await getH(start[0],start[1]);
        parent[start[0]][start[1]] = [start[0],start[1]];
        async function getMinNbr(){
            var minF = Number.MAX_VALUE, i = undefined, j = undefined;
            openSet.forEach(n=>{ 
                let nbr = JSON.parse(n); 
                if(minF > f_array[nbr[0]][nbr[1]]){
                    i = nbr[0];
                    j = nbr[1];
                    minF = f_array[nbr[0]][nbr[1]];
                }
            });
            return [i,j];
        }
        
        async function updateOpenSet(row,col){
            
            var off = [1,0,-1,0,1];
            for(let i = 0; i < 4; i++){
                let currRow = row + off[i], currCol = col + off[i+1];
                if(currRow>=0 && currRow<arr.length && currCol>=0 && currCol<arr[0].length && !closedSet.has(JSON.stringify([currRow,currCol])) && arr[currRow][currCol].className !== "cell obstacle"){
                    
                    let g_score = g_array[row][col] + 1;
                    if(g_array[currRow][currCol] > g_score && !isObstacle(arr[currRow][currCol])){
                        g_array[currRow][currCol] = g_score;
                        f_array[currRow][currCol] = g_score + await getH(currRow,currCol);
                        parent[currRow][currCol] = [row,col];
                    }
                    if(openSet.has(JSON.stringify([currRow,currCol]))==false && !isObstacle(arr[currRow][currCol])){
                        openSet.add(JSON.stringify([currRow,currCol]));
                        markVisited(arr[currRow][currCol]);
                    }
                    
                }
            }
            
        }
        function getH(i,j){
            return Math.abs(i-end[0]) + Math.abs(j-end[1]);
        }
        var current = undefined , i = start[0], j = start[1];
        while(openSet.size > 0 && current != arr[end[0]][end[1]]){ 
            await sleep(0.1);
            let temp = await getMinNbr();
            i = temp[0];
            j = temp[1]; 
            current = arr[i][j];
            openSet.delete(JSON.stringify([i,j]));
            closedSet.add(JSON.stringify([i,j]));
            await updateOpenSet(i,j)
            
        }
        current==arr[end[0]][end[1]] ? await this.tracePathByParentArray(parent) : alert('No path exists :(');
        this.inProgress = false;
    }
    
    async dfs(){
        this.inProgress = true;
        var start = this.start, end = this.end, off = [1,0,-1,0,1], path=[], arr = this.arr;
        
        async function dfs_call(row,col){
            
            if(row<0 || row>=arr.length || col<0 || col>=arr[0].length || await isObstacle(arr[row][col]) || await isVisited(arr[row][col]))
            return false;
            if(row==end[0] && col==end[1]){
                path.push([row,col]);
                return true;
            }
            await markVisited(arr[row][col]);
            for(let i = 0; i < 4; i++){
                await sleep(7);
                if(await dfs_call(row+off[i],col+off[i+1])){
                    path.push([row,col]);
                    return true;
                }
                
            }
            return false;
        }
        
        await dfs_call(start[0],start[1])? await this.tracePathByPathArray(path) : alert('No path exists :(');
        this.inProgress = false;
    }
    
    async bfs(){
        this.inProgress = true;
        var start = this.start, end = this.end, parent = [],arr = this.arr;
        for(let i = 0; i < arr.length; i++){
            var temp = [];
            for(let j = 0; j < arr[0]; j++){
                temp.push([-1,-1]);
            }
            parent.push(temp);
        }
        parent[start[0]][start[1]] = [start[0],start[1]];
        async function bfs_call(){
            var q = new Array(), off = [1,0,-1,0,1];
            q.push([start[0],start[1]]);
            while(q.length>0){
                await sleep(50);
                var size = q.length;
                for(let x = 0; x < size; x++){
                    
                    if(q[0][0]==end[0] && q[0][1]==end[1])
                    return true;
                    var front = q[0];
                    q.shift();
                    for(let i = 0; i < 4; i++){
                        let nbr_row = front[0] + off[i], nbr_col = front[1] + off[i+1];
                        if(nbr_row>=0 && nbr_row<arr.length && nbr_col>=0 && nbr_col<arr[0].length && !isObstacle(arr[nbr_row][nbr_col]) && !isVisited(arr[nbr_row][nbr_col])){
                            parent[nbr_row][nbr_col] = [front[0],front[1]];
                            if(nbr_row==end[0] && nbr_col==end[1])
                            return true;
                            
                            q.push([nbr_row,nbr_col]);
                            markVisited(arr[nbr_row][nbr_col]);
                        }
                    }
                }
                
            }
            return false;
        }
        
        await bfs_call()? await this.tracePathByParentArray(parent): alert('No path exists :(');
        this.inProgress = false;
        
    }
    
    async dijkstra(){
        this.inProgress = true;
        
        var start = this.start, end = this.end, arr = this.arr;
        var dist = [];
        var parent = [];
        for(let i = 0; i < arr.length; i++){
            var temp = [], temp1 = [];
            for(let j = 0; j < arr[0].length; j++){
                temp.push(Number.MAX_VALUE);
                temp1.push([-1,-1]);
            }
            dist.push(temp);
            parent.push(temp1);
        }
        dist[start[0]][start[1]] = 0;
        parent[start[0]][start[1]] = [start[0],start[1]];
        function getPriority(pq){
            let minDist = Number.MAX_VALUE, i = -1, j = -1;
            pq.forEach(str=>{
                let curr = JSON.parse(str);
                if(minDist > dist[curr[0]][curr[1]]){
                    minDist = dist[curr[0]][curr[1]];
                    i = curr[0];
                    j = curr[1];
                }
            });
            pq.delete(JSON.stringify([i,j]));
            return [i,j];
        }
        
        async function dijikstra_call(){
            var pq = new Set();
            pq.add(JSON.stringify([start[0],start[1]]));
            var off = [1,0,-1,0,1];
            while(pq.size){
                await sleep(1);
                var priority_cell = getPriority(pq); 
                
                if(priority_cell[0]==end[0] && priority_cell[1]==end[1])
                return true;
                
                for(let i = 0; i < 4; i++){ 
                    let currRow = priority_cell[0]+off[i], currCol = priority_cell[1]+off[i+1];
                    if(currRow>=0 && currRow<arr.length && currCol>=0 && currCol<arr[0].length && !isObstacle(arr[currRow][currCol])){
                        if(currRow==end[0] && currCol==end[1]){
                            parent[currRow][currCol] = [priority_cell[0],priority_cell[1]];
                            return true;
                        }
                        
                        if(!isVisited(arr[currRow][currCol]) || dist[currRow][currCol] > dist[priority_cell[0]][priority_cell[1]] + 1){
                            dist[currRow][currCol] = dist[priority_cell[0]][priority_cell[1]] + 1;
                            parent[currRow][currCol] = [priority_cell[0],priority_cell[1]];
                            pq.add(JSON.stringify([currRow,currCol]));
                            markVisited(arr[currRow][currCol]);
                        }
                    }
                }
                
            }
            return false;
        }
        
        await dijikstra_call()? await this.tracePathByParentArray(parent): alert('No path exists :(');
        this.inProgress = false;
    }
    
    
    async tracePathByPathArray(path){
        reset(isVisited);
        for(let i = 0; i < path.length; i++){
            await sleep(20);
            markFinalPath(this.arr[path[i][0]][path[i][1]]);
        }
    }
    
    
    
    async tracePathByParentArray(parent){
        reset(isVisited);
        var i = this.end[0], j = this.end[1];
        
        while(i!=this.start[0] || j!=this.start[1]){
            await sleep(18);
            markFinalPath(this.arr[i][j]);
            var temp = parent[i][j][0];
            j = parent[i][j][1];
            i = temp;
        }
        markFinalPath(this.arr[this.start[0]][this.start[1]])
    }
    
    
}
export default GraphAlgorithms;
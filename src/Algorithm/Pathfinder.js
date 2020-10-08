const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// BFS - Breath-First Search
const bfs = (grid, startX, startY) => {
    const visitOrder = [];
    const queue = [];
    queue.push([startX, startY]);
    visitOrder.push(grid[startX][startY]);
    while(queue.length){
        const a = queue.shift();
        const x = a[0], y = a[1];
        for(let i = 0; i < 4; i++){
            let nextX = x + dx[i];
            let nextY = y + dy[i];
            if(nextX < 0 || nextY < 0 || nextX === grid.length || nextY === grid[0].length) continue;
            if(grid[nextX][nextY].isWall) continue;            
            if(visitOrder.some(node => node.row === nextX && node.col === nextY)) continue;
            visitOrder.push(grid[nextX][nextY]);
            grid[nextX][nextY].previousNode = grid[x][y];
            if(grid[nextX][nextY].isFinish) return visitOrder;
            queue.push([nextX, nextY]);
        }
    }
    return visitOrder;
}

// DFS - Depth-First Search
const dfs = (grid, startX, startY) => {
    const visitOrder = [];
    const stack = [];
    stack.push([startX, startY]);
    while(stack.length){
        const a = stack.pop();
        const x = a[0], y = a[1];
        if(visitOrder.some(node => node.row === x && node.col === y)) continue;
        visitOrder.push(grid[x][y]);
        if(grid[x][y].isFinish) return visitOrder;
        for(let i = 3; i >= 0; i--){
            let nextX = x + dx[i];
            let nextY = y + dy[i];
            if(nextX < 0 || nextY < 0 || nextX === grid.length || nextY === grid[0].length) continue;
            if(visitOrder.some(node => node.row === nextX && node.col === nextY)) continue;
            if(grid[nextX][nextY].isWall) continue;            
            grid[nextX][nextY].previousNode = grid[x][y];
            stack.push([nextX, nextY]);
        }
    }
    return visitOrder;
}

// Dijkstra Algorithm
const dijkstra = (grid, startX, startY) => {
    const visitOrder = [];
    const queue = [];
    queue.push([startX, startY]);
    visitOrder.push(grid[startX][startY]);
    while(queue.length){
        const a = queue.shift();
        const x = a[0], y = a[1];
        for(let i = 0; i < 4; i++){
            let nextX = x + dx[i];
            let nextY = y + dy[i];
            if(nextX < 0 || nextY < 0 || nextX === grid.length || nextY === grid[0].length) continue;
            if(grid[nextX][nextY].isWall) continue;            
            if(visitOrder.some(node => node.row === nextX && node.col === nextY)) continue;
            visitOrder.push(grid[nextX][nextY]);
            grid[nextX][nextY].previousNode = grid[x][y];
            if(grid[nextX][nextY].isFinish) return visitOrder;
            queue.push([nextX, nextY]);
        }
    }
    return visitOrder;
}

// A* Algorithm
const Astar = (grid, startX, startY) => {
    const visitOrder = [];
    const queue = [];
    queue.push([startX, startY]);
    visitOrder.push(grid[startX][startY]);
    while(queue.length){
        const a = queue.shift();
        const x = a[0], y = a[1];
        for(let i = 0; i < 4; i++){
            let nextX = x + dx[i];
            let nextY = y + dy[i];
            if(nextX < 0 || nextY < 0 || nextX === grid.length || nextY === grid[0].length) continue;
            if(grid[nextX][nextY].isWall) continue;            
            if(visitOrder.some(node => node.row === nextX && node.col === nextY)) continue;
            visitOrder.push(grid[nextX][nextY]);
            grid[nextX][nextY].previousNode = grid[x][y];
            if(grid[nextX][nextY].isFinish) return visitOrder;
            queue.push([nextX, nextY]);
        }
    }
    return visitOrder;
}

const getShortestPath = (grid, finishX, finishY) => {
    const path = [];
    let curNode = grid[finishX][finishY];
    while(curNode !== null){
        path.unshift(curNode);
        curNode = curNode.previousNode;
    }
    return path;
}


export {bfs, dfs, dijkstra, Astar, getShortestPath};
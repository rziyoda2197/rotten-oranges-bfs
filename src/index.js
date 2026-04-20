function rottingOranges(grid) {
    if (!grid.length) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let count = 0;
    let days = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) count++;
            if (grid[i][j] === 2) queue.push([i, j]);
        }
    }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2;
                    queue.push([nx, ny]);
                    count--;
                }
            }
        }
        days++;
    }

    return count === 0 ? days : -1;
}
```

Kodni ishlatish uchun quyidagicha funksiyani chaqiring:

```javascript
const grid = [
    [2,1,1],
    [1,1,0],
    [0,1,1]
];
console.log(rottingOranges(grid)); // 4

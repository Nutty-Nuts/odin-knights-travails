var minKnightMoves = function (x, y) {
    x = Math.abs(x);
    y = Math.abs(y);

    const visited = new Map();

    const directions = [
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
    ];

    const queue = [[0, 0]];

    let step = 0;

    while (true) {
        queue.push(null);

        let head;

        while ((head = queue.shift())) {
            const key = `${head[0]}_${head[1]}`;
            if (visited.has(key)) continue;

            visited.set(key, true);

            if (head[0] === x && head[1] === y) {
                return step;
            }

            for (let direction of directions) {
                const next = [head[0] + direction[0], head[1] + direction[1]];

                if (
                    !visited.has(`${next[0]}_${next[1]}`) &&
                    (step < 2 || (next[0] >= 0 && next[1] >= 0))
                ) {
                    queue.push(next);
                }
            }
        }
        step += 1;
    }
};

console.log(minKnightMoves(5, 5));

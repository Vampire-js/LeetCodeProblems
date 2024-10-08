/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 2) return points.length;

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    let max = 1;

    for (let i = 0; i < points.length - 1; i++) {
        let map = {};
        let localMax = 0;

        for (let j = i + 1; j < points.length; j++) {
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];

            // Normalize the slope by reducing to simplest form
            const g = gcd(dx, dy);
            dx /= g;
            dy /= g;

            // Ensure consistent representation of slopes
            if (dx === 0) {
                dy = 1;
            } else if (dy === 0) {
                dx = 1;
            } else if (dx < 0) {
                dx = -dx;
                dy = -dy;
            }

            const slope = `${dx},${dy}`;
            map[slope] = (map[slope] || 0) + 1;
            localMax = Math.max(localMax, map[slope]);
        }

        // Update global max with the local maximum + 1 for the point itself
        max = Math.max(max, localMax + 1);

        // If remaining points are not enough to beat current max, break early
        if (max >= points.length - i) break;
    }

    return max;
};

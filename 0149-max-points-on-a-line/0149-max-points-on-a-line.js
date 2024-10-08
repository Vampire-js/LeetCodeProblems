/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 2) return points.length;

    // Helper function to find the GCD of two numbers
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    
    let max = 1;

    for (let i = 0; i < points.length; i++) {
        let map = {};
        for (let j = i + 1; j < points.length; j++) {
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];

            // Use GCD to normalize the slope
            const g = gcd(dx, dy);
            dx /= g;
            dy /= g;

            // Handle vertical lines consistently
            if (dx === 0) {
                dy = 1; // normalize the slope for vertical lines
            } else if (dy === 0) {
                dx = 1; // normalize the slope for horizontal lines
            } else if (dx < 0) {
                dx = -dx;
                dy = -dy;
            }

            let slope = `${dx}/${dy}`;
            map[slope] = 1 + (map[slope] || 0);
        }

        for (let count of Object.values(map)) {
            max = Math.max(max, count + 1);
        }
    }

    return max;
};

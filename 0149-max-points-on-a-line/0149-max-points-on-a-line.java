import java.util.HashMap;

public class Solution {
    public int maxPoints(int[][] points) {
        if (points.length <= 2) return points.length;

        int max = 1;

        for (int i = 0; i < points.length - 1; i++) {
            HashMap<String, Integer> map = new HashMap<>();
            int localMax = 0;

            for (int j = i + 1; j < points.length; j++) {
                String slope = findSlope(points[i], points[j]);
                map.put(slope, map.getOrDefault(slope, 0) + 1);
                localMax = Math.max(localMax, map.get(slope));
            }

            max = Math.max(max, localMax + 1);

            if (max >= points.length - i) break;
        }

        return max;
    }

      private String findSlope(int[] p1, int[] p2) {
        int x1 = p1[0], y1 = p1[1];
        int x2 = p2[0], y2 = p2[1];
        if (x2 - x1 == 0) return "vert";
        
        if (y2 - y1 == 0) return "horiz";

        return String.valueOf((double)(y2 - y1) / (x2 - x1));
    }
}


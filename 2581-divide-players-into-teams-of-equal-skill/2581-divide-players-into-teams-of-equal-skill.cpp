class Solution {
public:
    long long dividePlayers(std::vector<int>& skill) {
    std::sort(skill.begin(), skill.end());
    
    int left = 0;
    int right = skill.size() - 1;
    long sum = 0;
    int targetSum = skill[left] + skill[right];

    while (left < right) {
        if (skill[left] + skill[right] != targetSum) {
            std::cout << skill[left] + skill[right] << " " << targetSum << std::endl;
            return -1;
        }
        sum += skill[left] * skill[right];
        left++;
        right--;
    }

    return sum;
}


};
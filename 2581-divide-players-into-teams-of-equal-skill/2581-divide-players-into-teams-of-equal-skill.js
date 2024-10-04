/**
 * @param {number[]} skill
 * @return {number}
 */

var dividePlayers = function (skill) {
    skill.sort((a,b) => a-b)
    
    let left = 0;
    let right = skill.length - 1;
    let sum = 0;
    let targetSum = skill[left] + skill[right];

    while (left < right) {
        if (skill[left] + skill[right] !== targetSum) {
            console.log(skill[left] + skill[right]  , targetSum)
            return -1;
        }
        sum += skill[left] * skill[right];
        left++;
        right--;
    }

    return sum;
};
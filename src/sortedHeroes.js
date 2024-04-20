export default function sortedHeroes(arr) {
    return arr.sort((a, b) => b.health - a.health);
}
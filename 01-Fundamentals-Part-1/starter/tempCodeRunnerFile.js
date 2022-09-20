const scoreDolphin = (97 + 112 + 101)/3
const scoreKoalas = (109 + 95 + 110)/3
console.log(scoreDolphin, scoreKoalas)

if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
    console.log(`Dolphin wins the trophy`)
} 
else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
    console.log(`Koalas wins the trophy`)
}
else if (scoreDolphin === scoreKoalas && scoreKoalas >= 100 && scoreDolphin >=100) {
    console.log(`Its a tie!`)
}
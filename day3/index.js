const fs = require('fs')
// const { text } = require('stream/consumers')
let binVersion = fs.readFileSync('input.txt')
let listVersion = fs.readFileSync('input.txt').toString().split("\n")
// console.log(binVersion)
// // console.log(listVersion)
//     for (let i = 0; i < listVersion.length;i++){
//         console.log(textToBinary(listVersion[i]))
//     }
let gammaRay = ''
let epsilonRay = ''
let one = 0
let zero = 0
// let char = 0

// function Moana (listVersion) {
//     // let one = 0
//     // let zero = 0
//     for (let i = 0; i < listVersion.length;i++){
//         switch (listVersion[i][char]) {
//             case '0': zero++;
//             break;
//             case '1': one++;
//             break;
//         }
//     }
//     if (zero > one) {
//         gammaRay = gammaRay+'0'
//         epsilonRay = epsilonRay + '1'
//     } else {
//         gammaRay = gammaRay + '1'
//         epsilonRay = epsilonRay + '1'
//     }
//     console.log(zero, one)

// }
// const textToBinary = (str = '') => {
//     let res = '';
//     res = str.split('').map(char => {
//        return char.charCodeAt(0).toString();
//     }).join(' ');
//     return res;
//  };


// console.log(listVersion)
// for (let i = 0; i < listVersion.length;i++){
//     // console.log(textToBinary(listVersion[i]))
// }

for (let char = 0; char < listVersion[0].length; char++) {
    for (let i = 0; i < listVersion.length;i++){
        switch (listVersion[i][char]) {
            case '0': zero++;
            break;
            case '1': one++;
            break;
        }
    }
    if (zero > one) {
        gammaRay = gammaRay+'0'
        epsilonRay = epsilonRay + '1'

    } else {
        gammaRay = gammaRay + '1'
        epsilonRay = epsilonRay + '0'
    }
    zero = 0
    one = 0
    // console.log(gammaRay, epsilonRay)
}
// Moana(listVersiom)

console.log('Gamma:',gammaRay)
console.log('Epsilon:',epsilonRay)
// console.log('Gamma Bin: ', textToBinary(gammaRay))
// let bin = parseInt(gammaRay,4)*parseInt(epsilonRay,2)
console.log('Gamma Dec:', parseInt(gammaRay,2))
console.log('Epsilon Dec:', parseInt(epsilonRay,2))
// let gam = 
// let ep = parseInt(epsilonRay,2)
// // console.log(bin, gam, ep)
// // console.log(parseInt(bin,2))
// // console.log(textToBinary(listVersion))
// // p parseInt(gammaRay,2)*parseInt(epsilonRay,2)
console.log( parseInt(gammaRay,2)*parseInt(epsilonRay,2))
console.log(parseInt((gammaRay*epsilonRay),2))

console.log(189*3906)
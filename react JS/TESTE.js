function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    }
    else {
        return 'impar'
    }
}

let res = parimp(4)

console.log(res)

function soma(n1 = 0, n2 = 0) {
    return n1+n2
}

let som = soma(2, 2)

console.log(som)

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--){
        fat = fat*c
    }
    return fat
}

fatorial(5)

console.log(fat)
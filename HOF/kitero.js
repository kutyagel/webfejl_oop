const fv1 = (a,b) => {
    return a + b;
}

const fv2 = (a,b,cb) => {
    const valt1 = cb(a,2)
    const valt2 = cb(b,4)
    const callback = cb(valt1, valt2)

    return callback
}

const res1 = fv2(5,7, (a,b) => {
    return a + b;
})

console.log(res1)

const res2 = fv2(5, 7, fv1)

console.log(res2)

const fv3 = (op) => {
    if (op === "-"){
        return (a,b) => {
            return a-b;
        }
    }
    if (op === "*2") {
        const multi = 2;
        return (a, b) => {
            return multi*(a+b);
        }
    } 

}

const fv4 = fv3("-");
console.log(fv4(5,7));

const cupcake = (fv2(5,7,fv3("-")));
console.log(cupcake)

const res3 = fv2(5,7,fv3("*2"));
console.log(res3)
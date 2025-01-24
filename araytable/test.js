function fun(param){
    console.log(param.nev)
} 
fun({nev:'gombi'})

function funa(){
    console.log(this.nev)
} 

const funb = function(param){
    console.log(param.nev)
} 
funb({nev:'gombi'})


const func = (param) => {
    console.log(param.nev)
} 

const alma = fun
alma({nev:'gombi'})

const korte = funa.bind({nev:'II. Gombos'})
korte();

const obj = {
    funa:(param) => {
        console.log(param.nev)
    },
    funb:(param) => {
        console.log(param.eletkor)
    }
}
obj.funa({nev:'Gombos István'})
obj.funb({eletkor: 69})
const wzory = [
    {figura: "kwadrat", wzor: "P=a^2"},
    {figura: "prostokat", wzor: "P=a*b"},
    {figura: "trojkat",wzor:"P=a*h/2"}
];

//export method modułu pole figur
module.exports = {
    podajWzory(){
        console.log("Wzory:");
        wzory.forEach(v=>{
            console.log(`${v.figura}: ${v.wzor}`);
        })
    },
    obliczPolekw(a)
    {
        console.log("pole kw: " + a*a);
    }
}
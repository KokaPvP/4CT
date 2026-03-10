let info : string = "bla bla bla";
let decimal: number = 3.14;
let hex : number = 0xfff;
let octal : number = 0o765;
let binary:number = 0b10101;
let logic:boolean = true;

let wszystkoJednoCo:any = 23;
wszystkoJednoCo = "blablabla";
wszystkoJednoCo = {};
wszystkoJednoCo = [1,2,3];

let wspolnazmienna : number | string = 1;
wspolnazmienna = "5";

let zbior: "Pszczyna" | "Katowice" | "Brzeźce";
zbior = "Pszczyna";

let auta:string[] = ["BMV","AUDI","TOYOT"];
let tab:[string,number,boolean] = ["s",2,false];

enum kolory
{
    red,
    green,
    blue
}

let kolor : kolory = kolory.red;
console.log(kolor);
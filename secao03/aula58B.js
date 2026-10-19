function radom(min, max){
    const r = Math.random() * (max - min + 1) + min;
    return Math.floor(r);
}

const min = 1;
const max = 10;

do{
    rand = radom(min, max);
    console.log(rand);
}while(rand !== 10);
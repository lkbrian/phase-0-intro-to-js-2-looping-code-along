// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"]
const eventToHappen = "surprise"

function writeCards(name,event){
    const allMessages =[];
    for (let index = 0; index < name.length; index++) {
        const message  = `Thank you, ${name[index]}, for the wonderful ${event} gift!`;
        allMessages.push(message);
    }
    return allMessages;
}
writeCards(names,eventToHappen);

function countDown( num){
    let i = num;
    while(num >=0){
        console.log(num);
        num -= 1;
    }
    return num;
}
countDown(10);


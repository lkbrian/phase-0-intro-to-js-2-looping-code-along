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

function countDown( number){
    let i = number;
    while(number >=0){
        console.log(number);
        number -= 1;
    }
    return number;
}
countDown(10);
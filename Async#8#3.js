const second = () => {
    setTimeout(() => {
        console.log('i am second Function');
    }, 1500);
}
const first = () => {
    console.log(` I am First Function.`);
    second();
    console.log(` Race Endd.`);
}
first();
const ids = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ids = [1, 2, 3, 4, 5];
        resolve(ids);
        console.log(ids);
    }, 1500);
});
const user = (ids) => {
    return new Promise((resolve, reject) => {
        setTimeout((ids) => {
            const data = {
                id: 1,
                name: 'munsif',
                age: 13
            }
            if (ids[0] === data.id) {
                console.log(` My roll no ${ids[0]} My name is ${data.name} and my age is ${data.age}`)
            }
            resolve(data);
        }, 1500, ids);
    });
};
const info = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout((data) => {
            const eduInfo = {
                name: 'munsif',
                uni: 'numl',
                degre: 'bscs-6A'
            }
            if (data.name === eduInfo.name) {
                resolve(`My University is ${eduInfo.uni} and my degree is ${eduInfo.degre}`);
            }
            else {
                console.log('data no matched');
            }
        }, 1500, data);
    });
}
//Async functionruns in the backgroud means its doesnot block the exectutionof code .
async function idsFun() {
    //await keyword is always decleared inside the Async function
    const iDs = await /*awaits waits unitill (ids promise return somthing)*/ids;
    const userObj = await user(iDs);
    const userInfo = await info(userObj);
    console.log(userInfo);
    //if we want tor return somthing we use the then fun
    return userObj;
}
//agr ham istrh return lana chahay ksis async function sa to aisa nhi hga
//q ka res Synchronously chal rha h or res phly execute hojai ga async idsFun sa 
const res = idsFun();
console.log(' => Because async fun is still running bcoz of Async  and res is Sync  ');
console.log(res);

//calling idsFun() twic thats why the result is twice

//write way to get return smthing from async fun
idsFun().then((returnData) => {
    console.log(`Async return Data is : ${returnData}`);
    console.log(returnData);
});
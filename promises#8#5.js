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
//MAIN
// ids.then(ids => {
//     return user(ids);
// }).then(data => {
//     console.log(data);
//     return info(data); 
// }).then(info => {
//     console.log(info);
// }).catch(error => {
//     console.log('error');
// });

//two ways to use (then) but the effective way the the upper 1
ids.then(ids => {
    user(ids).then(data => {
        console.log(data);
        info(data).then(info => {
            console.log(info);
        });
    });
}).catch(error => {
    console.log('error');
});
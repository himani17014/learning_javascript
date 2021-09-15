const _wait = (milliseconds) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(2), milliseconds);
    });
};

const f = async () => {

    let p = new Promise(async (resolve, reject)=> {
        a = 2
        console.log("1.",a);
        a = _wait(2000);

        console.log("2.",a);
        console.log("3.",await a);
        a = await a
        if(a==2){
            resolve('Resolved');
        } else reject('Rejected')
    })
    
    val = await p
        // .then(val => console.log("inside then ",val))
        .catch(err => console.log(err));
    // val =  await val
    console.log("val", val);
    
}

f();


/**
 * 1. 2
 * 2. Promise { <pending> }
 * 3. 2
 * val Resolved
 */



const f1 = async () => {

    let p = new Promise(async (resolve, reject)=> {
        a = 2
        console.log("1.",a);
        a = _wait(2000);

        console.log("2.",a);
        console.log("3.",await a);
        a = await a
        if(a==2){
            resolve('Resolved');
        } else reject('Rejected')
    })
    
    val = p
        .then(val => console.log("inside then ",val))
        .catch(err => console.log(err));
    // val =  await val
    console.log("val", val);
    
}

f1();


/**
 * 1. 2
 * 2. Promise { <pending> }
 * val Promise { <pending> }
 * 3. 2
 * inside then  Resolved
 */

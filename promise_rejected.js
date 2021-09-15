const _wait = (milliseconds) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(1), milliseconds);
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
    try{
        val = await p
            // .then(val => console.log("inside then ",val))
            // .catch(err => console.log(err));
        // val =  await val
        console.log("val", val);
    } catch (err) {
        console.log("try catch ", err);
    }
}

f();


/**
 * OUTPUT
 * 1. 2
 * 2. Promise { <pending> }
 * 3. 1
 * try catch  Rejected
 */

// if no try catch, we'll simply call the arrow fn inside .catch() handler 
const f2 = async () => {

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

f2();


/**
 * 1. 2
 * 2. Promise { <pending> }
 * 3. 1
 * Rejected
 * val undefined
 */


//  no await before promise p
const f3 = async () => {

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
        // .then(val => console.log("inside then ",val))
        .catch(err => console.log(err));
    // val =  await val
    console.log("val", val);
    
}

f3();

/**
 * 1. 2
 * 2. Promise { <pending> }
 * val Promise { <pending> }
 * 3. 1
 * Rejected
 */

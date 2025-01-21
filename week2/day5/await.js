function kiratsAsyncFunction(){
    let p = new Promise(function (resolve){
        setTimeout(function() {
            resolve ("hi there!")
        }, 1000)
    });
    return p;
}

async function main() {
    let value = await kiratsAsyncFunction();
    console.log(value);
}

main ();
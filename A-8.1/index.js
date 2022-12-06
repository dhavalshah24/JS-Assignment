

const getPrimeNumbers = async () => {

    event.preventDefault();
    const a = (document.getElementById("firstNumber").value);
    const b = (document.getElementById("secondNumber").value);
    // console.log(a,b);

    // let startTime = Date.now()
    let startTime = performance.now();
    const prime_array = await getPrimeRange(a, b)
    // let endTime = Date.now()
    let endTime = performance.now();

    // console.log(endTime-startTime);
    document.getElementById("time_all_instances").innerHTML = (endTime-startTime).toFixed(3) + "ms";
    // console.log(prime_array);
    document.getElementById("prime_array").innerHTML = prime_array.join(", ")
    document.getElementById("myForm").reset();
}


const getPrimeRange = (a, b) => {
    let prime_array = [];
    for(let i=a; i<=b; i++) {
        if(i==1||i==0) {
            continue;
        }
        let flag = false;
        for(let j=2; j<=i-1; j++) {
            if(i%j==0) {
                // console.log(i, j)
                flag=true;
                break;
            }
        }
        // console.log(flag, i)
        if(!flag) {
            prime_array.push(i);
        }
    }
    return prime_array;
} 
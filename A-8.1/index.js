

const getPrimeNumbers = async () => {

    event.preventDefault();
    document.getElementById("2b-table").innerHTML = "";
    document.getElementById("2c-table").innerHTML = "";
    document.getElementById("avg_2b").innerHTML = "";
    document.getElementById("avg_2c").innerHTML = "";
    document.getElementById("details").hidden = true;

    const a = parseInt(document.getElementById("firstNumber").value);
    const b = parseInt(document.getElementById("secondNumber").value);
    // console.log(a,b);

    // let startTime = Date.now()
    let startTime = performance.now();
    const individual_array = await getPrimeRange(a, b)
    // let endTime = Date.now()
    let endTime = performance.now();
    // console.log(endTime-startTime);
    // console.log(individual_array);
    let avg_2b = []
    let avg_2c = []
    individual_array.forEach(element => {
        
        document.getElementById("2b-table").innerHTML += "<tr><td>" + element["n"] + "</td><td>" + element["type"] + "</td><td>" + element["time"] + "</td></tr>";
        avg_2b.push(element["time"])

        if(element["type"] == "Prime"){
            document.getElementById("2c-table").innerHTML += "<tr><td>" + element["n"] + "</td><td>" + element["time"] + "</td></tr>";
            avg_2c.push(element["time"])
        }
    });
    const average = list => list.reduce((prev, curr) => prev + curr) / list.length;

    document.getElementById("time_all_instances").innerHTML = "2A : " + (endTime-startTime) + "ms";
    document.getElementById("avg_2b").innerHTML = "Average time for 2B : " + average(avg_2b) + "ms";
    document.getElementById("avg_2c").innerHTML = "Average time for 2C : " + average(avg_2c) + "ms";
    document.getElementById("details").hidden = false;
    document.getElementById("myForm").reset();
}


const getPrimeRange = (a, b) => {
    let individual_array = [];
    for(let i=a; i<=b; i++) {
        let startTime = performance.now();
        // if(i == 1 || i == 0) {
        //     continue;
        // }
        let flag = true;
        for(let j=2; j<=i-1; j++) {
            if(i%j == 0) {
                // console.log(i, j)
                flag = false;
                break;
            }
        }
        // console.log(flag, i)
        let endTime = performance.now();
        individual_array.push({
            n: i,
            type: flag? "Prime": "Natural",
            time: (endTime - startTime)
        })

    }
    // console.log(individual_array);
    return individual_array;
} 

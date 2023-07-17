function odd(input){
    let result = [];

    input.split(" ").forEach(el => {
        el = el.toLowerCase();
        if (!result[el]) {
            result[el] = 0;
        }
        result[el]++;
    });

    let oddResult = {};
    for (let key in result) {
        if (result[key] % 2!== 0) {
            oddResult[key] = result[key];
        }
    }

    let keys = Object.keys(oddResult);
    let output = '';
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        output += `${key} `;
    }
    console.log(output.trim());
    
}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

odd('Cake IS SWEET is Soft CAKE sweet Food')
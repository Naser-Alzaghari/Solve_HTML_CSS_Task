// Q1.1
console.log(1000 / 500 , "Cash flow ratio");

// Q1.2
console.log(1000 - 500, "Net income ");

// Q1.3
console.log(1000 + 500, "Total assets ");

// Q1.4
console.log(1000 * 500, "Net income ");

// Q1.5
console.log((7 + 9 + 2)/3, "Average");

// Q1.6
console.log(150 - (150 * 0.3), "Discount");

// Q1.7
{
    let age = 20;
    age > 18 && age < 30 ? console.log(true, "Age limit") : console.log(false, "Age limit");
}

// Q1.8
console.log(2**3, "Exponential ");

// Q2.1

// ● typeof(100) -> Number
// ● typeof(73.9) -> Number
// ● typeof(NaN) -> Number
// ● typeof("Water") -> String
// ● typeof(false) -> boolean
// ● typeof(9 != 11) -> boolean
// ● "Orang" + "e" -> Orange
// ● "Orange" - "s" -> ERROR
// ● "4" + "8" -> 48
// ● "4" - "8" -> -4
// ● "name" + 3 -> name3
// ● "name" - 3 -> NAN
// ● 82 * "word" -> NAN
// ● 1 + "hello" -> 1hello
// ● "hello" + 1 -> hello1
// ● 1 + true -> 2
// ● "hello" + true -> hellotrue
// ● typeof (Infinity) -> number
// ● 1 == '1' -> true
// ● 1 === '1' -> false


//-----------------------------------------------
// STRINGS


//Q1.1
console.log("Welcome to Orange".toUpperCase());

//Q1.2
console.log("Welcome to Orange".split(" ")[1].toUpperCase());


//Q1.3
console.log("Hello from ","Welcome to Orange".split(" ")[2]);


//Q1.4
console.log("Welcome to Orange".toLocaleLowerCase());


//Q1.5
console.log("Welcome to Orange".length);


//Q1.6
{
    let txt = "Welcome to Orange".split(" ");
    console.log(txt[0] + " " + txt[1] + " \"" + txt[2] + "\"");
}

//Q1.7
console.log("Welcome to Orange","Jordan");

// Q2 
{
    let txt = "cactus";
    console.log((txt[0].concat(txt.slice(1).replace(txt[0],"*"))));
}

// -------------------------------------------------
//Arrays

{
    {
        // Q1.1
        let array = ["Coding", "Academy", "By", "Orange"];
        array.push("Jordan")
        console.log(array)
    }
    {
        // Q1.2
        let array = ["Coding", "Academy", "By", "Orange"];
        console.log(array.slice(0,2))
    }

    {
        // Q1.3
        let array = ["Coding", "Academy", "By", "Orange"];
        array.splice(0, 0, "Welcome", "To")
        console.log(array)
    }
    {
        // Q1.4
        let array = ["Coding", "Academy", "By", "Orange"];
        array.splice(0, 1)
        console.log(array)
    }
    {
        // Q1.5
        let array = ["Coding", "Academy", "By", "Orange"];
        let str ="";
        for (let i=0; i<array.length; i++){
            if(i<array.length-1)
                str+=array[i]+" ";
            else
                str+=array[i];
        }
        console.log("\"",str,"\"");
    }
    {
        // Q1.6
        let array = ["Coding", "Academy", "By", "Orange"];
        console.log(array);
    }
    {
        // Q1.7
        let array = ["Coding", "Academy", "By", "Orange"];
        array.splice(1,2);
        console.log(array);
    }
}

// Q2
{
    let fruit = ["banana", "apple", "orange", "watermelon"];
    let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

    // Q2.a
    fruit.pop();
    console.log(fruit);

    // Q2.b
    fruit.splice(0,1);
    console.log(fruit);

    // Q2.c
    console.log(fruit.findIndex(x => x == "orange"));

    // Q2.d
    fruit.push(fruit.findIndex(x => x == "orange"));
    console.log(fruit);

    // Q2.e
    console.log(vegetables.length)

    // Q2.f
    vegetables.push(vegetables.length);
    console.log(vegetables);

    // Q2.f
    vegetables.push(vegetables.length);
    console.log(vegetables);

    // Q2.g
    let food = fruit.concat(vegetables);
    console.log(food);

    // Q2.h
    food.splice(4,2);
    console.log(food);

    // Q2.i
    food=food.reverse();
    console.log(food);

    // Q3.j
    food=food.toString();
    console.log(food);
    
}


//---------------------------------------------------

// Functions
function func_1 (s){
    return s.toString().split(" ");
}
console.log(func_1("Naser alzaghari"));

function func_2 (s){
    return s.replace(/^\d{7}/, "*******");
}
console.log(func_2("234432234432"));

function func_3 (s){    
    return s.slice(0,3).concat("...").concat(s.slice(s.search('@')));
}
console.log(func_3("naseralzaga@afd.com"));





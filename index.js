// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা(multiplication table) আউটপুট হিসেবে দেখাবে। 

// program to generate a multiplication table

// function multipleTable 

// take input from the user
//creating a multiplication table

function mytable() {
    let table = 13;
    for (let i = 1; i <= 10; i++) {
        let result = table * i;
        console.log(table + ' * ' + i + ' = ' + result);

    }
}

const multipleTable = mytable();

// for loop multipleTable

// let tableNumber = 13;

// for (let x = 1; x <= 10; x++) {
//     for (let i = x; i <= 10; i++) {
//         let result1 = x * i;
//         console.log(result1);
//     }
// }


// for (var x = 1; x <= 10; x++) {
//     for (var i = x; i <= 10; i++) {
//         var result = x * i;
//         console.log(x + ' * ' + i + ' = ' + result);
//     }
// }


// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

// let text = 'Some Text With Farhan sharif'

// function upcase() {

// }
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

function nameIs(n, f) {
    let firstName = n, f;
    let lastName = f

    let fullName = firstName + lastName;
    return fullName;

}

let myName = nameIs('Farhan ', 'Sharif');
console.log(myName);



// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।

// —----------
//     Extra
// —--------------
// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা:

// const pizza = {
//     toppings: ['cheese', 'sauce', 'pepperoni'],
//     crust: 'deep dish',
//     serves: 2
// }
// এবং pepperoni প্রিন্ট করবা।

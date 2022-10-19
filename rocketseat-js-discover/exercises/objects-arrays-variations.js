/* ATTENTION, THE CODES THAT ARE COMMENTED I LEARNED IN THE COURSE, THE RUNNING ONES ARE THE EXPERIMENTS I GOT INTO */

// const student = {
//     name: "Mayk",
//     age: 23,
//     weight: 74.8,
//     isSubscribed: true,
// }

// const john = {
//     name: "John",
//     age: 20,
//     weight: 90.8,
//     isSubscribed: true,
// }

let students = [
    {
    name: "Mayk",
    age: 23,
    weight: 74.8,
    isSubscribed: true,
    },
    {
        name: "John",
        age: 20,
        weight: 90.8,
        isSubscribed: true,
    }
]

// students = [
//     student,
//     john
// ]
console.log(students[0])
console.log(`Welcome to King's County District School! Here we have ${students.length} students aboard!`)
console.log(`the first student's name is ${students[0].name}, his is ${students[0].age}, his weight is precisely ${students[0].weight} and it's actually ${students[0].isSubscribed} that he is subscribed.`)
console.log(`the second student's name is ${students[1].name}, his is ${students[1].age}, his weight is precisely ${students[1].weight} and it's actually ${students[1].isSubscribed} that he is subscribed.`)

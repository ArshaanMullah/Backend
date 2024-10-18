const express = require('express')
const router = express.Router()
const controller = require('../controller/auth-controller')

// router.get("/", (req, res) => {

//     res.send(
//     // console.log(req),
//     // console.log("Showing all Object"),
//     // console.log(res),
//     {
//     name: "Arshaan",
//     Developer: true,
//     Backend: "Developer",
// })
// })
// router.get("/route", (req, res) => {
//     res.send({
//     Id: 100,
//     name: "Arshaan",
//     age: 20,
//     email: "arshaan@gmail.com",
//     isActive: true,
// })
// })
// router.get("/api", (req, res) => {
//     res.send({
//     id: 101,
//     name: "Arshaan",
//     age: 20,
//     email: "arshaan@example.com",
//     isActive: true,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY",
//         postalCode: "10001",
//     },
//     phoneNumbers: [
//     {
//         type: "home",
//         number: "555-555-5555",
//     },
//     {
//         type: "work",
//         number: "555-555-1234",
//     },
//     ],
//     hobbies: ["Coding", "gaming", "traveling"],
//     education: {
//         degree: "Bachelor of Science",
//         major: "Computer Science",
//         graduationYear: 2025,
//     },
//     employment: {
//         company: "Tech Solutions Inc.",
//         position: "Software Developer",
//         yearsExperience: 3,
//     },
//     })
// })

// router.route('/author').get((req , res) =>{
//     res.send({
//         id: 101,
//         name: "Arshaan",
//         age: 20,
//         email: "arshaan@example.com",
//         isActive: true,
//         address: {
//             street: "123 Main St",
//             city: "New York",
//             state: "NY",
//             postalCode: "10001",
//         }
//     })
// })
// router.get('/register',(req , res) =>{
//     res.status(200).send("Welcome to registration page")
// })
// router.route('/twitter').get((req , res) =>{
//     res.send('<h1>Please Login Data</h1>')
// })
// router.post('/contact', (req, res) => {
//     res.send("Post Received")
//     console.log("post data Send to console");
// })
// router.all('/secret', (req, res, next) => {
//     res.send('Display Data')
//     console.log('Accessing the secret section ...')
//     next() // pass control to the next handler
// },(req , res)=>{
//     console.log("This is secret Section")
// })
// module.exports = router;

router.get("/",controller.getHome)
router.get("/Api",controller.getApi)
router.get("/Arshaan",controller.getArshaan)
router.get("/Twitter" ,controller.getTwitter)

console.log(controller); // Check what is being imported

module.exports = router;

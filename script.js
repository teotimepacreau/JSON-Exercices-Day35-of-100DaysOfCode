console.log('connecté')
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/16_Day_JSON/16_day_json.md

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`
// I.1 Change skills array to JSON using JSON.stringify()

const skillsJSON = JSON.stringify(skills, undefined, 4)
console.log(skillsJSON)

// I.2 Stringify the isMarried variable

let isMarriedJSON = JSON.stringify(isMarried)

console.log(isMarriedJSON)


// II.1 Stringify the students object with only firstName, lastName and skills properties

const studentJSON = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(studentJSON)

// III.1 Parse the txt JSON to object.

const txtObject = JSON.parse(txt)
console.log(txtObject)

// III.2 Find the user who has many skills from the variable stored in txt.
let mostSkilledUser = null
for(let person in txtObject){
  if(!mostSkilledUser ||txtObject[person].skills.length > mostSkilledUser.skills.length){
    mostSkilledUser = txtObject[person]
  }
}
console.log(mostSkilledUser)


/**
 * firstName und lastName sind von außen zugänglich, weil sie mit public markiert wurden
 *  middleInitial ist nicht von außen zugänglich, weil es mit private markiert ist
 */
class Student {
    fullName: string
    constructor(public firstName: string, private middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`
}

let user = new Student("Jane", "M.", "User")

document.body.textContent = greeter(user)
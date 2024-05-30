import inquirer from "inquirer";
class Student {
    static counter = 10000;
    id;
    name;
    courses; // Initialize an empty array for courses
    balance;
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 100;
    }
    // Method to enroll a student in a course tabnine: test|explain|document|ask
    enroll_course(course) {
        this.courses.push(course);
    }
    // Method to view a student balance tabnine: test|explain|document|ask
    view_balance() {
        console.log(`Balance for ${this.name} : ${this.balance}`);
    }
    // Method to pay student fees tabnine: test|explain|document|ask
    pay_fees(amount) {
        this.balance -= amount;
        console.log(`$${amount} Fees paid successfully for ${this.name}`);
        console.log(`Remaining Balance : $${this.name} : $${this.balance}`);
    }
    // Method to display student status tabnine|explain|document|ask
    show_satus() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Balance: ${this.balance}`);
    }
}
// Defining a Student_Manger class to mange students
class Student_manger {
    students;
    constructor() {
        this.students = [];
    }
    // Method to add a new student tabnine|explain|document|ask
    add_student(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(`Student: ${name} added successfully. Student ID: ${student.id}`);
    }
    // Method to enroll a student in a course
    enroll_student(student_id, course) {
        let student = this.students.find(std => std.id === student_id);
        if (student) {
            student.enroll_course(course);
            console.log(`${student.name} enrolled in ${course} successfully`);
        }
    }
    // Method to view a student balance tabnine|explain|document|ask
    view_student_balance(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log("Student not found. Please enter a correct student ID");
        }
    }
    // Method to pay student fees tabnine|explain|document|ask
    pay_student_fees(student_id, amount) {
        let student = this.find_student(student_id);
        if (student) {
            student.pay_fees(amount);
        }
        else {
            console.log("Student not found. Please enter a correct student ID");
        }
    }
    // Method to display student status tabnine:test|fix|document|ask
    show_student_status(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.show_satus();
        }
    }
    // Method to find a student by student_id tabnine|explain|document|ask
    find_student(student_id) {
        return this.students.find(std => std.id === student_id);
    }
}
// Main Function to run the program tabnine: test|explain|document|ask
async function main() {
    console.log("Welcome to the Student Mangement System");
    console.log("-".repeat(50));
    let student_manager = new Student_manger();
    // while loop to keep program running
    while (true) {
        let choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option",
                choices: [
                    "Add Student",
                    "Enroll Student",
                    "View Student Balance",
                    "Pay Fees",
                    "Show Status",
                    "Exit"
                ]
            }
        ]);
        // Using switch case to handle user choice
        switch (choice.choice) {
            case "Add Student":
                let name_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "Enter a Student Name",
                    }
                ]);
                student_manager.add_student(name_input.name);
                break;
            case "Enroll Student":
                let course_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID",
                    },
                    {
                        name: "course",
                        type: "input",
                        message: "Enter a Course Name",
                    }
                ]);
                student_manager.enroll_student(course_input.student_id, course_input.course);
                break;
            case "View Student Balance":
                let balance_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID",
                    }
                ]);
                student_manager.view_student_balance(balance_input.student_id);
                break;
            case "Pay Fees":
                let fees_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID",
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to pay"
                    }
                ]);
                student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
                break;
            case "Show Status":
                let status_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID"
                    }
                ]);
                student_manager.show_student_status(status_input.student_id);
                break;
            case "Exit":
                console.log("Exiting...");
                process.exit();
        }
    }
}
// Calling a main Function
main();

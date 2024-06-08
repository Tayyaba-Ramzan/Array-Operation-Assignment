//                    Array Operation Assignment

// Part 1: Basic Arrays - Product Inventory
// Challenge:
// You are tasked with creating a Product Inventory system. Implement functions and logic to
// manage object manipulation effectively.

type Product = {
    name: string;
    price: number;
    inventory: {
        stock: number;
        colorOptions: string[]
    };
}

let products: Product[] = [
    {
        name: "Shirt",
        price: 500,
        inventory: {
            stock: 100,
            colorOptions: ["Red", "Green", "Yellow"]
        }
    },
    {
        name: "Shoes",
        price: 2500,
        inventory: {
            stock: 150,
            colorOptions: ["Black", "Brown", "Blue"]
        }
    },
    {
        name: "Stroller",
        price: 500,
        inventory: {
            stock: 300,
            colorOptions: ["Pink", "Sky Blue", "White"]
        }
    }
]

let changeColor = (product: Product, newColor: string): void => {
    let colorAdjustment: { [key: string]: number } = {
        "red": 1.10,
        "blue": 0.95
    };

    let lowerNewColor = newColor.toLowerCase();

    if (colorAdjustment[lowerNewColor] !== undefined) {
        product.price = product.price * colorAdjustment[lowerNewColor];
    } else {
        console.log(`No price adjustment rule for color: ${newColor}`);
    }

    if (!product.inventory.colorOptions.includes(newColor)) {
        product.inventory.colorOptions.push(newColor);
    }
}
let displayProducts = (products: Product[]): void => {
    for (let product of products) {
        console.log("Product Inventory");
        console.log('='.repeat(30));
        console.log(`Product Name: ${product.name}`);
        console.log(`Product Price: ${product.price.toFixed(2)}`);
        console.log(`Product Stock: ${product.inventory.stock}`);
        console.log(`Available Colors: ${product.inventory.colorOptions.join(', ')}`);
        console.log('='.repeat(30));
    }
}

console.log('Before changing colors:');
displayProducts(products);

changeColor(products[0], "Red");
changeColor(products[1], "Blue");

console.log('After changing colors:');
displayProducts(products);

//                   XXXXXXXXXXXXXXXXXXXXX

// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
// Challenge:
// You are tasked with creating a student grading system. Implement functions and logic to
// manage student grades effectively.

type Student = {
    name: string;
    grades: number[]
}
let students: Student[] = [{
    name: "Tayyaba",
    grades: [86, 90, 94]
},
{
    name: "Areeba",
    grades: [88, 95, 97]
},
{
    name: "Dua",
    grades: [85, 93, 89]
}
]
let calculateAverageGrad = (grades: number[]): number => {
    let totalGrade = grades.reduce((acc, grade) => acc + grade, 0);
    return totalGrade / grades.length;

}
let displayStudentGrade = (students: Student[]): void => {
    for (let student of students) {
        let averageGrade = calculateAverageGrad(student.grades);
        console.log("Student Grade");
        console.log('='.repeat(30));
        console.log(`Student Name: ${student.name}`);
        console.log(`Average Grade: ${averageGrade.toFixed(2)}`);
        console.log('='.repeat(30));

    }

}
displayStudentGrade(students)

//                        XXXXXXXXXXXXXXXXXXXXX

// Part 3: Array with Types and Indexing - Employee Salaries
// Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses.

type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
}

let employees: Employee[] = [
    {
        name: "Amir",
        hoursWorked: 12,
        hourlyRate: 20,
        salary: 0
    },
    {
        name: "Faisal",
        hoursWorked: 8,
        hourlyRate: 18,
        salary: 0
    },
    {
        name: "Hassan",
        hoursWorked: 16,
        hourlyRate: 25,
        salary: 0
    }
];

let calculateSalary = (employee: Employee): void => {
    employee.salary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        employee.salary *= 1.10; 
    }
}

let displayEmployeeSalaries = (employees: Employee[]): void => {
    employees.forEach(employee => {
        calculateSalary(employee);
        console.log("Employee Salary");
        console.log('='.repeat(30));
        console.log(`Employee Name: ${employee.name}`);
        console.log(`Employee Worked: ${employee.hoursWorked}`);
        console.log(`Employee Rate: ${employee.hourlyRate}`);
        console.log(`Employee Salary: ${employee.salary.toFixed(2)}`);
        console.log('='.repeat(30));
    });
}

displayEmployeeSalaries(employees);

//                        XXXXXXXXXXXXXXXXXXXXX

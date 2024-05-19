//                    Array Operation Assignment
// Part 1: Basic Arrays - Product Inventory
// Challenge:
// You are tasked with creating a Product Inventory system. Implement functions and logic to
// manage object manipulation effectively.
var products = [
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
];
var changeColor = function (product, newColor) {
    var colorAdjustment = {
        "red": 1.10,
        "blue": 0.95
    };
    var lowerNewColor = newColor.toLowerCase();
    if (colorAdjustment[lowerNewColor] !== undefined) {
        product.price = product.price * colorAdjustment[lowerNewColor];
    }
    else {
        console.log("No price adjustment rule for color: ".concat(newColor));
    }
    if (!product.inventory.colorOptions.includes(newColor)) {
        product.inventory.colorOptions.push(newColor);
    }
    var displayProducts = function (products) {
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product_1 = products_1[_i];
            console.log("Product Inventory");
            console.log('='.repeat(30));
            console.log("Product Name: ".concat(product_1.name));
            console.log("Product Price: ".concat(product_1.price.toFixed(2)));
            console.log("Product Stock: ".concat(product_1.inventory.stock));
            console.log("Available Colors: ".concat(product_1.inventory.colorOptions.join(', ')));
            console.log('='.repeat(30));
        }
    };
    console.log('Before changing colors:');
    displayProducts(products);
    changeColor(products[0], "Red");
    changeColor(products[1], "Blue");
    console.log('After changing colors:');
    displayProducts(products);

    // Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
    // Challenge:
    // You are tasked with creating a student grading system. Implement functions and logic to
    // manage student grades effectively.
    var students = [{
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
    ];
    var calculateAverageGrad = function (grades) {
        var totalGrade = grades.reduce(function (acc, grade) { return acc + grade; }, 0);
        return totalGrade / grades.length;
    };
    var displayStudentGrade = function (students) {
        for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
            var student = students_1[_i];
            var averageGrade = calculateAverageGrad(student.grades);
            console.log("Student Grade");
            console.log('='.repeat(30));
            console.log("Student Name: ".concat(student.name));
            console.log("Average Grade: ".concat(averageGrade.toFixed(2)));
            console.log('='.repeat(30));
        }
    };
    displayStudentGrade(students);

    // Part 3: Array with Types and Indexing - Employee Salaries
    // Challenge:
    // You are managing employee salaries for a company. Implement logic to calculate salaries and
    // handle bonuses.
    var employees = [
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
    var calculateSalary = function (employee) {
        employee.salary = employee.hoursWorked * employee.hourlyRate;
        if (employee.hoursWorked >= 20) {
            employee.salary *= 1.10;
        }
    };
    var displayEmployeeSalaries = function (employees) {
        employees.forEach(function (employee) {
            calculateSalary(employee);
            console.log("Employee Salary");
            console.log('='.repeat(30));
            console.log("Employee Name: ".concat(employee.name));
            console.log("Employee Worked: ".concat(employee.hoursWorked));
            console.log("Employee Rate: ".concat(employee.hourlyRate));
            console.log("Employee Salary: ".concat(employee.salary.toFixed(2)));
            console.log('='.repeat(30));
        });
    };
    displayEmployeeSalaries(employees);
    //                        XXXXXXXXXXXXXXXXXXXXX
};
//                        XXXXXXXXXXXXXXXXXXXXX

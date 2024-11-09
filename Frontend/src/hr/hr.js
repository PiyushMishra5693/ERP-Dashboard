function calculateAttendance() {
    const employeeId = document.getElementById("employeeId").value;
    if (employeeId) {
        document.getElementById("attendanceResult").innerText = `Attendance for Employee ID: ${employeeId} recorded.`;
    } else {
        document.getElementById("attendanceResult").innerText = "Please enter Employee ID.";
    }
}

function calculateSalaries() {
    const employeeId = document.getElementById("salaryEmployeeId").value;
    const hoursWorked = document.getElementById("hoursWorked").value;
    if (employeeId && hoursWorked) {
        const salary = hoursWorked * 15; // Assuming hourly rate is $15
        document.getElementById("salaryResult").innerText = `Salary for Employee ID: ${employeeId} is $${salary}.`;
    } else {
        document.getElementById("salaryResult").innerText = "Please enter Employee ID and Hours Worked.";
    }
}

function calculateLabourTask() {
    const taskId = document.getElementById("taskId").value;
    const taskHours = document.getElementById("taskHours").value;
    if (taskId && taskHours) {
        const taskCost = taskHours * 20; // Assuming task hourly rate is $20
        document.getElementById("taskResult").innerText = `Task ID: ${taskId} has a cost of $${taskCost}.`;
    } else {
        document.getElementById("taskResult").innerText = "Please enter Task ID and Task Hours.";
    }
}

// Get the current date
let currentDate = new Date();
		
// Set the current year and month
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

// Set the calendar table body
let calendarBody = document.getElementById("calendar-body");

// Function to generate the calendar dates
function generateCalendar() {
    // Clear the calendar table body
    calendarBody.innerHTML = "";
    
    // Set the current month and year in the header
    document.getElementById("current-month").innerHTML = getMonthName(currentMonth) + " " + currentYear;
    
    // Get the number of days in the current month
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Get the index of the first day of the current month
    let firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    
    // Generate the calendar rows and cells
    let row = calendarBody.insertRow();
    let cellIndex = 0;
    for (let i = 1 - firstDayIndex; i <= daysInMonth; i++) {
        if (cellIndex == 7) {
            row = calendarBody.insertRow();
            cellIndex = 0;
        }
        let cell = row.insertCell();
        if (i < 1) {
            cell.classList.add("prev-month");
            cell.innerHTML = new Date(currentYear, currentMonth, i).getDate();
        } else if (i > daysInMonth) {
            cell.classList.add("next-month");
            cell.innerHTML = new Date(currentYear, currentMonth, i).getDate();
        } else {
            cell.innerHTML = i;
            if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
                cell.classList.add("current-month");
    cell.classList.add("current-day");
            } else {
cell.classList.add("day");
}
        }
        cellIndex++;
    }
}

// Function to get the name of the month based on its index
function getMonthName(monthIndex) {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[monthIndex];
}

// Function to switch to the previous month
// Function to switch to the previous month
function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar();
}

// Function to switch to the next month
function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
}


// Generate the initial calendar
generateCalendar();
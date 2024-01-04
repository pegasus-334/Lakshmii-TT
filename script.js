// Sample timetable data
const timetableData = {
    "Monday": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    "Tuesday": ["B", "C", "D", "E", "F", "A", "H", "I", "J", "G"],
    "Wednesday": ["C", "D", "E", "F", "A", "B", "I", "J", "G", "H"],
    "Thursday": ["D", "E", "F", "A", "B", "C", "J", "G", "H", "I"],
    "Friday": ["E", "F", "A", "B", "C", "D", "G", "H", "I", "J"]
};

// Function to populate the timetable
function populateTimetable() {
    const days = Object.keys(timetableData);

    for (let i = 0; i < 9; i++) {
        const timeSlot = document.getElementById(`time${i + 1}`);
        timeSlot.textContent = `${i + 9}:00 AM - ${i + 9}:45 AM`;

        for (const day of days) {
            const cell = document.getElementById(`${day.charAt(0).toLowerCase()}${i + 1}`);
            cell.textContent = timetableData[day][i];
        }
    }
}

// Call the function to populate the timetable
populateTimetable();

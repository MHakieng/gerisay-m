// Pure function to format time units
const formatTimeUnit = (unit) => unit.toString().padStart(2, '0');

// Pure function to format time display
const formatTime = (hours, minutes, seconds) => 
    `${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`;

// Pure function to calculate total seconds
const calculateTotalSeconds = (hours, minutes, seconds) => 
    (hours * 3600) + (minutes * 60) + seconds;

// Pure function 
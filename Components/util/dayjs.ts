import dayjs from 'dayjs';
function getOrdinalSuffix(day: any) {
    if (day > 3 && day < 21) return 'th'; // Covers 11th, 12th, 13th, etc.
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

// Format date with dayjs
function dateDisplay(date: Date) {
    const day = dayjs(date).format('D');  // Get the day without leading zeros
    const monthYear = dayjs(date).format('MMMM YYYY'); // Format month and year
    return `${day}${getOrdinalSuffix(day)} ${monthYear}`;
}

export default dateDisplay

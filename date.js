function getFutureMonthAndYear(monthsToAdd) {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth(); // 0 = January, 11 = December
    let currentYear = currentDate.getFullYear();
  
    currentMonth += monthsToAdd;
    currentYear += Math.floor(currentMonth / 12);
    currentMonth = currentMonth % 12;
    return {
      month: currentMonth + 1,  // Convert from 0-indexed to 1-indexed
      year: currentYear
    };
  }
  const futureDate = getFutureMonthAndYear(63);
export const calculateNewDayOfMonth = (inputDate: string | Date, newDayOfMonth: number): Date => {
    const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;

    const year = date.getFullYear();
    const month = date.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const adjustedNewDayOfMonth = Math.max(1, Math.min(newDayOfMonth, daysInMonth));

    return new Date(year, month, adjustedNewDayOfMonth);
}

export const getDaysInMonth = (inputDate: string | Date): number => {
    const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
    const year = date.getFullYear();
    const month = date.getMonth(); 
    return new Date(year, month + 1, 0).getDate();
}

export const getFirstDayOfMonth = (inputDate: string | Date): number => {
    const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
    const year = date.getFullYear();
    const month = date.getMonth(); 
    const firstDay = new Date(year, month, 1);
    return firstDay.getDay();
}

export const getDateForInput = (inputDate: string | Date): string => {
    const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export const generateDaysArray = (inputDate: string | Date) => {
    const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;
    const dayOfMonth = date.getDate(); 
    const firstDayOfMonth = (getFirstDayOfMonth(date) + 6) % 7; 
    const daysInMonth = getDaysInMonth(date);

    return Array.from({ length: daysInMonth + firstDayOfMonth }, (_, index) => {
        let dayValue = "";
        let cssClass = "";

        if (index <= firstDayOfMonth - 1) {
            dayValue = "";
            cssClass = "blank";
        } else if (index === (dayOfMonth + firstDayOfMonth)) {
            dayValue = String(index - firstDayOfMonth + 1); 
            cssClass = "active";
        } else {
            dayValue = String(index - firstDayOfMonth + 1); 
            cssClass = "clickable";
        }
        return {
            day: index - firstDayOfMonth + 1,
            dayValue,
            cssClass
        };
    });
}

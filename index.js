function calendar(year=null, month=null) {
    let calendar = [];
    let weekInfo = {
        'mon': 0,
        'tue': 1,
        'wed': 2,
        'thu': 3,
        'fri': 4,
        'sat': 5,
        'sun': 6
    }
    const numberOfDay = new Date(year ?? (new Date()).getFullYear(), month ?? (new Date()).getMonth() + 1, 0).getDate()
    const firstDayOfMonthWeek = new Date(year ?? (new Date()).getFullYear(), month === null ? (new Date()).getMonth() : month - 1, 1).toDateString().slice(0, 3).toLowerCase();
    let dayCounter = 1

    while (dayCounter < numberOfDay) {
        for (let i = 0; i <= 5; i++) {
            let week = []
            if (i === 0) {
                for (let j = 0; j <= 6; j++) {
                    if (j >= weekInfo[firstDayOfMonthWeek]) {
                        week.push({
                            id: Math.floor(Math.random() * 10000000000),
                            dayNum: dayCounter,
                            target: true,
                            date: new Date(year ?? (new Date()).getFullYear(), month === null ? (new Date()).getMonth() : month - 1, dayCounter)
                        })
                        dayCounter++
                    } else {
                        week.push(null)
                    }
                }
            } else {
                for (let j = 0; j <= 6; j++) {
                    if (dayCounter > numberOfDay) {
                        week.push(null)
                    } else {
                        week.push({
                            id: Math.floor(Math.random() * 10000000000),
                            dayNum: dayCounter,
                            target: true,
                            date: new Date(year ?? (new Date()).getFullYear(), month === null ? (new Date()).getMonth() : month - 1, dayCounter)
                        })
                        dayCounter++
                    }
                }
            }
            calendar.push(week)
        }
    }

    // post processing
    let numberOfDayPreviousMonth = new Date(year ?? (new Date()).getFullYear(), month === null ? (new Date()).getMonth() : month - 1, 0).getDate()
    for (let i = 6; i >= 0; i--) {
        if (calendar[0][i] === null) {
            calendar[0][i] = {
                id: Math.floor(Math.random() * 10000000000),
                dayNum: numberOfDayPreviousMonth,
                target: false,
                date: new Date(year ?? (new Date()).getFullYear(), month === null ? (new Date()).getMonth() - 1 : month - 2, numberOfDayPreviousMonth)
            }
            numberOfDayPreviousMonth--
        }
    }

    let nextMonthDayCounter = 1
    calendar.forEach(element => {
        element.forEach((day, index) => {
            if (day === null) {
                element[index] = {
                    id: Math.floor(Math.random() * 10000000000),
                    dayNum: nextMonthDayCounter,
                    target: false,
                    date: new Date(year ?? (new Date()).getFullYear(), month === null ? (new Date()).getMonth() + 1 : month, nextMonthDayCounter)
                }
                nextMonthDayCounter++
            }
        })
    });

    return calendar
}



module.exports = calendar;
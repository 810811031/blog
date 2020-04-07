export function getFormatTime(date: Date = new Date) {
    const dateTime = date,
        year = date.getFullYear(),
       month = date.getMonth() + 1,
         day = date.getDate(),
     weekday = getWeekDay(date.getDay()),
        hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
         min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
      second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(),
        text = Number(hour) > 12 ? 'PM' : 'AM'
    return `${ year }年${ month }月${ day }日 星期${ weekday } ${ hour }:${ min }:${ second } ${ text }`
}

function getWeekDay(num: number) {
    let text = ''
    switch(num) {
        case 1:
            text = '一'
        break
        case 2:
            text = '二'
        break
        case 3:
            text = '三'
        break
        case 4:
            text = '四'
        break
        case 5:
            text = '五'
        break
        case 6:
            text = '六'
        break
        case 0:
            text = '日'
        break
    }
    return text
}
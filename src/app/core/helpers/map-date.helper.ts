export function mapDate(date: string): string {
    const months: { [key: string]: string } ={
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec"
    };

    const dateArr: string[] = date.split("-");
    return dateArr[2] + " " + months[`${dateArr[1]}`] + " " + dateArr[0];
}

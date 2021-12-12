function toString( dateNum: number ): string {
    return dateNum.toString().padStart(2, '0')
}

export function isoDateFormat( data: string ): string {
    const inDate = new Date(data)

    const day = inDate.getDate()
    const month = inDate.getMonth() + 1
    const year = inDate.getFullYear()

    return `${ toString(day) }/${ toString(month) }/${ toString(year) }`

}
export function numberFormat( value: number ): string {
    const decimalValue = Number(
        value
            .toString()
            .replace(/(\d{0,2})$/, ".$1")
    )

    return new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    }).format(decimalValue)
}
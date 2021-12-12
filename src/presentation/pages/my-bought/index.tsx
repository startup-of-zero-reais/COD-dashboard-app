import React, { useCallback, useEffect, useMemo, useState } from "react"
import { Typography } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import classNames from "classnames";
import { PageLayout } from "../../components";
import styles from './my-bought.module.scss'
import { isoDateFormat, numberFormat } from "../../../utils";
import { Buys } from "../../../domain/buys";

type MyBoughtProps = {
    loadBuys: Buys.LoadBuys
}

export const MyBought = ( { loadBuys }: MyBoughtProps ) => {
    const [ buys, setBuys ] = useState<Buys.Buy[]>([])
    const parseData = useCallback(isoDateFormat, [])
    const parseValue = useCallback(numberFormat, [])

    const computedBuys = useMemo(() => buys.map(buy => ({
        ...buy,
        created_at: parseData(buy.created_at),
        payment_value: parseValue(buy.payment_value),
        payment_type: `${ buy.payment_method } ${ buy.payment_info }`
    })), [ buys, parseData, parseValue ])

    const total = useMemo(() => {
        return parseValue(
            buys.reduce(( acc, buy ) => {
                return acc + buy.payment_value
            }, 0)
        )
    }, [ buys, parseValue ])

    useEffect(() => {
        loadBuys.load()
            .then(setBuys)
    }, [ loadBuys ])

    return (
        <PageLayout>
            <Typography variant={ 'h5' }>Minhas compras</Typography>

            <div className={ classNames(styles.tableWrapper) }>
                <header className={ classNames(styles.tableColumns) }>
                    <span>Curso</span>
                    <span>Data</span>
                    <span>Preço</span>
                    <span>Tipo de pagamento</span>
                </header>

                { computedBuys.map(buy => (
                    <div key={ buy.transaction_id } className={ classNames(styles.tableColumns) }>
                        <span><FiShoppingCart/> { buy.product.course_label }</span>
                        <span>{ buy.created_at }</span>
                        <span>{ buy.payment_value }</span>
                        <span>{ buy.payment_type }</span>
                    </div>
                )) }

                <footer className={ classNames(styles.tableColumns) }>
                    <span/>
                    <span>Total em compras</span>
                    <span>{ total }</span>
                    <span/>
                </footer>
            </div>
        </PageLayout>
    )
}

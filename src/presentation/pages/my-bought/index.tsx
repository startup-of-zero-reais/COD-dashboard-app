import React, { useCallback, useEffect, useState } from "react"
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

                { buys.map(buy => (
                    <div key={ buy.transaction_id } className={ classNames(styles.tableColumns) }>
                        <span><FiShoppingCart/> { buy.product.course_label }</span>
                        <span>{ parseData(buy.created_at) }</span>
                        <span>{ parseValue(buy.payment_value) }</span>
                        <span>{ buy.payment_method } { buy.payment_info }</span>
                    </div>
                )) }
            </div>
        </PageLayout>
    )
}

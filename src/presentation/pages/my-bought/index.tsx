import React, { useCallback } from "react"
import { Typography } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import classNames from "classnames";
import { PageLayout } from "../../components";
import styles from './my-bought.module.scss'
import { isoDateFormat, numberFormat, randomize } from "../../../utils";

type MyBoughtProps = {}

export const MyBought = ( _a: MyBoughtProps ) => {
    const parseData = useCallback(isoDateFormat, [])
    const parseValue = useCallback(numberFormat, [])

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

                { buysMock.map(buy => (
                    <div className={ classNames(styles.tableColumns) }>
                        <span><FiShoppingCart/> { buy.course }</span>
                        <span>{ parseData(buy.data) }</span>
                        <span>{ parseValue(buy.price) }</span>
                        <span>{ buy.paymentType }</span>
                    </div>
                )) }
            </div>
        </PageLayout>
    )
}

const buysMock = [
    {
        transaction_id: randomize(),
        course: 'Curso 1',
        data: new Date().toISOString(),
        price: 25384,
        paymentType: 'Master Card **** **** **** 1234'
    },
    {
        transaction_id: randomize(),
        course: 'Curso 2',
        data: new Date().toISOString(),
        price: 253842,
        paymentType: 'Master Card **** **** **** 1234'
    },
    {
        transaction_id: randomize(),
        course: 'Curso 3',
        data: new Date().toISOString(),
        price: 2538,
        paymentType: 'Master Card **** **** **** 1234'
    },
    {
        transaction_id: randomize(),
        course: 'Curso 4',
        data: new Date().toISOString(),
        price: 2538499,
        paymentType: 'Master Card **** **** **** 1234'
    },
]
import React, { useCallback } from "react"
import { MyBought } from "../../../presentation/pages";
import { makeLoadBuys } from "../../../data/factories";

export const MakeBought = () => {
    const loadBuys = useCallback(makeLoadBuys, []);

    return <MyBought loadBuys={ loadBuys() }/>
}
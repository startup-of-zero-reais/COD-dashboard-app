import React, { useCallback } from "react"
import { Lesson } from "../../../presentation/pages";
import { makeLoadLesson } from "../../../data/factories";

export const MakeLesson = () => {
    const loadLesson = useCallback(makeLoadLesson, [])

    return <Lesson loadLesson={ loadLesson() }/>
}
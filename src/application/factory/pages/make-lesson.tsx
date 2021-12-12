import React, { useCallback } from "react"
import { Lesson } from "../../../presentation/pages";
import { makeLoadLesson, makeLoadNextLessons } from "../../../data/factories";

export const MakeLesson = () => {
    const loadLesson = useCallback(makeLoadLesson, [])
    const loadNextLessons = useCallback(makeLoadNextLessons, [])

    return <Lesson loadLesson={ loadLesson() } loadNextLessons={ loadNextLessons() }/>
}
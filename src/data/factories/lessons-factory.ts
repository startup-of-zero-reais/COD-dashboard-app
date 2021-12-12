import { LoadLesson, LoadNextLessons } from "../domains";

export function makeLoadLesson() {
    return new LoadLesson()
}

export function makeLoadNextLessons() {
    return new LoadNextLessons()
}
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { SimpleSlider } from "../../components";
import { Modules } from "../../../domain/modules";
import { Sections } from "../../../domain/sections";

type CourseProps = {
    loadModuleSections: Modules.LoadModulesSection;
}

export const Course = ( { loadModuleSections }: CourseProps ) => {
    const { course_id } = useParams<'course_id'>()
    const [ sections, setSections ] = useState<Sections.Section[]>([])

    useEffect(() => {
        if (course_id) {
            loadModuleSections.load(course_id)
                .then(setSections)
        }
    }, [ course_id, loadModuleSections ])

    return (
        <>
            { sections.map(section => (
                <SimpleSlider
                    label={ section.label }
                    items={ [ ...section.lessons ] }
                />
            )) }
        </>
    )
}
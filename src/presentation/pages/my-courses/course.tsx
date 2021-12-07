import React, { useCallback, useEffect, useState } from "react"
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
    const [ showControlsLength, setShowControlsLength ] = useState(5)

    const handleControlsVisibility = useCallback(() => {
        const width = window.innerWidth - 296 // 296 sidebar width
        const childSliderWidth = 296

        const maxItensWithoutControls = Math.floor(width / childSliderWidth)
        setShowControlsLength(maxItensWithoutControls)
    }, [])

    useEffect(() => {
        if (course_id) {
            loadModuleSections.load(course_id)
                .then(setSections)
        }

        handleControlsVisibility()
    }, [ course_id, loadModuleSections, handleControlsVisibility ])

    return (
        <>
            { sections.map(section => (
                <SimpleSlider
                    key={ section.section_id }
                    label={ section.label }
                    items={ [ ...section.lessons ] }
                    withControls={ section.lessons.length > showControlsLength }
                />
            )) }
        </>
    )
}
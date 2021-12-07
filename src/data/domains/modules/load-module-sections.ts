import { Modules, modules_mock } from "../../../domain/modules";
import { Sections } from "../../../domain/sections";

export class LoadModuleSections implements Modules.LoadModulesSection {
    async load( module_id: string ): Promise<Sections.Section[]> {
        const numModules = modules_mock.length

        const randIndex = Math.round(Math.random() * numModules)

        return Promise.resolve(modules_mock[randIndex].sections);
    }
}
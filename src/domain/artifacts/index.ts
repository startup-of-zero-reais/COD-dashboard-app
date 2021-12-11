export namespace Artifacts {

    export type Artifact = {
        artifact_id: string;
        link: string;
        lesson_id: string;
        label: string;
    }

    export interface LoadLessonArtifacts {
        load( lesson_id: string ): Promise<Artifact[]>
    }
}

export const artifacts_mock: Artifacts.Artifact[] = [
    {
        lesson_id: '1',
        artifact_id: '1',
        label: 'Material auxiliar 1',
        link: 'http://link.to/artifact?id=uuid',
    },
    {
        lesson_id: '1',
        artifact_id: '2',
        label: 'Material auxiliar 2',
        link: 'http://link.to/artifact?id=uuid',
    },
    {
        lesson_id: '2',
        artifact_id: '3',
        label: 'Material auxiliar 3',
        link: 'http://link.to/artifact?id=uuid',
    },
    {
        lesson_id: '2',
        artifact_id: '4',
        label: 'Material auxiliar 4',
        link: 'http://link.to/artifact?id=uuid',
    },
    {
        lesson_id: '3',
        artifact_id: '5',
        label: 'Material auxiliar 5',
        link: 'http://link.to/artifact?id=uuid',
    },
    {
        lesson_id: '3',
        artifact_id: '6',
        label: 'Material auxiliar 6',
        link: 'http://link.to/artifact?id=uuid',
    },
    {
        lesson_id: '4',
        artifact_id: '7',
        label: 'Material auxiliar 7',
        link: 'http://link.to/artifact?id=uuid',
    },
    {
        lesson_id: '4',
        artifact_id: '8',
        label: 'Material auxiliar 8',
        link: 'http://link.to/artifact?id=uuid',
    },
    {
        lesson_id: '5',
        artifact_id: '9',
        label: 'Material auxiliar 9',
        link: 'http://link.to/artifact?id=uuid',
    },
    {
        lesson_id: '5',
        artifact_id: '10',
        label: 'Material auxiliar 10',
        link: 'http://link.to/artifact?id=uuid',
    },
    {
        lesson_id: '6',
        artifact_id: '11',
        label: 'Material auxiliar 11',
        link: 'http://link.to/artifact?id=uuid',
    },
    {
        lesson_id: '6',
        artifact_id: '12',
        label: 'Material auxiliar 12',
        link: 'http://link.to/artifact?id=uuid',
    },
];
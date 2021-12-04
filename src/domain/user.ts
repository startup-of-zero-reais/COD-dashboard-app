export namespace User {
    export type Token = string;

    export type Model = {
        id: string;
        name: string;
        lastname: string;
        email: string;
        user_type: 'teacher' | 'student',
        created_at: string;
        updated_at: string;
    }

}
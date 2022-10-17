// environment.d.ts file

export interface IEnvironment {
    DB: {
        MONGODB_HOST: string,
        MONGODB_PORT: number,
        MONGODB_USER: string,
        MONGODB_PASS: string,
        MONGODB_DB: string
    }
}

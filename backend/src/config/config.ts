import { IEnvironment } from "environment.js";

const CONFIG = {
    DB: {
        MONGODB_HOST: "localhost",
        MONGODB_PORT: 27017,
        MONGODB_USER: "root",
        MONGODB_PASS: "root",
        MONGODB_DB: "microservices"
    }
};

export default CONFIG as IEnvironment;
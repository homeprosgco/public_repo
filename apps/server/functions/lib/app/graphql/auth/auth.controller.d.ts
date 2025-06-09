export declare class AuthController {
    registerAuthUser({ email, password }: {
        email: string;
        password: string;
    }): {
        status: string;
        operationType: string;
        operationResult: string;
        statusCode: number;
    };
    signinAuthUser({ email, password }: {
        email: string;
        password: string;
    }): {
        status: string;
        operationType: string;
        operationResult: string;
        statusCode: number;
    };
}

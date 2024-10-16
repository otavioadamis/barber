import axiosInstance from "../AxiosInstance";

export class UserService {
    constructor(http = axiosInstance) {
        this.http = http
    }

    async signup(signupRequest) {
        try {
            const response = await this.http.post('usuario/cadastro', signupRequest);
            return response.data
        } catch (error) {
            console.log("Erro ao cadastrar usuario", error)
            throw error;
        }
    }

    async login(loginRequest) {
        try {
            const response = await this.http.post('usuario/login', loginRequest);
            return response.data;
        } catch (error) {
            console.error("Erro ao fazer login", error);
            throw error;
        }
    }
}
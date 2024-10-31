import axiosInstance from "../AxiosInstance";

export class UserService {
    constructor(http = axiosInstance) {
        this.http = http
    }

    async signup(signupRequest) {
        try {
            const response = await this.http.post('usuario/cadastro', signupRequest);
            return response.data;
        } catch (error) {
            console.log("Erro ao cadastrar usuario", error);
            if (error.response && error.response.status !== 200) {
                throw new Error('Erro de validação: Verifique os dados enviados');
            } else {
                throw new Error('Erro no servidor: Tente novamente mais tarde');
            }
        }
    }

    async login(loginRequest) {
        try {
            const response = await this.http.post('usuario/login', loginRequest);
            return response.data;
        } catch (error) {
            console.error("Erro ao fazer login", error);
            if (error.response && error.response.status !== 200) {
                throw new Error('Email ou senha incorretos');
            } else {
                throw new Error('Erro no servidor: Não foi possível se conectar');
            }
        }
    }
}
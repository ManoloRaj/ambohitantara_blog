import axios from "axios";
import { Backend_url } from "../Backend_url";

const api = axios.create({
    baseURL: Backend_url + `Mode_ticketing_react/Parametrage/`
});

export const Authentication_rest = {

    async connexion(
        email,
        password
    ) {
        try {
            const result = await api.post("connexion/",
                {
                    email,
                    password
                }
            );

            return result.data

        } catch (error) {
            console.log(error)
        }
    },

}
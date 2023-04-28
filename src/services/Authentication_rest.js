import axios from "axios";
import { Backend_url } from "./Backend_url";

const api = axios.create({
    baseURL: Backend_url + `Article_controller_rest/`
});

export const Authentication_rest = {

    async articleList() {
        try {
            const result = await api.get("articleList/");

            return result.data

        } catch (error) {
            console.log(error)
        }
    },

}
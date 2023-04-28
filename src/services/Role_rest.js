import axios from "axios";
import { Backend_url } from "./Backend_url";

const api = axios.create({
    baseURL: Backend_url + `Role_controller_rest/`
});

export const Role_rest = {

    async roleList() {
        try {
            const result = await api.get("roleList/");
            console.log("anaty API", result.data)
            return result.data

        } catch (error) {
            console.log(error)
        }
    },

}

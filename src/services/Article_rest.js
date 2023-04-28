import axios from "axios";
import { Backend_url } from "./Backend_url";

const api = axios.create({
    baseURL: Backend_url + `Article_controller_rest/`
});

export const Article_rest = {

    async articleList() {
        try {
            const result = await api.get("articleList/");

            return result.data

        } catch (error) {
            console.log(error)
        }
    },

    async getOneArticle(id_article) {
        try {
            const result = await api.post("getOneArticle/", {
                id_article: id_article
            });

            return result.data

        } catch (error) {
            console.log(error)
        }
    },
    async setArticle(
        title_article,
        adresse_image_titre,
        description_article,
        content_article,
        reference
    ) {
        try {
            const result = await api.post("setArticle/", {
                title_article: title_article,
                adresse_image_titre: adresse_image_titre,
                description_article: description_article,
                content_article: content_article,
                reference: reference
            });

            return result.data

        } catch (error) {
            console.log(error)
        }
    }



}
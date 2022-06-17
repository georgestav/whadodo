import axios from "axios";

export class AxiosUtils {

    /**
     * postRequest
     */
    public async postRequest (TargetUrl: string, data: Object): Promise< any | undefined > {
        try {
            return axios.post(TargetUrl, data);
        } catch (error) {
            console.error('postRequest', error);
        }
        return undefined
    }
}


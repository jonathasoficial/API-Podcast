import * as http from "http";

import { 
    getFilterEpisodes,
    getListEpisodes 
} from './controllers/podscasts-controller';

import { routes } from "./routes/routes";
import { httpMethod } from "./utils/http-methods";

export const app = async (
    request:http.IncomingMessage,
    response: http.ServerResponse
) => {

const baseUrl = request.url?.split('?')[0]
 
if(request.method === httpMethod.GET && baseUrl === routes.LIST) {
    await getListEpisodes(request, response);
}

if(request.method === httpMethod.GET && baseUrl === routes.EPISODE) {
    await getFilterEpisodes(request, response);
}
}
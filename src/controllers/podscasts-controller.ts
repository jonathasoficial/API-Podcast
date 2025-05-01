import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisodes } from "../services/list_episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { contentType } from "../utils/content-type";
import { PodcastTransformModel } from "../models/podcast-transform-model";

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    const content: PodcastTransformModel =  await serviceListEpisodes();

    res.writeHead(content.statusCode, { "Content-Type": contentType.JSON });
    res.write(JSON.stringify(content.body))

    res.end();
}

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    const content:PodcastTransformModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, { "Content-Type": contentType.JSON });
    res.write(JSON.stringify(content.body))
    res.end();
};
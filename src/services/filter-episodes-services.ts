import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransformModel } from "../models/podcast-transform-model"
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes =  async (
    podcastName: string | undefined
):Promise<PodcastTransformModel> => {

    let responseFormat : PodcastTransformModel = {
        statusCode: 0,
        body: [],
    };
    
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    responseFormat.statusCode = data.length !== 0 ? statusCode.OK : statusCode.NOT_FOUND;

    responseFormat.body = data;

    return responseFormat;
}
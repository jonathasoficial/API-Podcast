import { PodcastTransformModel } from "../models/podcast-transform-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { statusCode } from "../utils/status-code"

export const serviceListEpisodes = async(): Promise<PodcastTransformModel> => {

    let responseFormat: PodcastTransformModel = {
        statusCode: 0,
        body: [],
    }

    const data = await repositoryPodcast()

    responseFormat = {
        statusCode : data.length !== 0 ? statusCode.OK : statusCode.NOT_FOUND,
        body: data
    }

    return responseFormat
}
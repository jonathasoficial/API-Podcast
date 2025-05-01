import { podcastModel } from "./podcast-model";

export interface PodcastTransformModel {
    statusCode: number
    body: podcastModel[]
}
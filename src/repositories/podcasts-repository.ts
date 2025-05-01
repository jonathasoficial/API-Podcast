import fs from 'fs'
import path from 'path'
import { podcastModel } from '../models/podcast-model';

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
    podcastName?: string
): Promise<podcastModel[]> => {
    const linguage = "utf-8"
    
    const rawdata = fs.readFileSync(pathData, linguage)
    let jsonFile = JSON.parse(rawdata)

    if(podcastName) {
       jsonFile = jsonFile.filter(
        (podcast: podcastModel) =>podcast.podcastName === podcastName
        ) 
    }

    return jsonFile; 
} 
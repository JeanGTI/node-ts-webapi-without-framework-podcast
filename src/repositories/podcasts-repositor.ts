import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcasts-model";

const pahtData = path.join(__dirname,"../repositories/podcasts.json")

export const repoPodcast = async (podcastName?:string):Promise<PodcastModel[]> => {
    const lenguage = "utf-8";
    const data = fs.readFileSync(pahtData, lenguage);
    let jsonFile = JSON.parse(data);

    if(podcastName) {
        jsonFile = jsonFile.filter(
            (podcast:PodcastModel) => podcast.podcastName === podcastName
        );
    }

    return jsonFile;
}

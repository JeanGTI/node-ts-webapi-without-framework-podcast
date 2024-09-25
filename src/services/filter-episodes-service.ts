import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcasts-repositor";
import { PodcastTransferModel } from "../models/filter-podcast-model";
import { StatusCode } from "../Utils/status-code";
import { PodcastModel } from "../models/podcasts-model";

export const serviceFilterEpisodes = async (podcastName:string | undefined):Promise<PodcastTransferModel> => {

    //define interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode:0,
        body: []
    };

    //busco dados
    const queryString = podcastName?.split("?p=")[1] ?? ""
    let data = await repoPodcast(queryString);

    //verifico conteudo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.No_Content

    responseFormat.body = data

    return responseFormat;
}
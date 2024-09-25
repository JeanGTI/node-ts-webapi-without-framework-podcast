import { PodcastTransferModel } from "../models/filter-podcast-model";
import { repoPodcast } from "../repositories/podcasts-repositor";
import { StatusCode } from "../Utils/status-code";

export const sevriceListEpsodes = async () :Promise<PodcastTransferModel> => {

    //define interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode:0,
        body: []
    };

    //Busca dados
    const data = await repoPodcast();

    //veriifoca codigo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.No_Content

    responseFormat.body = data
    
    return responseFormat;
}
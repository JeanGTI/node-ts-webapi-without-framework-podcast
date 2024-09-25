import {IncomingMessage, ServerResponse} from 'http';
import { sevriceListEpsodes } from "../services/list-episodes-services"
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../Utils/status-code';
import { ContentType } from '../Utils/content-type';
import { PodcastTransferModel } from '../models/filter-podcast-model';

export const getListEpisodes = async (
    request : IncomingMessage, 
    response : ServerResponse) => {

        const content: PodcastTransferModel = await sevriceListEpsodes();

        response.writeHead(content.statusCode, {"Content-Type": ContentType.JSON });
        response.write(JSON.stringify(content.body));
        response.end();
};

export const getFilterEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse) => {


        const content: PodcastTransferModel = await serviceFilterEpisodes(request.url);

        response.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
        response.write(JSON.stringify(content.body));
        response.end(); 
}
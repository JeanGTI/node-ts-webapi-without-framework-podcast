export enum StatusCode{
    //2x Sucesso
    OK = 200,
    Created = 201,
    Accepted = 202,
    No_Content = 204,

//4X Errp do cliente
    Bad_Request =  400,
    Unauthorized = 401,
    Forbidden = 403,
    Not_Found = 404,
    Method_Not_Allowed = 405,
    Too_Many_Requests = 429
}
export interface IReqres {
    data: data[],
    page: number,
    per_page: number,
    support: support
    total: number,
    total_pages: number,
}

interface data {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}

interface support {
    url: string,
    text: string,
}
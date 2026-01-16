
type funcParams = {
    content: string,
    search: string | null,
    page: string | null,
}

function getUrlForRequest(params: funcParams): string {
    const {content, search, page} = params



    if(content === 'anime') {
        if(search) { // если ищем что-либо
            return `https://api.jikan.moe/v4/anime?q=${search}&rating=pg13&page=${page ? page : 1}`
        } else { // топ 
            return `https://api.jikan.moe/v4/top/anime?rating=pg13&page=${page == undefined ? 1 : page}`
        }
    } else {
        if(search) { // если ищем что-либо
            return `https://api.jikan.moe/v4/manga?q=${search}&sfw=true&page=${page ? page : 1}`
        } else { // топ
            return `https://api.jikan.moe/v4/top/manga?page=${page == undefined ? 1 : page}`
        }
    }
}

export default getUrlForRequest
type funcParams = {
  content: string;
  search: string | null;
  page: string | null;
};

function getUrlForRequest(params: funcParams): string {
  const { content, search, page } = params;
  let baseUrl = 'https://api.jikan.moe/v4/';

  if (content === 'anime') {
    if (search) {
      baseUrl += 'anime';
    } else {
      baseUrl += 'top/anime';
    }
  } else {
    if (search) {
      baseUrl += 'manga';
    } else {
      baseUrl += 'top/manga';
    }
  }

  const url = new URL(baseUrl);
  const searchParams = new URLSearchParams();

  if (search) {
    searchParams.set('q', search);
  }

  if (content === 'anime') {
    searchParams.set('rating', 'pg13');
  } else {
    searchParams.set('sfw', 'true');
  }

  if (page != null) {
    searchParams.set('page', page);
  } else {
    searchParams.set('page', '1');
  }

  url.search = searchParams.toString();

  return url.href;
}

export default getUrlForRequest;

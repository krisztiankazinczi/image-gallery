import HttpResponse from '../interfaces/HttpResponse';

export default async function fetchData<T>(
  request: RequestInfo
): Promise<HttpResponse<T>> {

  // this is the result of the fetch request
  const response: HttpResponse<T> = await fetch(
    request
  );

  try {
    const parsedBody = await response.json();
    // if response does not contains anything, a new Error is thrown
    if (!Object.keys(parsedBody).length) {
      throw new Error(response.statusText);
    }

    response.parsedBody = parsedBody;
  } catch (err) {
    throw new Error(err);
  }
  return response;
}
// HttpResponse is a real Http Response object, but I define one property I will surely use in my app.
// It's just optional parameter, because if we get error from the API, then the code will throw an error
export default interface HttpResponse<T> extends Response {
  parsedBody?: T;
}


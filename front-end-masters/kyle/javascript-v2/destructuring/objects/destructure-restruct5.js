const ajaxOptions = ({
  url = "http://someurl.com",
  method = "post",
  headers = [
        headers0 = "content-type: text/plain",
        ...otherHeaders] = [],
  data = 42,
  callback = () => 2,
} = {}) => {
  return {
    url,
    method,
    headers,
    data,
    callback,
  };
};

console.log(ajaxOptions({
    url: "http://sushiIsMyLife",
    // headers: [
    //     'content-type: text/plain'
    // ]
}));

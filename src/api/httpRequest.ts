type Params = {
  url: string;
  method?: Method;
  queryParams: QueryParams;
  body?: { [key: string]: any };
};

export type QueryParams = { [key: string]: string[] };

export enum Method {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

async function httpRequest(params: Params): Promise<any> {
  const queryString = Object.entries(params.queryParams)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => `${key}=${v}`).join("&");
      } else {
        return `${key}=${value}`;
      }
    })
    .join("&");

  const url = `${params.url}?${queryString}`;

  const response = await fetch(url, {
    method: params.method ? params.method : "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params.body),
  });

  if (!response.ok) {
    console.log(`HTTP ERROR: Status: ${response.status}`);
  }

  return response.json();
}

export default httpRequest;

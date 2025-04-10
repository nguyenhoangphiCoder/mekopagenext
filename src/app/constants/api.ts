function isFormData(obj: any): obj is FormData {
  try {
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    return typeof (obj as FormData).append === "function";
  } catch {
    return false;
  }
}

class APIInstance {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  private apiRequest<T>(
    method: string,
    path: string,
    data?: any,
    options: { headers?: HeadersInit; params?: Record<string, any> } = {}
  ): Promise<T> {
    const headers: HeadersInit = {
      Accept: "application/json",
      ...options.headers,
    };

    const params = options.params || {};
    let api = `${this.url}/${path}`;
    if (Object.keys(params).length) {
      api += "?" + new URLSearchParams(params).toString();
    }

    const requestOptions: RequestInit = {
      method: method.toUpperCase(),
      headers,
      next: { revalidate: 60 } as any, // Custom Next.js option, needs proper typing
    };

    if (isFormData(data)) {
      requestOptions.body = data;
    } else if (data) {
      requestOptions.headers = {
        ...headers,
        "Content-Type": "application/json",
      };
      requestOptions.body = JSON.stringify(data);
    }

    return fetch(api, requestOptions).then(async (response) => {
      let responseData;
      try {
        responseData = await response.json();
      } catch {
        responseData = (await response.body) || null;
      }

      if (response.ok) {
        return responseData as T;
      }

      throw {
        data: responseData,
        header: {
          statusCode: response.status,
          statusText: response.statusText,
        },
      };
    });
  }

  get<T>(
    path: string,
    options: { headers?: HeadersInit; params?: Record<string, any> } = {}
  ): Promise<T> {
    return this.apiRequest<T>("get", path, null, options);
  }

  post<T>(
    path: string,
    data?: any,
    options: { headers?: HeadersInit; params?: Record<string, any> } = {}
  ): Promise<T> {
    return this.apiRequest<T>("post", path, data, options);
  }

  patch<T>(
    path: string,
    data?: any,
    options: { headers?: HeadersInit; params?: Record<string, any> } = {}
  ): Promise<T> {
    const params = options.params || {};
    const headers = options.headers || {};

    if (isFormData(data)) {
      params._method = "patch";
      return this.apiRequest<T>("post", path, data, { params, headers });
    }

    return this.apiRequest<T>("patch", path, data, { params, headers });
  }

  delete<T>(
    path: string,
    options: { headers?: HeadersInit; params?: Record<string, any> } = {}
  ): Promise<T> {
    return this.apiRequest<T>("delete", path, null, options);
  }
}

export const API = new APIInstance(process.env.NEXT_PUBLIC_API || "");
export const CLIENTAPI = new APIInstance("/api");

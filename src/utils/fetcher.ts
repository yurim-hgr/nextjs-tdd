/* eslint-disable @typescript-eslint/no-explicit-any,camelcase */

// import { getAccessToken, getRefreshToken } from '@/service'
// import { globalReturnFetch } from '@/utils/return-fetch'

const globalFetch = globalThis.fetch;

export async function fetcher<T>(
  apiPath: string,
  options?: Omit<RequestInit, "body"> & {
    body?: object;
    withApiUriBase?: boolean;
    isDsApi?: boolean;
  }
): Promise<T> {
  const {
    method = "GET",
    body,
    withApiUriBase = false,
    isDsApi = false,
    headers,
  } = options || {};

  const host = withApiUriBase
    ? `http://211.110.1.76:${isDsApi ? "8666" : "8003"}`
    : "";
  const path = isDsApi ? `/ds-api${apiPath}` : `/api${apiPath}`;

  const request = async () =>
    await fetch(`${host}${path}`, {
      method,
      credentials: "same-origin",
      headers: {
        ...headers,
        ...(body && {
          "Content-Type": "application/json",
        }),
      },
      body: JSON.stringify(body),
    });

  const response = await request();
  if (!response.ok) {
    if (typeof window !== "undefined") {
      if (response.status > 400 && response.status < 500) {
        const oldToken =
          new URLSearchParams(window.location.search).get("s") || "";
        const { access_token: newToken } =
          response.status === 401
            ? await getRefreshToken({
                token: oldToken,
              })
            : await getAccessToken(oldToken);

        globalThis.fetch = globalReturnFetch({
          headers: {
            Authorization: newToken,
          },
          fetch: globalFetch,
        });

        history.pushState(
          null,
          "",
          `${window.location.pathname}?s=${newToken}`
        );
        const retryResponse = await request();
        return retryResponse.json();
      } else if (response.status === 500) {
        window.location.hash = "#token";
      } else {
        window.location.hash = "#error";
      }
    }
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.json();
}


// Files Imports
import * as configure from "@api/configure";
import * as API_000 from "@api/root/api/commerce/create-checkout-session/POST.ts";
import * as API_001 from "@api/root/api/contact/POST.ts";
import * as API_002 from "@api/root/api/health/GET.ts";

// Public RESTful API Methods and Paths
// This section describes the available HTTP methods and their corresponding endpoints (paths).
// POST /api/commerce/create-checkout-session/    api/commerce/create-checkout-session/POST.ts
// POST /api/contact/                             api/contact/POST.ts
// GET  /api/health/                              api/health/GET.ts

const internal  = [
  API_000.default  && { cb: API_000.default , method: "post" , route: "/commerce/create-checkout-session/" , url: "/api/commerce/create-checkout-session/" , source: "api/commerce/create-checkout-session/POST.ts" },
  API_001.default  && { cb: API_001.default , method: "post" , route: "/contact/"                          , url: "/api/contact/"                          , source: "api/contact/POST.ts"                          },
  API_002.default  && { cb: API_002.default , method: "get"  , route: "/health/"                           , url: "/api/health/"                           , source: "api/health/GET.ts"                            }
].filter(it => it);

export const routers = internal.map((it) => {
  const { method, route, url, source } = it;
  return { method, url, route, source };
});

export const endpoints = internal.map(
  (it) => it.method?.toUpperCase() + "\t" + it.url
);

export const applyRouters = (applyRouter) => {
  internal.forEach((it) => {
    it.cb = configure.callbackBefore?.(it.cb, it) || it.cb;
    applyRouter(it);
  });
};


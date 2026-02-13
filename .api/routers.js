
// Files Imports
import * as configure from "@api/configure";
import * as API_000 from "@api/root/src/api/commerce/create-checkout-session/index.ts";
import * as API_001 from "@api/root/src/api/contact/index.ts";
import * as API_002 from "@api/root/src/api/health/index.ts";

// Public RESTful API Methods and Paths
// This section describes the available HTTP methods and their corresponding endpoints (paths).
// USE    /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=default
// USE    /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=AUTH
// USE    /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=CRUD
// USE    /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=USE
// GET    /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=PING
// GET    /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=GET
// POST   /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=POST
// POST   /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=ACTION
// PATCH  /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=PATCH
// PUT    /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=PUT
// DELETE /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=DELETE
// USE    /api/api/commerce/create-checkout-session/    src/api/commerce/create-checkout-session/index.ts?fn=ERROR
// USE    /api/api/contact/                             src/api/contact/index.ts?fn=default
// USE    /api/api/contact/                             src/api/contact/index.ts?fn=AUTH
// USE    /api/api/contact/                             src/api/contact/index.ts?fn=CRUD
// USE    /api/api/contact/                             src/api/contact/index.ts?fn=USE
// GET    /api/api/contact/                             src/api/contact/index.ts?fn=PING
// GET    /api/api/contact/                             src/api/contact/index.ts?fn=GET
// POST   /api/api/contact/                             src/api/contact/index.ts?fn=POST
// POST   /api/api/contact/                             src/api/contact/index.ts?fn=ACTION
// PATCH  /api/api/contact/                             src/api/contact/index.ts?fn=PATCH
// PUT    /api/api/contact/                             src/api/contact/index.ts?fn=PUT
// DELETE /api/api/contact/                             src/api/contact/index.ts?fn=DELETE
// USE    /api/api/contact/                             src/api/contact/index.ts?fn=ERROR
// USE    /api/api/health/                              src/api/health/index.ts?fn=default
// USE    /api/api/health/                              src/api/health/index.ts?fn=AUTH
// USE    /api/api/health/                              src/api/health/index.ts?fn=CRUD
// USE    /api/api/health/                              src/api/health/index.ts?fn=USE
// GET    /api/api/health/                              src/api/health/index.ts?fn=PING
// GET    /api/api/health/                              src/api/health/index.ts?fn=GET
// POST   /api/api/health/                              src/api/health/index.ts?fn=POST
// POST   /api/api/health/                              src/api/health/index.ts?fn=ACTION
// PATCH  /api/api/health/                              src/api/health/index.ts?fn=PATCH
// PUT    /api/api/health/                              src/api/health/index.ts?fn=PUT
// DELETE /api/api/health/                              src/api/health/index.ts?fn=DELETE
// USE    /api/api/health/                              src/api/health/index.ts?fn=ERROR

const internal  = [
  API_000.default  && { cb: API_000.default , method: "use"    , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=default" },
  API_000.AUTH     && { cb: API_000.AUTH    , method: "use"    , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=AUTH"    },
  API_000.CRUD     && { cb: API_000.CRUD    , method: "use"    , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=CRUD"    },
  API_000.USE      && { cb: API_000.USE     , method: "use"    , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=USE"     },
  API_000.PING     && { cb: API_000.PING    , method: "get"    , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=PING"    },
  API_000.GET      && { cb: API_000.GET     , method: "get"    , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=GET"     },
  API_000.POST     && { cb: API_000.POST    , method: "post"   , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=POST"    },
  API_000.ACTION   && { cb: API_000.ACTION  , method: "post"   , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=ACTION"  },
  API_000.PATCH    && { cb: API_000.PATCH   , method: "patch"  , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=PATCH"   },
  API_000.PUT      && { cb: API_000.PUT     , method: "put"    , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=PUT"     },
  API_000.DELETE   && { cb: API_000.DELETE  , method: "delete" , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=DELETE"  },
  API_000.ERROR    && { cb: API_000.ERROR   , method: "use"    , route: "/api/commerce/create-checkout-session/" , url: "/api/api/commerce/create-checkout-session/" , source: "src/api/commerce/create-checkout-session/index.ts?fn=ERROR"   },
  API_001.default  && { cb: API_001.default , method: "use"    , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=default"                          },
  API_001.AUTH     && { cb: API_001.AUTH    , method: "use"    , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=AUTH"                             },
  API_001.CRUD     && { cb: API_001.CRUD    , method: "use"    , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=CRUD"                             },
  API_001.USE      && { cb: API_001.USE     , method: "use"    , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=USE"                              },
  API_001.PING     && { cb: API_001.PING    , method: "get"    , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=PING"                             },
  API_001.GET      && { cb: API_001.GET     , method: "get"    , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=GET"                              },
  API_001.POST     && { cb: API_001.POST    , method: "post"   , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=POST"                             },
  API_001.ACTION   && { cb: API_001.ACTION  , method: "post"   , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=ACTION"                           },
  API_001.PATCH    && { cb: API_001.PATCH   , method: "patch"  , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=PATCH"                            },
  API_001.PUT      && { cb: API_001.PUT     , method: "put"    , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=PUT"                              },
  API_001.DELETE   && { cb: API_001.DELETE  , method: "delete" , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=DELETE"                           },
  API_001.ERROR    && { cb: API_001.ERROR   , method: "use"    , route: "/api/contact/"                          , url: "/api/api/contact/"                          , source: "src/api/contact/index.ts?fn=ERROR"                            },
  API_002.default  && { cb: API_002.default , method: "use"    , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=default"                           },
  API_002.AUTH     && { cb: API_002.AUTH    , method: "use"    , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=AUTH"                              },
  API_002.CRUD     && { cb: API_002.CRUD    , method: "use"    , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=CRUD"                              },
  API_002.USE      && { cb: API_002.USE     , method: "use"    , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=USE"                               },
  API_002.PING     && { cb: API_002.PING    , method: "get"    , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=PING"                              },
  API_002.GET      && { cb: API_002.GET     , method: "get"    , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=GET"                               },
  API_002.POST     && { cb: API_002.POST    , method: "post"   , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=POST"                              },
  API_002.ACTION   && { cb: API_002.ACTION  , method: "post"   , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=ACTION"                            },
  API_002.PATCH    && { cb: API_002.PATCH   , method: "patch"  , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=PATCH"                             },
  API_002.PUT      && { cb: API_002.PUT     , method: "put"    , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=PUT"                               },
  API_002.DELETE   && { cb: API_002.DELETE  , method: "delete" , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=DELETE"                            },
  API_002.ERROR    && { cb: API_002.ERROR   , method: "use"    , route: "/api/health/"                           , url: "/api/api/health/"                           , source: "src/api/health/index.ts?fn=ERROR"                             }
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


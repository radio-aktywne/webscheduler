import { createProxyMiddleware } from "http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const apiUrl =
  process.env.WEBSCHEDULER_EMISCHEDULER_URL || "http://localhost:32000";

const apiOptions = {
  target: apiUrl,
  pathRewrite: {
    ["^/api"]: "",
  },
  changeOrigin: true,
};

export default createProxyMiddleware("/api", apiOptions);

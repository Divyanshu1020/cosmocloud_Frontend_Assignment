import axios from "axios";
import { env } from "./env.config";

const baseUrl = env.baseUrl || "";

export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    projectId: env.projectId,
    environmentId: env.environmentId,
  },
});

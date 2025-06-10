import { json } from "@remix-run/node";

export const badRequest = <T>(data: T, status: number = 200) => json(data, { status });
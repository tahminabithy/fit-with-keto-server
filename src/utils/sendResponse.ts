import { Response } from "express";

type response<T> = {
  status: boolean;
  message: string;
  data: T;
};

export const sendResponse = <T>(res: Response, data: response<T>) => {
  return res.status(201).json({
    status: data.status,
    message: data.message,
    data: data.data,
  });
};

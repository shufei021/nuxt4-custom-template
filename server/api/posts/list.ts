import { list, result } from "../../data";
import { getQuery } from "#imports";

export default defineEventHandler(async (event) => {
  const { page = 1, size = 5 } = getQuery<{
    page?: number;
    size?: number;
  }>(event);

  const offset = (page - 1) * size;
  const limit = size;
  const data = {
    currentPage: Number(page),
    pageSize: Number(size),
    list: list.slice(offset, offset + limit),
    total: list.length,
  };
  return result(data);
});
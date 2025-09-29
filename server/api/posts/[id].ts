import { list,result } from "../../data";

export default defineEventHandler((event) => {
  const { id } = event.context.params || {};
  const post = list.find((item) => item.id === Number(id)) || null;
  return result(post);
});
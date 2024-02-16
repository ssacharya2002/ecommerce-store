import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
export const revalidate = 0;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL,);

  const data = await res.json();
//   console.log(data);

  return data;
};

export default getCategories;

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
export const revalidate = 0;

const geCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);
  

  const data = await res.json();
  

  return data;
}; 

export default geCategory;

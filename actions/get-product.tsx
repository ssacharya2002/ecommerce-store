import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
export const revalidate = 0;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  const data = await res.json();

  return data;
};

export default getProduct;

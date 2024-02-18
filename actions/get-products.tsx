import { Product } from "@/types";
import queryString from "query-string";



const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
export const revalidate = 0;

interface Query{
  categoryId ?:string;
  colorId ?:string;
  sizeId?:string;
  isFeatured?:boolean;
}

const getProducts = async (query:Query): Promise<Product[]> => {

  const url = queryString.stringifyUrl({
    url:URL,
    query:{
      colorId:query.colorId,
      sizeId:query.sizeId,
      categoryId:query.categoryId,
      isFeatured:query.isFeatured,
    }
  })


  const res = await fetch(url,);

  const data = await res.json();
//   console.log(data);

  return data;
};

export default getProducts;

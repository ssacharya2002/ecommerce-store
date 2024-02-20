import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;
export const revalidate = 0;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL,);

  const data = await res.json();
//   console.log(data);

  return data;
};

export default getSizes;

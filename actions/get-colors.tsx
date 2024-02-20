import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
export const revalidate = 0;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL,);

  const data = await res.json();
//   console.log(data);

  return data;
};

export default getColors;

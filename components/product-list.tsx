import { Product } from "@/types";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {

    return(<div>
        <h3 className="font-bold text-3xl">{title}</h3>
        <hr />
    </div>)
};


export default ProductList;
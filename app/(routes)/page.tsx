import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const product = await getProducts({isFeatured:true});

  const billboard = await getBillboard("7f93d3bb-2169-496e-85ce-273c3b6e108a");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured products"  items={[]} />
      </div>
    </Container>
  );
};

export default HomePage;

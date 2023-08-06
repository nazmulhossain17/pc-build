import RootLayout from "@/components/Layouts/RootLayout";
import ProductPage from "./product";


function ProductsPage({allComputer}) {
    return (
        <>
            <p>Product page</p>
            <div className="grid grid-cols-4 gap-3">
            {allComputer?.map((computer) => (
        <ProductPage key={computer.id} computer={computer} />
      ))}
            </div>
            
        </>
    )
}

export default ProductsPage;


  export const getStaticProps = async()=>{

    const res = await fetch("http://localhost:5000/computer");
    const data = await res.json();
    console.log(data)
    return {
      props: {
        allComputer: data,
      }
    }
  }



  ProductsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };

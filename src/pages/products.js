import RootLayout from "@/components/Layouts/RootLayout";


function ProductsPage() {
    return (
        <>
            <p>Product page</p>
        </>
    )
}

export default ProductsPage;


ProductsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
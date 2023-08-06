import Link from "next/link"
import RootLayout from "../components/Layouts/RootLayout"
import ProductsPage from "./products"


export default function HomePage({allComputer}) {
  return (
    <>
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ytimg.com/vi/7SsZ6rgR5Ag/maxresdefault.jpg" className="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Leading Computer, Laptop & Gaming PC Retail & Online Shop</h1>
      <p className="py-6">Technology has become a part of our daily lives, and we depend on tech products daily for a vast portion of our lives. Therefore, we aim to provide a holistic gaming experience with our best gaming PC shop</p>
      <button className="btn btn-primary"><Link href="/products">Get Started</Link></button>
    </div>
  </div>
</div>
    </>
  )
}


HomePage.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}  



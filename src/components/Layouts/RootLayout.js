import Link from "next/link";


function RootLayout({children}) {
    return (
        <>
            <div className="navbar bg-base-300">
  <div className="navbar-start">
    
    <a className="text-bold-300">Technology Builder</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/products">Products</Link></li>
      <li><Link href="/about">About</Link></li> 
      <li><Link href="/contact">Contact</Link></li> 
    </ul>
  </div>
  <div className="navbar-end">
    <Link href="/pcbuild" className="btn btn-outline btn-secondary">Build Pc</Link>
  </div>
</div>
<div className="flex h-screen flex-col">
{children}
</div>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
        </>
    )
}

export default RootLayout;

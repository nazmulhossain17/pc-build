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
<br/>
</div>
<footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </>
    )
}

export default RootLayout;

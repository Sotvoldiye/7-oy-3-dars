import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

function Navbar() {
  const {cart} = useSelector((store)=> store.cart)
  console.log(cart)

  return (
<>
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><Link to="/">Home</Link></li>
      <li>
      <Link to="/about">About</Link>
        </li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li>
      <Link to="/about">About</Link>
      </li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />

  <div className="flex-none " >
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">{cart.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow overflow-y-auto">
        <div className="card-body overflow-y-auto h-60">
          <span className="text-lg font-bold">{cart.length} Items</span>
          <span className="text-info">{cart.map((product)=>{
          return <div key={product.id} className='flex items-center'><img className='w-15' src={product.thumbnail} alt="" />: ${product.price * product.amount }</div>
          })}</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


</>  )
}

export default Navbar
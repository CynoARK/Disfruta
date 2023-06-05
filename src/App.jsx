import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Carrito } from './components/Header';
import { ProductList } from './components/ProductList';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <Router>
      <nav className='container_nav'>
	  <div class="logo">
  <span class="logo-text">D</span>
  <span class="logo-text">i</span>
  <span class="logo-text">s</span>
  <span class="logo-text">f</span>
  <span class="logo-text">r</span>
  <span class="logo-text">u</span>
  <span class="logo-text">t</span>
  <span class="logo-text">a</span>
</div>


        <div className="navbar-brand">

        	<div className="navbar-links">
          <Link to="/">Inicio</Link>
          <Link to="/login">Login</Link>
		  
        	</div>
		</div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Carrito
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />} />
          <Route path="/login" element={<Login />} />
        </Routes>
		<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
      </main>
      <Footer />
    </Router>
  );
}

export default App;


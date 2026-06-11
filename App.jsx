
import './App.css'

function App() {
  

  return (
  <>

  <section style={{textAlign: 'center'}}>
  <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>

  <img height="30" width="120" src="https://zerodha.com/static/images/logo.svg" className="logo" alt="Vite logo"  />
  <nav style={{textAlign: 'right',display: 'flex', gap: '20px'}}>
  <a href="https://zerodha.com/open-account/" >Signup</a>
  <a href="https://zerodha.com/about/">About</a>
  <a href="https://zerodha.com/products/" >Products</a>
  <a href="https://zerodha.com/pricing/" >Pricing</a>
  <a href="https://support.zerodha.com/" >Support</a>
  </nav>
  </header>
<img src="https://zerodha.com/static/images/landing.svg" className="phone" alt="Vite logo" />
<h2> Invest in everything </h2>
<p> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
<button class="btn">Sign up for free</button>

</section>
    
  </> 
  )
}

export default App



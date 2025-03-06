import Form from "./components/Form"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import HeroSection2 from "./components/HeroSection2"
import Product1 from "./components/Product1"
import Product2 from "./components/Product2"
import Product3 from "./components/Product3"
import Header1 from "./components/Header1"
import Product4 from "./components/Product4"
import Product5 from "./components/Product5"
import HeroSection3 from "./components/HeroSection3"
import Product6 from "./components/Product6"
import HeroSection4 from "./components/HeroSection4"
import PaymentSection from "./components/PaymentSection"

function App() {

  return (
    <>
<div className=" top-0  sticky">
<Header/>

</div>

<div className=" top-7  sticky">
<Header1/>

</div>
    <div className="z-20">
    <HeroSection/>

    </div>
<div className="absolute w-full top-[450px]">
<Form/>

</div>

<div className="mt-[190px] sm:mt-[120px]">
<Product1 />

</div>
<div className="mt-14">
<Product2/>

</div>

<div className="mt-7">

  <HeroSection2/>
</div>

<div className="mt-5">
  <Product3/>
</div>


<div>
  <Product4/>
</div>

<div className="mt-4">
  <Product5/>
</div>

<div>
  <HeroSection3/>
</div>

<div className="mt-4">
  <Product6/>
</div>

<div className="mt-4">
  <HeroSection4/>
</div>

<div className="mt-4">
  <PaymentSection/>
</div>
    </>
  )
}

export default App

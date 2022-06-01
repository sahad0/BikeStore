import Foot from "../Components/Footer/Footer";
import Left from "../Components/LeftComponent/Left";
import Navbar from "../Components/Navbar";



export default function Home() {
  return (
    
     <>
        <Navbar />
        <div className="container-fluid">
        <div className="row">


          
            <Left />
         
        </div>

        </div>
        <Foot />
     </>

 
    
  )
}

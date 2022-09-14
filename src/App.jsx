import React from "react";
import { CardDeal, Navbar } from "./components";

const App = () => {
   return (
      <div>
         <div className="bg-primary px-5 h-24  flex justify-center items-center">
            <div className= "text-white container mx-auto">
               <Navbar />
            </div>
         </div>
      </div>
   );
};

export default App;

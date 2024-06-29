export default function MenuItem(){
    return(
        <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl  hover:shadow-black/75 
        transition-all">
            <div clasName="text-center max-h-8">
            <img src="/pizza.png" alt="pizza" className="max-h-auto max-h-24
            block mx-auto"/>
            </div>
        
        <h4 className="font-semibold text-xl my-3"> Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">
        A crispy crust, tangy sauce, 
        and the perfect amount of cheese 
        </p>  
        <button className= "mt-4 bg-primary text-white rounded-full px-8 py-2">
           Add to cart $12
        </button> 
        </div> 
        );
    }
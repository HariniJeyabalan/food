import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeader from "./components/layout/SectionHeader";

export default function Home() {
  return (
    
      <>
      <Header/>
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16">
       <SectionHeader
       subHeader={'Our Story'}
       mainHeader={'About us'}
       />
       <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
       <p >
       At Street Pizza we run our own race; 
       we're uncompromising on our exceptional food
       Street Pizza is the culmination of generations,
       old recipes, 
       dedication, and family values
       </p>
       <p >
       At Wall ST Pizza we use only the freshest ingredients.
        From hand-picked vine-ripened tomatoes,
       locally sourced vegetables, to the best cheeses
       </p>
       </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader
         subHeader={'dont\'t hesitate'}
         mainHeader={'Contact us'}
        />
        <div className="mt-8">
        <a className="text-4xl underline text-gray-500"href="tel:8608274749">
        +860 827 4749
      </a>
      </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500
      mt-16">
        &copy; 2023 All rights reserved
      </footer>
      </>
    
  );
}

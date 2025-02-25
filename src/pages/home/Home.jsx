import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/maiList/MailList";
import Footer from "../../components/footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <Featured/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
     
    </div>
  );
};

export default Home;
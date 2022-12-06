import { Component } from "react";
import Header from "./component/header";
import Header1 from "./component/headertop";
import Popular from "./component/popular";
import Banner from "./component/banner";
import About from "./component/about";
import Menu from "./component/food";
import Meet from "./component/banner4";
import Vedio from "./component/banner5";
import Working from "./component/banner6";
import Booking from "./component/banner7";
import Images from "./component/images";
import Reviews from "./component/banner8";
import Footer from "./component/footer";
class App extends Component{
  render(){
      return(
          <div>
            <Header1/>
              <Header/>
              <Banner/>
              <Popular/>
              <About/>
              <Menu/>
              <Meet/>
              <Vedio/>
              <Working/>
              <Booking/>
              <Reviews/>
              <Images/>
              <Footer/>
          </div>
      )
  }
}
export default App;
import React from "react";
import "./../Home/home.scss";
import Grid from '@mui/material/Grid';
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Home() {
  return (
    <>
      <section>
        <div className="heroSectionMain">
          <div className="heroContent">
            <h1 className="headerTextForHero">Shop With Us</h1>
            <h6 className="headerSixForHero">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam <br />
              assumenda ea quo cupiditate facere deleniti fuga officia.
            </h6>
            <div className="buttonsForHeroSection">
              <button className="heroSectionBtn1">SHOP NOW</button>
              <button className="heroSectionBtn2">CLUB MEMBERSHIP</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="productSectionForData">
          <p className="littleHeaderForProducts">POPULAR PRODUCTS</p>
          <h1 className="headerForProducts">Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae{" "}
            <br />
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut{" "}
            <br />
            consequatur laboriosam ipsam.
          </p>
        
          <Grid container spacing={2}>
        
    
        <Grid item xs={4}>
          <div className="card">
            <div className="imgContainer">
              <img
                src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp"
                alt=""
              />
           
            <div className="headerForCard">
              Wild West Hoodie
            </div>
            <div className="ratingsForProdct">
              <span> <FaStar /> 5.0</span>
              <span><FaHeart /> 29</span>
            </div>
            <div className="descriptionForCard">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
            </div>
            <div className="buttonsForCardProduct">
              <button className="firstBtnForCardProduct">CART</button>
              <button>VIEW</button>
            </div>
          </div>
          </div>
        </Grid>


   
        </Grid>

        </div>
      </section>
    </>
  );
}

export default Home;

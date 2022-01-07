import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className = "home">
            <div className="home__component">
            
            {/* https://c8.alamy.com/comp/J4Y74F/close-up-potter-artist-working-on-clay-pottery-sculpture-fine-art-J4Y74F.jpg */}
                <img 
                className="home__image"
                src="https://c0.wallpaperflare.com/preview/641/379/621/ancient-antique-art-artisan.jpg" alt="" />
            <div className="home__row">
            {/* Craftsman India online Pottery Earthen Kadai/Clay Pots Combo for Cooking Pre-Seasoned */}
            <Product 
                id = "1"
                title = "Craftsman India online Pottery Earthen Kadai/Clay Pots Combo for Cooking"
                price = {1500}
                image = "https://m.media-amazon.com/images/I/81Xp05T6uPL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {2}/>
                {/* ExclusiveLane Studio Pottery Ceramic Home Fragrances Humidifiers Cum Scented Oil Breezy Aroma Diffuser (11.4 x 10.9 x 15 cm) (EL-008-107) */}
                <Product 
                id = "2"
                title = "ExclusiveLane Studio Pottery Ceramic Home Fragrances Humidifiers "
                price = {750}
                image = "https://m.media-amazon.com/images/I/61PR85FZ22L._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {5}/>
                {/* Organic Clay Crafts Earthen Product Clay Cooker with Lid for Curry/Dal/Frying (3 L, Brown) */}
                <Product 
                id = "3"
                title = "Organic Clay Crafts Earthen Product Clay Cooker with Lid"
                price = {500}
                image = "https://m.media-amazon.com/images/I/71afYIqIjBL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {4}/>

            </div>
            <div className="home__row">
                <Product 
                id = "4"
                title = "Craftsman India Online Pottery Earthen Terracotta Handi for Cooking, 2 L (Red)"
                price = {150}
                image = "https://m.media-amazon.com/images/I/81jj+tffRRL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {4}/>
                <Product 
                id = "5"
                title = "LOTUM Pure Ceramic 3D Cut Sunshine Yellow Elegant Pickle Jars (Set of 2) with Unique Lids/Made in India/Excellent"
                price = {400}
                image = "https://m.media-amazon.com/images/I/61zSp47kLFL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {3}/>

            </div>

            <div className="home__row">
            <Product 
                id = "6"
                title = "POTZO Miracle Beer and Milk Mug, Large Tall Size, Pottery Handmade Ceramic Product , 650 ML (1, Black Matt)"
                price = {1350}
                image = "https://m.media-amazon.com/images/I/61Rmo6TPAjL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {4}/>
            </div>
            <div className="home__row">
            <Product 
                id = "7"
                title = "Handmade Irish Coffee & Tea Mugs. Set of Two Hand-Thrown Cups 300ml"
                price = {700}
                image = "https://m.media-amazon.com/images/I/714fA8UP1WL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {4}/>
                <Product 
                id = "8"
                title = "GW Pottery Handmade Stoneware Berry Bowl/Colander, Green-Rust"
                price = {310}
                image = "https://m.media-amazon.com/images/I/81S-YeIpSbL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {5}/>
                <Product 
                id = "9"
                title = "Wine Decanter Hand-Thrown Hand-Glazed in Ireland. Original Design Pottery Carafe 600ml Volume- 8 Inches Height with Celtic Spiral"
                price = {900}
                image = "https://m.media-amazon.com/images/I/31xdozJeAqL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {5}/>
            </div>
            <div className="home__row">
            <Product 
                id = "10"
                title = "The Black Pottery Clay Flower Vase, Flower Pot for Home Decoration (Without Flower)"
                price = {700}
                image = "https://m.media-amazon.com/images/I/21tmIW5Hf2S._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {4}/>
                <Product 
                id = "11"
                title = "CeraSpark vase, 8'' Pottery Type Ceramic vase, Vintage Green Bronze Decorative Small vase"
                price = {310}
                image = "https://m.media-amazon.com/images/I/71Z1e4WCqQS._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {2}/>
                <Product 
                id = "12"
                title = "ExclusiveLane Madhubani & Warli Handpainted Living Room & Bedside Home Decorative Flower Terracotta Vases"
                price = {900}
                image = "https://m.media-amazon.com/images/I/71WsYwYZoLL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {5}/>
            </div>
            <div className="home__row">
            <Product 
                id = "13"
                title = "Indian Blue Art Pottery Ceramic Flower Vase (10 cm x 10 cm x 20 cm, Yellow)"
                price = {599}
                image = "https://m.media-amazon.com/images/I/81J2wzgNksL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {3}/>
                <Product 
                id = "14"
                title = "Om Craft Villa Blue Pottery Ceramic Decorative Wall Hanging Handmade Plate"
                price = {299}
                image = "https://m.media-amazon.com/images/I/71jsOG8G9JL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {3}/>
            </div>
            <div className="home__row">
            <Product 
                id = "15"
                title = "RAJ ROYAL Pottery Hand Paintaed Mughal Ceramic Cornichon Storage Jar for Home (4KG, Blue)"
                price = {849}
                image = "https://m.media-amazon.com/images/I/71VjeMdnsnL._AC_UL480_FMwebp_QL65_.jpg" 
                rating  = {5}/>
            </div>
            </div>
        </div>
    )
}

export default Home;

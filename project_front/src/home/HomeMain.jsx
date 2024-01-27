import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";

const HomeMain = () => {
    return (
        <div>
            {/* <Header /> */}
                
            {/* <!-- breadcrumb start--> */}
    <section className="breadcrumb breadcrumb_bg" style={{backgroundSize: "300px"}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="breadcrumb_iner">
                        <div className="breadcrumb_iner_item">
                            <h2>B-MIC Home</h2>
                            <p>Home <span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- breadcrumb start--> */}
            <Home />
            <Footer />
        </div>
    )
}
export default HomeMain
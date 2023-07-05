import Blogs from "../Blogs/Blogs";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import Slider from "../Slider/Slider";

function Main() {
    return (
        <main>
            <Blogs blog1={blog1} blog2={blog2}/>
            <Slider/>
            <Blogs blog1={blog3} blog2={blog4}/>
        </main>
    );
}

export default Main;
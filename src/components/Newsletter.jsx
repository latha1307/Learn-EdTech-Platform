import Banner from '../shared/Banner'
import BannerImg from '../assets/about.png'

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            <Banner banner={BannerImg} heading="Each student an share their discount code for friends" subheading="A simple paragraph is comprised of three major components. Which is often a declarative sentence." btn1={"I have a code"} btn2={""}/>
        </div>
    );
};

export default Newsletter;
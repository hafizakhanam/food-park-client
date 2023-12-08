import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredImg from "../../../assets/home/featured.jpg";

import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item pt-8 my-20 bg-fixed text-white">
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionTitle>

            <div className="md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredImg} />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2025</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ut laborum rem fuga sed, esse natus nam, aliquid tempora consectetur ex alias consequatur, laboriosam nihil est nemo aliquam assumenda quo illum odit iure quas quidem. Vel delectus facilis labore modi ut, harum sit repudiandae, accusamus deserunt fugiat mollitia accusantium neque.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
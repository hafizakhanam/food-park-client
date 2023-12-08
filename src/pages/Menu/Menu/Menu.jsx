import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBg from '../../../assets/menu/banner3.jpg';
import dessertBg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaBg from '../../../assets/menu/pizza-bg.jpg';
import saladBg from '../../../assets/menu/salad-bg.jpg';
import soupBg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Food Park | Menu</title>
            </Helmet>
            <Cover bgImg={menuBg} title="Our Menu"></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title={"dessert"} coverImg={dessertBg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaBg}></MenuCategory>
            <MenuCategory items={salad} title={"salads"} coverImg={saladBg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} coverImg={soupBg}></MenuCategory>
        </div>
    );
};

export default Menu;
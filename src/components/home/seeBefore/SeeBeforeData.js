import diningVideo from '../../../assets/home/home-seebefore/videos/SolidRoots_dining_table_commercial_6ec0546e.mp4';
import bedVideo from '../../../assets/home/home-seebefore/videos/Woman_demonstrates_wooden_storag…_85a27e27.mp4';
import swingVideo from '../../../assets/home/home-seebefore/videos/Woman_demonstrates_wooden_swing_6bba6670.mp4';
import sofaVideo from '../../../assets/home/home-seebefore/videos/Woman_demonstrates_sofa_comfort_a34382cd.mp4';
import chairVideo from '../../../assets/home/home-seebefore/videos/Wooden_chair_furniture_commercial_47acdea9.mp4';
import coffeeTableVideo from '../../../assets/home/home-seebefore/videos/Coffee_table_commercial_footage_3e460132.mp4';
import wardrobeVideo from '../../../assets/home/home-seebefore/videos/Wardrobe_product_commercial_8086dadb.mp4';
import drawerVideo from '../../../assets/home/home-seebefore/videos/Hand_opening_wooden_drawer_61bfa7e5.mp4';

import diningImage from '../../../assets/home/home-seebefore/images/dining.png';
import bedImage from '../../../assets/home/home-seebefore/images/bed.png';
import swingImage from '../../../assets/home/home-seebefore/images/swing.png';
import drawerImage from '../../../assets/home/home-seebefore/images/drawer.png';
import coffeetableImage from '../../../assets/home/home-seebefore/images/coffetable.png';
import wardrobeImage from '../../../assets/home/home-seebefore/images/wardrobe.png';
import chairImage from '../../../assets/home/home-seebefore/images/chair.png';
import sofaImage from '../../../assets/home/home-seebefore/images/sofa.png';

const seeBeforeProducts = [
    {
        id: 1,
        name: 'Shriyam Modern 6 Seater Sheesham Wood Dining Set',
        price: 158499,
        originalPrice: 249999,
        video: diningVideo,
        image: diningImage,
        link: '/products/dining'
    },
    {
        id: 2,
        name: 'Lotus Premium Sheesham Wood Bed',
        price: 58999,
        originalPrice: 89999,
        video: bedVideo,
        image: bedImage,
        link: '/products/bed'
    },
    {
        id: 3,
        name: 'Shashwat 2 Seater Sheesham Wood Swing',
        price: 42999,
        originalPrice: 69999,
        video: swingVideo,
        image: swingImage,
        link: '/products/swing'
    },
    {
        id: 4,
        name: 'Albus L-Shape 5 Seater Right Aligned drawer',
        price: 74999,
        originalPrice: 119999,
        video: drawerVideo,
        image: drawerImage,
        link: '/products/drawer'
    },
    {
        id: 5,
        name: 'Eldric 3 Seater Premium Fabric coffe table',
        price: 12999,
        originalPrice: 24999,
        video: coffeeTableVideo,
        image: coffeetableImage,
        link: '/products/coffeetable'
    },
    {
        id: 6,
        name: 'Eldric 3 Seater Premium Fabric wardrobe',
        price: 22999,
        originalPrice: 24999,
        video: wardrobeVideo,
        image: wardrobeImage,
        link: '/products/wardrobe'
    },
    {
        id: 7,
        name: 'Eldric 3 Seater Premium Fabric char',
        price: 42999,
        originalPrice: 44999,
        video: chairVideo,
        image: chairImage,
        link: '/products/chair'
    },
    {
        id: 8,
        name: 'Eldric 3 Seater Premium Fabric Sofa',
        price: 21999,
        originalPrice: 34999,
        video: sofaVideo,
        image: sofaImage,
        link: '/products/sofa'
    }
];

export default seeBeforeProducts;

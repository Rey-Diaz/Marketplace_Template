
import Slider from 'react-slick';
import styles from './Home.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div>
            <h1>Welcome to My Online Store</h1>
            
            <div className={styles.section}>
                <h2 className={styles.sectionHeader}>Featured Items</h2>
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        <div><h3>Featured Item 1</h3></div>
                        <div><h3>Featured Item 2</h3></div>
                        <div><h3>Featured Item 3</h3></div>
                        {/* Add more featured items here */}
                    </Slider>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionHeader}>Categories</h2>

                <div className={styles.categorySection}>

                    <div className={styles.categoryItem}>
                        <h3>Category 1</h3>
                        <div className={styles.subCategory}>
                            <div className={styles.subCategoryItem}>Item 1.1</div>
                            <div className={styles.subCategoryItem}>Item 1.2</div>
                            <div className={styles.subCategoryItem}>Item 1.3</div>
                        </div>
                    </div>

                    <div className={styles.categoryItem}>
                        <h3>Category 2</h3>
                        <div className={styles.subCategory}>
                            <div className={styles.subCategoryItem}>Item 2.1</div>
                            <div className={styles.subCategoryItem}>Item 2.2</div>
                            <div className={styles.subCategoryItem}>Item 2.3</div>
                        </div>
                    </div>
                    
                    <div className={styles.categoryItem}>
                        <h3>Category 3</h3>
                        <div className={styles.subCategory}>
                            <div className={styles.subCategoryItem}>Item 3.1</div>
                            <div className={styles.subCategoryItem}>Item 3.2</div>
                            <div className={styles.subCategoryItem}>Item 3.3</div>
                        </div>
                    </div>
                    {/* Repeat for Category 2 and 3 with their respective items */}
                </div>
            </div>
        </div>
    );
};

export default Home;

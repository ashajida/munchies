import { Category, CategoriesContainer, CategoriesSection, TitleWrapper, Title, ImageWrapper, Image, CategoriesWrapper } from "./Categeries.elements";
import image from '../../../assets/images/breakfast.jpg';

const Categories = ({ categoriesObj }) => {
    return(
        <CategoriesSection>
            <CategoriesContainer>
                <CategoriesWrapper>
                    {
                        categoriesObj.map((category) => {
                            return(
                                <Category isBig={category.isBig ? true : false}>
                                    <ImageWrapper>
                                        <Image src={`/uploads/${category.image}`} />
                                    </ImageWrapper>
                                    <TitleWrapper>
                                     <Title>{category.name}</Title>
                                    </TitleWrapper>
                                </Category> 
                            );
                        })
                    }
                </CategoriesWrapper>
            </CategoriesContainer>
        </CategoriesSection>
    );
}
export default Categories;
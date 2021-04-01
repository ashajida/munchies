import { Fragment, useContext } from "react";
import { PostSection, Wrapper, PostContainer, PostWrapper, Heading, ImageWrapper, Content,  Image, Text, Date  } from "./Post.elements";
import image from '../../assets/images/baking.jpg';
import RecipesContext from "../../providers/RecipesContext";

const Post = ({recipeObj}) => {
    
    return (
        <Fragment>
            <PostSection>
                <PostContainer>
                    <Wrapper>
                        <PostWrapper>
                            <ImageWrapper>
                                <Image src={`/uploads/${recipeObj.image}`} />
                            </ImageWrapper>
                            <Content>
                                <Heading>{recipeObj.title}</Heading>
                                <Text>{recipeObj.body}</Text>
                            </Content>
                        </PostWrapper>
                    </Wrapper>
                </PostContainer>
            </PostSection>
        </Fragment>
    );
}

export default Post;
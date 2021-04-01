import { Fragment } from "react";
import Post  from "../Post";
import { PostsSection, PostsContainer , PostsWrapper, Heading, Wrapper} from "./Posts.elements";
import Recipes from "../../pages/Recipes";


const Posts = ({ recipes }) => {


    return (
        <Fragment>
            <PostsSection>
                <PostsContainer>
                    <Wrapper>
                        <Heading>All Recipe</Heading>
                        <PostsWrapper>
                            {
                                recipes.map(recipe => {
                                    return(
                                        <Post recipeObj={recipe}/>
                                    )
                                })
                            }
                        </PostsWrapper>
                    </Wrapper>
                </PostsContainer>
            </PostsSection>
        </Fragment>
    );
}

export default Posts;
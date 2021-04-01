import { Fragment } from "react";
import { Table, Row, THeading, Data, TBody , THead, ButtonLink} from "./Dashboard.elements";

const RecipeTable = ({recipes}) => {
    console.log(recipes);
    return(
        <Fragment>
            <Table>
                <THead>
                    <Row>
                        <THeading>#</THeading>
                        <THeading>Title</THeading>
                        <THeading>Image</THeading>
                        <THeading>Content</THeading>
                        <THeading>Date</THeading>
                        <THeading>Modify</THeading>
                    </Row>
                </THead>
                <TBody>
                  
                        {
                            recipes.map(recipe => {
                                const date = new Date(recipe.createdAt);
                                return(
                                    <Fragment>
                                        <Row>
                                            <Data>{recipe.id}</Data>
                                            <Data>{recipe.title}</Data>
                                            <Data><img src={`/uploads/${recipe.image}`} /></Data>
                                            <Data>{recipe.body}</Data>
                                            <Data>{date.getDate() + '/' + date.getMonth() + '/' + date.getUTCFullYear()}</Data>
                                            <Data>
                                                <ButtonLink to={`/recipes/${recipe.id}/edit`}>Edit</ButtonLink>
                                                <ButtonLink to={`/recipes/${recipe.id}/delete`} red>Delete</ButtonLink>
                                            </Data>
                                        </Row>
                                    </Fragment>
                                )
                            })
                        }
                </TBody>
            </Table>
        </Fragment>
    );
}

export default RecipeTable;
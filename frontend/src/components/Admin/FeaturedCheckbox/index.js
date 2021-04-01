import { Fragment, useState } from "react"
import { FeaturedHeading, Input, Label, FeaturedWrapper } from "./FeaturedCheckbox.elements";

const FeaturedCheckbox = ({ handleFeatured, value }) => {

    return(
        <Fragment>
            <FeaturedHeading>is Featured?</FeaturedHeading>
            <FeaturedWrapper for="featured"  isActive={value ? true : false}>
                <Input name="featured" type='checkbox' id="featured" featured value={value} />
                <Label onClick={handleFeatured} isActive={value ? true : false}></Label>
            </FeaturedWrapper>
        </Fragment>
    );
}

export default FeaturedCheckbox;
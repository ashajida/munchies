import { 
    Section,
    Wrapper,
    Heading,
    Form,
    AddFormContainer as Container,
    InputWrapper, 
    Input,
    FileInput,
    Textarea,
    FormButton as Button,
    FileLabel
} from "./Category.elements";
import { Fragment, useState } from "react";
import { FaUpload } from "react-icons/fa";

const CategoryForm = () => {

    const [image, setImage] = useState();
    const [name, setTitle] = useState();

    const handleFileChange = (e) => {
       setImage(e.target.files[0]);
    }

    const handleName = (e) => {
        setTitle(e.target.value);
     }

    const submit = (e) => {

        e.preventDefault();
        

       const formData = new FormData();
       formData.append('file', image);
       formData.append('name', name);

        const token = localStorage.getItem('accessToken');

        fetch('/api/categories', { 
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${JSON.parse(token)}`,
            }
        })
        .then(response => response.json())
        .then(response => console.log(response));

    }

    return (
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Add New Category</Heading>
                        <Form encType='multipart/form-data' onSubmit={submit} id="addRecipe">
                            <InputWrapper>
                                <FileLabel for="file">
                                    <FaUpload />
                                    <FileInput type="file" accept="image/*" id="file" onChange={handleFileChange}/>
                                </FileLabel>
                            </InputWrapper>
                            <InputWrapper>
                                <Input type="text" placeholder="Name" onChange={handleName} value={name} />
                            </InputWrapper>
                            <InputWrapper>
                                <Button type="submit" form="addRecipe">Submit</Button>
                            </InputWrapper>
                        </Form>
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );
}


export default CategoryForm;
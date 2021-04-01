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
    AddFormButton as Button,
    FileLabel,
    Select,
    Option,
    Label,
    FeaturedWrapper,
    FeaturedHeading
} from "./AddRecipe.elements";
import { Fragment, useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";
import Categories from "../../Home/Categories";
import FeaturedCheckbox from "../FeaturedCheckbox";

const AddRecipeForm = () => {

    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [featured, setFeatured] = useState(0);
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/categories')
        .then((res) => res.json())
        .then(res => {
            setCategories(res);
        });
    }, [])

    const handleFileChange = (e) => {
       setImage(e.target.files[0]);
    }

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
     }

     const handleContent = (e) => {
        setContent(e.target.value);
     }

     const handleFeatured = () => {
         setFeatured(!featured);
         console.log('hello');
     }

    const submit = (e) => {

        e.preventDefault();
        

       const formData = new FormData();
       formData.append('file', image);
       formData.append('title', title);
       formData.append('category', category);
       formData.append('content', content);
       formData.append('featured', featured)

        const token = localStorage.getItem('accessToken');

        fetch('/api/recipes', { 
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
                        <Heading>Add New Recipe</Heading>
                        <Form encType='multipart/form-data' onSubmit={submit} id="addRecipe">
                            <InputWrapper>
                                <FileLabel for="file">
                                    <FaUpload />
                                    <FileInput type="file" accept="image/*" id="file" onChange={handleFileChange}/>
                                </FileLabel>
                            </InputWrapper>
                            <InputWrapper featured>
                                 <FeaturedCheckbox value={ featured } handleFeatured={ handleFeatured }/>
                            </InputWrapper>
                            <InputWrapper>
                                <Input type="text" placeholder="Title" onChange={handleTitle} value={title} />
                            </InputWrapper>
                            <InputWrapper>
                                <Textarea placeholder="Content" onChange={handleContent} value={content} />
                            </InputWrapper>
                            <InputWrapper>
                                <Select value={category} onChange={handleCategory}>
                                    {
                                        categories.map(category => {
                                            return(
                                                <Option value={category.id}>
                                                   { category.name }
                                                </Option>
                                            )
                                        })
                                    }
                                </Select>
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


export default AddRecipeForm;
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
    Option
} from "./EditRecipe.elements";
import { Fragment, useState, useEffect, useContext } from "react";
import { FaUpload } from "react-icons/fa";
import CategoriesContext from "../../../providers/CategoriesContext";
import FeaturedCheckbox from "../FeaturedCheckbox";

const Edit = ({ id  }) => {

     const [image, setImage] = useState('');
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState('');
    const [featured, setFeatured] = useState(0);

    // const [ recipe, setRecipe ] = useState(RecipesContext);
    const { categories, setCategories } = useContext(CategoriesContext);

    useEffect(() => {

        const cachedCategories = localStorage.getItem('categories') && localStorage.getItem('categories');

    
    fetch(`/api/recipes/${id}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        setTitle(res.title);
        setContent(res.body);
        setCategory(res.categoryId);
        setFeatured(res.featured);
        console.log(res.featured);
    });
         
       
        if(cachedCategories == null) {
          fetch('/api/categories')
          .then((res) => res.json())
          .then(res => {
              setCategories(res);
              localStorage.setItem('categories', JSON.stringify(res));
          });
        }
       
    },[]);

    const handleFileChange = (e) => {
       setImage(e.target.files[0]);
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
     }

     const handleContent = (e) => {
        setContent(e.target.value);
     }

     const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleFeatured = () => {
        setFeatured(!featured);
        console.log(featured)
    }

    const submit = (e) => {

       e.preventDefault();
    
       const formData = new FormData();
       formData.append('title', title);
       formData.append('content', content);
       formData.append('categoryId', category);
       formData.append('featured', featured)

       if(e.target.file.files.length > 0) {
            formData.append('file', image);
       }

        fetch(`/api/recipes/${id}/edit`, { 
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(response => {
            setMessage('Successful')
        });

    }

    return (
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Edit Recipe</Heading>
                        {message && message}
                        <Form encType='multipart/form-data' onSubmit={submit} id="addRecipe">
                            <InputWrapper>
                                <FileLabel for="file">
                                    <FaUpload />
                                    <FileInput name="file" type="file" accept="image/*" id="file" onChange={handleFileChange}/>
                                </FileLabel>
                            </InputWrapper>
                            <InputWrapper>
                                <FeaturedCheckbox value={ featured } handleFeatured={ handleFeatured } />
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


export default Edit;
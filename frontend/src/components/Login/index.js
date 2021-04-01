import { 
    Section,
    Wrapper,
    Heading,
    Form,
    FormContainer as Container,
    InputWrapper, 
    Input,
    SubmitButton as Button,
} from "./Login.elements";
import { Fragment, useState, useContext, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import AuthContext from "../../providers/AuthContext";

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')

    const { isAuth, setIsAuth } = useContext(AuthContext);

    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
       
        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify({
                password,
                email,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            history.push('/dashboard');
        });
    }

    return (
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Login</Heading>
                        {message && message}
                        <Form onSubmit={submit}>
                        <InputWrapper>
                                <Input 
                                name="email" 
                                onChange={handleEmail} 
                                type="email" 
                                placeholder="Email" 
                                value={email} />
                            </InputWrapper>
                            <InputWrapper>
                                <Input 
                                name="password"
                                onChange={handlePassword}
                                type="password" 
                                placeholder="Password" 
                                value={password} />
                            </InputWrapper>
                            <InputWrapper>
                                <Button>Submit</Button>
                            </InputWrapper>
                        </Form>
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );
}


export default LoginForm;
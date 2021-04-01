import { 
    Section,
    Wrapper,
    Heading,
    Form,
    FormContainer as Container,
    InputWrapper, 
    Input,
    SubmitButton as Button,
} from "./Register.elements";
import { Fragment, useState } from "react";

const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        
        fetch('/api/register', {
            method: 'post',
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => console.log(res));
    }

    return (
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Register</Heading>
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
                                name="username" 
                                onChange={handleUsername} 
                                type="text" 
                                placeholder="Username" 
                                value={username} />
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
                                <Button type="submit">Submit</Button>
                            </InputWrapper>
                        </Form>
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );
}


export default RegisterForm;
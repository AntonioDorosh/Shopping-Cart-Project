import React, {useState} from 'react';
import {
    HomeButton,
    ValidationButton,
    ValidationForm,
    ValidationInput,
    ValidationStyled,
    ValidationWrapper
} from "./styles/Validation.styled.tsx";
import {AiOutlineHome} from "react-icons/ai";
import {Link} from "react-router-dom";

interface IValidation {
    firstName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}


const Validation: React.FC<IValidation> = () => {

    const [formData, setFormData] = useState<IValidation>({
        firstName: '',
        email: '',
        password: '',
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (name === 'firstName') {
            if (value.length > 10) return;
        }
        if (name === 'password') {
            if (value.length > 20) return;
        }
        setFormData(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <ValidationStyled>
            <ValidationForm onSubmit={handleSubmit}>
                <ValidationWrapper>
                    <Link to='/'>
                        <HomeButton><AiOutlineHome/></HomeButton>
                    </Link>
                    <ValidationInput type="text" name="firstName"
                                     placeholder="Name"
                                     value={formData.firstName}
                                     onChange={handleChange}/>
                    <ValidationInput type="text" name="email"
                                     placeholder="Email" value={formData.email}
                                     onChange={handleChange}/>
                    <ValidationInput type="text" name="password"
                                     placeholder="Password"
                                     value={formData.password}
                                     onChange={handleChange}/>
                    <ValidationButton type="submit">Submit</ValidationButton>
                </ValidationWrapper>
            </ValidationForm>
        </ValidationStyled>
    );
};

export default Validation;
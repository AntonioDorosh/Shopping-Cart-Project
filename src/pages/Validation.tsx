import React from 'react';
import {
    HomeButton,
    ValidationButton, ValidationForm,
    ValidationInput,
    ValidationStyled,
    ValidationWrapper
} from "./styles/Validation.styled.tsx";
import {AiOutlineHome} from "react-icons/ai";
import {Link} from "react-router-dom";

const Validation = () => {
    return (
        <ValidationStyled>
            <ValidationForm>
                <ValidationWrapper>
                    <Link to='/'>
                        <HomeButton><AiOutlineHome/></HomeButton>
                    </Link>
                    <ValidationInput type="text" name="name"
                                     placeholder="Name"/>
                    <ValidationInput type="text" name="email"
                                     placeholder="Email"/>
                    <ValidationInput type="text" name="password"
                                     placeholder="Password"/>
                    <ValidationButton type="submit">Submit</ValidationButton>
                </ValidationWrapper>
            </ValidationForm>
        </ValidationStyled>
    );
};

export default Validation;
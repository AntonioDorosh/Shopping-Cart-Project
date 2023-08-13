import React from 'react';
import {
    HomeButton,
    ValidationButton,
    ValidationForm,
    ValidationInput,
    ValidationStyled,
    ValidationWrapper
} from "./styles/Validation.styled.tsx";
import {AiOutlineHome} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from 'yup';

interface FormikValues {
    firstName: string;
    email: string;
    password: string;
}

const Validation = () => {

    const navigate = useNavigate();

    const formik = useFormik<FormikValues>({
        initialValues: {
            firstName: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Must be 6 characters or more').required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            navigate('/');
        }
    });

    return (
        <ValidationStyled>
            <ValidationForm onSubmit={formik.handleSubmit}>
                <ValidationWrapper>
                    <Link to='/'>
                        <HomeButton><AiOutlineHome/></HomeButton>
                    </Link>
                    <label htmlFor="firstName">
                        {formik.errors.firstName ? <span
                            style={{color: 'red'}}>{formik.errors.firstName}</span> : 'Name'}
                    </label>
                    <ValidationInput border={formik.errors && '1px solid red'}
                                     type="text" name="firstName"
                                     placeholder={'Name'}
                                     value={formik.values.firstName}
                                     onChange={formik.handleChange}/>
                    <label htmlFor="email">
                        {formik.errors.email ? <span
                            style={{color: 'red'}}>{formik.errors.email}</span> : 'Email'}
                    </label>
                    <ValidationInput type="text" name="email"
                                     placeholder="Email"
                                     value={formik.values.email}
                                     onChange={formik.handleChange}/>
                    <label htmlFor="password">
                        {formik.errors.password ? <span
                            style={{color: 'red'}}>{formik.errors.password}</span> : 'Password'}
                    </label>
                    <ValidationInput type="text" name="password"
                                     placeholder="Password"
                                     value={formik.values.password}
                                     onChange={formik.handleChange}/>
                    <ValidationButton type="submit">Submit</ValidationButton>
                </ValidationWrapper>
            </ValidationForm>
        </ValidationStyled>
    );
};

export default Validation;
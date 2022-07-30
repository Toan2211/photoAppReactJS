import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Button, FormGroup, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';
import './style.scss'
import { Formik, Form, FastField } from 'formik';
import InputField from '../../../../customFields/InputField';
import SelectField from '../../../../customFields/SelectField';
import RandomPhotoField from '../../../../customFields/RandomPhotoField';
import * as Yup from 'yup';
PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
    onSubmit: null,
};

function PhotoForm(props) {
    const {initialValues, isAddMode} = props;
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        categoryId: Yup.number().required('This field is required').nullable(),
        photo: Yup.string().required('Empty photo'),
    })
    return (
        <Formik
        initialValues={initialValues}
        validationSchema = {validationSchema}
        onSubmit = {props.onSubmit}
        >
            {formikProps => {
                const {values, errors, touched} = formikProps;
                {/* console.log({values, errors, touched}) */}
                return (
                <Form>
                    <FastField
                        name = "title"
                        component = {InputField}                       
                        label = "Title"
                        placeholder = "Ex: Now nature"

                    />

                    <FastField
                        name = "categoryId"
                        component = {SelectField}                       
                        label = "Category"
                        placeholder = "What's category?"
                        options = {PHOTO_CATEGORY_OPTIONS} 
                    />

                    <FastField
                        name = "photo"
                        component = {RandomPhotoField}
                        label = "Photo"

                    />

                    <FormGroup>
                        <Button type = "submit" color = "primary">{isAddMode ? 'Add to album' : 'Edit photo'}</Button>
                    </FormGroup>
                </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;

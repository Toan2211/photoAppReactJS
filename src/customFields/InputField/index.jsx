import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Label, Input, FormFeedback} from 'reactstrap'
InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool, 
};
InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}
function InputField(props) {
    const {field, form, type, label, placeholder, disabled} = props;
    const {name, value, onChange, onBlur} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    return (
        
        <FormGroup>
        {label && <Label htmlFor = {name}>{label}</Label>}
        <Input
        //  name = {name} 
        id = {name} 
        //  value = {value}
        //  onChange={onChange}
        //  onBlur = {onBlur}
        {...field}
        placeholder= {placeholder}
        type ={type}
        disabled = {disabled}
        invalid = {showError}
         />
        {showError && <FormFeedback>{errors[name]}</FormFeedback>}
        </FormGroup>
    );
}

export default InputField;
import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Label, FormFeedback} from 'reactstrap'
import Select from 'react-select';
import { ErrorMessage } from 'formik';
SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    
    options: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool, 
};
SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: []
}
function SelectField(props) {

    const {field, form, options, label, placeholder, disabled} = props;
    const {name, value, onChange, onBlur} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    const handleSelectedOptionChange = (selectedOption)=> {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        
        }
        field.onChange(changeEvent);
    }
    const selectedOption = options.find(option => option.value === value)
    return (
        
        <FormGroup>
        {label && <Label htmlFor = {name}>{label}</Label>}
        <Select
        id = {name} 
        //  name = {name} 
        //  value = {value}
        //  onChange={onChange}
        //  onBlur = {onBlur}
        {...field}
        value= {selectedOption}
        onChange = {handleSelectedOptionChange}
        placeholder= {placeholder}
        disabled = {disabled}
        options = {options}
        className = {showError ? 'is-invalid': ''}
         />
        <ErrorMessage name = {name} component = {FormFeedback} />

        </FormGroup>
    );
}

export default SelectField;
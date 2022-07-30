import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
import {useDispatch,useSelector} from 'react-redux'
import { addPhoto ,updatePhoto} from '../../photoSlice';
import {useNavigate, useParams} from 'react-router-dom';
AddEditPage.propTypes = {
    
};
const getId = () => Math.floor(Math.random()*10000);
function AddEditPage(props) {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const {photoId} = useParams();
    const isAddMode = !photoId;

    const editedPhoto = useSelector(state => state.photos.find(photo => photo.id === +photoId));


    const initialValues = isAddMode ? {
        title: '',
        categoryId: '',
        photo: ''
    }
    : editedPhoto;
    
    const handleSubmit = (value) => {
        if(isAddMode){
            const newPhoto = {
                ...value,
                id: getId()
            }
            const action  = addPhoto(newPhoto);
            dispath(action);
            
           
        }
        else{
            const action = updatePhoto(value);
            dispath(action);
        }

        navigate('/photos');
    }   
    return (
        <div className = "photo-edit">
            
            <Banner title = "Pick your photo!!" />
            <div className="photo-edit__form">
                <PhotoForm 
                isAddMode = {isAddMode}
                initialValues = {initialValues}
                onSubmit = {handleSubmit}

                />
            </div>
        </div>
    );
}

export default AddEditPage;
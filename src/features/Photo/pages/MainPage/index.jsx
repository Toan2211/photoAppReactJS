import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import {Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import Images from '../../../../constants/images';
import {useSelector, useDispatch} from 'react-redux';
import PhotoList from '../../components/PhotoList';
import {removePhoto} from '../../photoSlice'
import {useNavigate} from 'react-router-dom'
MainPage.propTypes = {
    
};

function MainPage(props) {
    const photos = useSelector(state => state.photos);
    const dispath = useDispatch();
    const navigate = useNavigate();

    console.log('list photo: ', photos);
    const handleEdit  = (photo) => {
        console.log(photo);
        navigate(`/photos/${photo.id}`);
    }
    const handleRemove = (photo) => {
        console.log(photo);
        const removePhotoId = photo.id;
        
        const action = removePhoto(removePhotoId);
        dispath(action);
    }
    return (
        <div className = "photo-main">
        
        <Banner title = "Your photos" backgroundUrl = {Images.COLORFUL_BG}  />
        <Container className="text-center">
            <div className = "py-5 ">
                <Link to = "/photos/add" className= "text-decoration-none fs-5 fw-bold">Add new photo</Link>
            </div>
            <PhotoList
            photoList = {photos}
            onPhotoEditClick = {handleEdit}
            onPhotoRemoveClick = {handleRemove}
            />
        </Container>


        </div>
    );
}

export default MainPage;
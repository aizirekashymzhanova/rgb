import './EditMaterials.css';
import React, { useContext, useState, useEffect } from 'react';
import { adminMaterialsContext } from '../../contexts/AdminMaterialsContext';
import { materialsContext } from '../../contexts/MateriasContext';
import DeleteIcon from '@material-ui/icons/Delete';
import { adminAuthContext } from '../../contexts/AdminAuthContext';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
import LinearWithValueLabel from '../LinearProgressWithLabel/LinearProgressWithLabel';
import AdminPanelNavBar from '../AdminPanelNavBar/AdminPanelNavBar';

const useStyles = makeStyles(theme => ({

    pagination: {
        color: "#c4ab9d",
        // margin: 'auto',
        // padding: 'auto'
    }
}));

const EditMaterials = () => {
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const { isAdminLogedIn } = useContext(adminAuthContext);
    const { uploadFile, progress, uploadingMessage, addingMaterial, setAddingMaterial, deleteMaterial } = useContext(adminMaterialsContext);
    const { getMaterials, materials, totalPages } = useContext(materialsContext);
    const [inpData, setInpData] = useState({ title: '', description: '', category: '' });
    const [page, setPage] = useState(getPage());
    const classes = useStyles();


    useEffect(() => {
        isAdminLogedIn();
        getMaterials();
    }, []);

    function onFileChange(event) {
        setSelectedFile(event.target.files[0]);
    }

    function onImageChange(event) {
        setSelectedImage(event.target.files[0]);
    }

    function handleInpChanges(event) {
        setInpData({
            ...inpData,
            [event.target.name]: event.target.value
        });
    }

    function getPage() {
        const search = new URLSearchParams(history.location.search);
        return search.get("page") ? search.get("page") : 1;
    }

    function handlePage(event, page) {
        const search = new URLSearchParams(history.location.search);
        search.set("page", page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getMaterials();
        setPage(page);
    }

    async function onFileUpload() {
        const formData = new FormData();

        if (!selectedFile || !inpData.title || !selectedImage || !inpData.description || !inpData.category) {
            return;
        }

        if (selectedFile) {
            formData.append(
                'newFile',
                selectedFile,
                selectedFile.name
            );
        }

        formData.append(
            'title',
            inpData.title
        );

        if (selectedImage) {
            formData.append(
                'newImage',
                selectedImage,
                selectedImage.name
            );
        }

        formData.append(
            'description',
            inpData.description
        );

        formData.append(
            'category',
            inpData.category
        );

        console.log(selectedFile);

        uploadFile(formData);
        setInpData({ title: '', description: '' });
    }

    function handleDeleteBtn(id, name) {
        if (window.confirm(`???? ???????????? ?????????????? ???????????????? ${name}`)) {
            deleteMaterial(id);
        }
    }

    return (
        <>
            <AdminPanelNavBar />
            <div className="news__container">
                <span className="news__title">?????????????????? ?????? ????????????????????</span>
                {
                    addingMaterial ?
                        <form onSubmit={(event) => event.preventDefault()} className="add-material__form">
                            <label className="add-material__form__title">???????????????? ???????? ?????? ????????????????</label>

                            <label className="add-material__form__label">?????????????????? *</label>
                            <input name="title" onChange={handleInpChanges} value={inpData.title} className="add-material__form__input" type="text" placeholder="????????????????" />

                            <div className="add-material__form__browse-file__block">
                                <label htmlFor="image-upload" className="add-material__form__attach">?????????? ???????????????? ??????????????????????</label>
                                {selectedImage && <span className="add-material__form__file-name">{selectedImage.name}</span>}
                                <input className="add-material__form__attach-inp" id="image-upload" type="file" onChange={onImageChange} />
                            </div>

                            <label className="add-material__form__label">???????????????? ?????????????????? *</label>
                            <input name="description" onChange={handleInpChanges} value={inpData.description} className="add-material__form__input" type="text" placeholder="????????????????" />

                            <label className="add-material__form__label">???????????? ?????????????????? *</label>
                            <input name="category" onChange={handleInpChanges} value={inpData.category} className="add-material__form__input" type="text" placeholder="????????????" />

                            <div className="add-material__form__browse-file__block">
                                <label htmlFor="file-upload" className="add-material__form__attach">?????????? ???????????????? ??????????????????</label>
                                {selectedFile && <span className="add-material__form__file-name">{selectedFile.name}</span>}
                                <input className="add-material__form__attach-inp" id="file-upload" type="file" onChange={onFileChange} />
                            </div>
                            <span className="add-material__form__error">{uploadingMessage}</span>
                            {progress && <LinearWithValueLabel value={progress} />}
                            <button disabled={progress} type="submit" onClick={onFileUpload}>??????????????????</button>
                        </form>
                        :
                        <span className="admin-panel__btn" onClick={() => setAddingMaterial(true)}>???????????????? ????????????????</span>
                }
                <div className="download">

                    {
                        materials ?
                            (
                                materials.materials.map(elem => (
                                    <div key={elem.material_pathname} className="download__item">
                                        <span className="download__item__title">{elem.material_title}</span>
                                        <img className="download__item__image" src={elem.material_image} alt="" />
                                        <span className="download__item__name">{elem.material_name}</span>
                                        <span className="download__item__description">{elem.material_description}</span>
                                        <button onClick={() => handleDeleteBtn(elem.material_id, elem.material_name)} className="delete-btn">?????????????? <DeleteIcon /></button>
                                    </div>
                                ))
                            )
                            :
                            '?????????????????? ????????????????????'
                    }
                </div>

                {
                    materials ?
                        <Pagination className={classes.pagination} page={+page} onChange={handlePage} count={totalPages} />
                        :
                        ''
                }
            </div>
        </>
    );
};

export default EditMaterials;
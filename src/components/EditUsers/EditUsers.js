import React, { useContext, useState, useEffect } from "react";
import "./EditUsers.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { adminAuthContext } from "../../contexts/AdminAuthContext";
import { adminUsersContext } from "../../contexts/AdminUsersContext";
import AdminPanelNavBar from "../AdminPanelNavBar/AdminPanelNavBar";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    minHeight: "25vh",
    minWidth: "25vw",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));

const EditUsers = () => {
  const { isAdminLogedIn } = useContext(adminAuthContext);
  const {
    users,
    getUsers,
    registeringInfo,
    registerUser,
    deleteUser,
    resetPassword,
    resetingInfo,
    cleanResetInfo,
  } = useContext(adminUsersContext);
  const [userAdding, setUserAdding] = useState(false);
  const [inpData, setInpData] = useState({ name: "", email: "", password: "" });
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [userNameToReset, setUserNameToReset] = useState("");
  const [newUserDataToReset, setNewUserDataToReset] = useState({
    id: "",
    newPassword: "",
  });

  useEffect(() => {
    isAdminLogedIn();
    getUsers();
  }, []);

  function handleInpChanges(event) {
    setInpData({
      ...inpData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmitBtn() {
    registerUser(inpData);
    setInpData({ name: "", email: "", password: "" });
  }

  function handleDeleteBtn(id, name) {
    if (window.confirm(`Вы хотите удалить пользователя ${name}`)) {
      deleteUser(id);
    }
  }

  const handleOpenModal = (userNameToReset, id) => {
    setUserNameToReset(userNameToReset);
    setNewUserDataToReset({
      ...newUserDataToReset,
      id: id,
    });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    cleanResetInfo();
  };

  const handlePasswordChange = (event) => {
    setNewUserDataToReset({
      ...newUserDataToReset,
      newPassword: event.target.value,
    });
  };

  return (
    <>
      <AdminPanelNavBar />
      <div className="news__container">
        <span className="news__title">ПОЛЬЗОВАТЕЛИ</span>
        {userAdding ? (
          <form
            onSubmit={(event) => event.preventDefault()}
            className="add-user__form"
          >
            <label className="add-user__form__title">
              Заполните следующие поля
            </label>

            <label className="add-user__form__label">Имя, фамилия *</label>
            <input
              name="name"
              onChange={handleInpChanges}
              value={inpData.name}
              className="add-user__form__input"
              type="text"
              placeholder="Имя, фамилия"
            />

            <label className="add-user__form__label">E-MAIL *</label>
            <input
              name="email"
              onChange={handleInpChanges}
              value={inpData.email}
              className="add-user__form__input"
              type="text"
              placeholder="Адрес эл. почты"
            />

            <label className="add-user__form__label">Пароль *</label>
            <input
              name="password"
              onChange={handleInpChanges}
              value={inpData.password}
              className="add-user__form__input"
              type="text"
              placeholder="Пароль"
            />

            <span
              className="add-user__form__error"
              style={{ color: registeringInfo.success ? "#003366" : "red" }}
            >
              {registeringInfo.message}
            </span>

            <button onClick={handleSubmitBtn} type="submit">
              ЗАРЕГИСТРИРОВАТЬ
            </button>
          </form>
        ) : (
          <span
            className="admin-panel__btn"
            onClick={() => setUserAdding(true)}
          >
            ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ
          </span>
        )}
        <div className="download">
          <List style={{ width: "100%" }}>
            {users
              ? users.map((user) => (
                  <ListItem
                    key={user.email}
                    style={{
                      backgroundColor: "#f4f7f8",
                      borderRadius: "5px",
                      marginTop: "1vh",
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.name} />
                    <ListItemText primary={user.email} />
                    <ListItemSecondaryAction
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <button
                        onClick={() => handleOpenModal(user.name, user.id)}
                        className="reset-password__btn"
                      >
                        Сбросить пароль
                      </button>
                      <IconButton
                        onClick={() => handleDeleteBtn(user.id, user.name)}
                        edge="end"
                        aria-label="delete"
                      >
                        <DeleteIcon
                          style={{ color: "red", fontSize: "30px" }}
                        />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              : ""}
          </List>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <label
              style={{ textAlign: "center" }}
              className="add-user__form__label"
            >{`Сброс пароля пользователя ${userNameToReset}`}</label>
            {resetingInfo.success ? (
              <DoneIcon style={{ fontSize: "45px", color: "orange" }} />
            ) : (
              <>
                <label
                  style={{ textAlign: "center", fontWeight: "normal" }}
                  className="add-user__form__label"
                >
                  Введите новый пароль
                </label>
                <input
                  value={newUserDataToReset.password}
                  onChange={(e) => handlePasswordChange(e)}
                  style={{ paddingLeft: "5px" }}
                  className="add-user__form__input"
                  type="text"
                  placeholder="Пароль"
                />
              </>
            )}
            <span
              className="add-user__form__error"
              style={{ color: resetingInfo.success ? "#003366" : "red" }}
            >
              {resetingInfo.message}
            </span>
            {resetingInfo.success ? (
              ""
            ) : (
              <button
                onClick={() => resetPassword(newUserDataToReset)}
                className="reset-password__btn"
              >
                Сбросить пароль
              </button>
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default EditUsers;

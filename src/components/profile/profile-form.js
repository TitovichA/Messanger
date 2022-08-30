import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibleProfile, updateForm } from "../../store/profile/actions";
import styles from "./profileForm.module.css";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


export const ProfileForm = ({ firstName, lastName, phone }) => {
    const [form, setForm] = useState({ firstName, lastName, phone });
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const handleChangeForm = (e) => {
        const field = e.target.getAttribute("data-name");

        setForm({
            ...form,
            [field]: e.target.value,
        });
    };

    return (
        <div className={styles.profilePage}>

            <div className={styles.profileTop}>
                <h1 className={styles.profileTitle}>Profile Info</h1>
                {profile.isVisibleProfile && (
                    <>
                        <h3>firstName: {profile.firstName}</h3>
                        <h3>lastName: {profile.lastName}</h3>
                        <h3>phone: {profile.phone}</h3>
                    </>
                )}

                <Button variant="outlined" onClick={() => dispatch(toggleVisibleProfile())}>Показать данные профиля</Button>
            </div>


            <div className={styles.inputProfile}>
                <Input 
                    value={form.firstName}
                    placeholder="firstName"
                    data-name="firstName"
                    onChange={handleChangeForm}
                />
                <Input
                    value={form.lastName}
                    placeholder="lastName"
                    data-name="lastName"
                    onChange={handleChangeForm}
                />
                <Input
                    value={form.phone}
                    placeholder="phone"
                    data-name="phone"
                    onChange={handleChangeForm}
                />
                <Button variant="outlined" onClick={() => dispatch(updateForm(form))}>save</Button>

            </div>

        </div>
    );
};
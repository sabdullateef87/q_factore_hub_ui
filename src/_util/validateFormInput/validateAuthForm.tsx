import { Notification, RegisterDTO } from "../../_interfaces/authorization.interface";
import { isEmpty } from "../dataUtil";

export const validateRegisterForm = (form: RegisterDTO) => {
    let notification: Notification = {};
    if(isEmpty(form.email)){
        notification.error = "Email address cannot be empty, use an email and try again"
    }
    else if(isEmpty(form.password)){
        notification.error = "Password cannot be empty, please include a password and try again"
    }

    return notification;
}
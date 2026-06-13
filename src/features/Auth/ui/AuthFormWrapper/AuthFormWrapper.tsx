import {useState} from 'react';
import LoginForm from "@/features/Auth/ui/LoginForm/LoginForm.tsx";
import SignUpForm from "../SignUpForm/SignUpForm";

export const AuthFormWrapper = () => {
    const [form, setForm] = useState<"LoginForm" | "SignUpForm">("LoginForm")

    const handleFormChange = () => {
        setForm(prev => prev === "LoginForm" ? "SignUpForm" : "LoginForm");
    };

    return (
        <div>
            {form === "LoginForm" && (
                <LoginForm onFormChange={handleFormChange}/>
            )}
            {form === "SignUpForm" && (
                <SignUpForm onFormChange={handleFormChange} />
            )}
        </div>
    );
};

export default AuthFormWrapper;
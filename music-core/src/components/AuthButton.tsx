import { getUser, logout } from "../auth/auth";
const AuthButton = () => {
    const user = getUser();
    return user ? (
        <button onClick={logout}>Logout ({user.role})</button>
    ) : (
        <a href="/login">Login</a>
    );
};
export default AuthButton;

export const login = (username: string, role: "admin" | "user") => {
    const token = btoa(JSON.stringify({ username, role }));
    localStorage.setItem("token", token);
};

export const getUser = () => {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(atob(token)) : null;
};

export const logout = () => {
    localStorage.removeItem("token");
};

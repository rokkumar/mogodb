import User from "../models/User.js";

// 🔹 Login page show
export const showLogin = (req, res) => {
    res.render("login");
};

// 🔹 Signup page show
export const showSignup = (req, res) => {
    res.render("signup");
};

// 🔹 Home page show
export const showHome = (req, res) => {
    res.render("home");
};


// 🔹 Signup form handle
export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // check user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.send("User already exists ❌");
        }

        // save user
        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();

        res.redirect("/login");
    } catch (error) {
        console.log(error);
        res.send("Signup error ❌");
    }
};

// 🔹 Login form handle
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.send("User not found ❌");
        }

        if (user.password !== password) {
            return res.send("Wrong password ❌");
        }

        res.render("home");
    } catch (error) {
        console.log(error);
        res.send("Login error ❌");
    }
};

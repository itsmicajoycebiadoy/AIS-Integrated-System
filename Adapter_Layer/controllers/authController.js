import * as AuthService from '../services/authService.js';

export const registerStudent = async (req, res) => {
    try {
        const studentProfile = req.body;
        const result = await AuthService.registerStudent(studentProfile);
        return res.status(201).json(result);
    } catch (error) {
        if (error.message === "All fields are required") {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: error.message });
    }
};
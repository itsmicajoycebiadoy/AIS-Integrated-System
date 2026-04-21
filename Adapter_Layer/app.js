import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/auth', authRoutes);

try {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
} catch (error) {
    console.log(error);
}
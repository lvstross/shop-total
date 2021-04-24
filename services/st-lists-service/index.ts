import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import listRoutes from './routes/listRoutes';

(async () => {
    const app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    
    const db = process.env.DB || '';
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongo connected');
    } catch (err) {
        console.log(err);
    }
    
    app.use(listRoutes);
    
    app.listen(process.env.PORT || 5000);
})();

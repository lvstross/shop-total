import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

const List = mongoose.model("Lists", ListSchema);

export default List;
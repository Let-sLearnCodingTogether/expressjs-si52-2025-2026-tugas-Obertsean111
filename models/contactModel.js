import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: [true, "Nama kontak wajib di isi!"],
    },

    relation: {
        type: String,
        required: [true, "Hubungan wajib di isi!"],
    },

    phone: {
        type: String,
        required: [true, "Nomor telepon wajib di isi!"],
    },
}, {
    timestamps: true,
});

const contactModel = mongoose.model("Contact", contactSchema);

export default contactModel;
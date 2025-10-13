import ContactModel from "../models/contactModel.js";

export const addContact = async(req, res) => {
    try {
        const contactData = req.body;

        const newContact = await ContactModel.create({
            contactName: contactData.contactName,
            relation: contactData.relation,
            phone: contactData.phone,
        });

        res.status(201).json({
            message: "Berhasil menambahkan kontak",
            data: newContact,
        });
    } catch (e) {
        if (e.name === "ValidationError") {
            return res.status(400).json({
                message: "Data tidak valid. Mohon lengkapi semua field yang wajib diisi.",
                data: null,
            });
        }

        res.status(500).json({
            message: e.message,
            data: null,
        });
    }
};
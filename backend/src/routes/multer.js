import multer from "multer";
import path from "path";
import crypto from "crypto";

export default {

    dest: path.resolve(__dirname, "..", "..", "public", "uploads"),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "..", "public", "uploads"));
        }
        ,
        filename: (req, file, cb) => {
            const hash = crypto.randomBytes(6).toString("hex");
            const fileName = `${hash}-${file.originalname}`;
            cb(null, fileName);
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif"
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type."));
        }
    }
}
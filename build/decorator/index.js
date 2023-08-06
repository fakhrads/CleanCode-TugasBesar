"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pegawai_1 = __importDefault(require("./pegawai"));
const pegawaiDecorator_1 = __importDefault(require("./pegawaiDecorator"));
const data = {
    nama: 'Fakhri Adi Saputra',
    username: 'fakhrads',
    password: 'somepassword',
    alamat: 'Jalan Sekeloa Tengah',
    telepon: '123456789',
};
const pegawai = new pegawai_1.default(data.nama, data.username, data.password, data.alamat, data.telepon);
const pegawaiDecorator = new pegawaiDecorator_1.default(pegawai);
pegawaiDecorator.saveToDatabase();

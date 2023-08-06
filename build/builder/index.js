"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PegawaiBuilder_1 = __importDefault(require("./PegawaiBuilder"));
const dataFromFrontend = {
    nama: 'Fakhri Adi Saputra',
    username: 'fakhrads',
    password: 'somepassword',
    alamat: 'Jalan Sekeloa Tengah',
    telepon: '123456789',
};
const pegawai = new PegawaiBuilder_1.default()
    .withNama(dataFromFrontend.nama)
    .withUsername(dataFromFrontend.username)
    .withPassword(dataFromFrontend.password)
    .withAlamat(dataFromFrontend.alamat)
    .withTelepon(dataFromFrontend.telepon)
    .build();
pegawai.saveToDatabase();

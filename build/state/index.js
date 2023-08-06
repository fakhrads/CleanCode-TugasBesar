"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pegawai_1 = __importDefault(require("./pegawai"));
const pegawaiState_1 = __importDefault(require("./pegawaiState"));
const pegawaiAdminState_1 = __importDefault(require("./pegawaiAdminState"));
// Contoh penggunaan:
const dataDariFrontend = {
    nama: 'Fakhri Adi Saputra',
    username: 'fakhrads',
    password: 'somepassword',
    alamat: 'Jalan Sekeloa Tengah',
    telepon: '123456789',
};
const pegawai = new pegawai_1.default(dataDariFrontend.nama, dataDariFrontend.username, dataDariFrontend.password, dataDariFrontend.alamat, dataDariFrontend.telepon);
// Gunakan PegawaiAdminState untuk menyimpan data oleh admin, atau gunakan PegawaiState untuk penyimpanan biasa.
const isAdmin = true; // Atau sesuaikan dengan status admin sesuai kebutuhan.
const state = isAdmin ? new pegawaiAdminState_1.default() : new pegawaiState_1.default();
pegawai.setState(state);
// Sekarang Anda dapat menyimpan pegawai ke database menggunakan metode saveToDatabase().
pegawai.saveToDatabase();

"use strict";
// main.ts (File: main.ts)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pegawaiBuilder_1 = __importDefault(require("./pegawaiBuilder"));
const pegawaiDecorator_1 = __importDefault(require("./pegawaiDecorator"));
const pegawaiState_1 = __importDefault(require("./pegawaiState"));
const pegawaiAdminState_1 = __importDefault(require("./pegawaiAdminState"));
function tambahDataPegawai(data, isAdmin) {
    const pegawai = new pegawaiBuilder_1.default()
        .withNama(data.nama)
        .withUsername(data.username)
        .withPassword(data.password)
        .withAlamat(data.alamat)
        .withTelepon(data.telepon)
        .build();
    const state = isAdmin ? new pegawaiAdminState_1.default() : new pegawaiState_1.default();
    const pegawaiDecorator = new pegawaiDecorator_1.default(pegawai);
    pegawai.setState(state);
    // Simpan data pegawai ke database
    pegawaiDecorator.saveToDatabase();
}
// Contoh penggunaan fungsi tambahDataPegawai:
const dataDariFrontend = {
    nama: 'Fakhri Adi Saputra',
    username: 'fakhrads',
    password: 'somepassword',
    alamat: 'Jalan Sekeloa Tengah',
    telepon: '123456789',
};
const isAdmin = true; // Sesuaikan dengan status admin yang sesuai kebutuhan.
tambahDataPegawai(dataDariFrontend, isAdmin);

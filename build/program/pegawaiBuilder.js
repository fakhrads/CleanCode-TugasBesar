"use strict";
// pegawaiBuilder.ts (File: pegawaiBuilder.ts)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pegawai_1 = __importDefault(require("./pegawai"));
class PegawaiBuilder {
    constructor() {
        // Inisialisasi nilai default atau gunakan parameter opsional sesuai kebutuhan
        this.nama = '';
        this.username = '';
        this.password = '';
        this.alamat = '';
        this.telepon = '';
    }
    withNama(nama) {
        this.nama = nama;
        return this;
    }
    withUsername(username) {
        this.username = username;
        return this;
    }
    withPassword(password) {
        this.password = password;
        return this;
    }
    withAlamat(alamat) {
        this.alamat = alamat;
        return this;
    }
    withTelepon(telepon) {
        this.telepon = telepon;
        return this;
    }
    build() {
        return new pegawai_1.default(this.nama, this.username, this.password, this.alamat, this.telepon);
    }
}
exports.default = PegawaiBuilder;

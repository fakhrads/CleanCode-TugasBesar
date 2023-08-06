"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PegawaiDecorator {
    constructor(pegawai) {
        this.pegawai = pegawai;
    }
    get nama() {
        return this.pegawai.nama;
    }
    get username() {
        return this.pegawai.username;
    }
    get password() {
        return this.pegawai.password;
    }
    get alamat() {
        return this.pegawai.alamat;
    }
    get telepon() {
        return this.pegawai.telepon;
    }
    saveToDatabase() {
        this.pegawai.saveToDatabase();
    }
}
exports.default = PegawaiDecorator;

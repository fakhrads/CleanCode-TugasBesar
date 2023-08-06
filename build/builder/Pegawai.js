"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pegawai {
    constructor(nama, username, password, alamat, telepon) {
        this.nama = nama;
        this.username = username;
        this.password = password;
        this.alamat = alamat;
        this.telepon = telepon;
    }
    saveToDatabase() {
        console.log("nama: " + this.nama);
        console.log("username: " + this.username);
        console.log("password: " + this.password);
        console.log("alamat: " + this.alamat);
        console.log("telepon: " + this.telepon);
    }
}
exports.default = Pegawai;

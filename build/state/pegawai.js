"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pegawaiState_1 = __importDefault(require("./pegawaiState"));
class Pegawai {
    constructor(nama, username, password, alamat, telepon) {
        this.nama = nama;
        this.username = username;
        this.password = password;
        this.alamat = alamat;
        this.telepon = telepon;
        this.state = new pegawaiState_1.default();
    }
    setState(state) {
        this.state = state;
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

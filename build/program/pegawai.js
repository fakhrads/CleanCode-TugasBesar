"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// pegawai.ts (File: pegawai.ts)
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
}
exports.default = Pegawai;

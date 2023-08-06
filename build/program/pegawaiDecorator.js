"use strict";
// pegawaiDecorator.ts (File: pegawaiDecorator.ts)
Object.defineProperty(exports, "__esModule", { value: true });
class PegawaiDecorator {
    constructor(pegawai) {
        this.pegawai = pegawai;
    }
    saveToDatabase() {
        // Implementasikan logika untuk menyimpan data Pegawai ke database
        // Di sini, kita akan menggunakan metode saveToDatabase() dari objek Pegawai yang di-decorate.
        console.log('Data Pegawai berhasil disimpan oleh Admin:');
        console.log(this.pegawai);
    }
}
exports.default = PegawaiDecorator;

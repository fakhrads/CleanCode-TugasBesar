"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PegawaiState {
    saveToDatabase(pegawai) {
        pegawai.saveToDatabase();
    }
}
// Implementasi lain dari IPegawaiState yang mungkin diperlukan dapat ditambahkan di sini
exports.default = PegawaiState;

"use strict";
// pegawaiAdminState.ts (File: pegawaiAdminState.ts)
Object.defineProperty(exports, "__esModule", { value: true });
class PegawaiAdminState {
    saveToDatabase(pegawai) {
        // Logika khusus untuk menyimpan data Pegawai oleh admin ke database
        console.log('Data Pegawai berhasil disimpan oleh Admin:');
        console.log(pegawai);
    }
}
exports.default = PegawaiAdminState;

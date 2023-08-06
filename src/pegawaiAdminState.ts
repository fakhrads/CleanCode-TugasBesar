// pegawaiAdminState.ts (File: pegawaiAdminState.ts)

import Pegawai from './pegawai';
import IPegawaiState from './pegawaiState';

class PegawaiAdminState implements IPegawaiState {
  saveToDatabase(pegawai: Pegawai) {
    // Logika khusus untuk menyimpan data Pegawai oleh admin ke database
    console.log('Data Pegawai berhasil disimpan oleh Admin:');
    console.log(pegawai);
  }
}

export default PegawaiAdminState;

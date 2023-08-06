// pegawaiState.ts (File: pegawaiState.ts)

import Pegawai from './pegawai';

interface IPegawaiState {
  saveToDatabase(pegawai: Pegawai): void;
}

class PegawaiState implements IPegawaiState {
  saveToDatabase(pegawai: Pegawai) {
    // Logika penyimpanan data Pegawai ke database
    console.log('Data Pegawai berhasil disimpan dengan state biasa:');
    console.log(pegawai);
  }
}

export default PegawaiState;

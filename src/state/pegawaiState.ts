import Pegawai from './pegawai';

interface IPegawaiState {
  saveToDatabase(pegawai: Pegawai): void;
}

class PegawaiState implements IPegawaiState {
  saveToDatabase(pegawai: Pegawai) {
    pegawai.saveToDatabase()
  }
}

// Implementasi lain dari IPegawaiState yang mungkin diperlukan dapat ditambahkan di sini

export default PegawaiState;
// pegawaiDecorator.ts (File: pegawaiDecorator.ts)

import Pegawai from './pegawai';

interface IPegawaiDecorator {
  pegawai: Pegawai;
  saveToDatabase(): void;
}

class PegawaiDecorator implements IPegawaiDecorator {
  pegawai: Pegawai;

  constructor(pegawai: Pegawai) {
    this.pegawai = pegawai;
  }

  saveToDatabase() {
    // Implementasikan logika untuk menyimpan data Pegawai ke database
    // Di sini, kita akan menggunakan metode saveToDatabase() dari objek Pegawai yang di-decorate.
    console.log('Data Pegawai berhasil disimpan oleh Admin:');
    console.log(this.pegawai);
  }

  // Metode atau fitur tambahan dari interface IPegawaiDecorator dapat ditambahkan di sini
  // ...
}

export default PegawaiDecorator;

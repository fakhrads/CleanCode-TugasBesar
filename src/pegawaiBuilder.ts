// pegawaiBuilder.ts (File: pegawaiBuilder.ts)

import Pegawai from './pegawai';

class PegawaiBuilder {
  private nama: string;
  private username: string;
  private password: string;
  private alamat: string;
  private telepon: string;

  constructor() {
    // Inisialisasi nilai default atau gunakan parameter opsional sesuai kebutuhan
    this.nama = '';
    this.username = '';
    this.password = '';
    this.alamat = '';
    this.telepon = '';
  }

  withNama(nama: string) {
    this.nama = nama;
    return this;
  }

  withUsername(username: string) {
    this.username = username;
    return this;
  }

  withPassword(password: string) {
    this.password = password;
    return this;
  }

  withAlamat(alamat: string) {
    this.alamat = alamat;
    return this;
  }

  withTelepon(telepon: string) {
    this.telepon = telepon;
    return this;
  }

  build() {
    return new Pegawai(this.nama, this.username, this.password, this.alamat, this.telepon);
  }
}

export default PegawaiBuilder;

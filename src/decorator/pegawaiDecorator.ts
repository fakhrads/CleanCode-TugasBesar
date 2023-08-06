import IPegawai from './pegawai';

interface IDecorator extends IPegawai {
}

class PegawaiDecorator implements IDecorator {
  private pegawai: IPegawai;

  constructor(pegawai: IPegawai) {
    this.pegawai = pegawai;
  }

  get nama() {
    return this.pegawai.nama;
  }

  get username() {
    return this.pegawai.username;
  }

  get password() {
    return this.pegawai.password;
  }

  get alamat() {
    return this.pegawai.alamat;
  }

  get telepon() {
    return this.pegawai.telepon;
  }

  saveToDatabase() {
    this.pegawai.saveToDatabase();
  }

}

export default PegawaiDecorator;
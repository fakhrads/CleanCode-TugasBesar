import PegawaiState from './pegawaiState';

class Pegawai {
  private nama: string;
  private username: string;
  private password: string;
  private alamat: string;
  private telepon: string;
  private state: PegawaiState;

  constructor(nama: string, username: string, password: string, alamat: string, telepon: string) {
    this.nama = nama;
    this.username = username;
    this.password = password;
    this.alamat = alamat;
    this.telepon = telepon;
    this.state = new PegawaiState();
  }

  setState(state: PegawaiState) {
    this.state = state;
  }

  saveToDatabase() {
    console.log("nama: " + this.nama);
    console.log("username: " + this.username);
    console.log("password: " + this.password);
    console.log("alamat: " + this.alamat);
    console.log("telepon: " + this.telepon);
  }

}

export default Pegawai;

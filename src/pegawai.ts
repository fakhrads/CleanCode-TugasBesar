// pegawai.ts (File: pegawai.ts)
import PegawaiState from "./pegawaiState";
class Pegawai {
    public nama: string;
    public username: string;
    public password: string;
    public alamat: string;
    public telepon: string;
    public state: PegawaiState;
  
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
  
    // Metode lainnya yang mungkin perlu ditambahkan atau diubah sesuai kebutuhan
  }
  
  export default Pegawai;
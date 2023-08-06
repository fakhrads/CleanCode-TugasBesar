interface IPegawai {
    nama: string;
    username: string;
    password: string;
    alamat: string;
    telepon: string;
    saveToDatabase(): void;
  }
  
  class Pegawai implements IPegawai {
    nama: string;
    username: string;
    password: string;
    alamat: string;
    telepon: string;
  
    constructor(nama: string, username: string, password: string, alamat: string, telepon: string) {
      this.nama = nama;
      this.username = username;
      this.password = password;
      this.alamat = alamat;
      this.telepon = telepon;
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
  
import PegawaiBuilder from "./PegawaiBuilder";

const dataFromFrontend = {
  nama: 'Fakhri Adi Saputra',
  username: 'fakhrads',
  password: 'somepassword',
  alamat: 'Jalan Sekeloa Tengah',
  telepon: '123456789',
};

const pegawai = new PegawaiBuilder()
  .withNama(dataFromFrontend.nama)
  .withUsername(dataFromFrontend.username)
  .withPassword(dataFromFrontend.password)
  .withAlamat(dataFromFrontend.alamat)
  .withTelepon(dataFromFrontend.telepon)
  .build();

pegawai.saveToDatabase();
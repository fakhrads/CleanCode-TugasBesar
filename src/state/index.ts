import Pegawai from './pegawai';
import PegawaiState from './pegawaiState';
import PegawaiAdminState from './pegawaiAdminState';

// Contoh penggunaan:

const dataDariFrontend = {
  nama: 'Fakhri Adi Saputra',
  username: 'fakhrads',
  password: 'somepassword',
  alamat: 'Jalan Sekeloa Tengah',
  telepon: '123456789',
};

const pegawai = new Pegawai(dataDariFrontend.nama, dataDariFrontend.username, dataDariFrontend.password, dataDariFrontend.alamat, dataDariFrontend.telepon);

// Gunakan PegawaiAdminState untuk menyimpan data oleh admin, atau gunakan PegawaiState untuk penyimpanan biasa.
const isAdmin = true; // Atau sesuaikan dengan status admin sesuai kebutuhan.

const state = isAdmin ? new PegawaiAdminState() : new PegawaiState();
pegawai.setState(state);

// Sekarang Anda dapat menyimpan pegawai ke database menggunakan metode saveToDatabase().
pegawai.saveToDatabase();

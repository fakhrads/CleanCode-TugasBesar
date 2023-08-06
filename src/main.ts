// main.ts (File: main.ts)

import Pegawai from './pegawai';
import PegawaiBuilder from './pegawaiBuilder';
import PegawaiDecorator from './pegawaiDecorator';
import PegawaiState from './pegawaiState';
import PegawaiAdminState from './pegawaiAdminState';

function tambahDataPegawai(data: any, isAdmin: boolean) {
  const pegawai = new PegawaiBuilder()
    .withNama(data.nama)
    .withUsername(data.username)
    .withPassword(data.password)
    .withAlamat(data.alamat)
    .withTelepon(data.telepon)
    .build();

  const state = isAdmin ? new PegawaiAdminState() : new PegawaiState();
  const pegawaiDecorator = new PegawaiDecorator(pegawai);
  pegawai.setState(state);

  // Simpan data pegawai ke database
  pegawaiDecorator.saveToDatabase();
}

// Contoh penggunaan fungsi tambahDataPegawai:
const dataDariFrontend = {
  nama: 'Fakhri Adi Saputra',
  username: 'fakhrads',
  password: 'somepassword',
  alamat: 'Jalan Sekeloa Tengah',
  telepon: '123456789',
};
const isAdmin = true; // Sesuaikan dengan status admin yang sesuai kebutuhan.

tambahDataPegawai(dataDariFrontend, isAdmin);

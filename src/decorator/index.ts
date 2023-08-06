import Pegawai from './pegawai';
import PegawaiDecorator from './pegawaiDecorator';


const data = {
  nama: 'Fakhri Adi Saputra',
  username: 'fakhrads',
  password: 'somepassword',
  alamat: 'Jalan Sekeloa Tengah',
  telepon: '123456789',
};

const pegawai = new Pegawai(data.nama, data.username, data.password, data.alamat, data.telepon);
const pegawaiDecorator = new PegawaiDecorator(pegawai);

pegawaiDecorator.saveToDatabase();

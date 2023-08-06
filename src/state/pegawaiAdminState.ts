import Pegawai from './pegawai';
import IPegawaiState from './pegawaiState';

class PegawaiAdminState implements IPegawaiState {
  saveToDatabase(pegawai: Pegawai) {
    pegawai.saveToDatabase()
  }
}

export default PegawaiAdminState;

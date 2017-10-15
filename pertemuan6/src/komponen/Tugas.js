import React, {Component} from 'react';

class Tugas extends Component {

  constructor(){
    super();
    this.state = {
      tugasku: [],
      tugasbaru: "",
      totalBelanja: 0
    }
  }

  onChangeTugasBaru(e){
    this.setState({
      tugasbaru: e.target.value
    });
  }

  onChangeTotalBelanja(e){
    this.setState({
      totalBelanja: parseInt(e.target.value)
    });
  }

  tambahTugas(){
    let list_sementara_tugas = this.state.tugasku;
    list_sementara_tugas.push(this.state.tugasbaru);
    this.setState({
      tugasku: list_sementara_tugas
    });
  }

  render(){
    return (
      <div>
        <h1>Tugas saya</h1>
        <input type="text" placeholder="masukkan tugas baru" onChange={(e) => this.onChangeTugasBaru(e)} />
        <button onClick={() => this.tambahTugas()}>tambah tugas</button>
        {
          this.state.tugasku.map((tugas) => {
            return (<p>{tugas}</p>)
          })
        }
        <br />
        <input type="text" placeholder="masukkan total belanja" onChange={(e) => this.onChangeTotalBelanja(e)} />
        <h1>Belanja anda Rp. {this.state.totalBelanja}</h1>
        <h1>Diskon 5% Rp. {(5/100) * this.state.totalBelanja}</h1>
        <h1>Subtotal Rp. {this.state.totalBelanja - ((5/100) * this.state.totalBelanja)}</h1>
      </div>
    )
  }

}

export default Tugas;
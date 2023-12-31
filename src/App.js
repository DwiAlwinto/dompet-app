import React from "react";
import "./App.css";
import ModalCreate from "./component/ModalCreate";
import Alert from "./component/Alert";


class App extends React.Component {

  //ini membuat logic
  constructor() {
    super();

    this.state = {
      sisaUang : 0,
      persentaseUang : 0,
      pemasukanUang : 0,
      pengeluaranUang : 0,
      transaksiIN : 0,
      transaksiOUT :  0,
     
      summary : [
        // {
        //   deskripsi : "Menerima Gajih",
        //   tanggal : "1 July 2022",
        //   nominal : 10000,
        //   category : "IN",
        // },
        // {
        //   deskripsi : "Menerima Gajih",
        //   tanggal : "1 July 2022",
        //   nominal : 10000,
        //   category : "IN",
        // },
        
        // {
        //   deskripsi : "Makan Nasi Padang",
        //   tanggal : "2 July 2022",
        //   nominal : 10000,
        //   category : "OUT",
        // }
      ]
    }
    //kita baindling 
    this.tambahTransaksi = this.tambahTransaksi.bind(this);

    //kita baind jumlahSemua
    this.jumlahSemua = this.jumlahSemua.bind(this)
  }

    //Cara membuat tambah Item
    tambahTransaksi(objek){
      let newData = [ ...this.state.summary, objek]
      let dataUangIN = newData.filter((item)=> item.category === 'IN')
      let nominalUang = dataUangIN.map((item) => item.nominal);
      // let jumlahUangIn = nominalUang.reduce((total, num) => total + num);
      let jumlahUangIn = nominalUang.reduce((total, num) => total + num, 0);
      let dataUangOUT = newData.filter((item)=> item.category === 'OUT');
      let nominalUangOUT = dataUangOUT.map((item) => item.nominal);
      // let jumlahUangOUT = nominalUangOUT.reduce((total, num) => total + num);
      let jumlahUangOUT = nominalUangOUT.reduce((total, num) => total + num, 0);
      

      this.setState({
        pemasukanUang : jumlahUangIn,
        transaksiIN : nominalUang.length,
        pengeluaranUang : jumlahUangOUT,
        transaksiOUT : nominalUangOUT.length,

        sisaUang : jumlahUangIn - jumlahUangOUT,
        persentaseUang : (jumlahUangIn - jumlahUangOUT)/jumlahUangIn * 100,
        summary : newData


      })


      //console.log(objek);
      //cara menampung objek ke summary
      // this.setState({
      //   // summary : [ ...this.state.summary, objek]

      // })
    }

    jumlahSemua(){
    
       let dataUangIN = this.state.summary.filter((item)=> item.category === 'IN')
       let nominalUang = dataUangIN.map((item) => item.nominal);
      //  let jumlahUangIn = nominalUang.reduce((total, num) => total + num);
       let jumlahUangIn = nominalUang.reduce((total, num) => total + num);
       let dataUangOUT = this.state.summary.filter((item)=> item.category === 'OUT');
       let nominalUangOUT = dataUangOUT.map((item) => item.nominal);
      //  let jumlahUangOUT = nominalUangOUT.reduce((total, num) => total + num);
       let jumlahUangOUT = nominalUangOUT.reduce((total, num) => total + num);
       console.log(jumlahUangOUT);
 
       this.setState({
         pemasukanUang : jumlahUangIn,
         transaksiIN : nominalUang.length,
         pengeluaranUang : jumlahUangOUT,
         transaksiOUT : nominalUangOUT.length,
         sisaUang : jumlahUangIn - jumlahUangOUT,
         persentaseUang : (jumlahUangIn - jumlahUangOUT)/jumlahUangIn * 100
 
 
       })

    }


    //Salah satu component lifecycel
    componentDidMount() {
      if(this.state.summary.length < 1){
        console.log("Okee");
      } else{
        this.jumlahSemua()
      }
      // // console.log("Oke wiiin");\
      // let dataUangIN = this.state.summary.filter((item)=> item.category === 'IN');
      // // console.log(nominalUang);
      // //ini utuk ambil nominal ya(untuk ubah bentuk ya array)
      // let nominalUang = dataUangIN.map((item) => item.nominal);
      // // console.log(nominalUang);
      // //cara menjumlah jumlah  uang IN
      // let jumlahUangIn = nominalUang.reduce((total, num) => total + num);
      // // console.log(jumlahUangIn);

      // let dataUangOUT = this.state.summary.filter((item)=> item.category === 'OUT');
      // let nominalUangOUT = dataUangOUT.map((item) => item.nominal);
      // let jumlahUangOUT = nominalUangOUT.reduce((total, num) => total + num);
      // console.log(jumlahUangOUT);

      // this.setState({
      //   pemasukanUang : jumlahUangIn,
      //   transaksiIN : nominalUang.length,
      //   pengeluaranUang : jumlahUangOUT,
      //   transaksiOUT : nominalUangOUT.length,
      //   //sisa uang
      //   sisaUang : jumlahUangIn - jumlahUangOUT,

      //   //untuk hitung prsentase
      //   persentaseUang : (jumlahUangIn - jumlahUangOUT)/jumlahUangIn * 100

      // })
    }



  render() {
    return (
      <>
        <div className="container ">
          <div className="row">
            <div className="col-12 py-5 text-center">
              <h1 className="fw-bold">DOMPET APPS</h1>
              <hr className="w-75 mx-auto"/>
              <h2 className="fw-bold">Rp. {this.state.sisaUang}</h2>
              <span className="title-md">Sisa uang kamu tersisa {this.state.persentaseUang}% lagi</span>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-6">
              <div className="card-wraper p-5">
              <div className="icon-wrapper-IN mb-1">
                <i className="bi bi-wallet2"></i>
              </div>
              <span className="title-sm">Pemasukan</span>
              <h3 className="fw-bold">Rp. {this.state.pemasukanUang}</h3>
              <div>
              <span className="title-sm text-ungu fw-bold"> {this.state.transaksiIN} <span className="title-sm">Transaksi</span> </span>
              </div>
              </div>
            </div>

            <div className="col-6">
              <div className="card-wraper p-5">
              <div className="icon-wrapper-OUT mb-1">
                <i className="bi bi-cash-coin"></i>
              </div>
              <span className="title-sm">Pengeluaran</span>
              <h3 className="fw-bold">Rp. {this.state.pengeluaranUang}</h3>
              <div>
              <span className="title-sm text-ungu fw-bold"> {this.state.transaksiOUT} <span className="title-sm">Transaksi</span> </span>
              </div>
              </div>
            </div>
           </div>

          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-between align-items-center">
             <h4>Ringkasan Transaksi</h4>
              <div className="wrapper-button d-flex">
                <ModalCreate action={this.tambahTransaksi} category="IN" tombol="button btn-ungu px-3 py-2 me-2" text="Pemasukan" icon="bi bi-plus-circle-fill" modalHeading="Tambahkan Pemasukan"/>
                <ModalCreate action={this.tambahTransaksi} category="OUT" tombol="button btn-pink px-3 py-2 " text="Pengeluaran" icon="bi bi-dash-circle-fill" modalHeading="Tambahkan Pengeluaran"/>
                
                {/* <button className="button btn-pink px-3 py-2 ">Pengeluaran <i className="bi bi-dash-circle-fill"></i> </button> */}
              </div>
            </div>  
          </div>

          <div className="row mt-4">
            {/* logical && */}
            {this.state.summary.length < 1 &&  <Alert /> }
            {/* <Alert /> */}
            {this.state.summary.map((sum,index)=> {
              return(
                <div key={index} className="mb-3 col-12 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                {/* <div className="icon-wrapper"> */}
                <div className={sum.category === 'IN' ? 'icon-wrapper-IN' : 'icon-wrapper-OUT'}>
                {/* <i className="bi bi-wallet2"></i> */}
                <i className={sum.category === 'IN' ? 'bi bi-wallet2' : 'bi bi-cart-dash-fill'}></i>
                </div>

                <div className="transaksi ms-3 d-flex flex-column ">
                    <h6 >{sum.deskripsi}</h6>
                  <span className="title-sm"> {sum.tanggal}</span>
                </div>
                </div>
                              
                  {/* <h5 className="text-money-in">Rp. {sum.nominal}</h5> */}
                    {/* membuat kondisional rendering atau logika operator */}
                  <h5 className={sum.category === 'IN' ? 'text-money-in' : 'text-money-out'}>Rp. {sum.nominal}</h5>
                </div>
              )
            })}
  
          </div>
        </div>
      </>
    );
  }
}

export default App;

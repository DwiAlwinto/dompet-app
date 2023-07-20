import React from "react";
import Modal from 'react-bootstrap/Modal';


//imi buat modal 
class ModalCreate extends React.Component {
    constructor(){
      super();

      this.state = {
        show : false,
        deskripsi : '',
        nominal : 0,
        tanggal : '',
        category : ''
      }
        //ini untuk binding (kalau tidak akan error)
      this.handleClose = this.handleClose.bind(this);
      this.handleShow = this.handleShow.bind(this);
      //kita baidling handleChange
      this.handleChange = this.handleChange.bind(this);

      //baind
      this.tambahItem = this.tambahItem.bind(this);

    }

    handleClose() {
      this.setState({
        show : false
      })
    }

    handleShow() {
      this.setState({
        show : true,
        category : this.props.category
      })
    }

    handleChange(event){
      //buat masukan form
      this.setState({
        [event.target.name] : event.target.value

      })
    }

    tambahItem(){
      const Data = {
        deskripsi : this.state.deskripsi,
        //nominal : this.state.nominal,
         //mengubah string ke number
        nominal : parseInt(this.state.nominal), //parsentIn (untuk merubah string ke number)
        tanggal : this.state.tanggal,
        category : this.state.category
      }

      //ini tampung tambahTransaksi
      const  tmbTransak = this.props.action;
       tmbTransak(Data); 

      this.setState({
        show : false
      })
    }


  

    render() {
      return (
      <>
          <button onClick={this.handleShow} className={this.props.tombol}>{this.props.text} <i className={this.props.icon}></i></button>
            <Modal show={this.state.show} onHide={this.handleClose}>

              <Modal.Header closeButton>
                <Modal.Title>{this.props.modalHeading}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                      <div className="mb-3">
                        <label className="form-label">Deskripsi</label>
                        <input type="text" 
                        className="form-control"  
                        placeholder="Masukan Deskripsi" 
                        name="deskripsi"
                        value={this.state.deskripsi}
                        onChange={this.handleChange} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Nominal</label>
                        <input type="number" 
                        className="form-control"  
                        placeholder="Masukan Nominal" 
                        name="nominal"
                        value={this.state.nominal}
                        onChange={this.handleChange} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Tanggal</label>
                        <input type="date" 
                        className="form-control"  
                        placeholder="Masukan Tanggal" 
                        name="tanggal"
                        value={this.state.tanggal}
                        onChange={this.handleChange} />
                      </div>

                      {/* <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input type="text" 
                        className="form-control"  
                        placeholder="Masukan Deskripsi" 
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange} />
                      </div> */}
                      <div >
                        {/* <label className="form-label">Category</label> */}
                        <input type="hidden" 
                        className="form-control"  
                        placeholder="Masukan Deskripsi" 
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange} />
                      </div>
              </Modal.Body>
              <Modal.Footer>
                
                <button className={this.props.tombol} onClick={this.tambahItem}>
                  Save
                </button>
              </Modal.Footer>
            </Modal>
      </>
      )
    }
}

export default ModalCreate;
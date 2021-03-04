import React from "react";

const Mahasiswa = (props) => {
    return(
        <div className="blog">
                <div className="gambar">
                    <img src="http://placeimg.com/80/80/people" alt="Gambar Tumbnail"/>
                </div>
                <div className="konten">
                    <div className="nama">{props.Nama}</div>
                    <p className="nim">{props.Nim}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapus(props.idBlog)}>Hapus</button>
                </div>
            </div>
    )
}

export default Mahasiswa;
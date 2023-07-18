import React, { useState } from 'react';
import Modal from 'react-modal';
import img1 from '../assets/2.jpeg';
import img2 from '../assets/4.jpeg';
import img3 from '../assets/5.jpeg';
import img4 from '../assets/6.jpeg';
import img5 from '../assets/1.jpeg';
import img6 from '../assets/8.jpeg';
import img7 from '../assets/9.jpeg';
import img8 from '../assets/3.jpeg';
import img9 from '../assets/7.jpeg';

export default function Pics() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImg(null);
    setModalOpen(false);
  };

  return (
    <div className='container-flex m-5'>
      <h3>Gallery</h3>
      <div className='row'>
        <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
          <img
            src={img1} alt='gal1'
            className='w-100 shadow-1-strong rounded mb-4 img-thumbnail'
            onClick={() => openModal(img1)}
          />
          <img
            src={img2} alt='gal2'
            className='w-100 shadow-1-strong rounded mb-4 img-thumbnail'
            onClick={() => openModal(img2)}
          />
        </div>

        <div className='col-lg-4 mb-4 mb-lg-0'>
          <img
            src={img4} alt='gal4'
            className='w-100 shadow-1-strong rounded mb-4 img-thumbnail'
            onClick={() => openModal(img4)}
          />
          <img
            src={img6} alt='gal6'
            className='w-100 shadow-1-strong rounded mb-4 img-thumbnail'
            onClick={() => openModal(img6)}
          />
        </div>

        <div className='col-lg-4 mb-4 mb-lg-0'>
          <img
            src={img3} alt='gal3'
            className='w-100 shadow-1-strong rounded mb-4 img-thumbnail'
            onClick={() => openModal(img3)}
          />
          <img
            src={img7} alt='gal7'
            className='w-100 shadow-1-strong rounded mb-4 img-thumbnail'
            onClick={() => openModal(img7)}
          />
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-4 mb-4 mb-lg-0'>
          <img
            src={img5} alt='gal5'
            className='w-100 shadow-1-strong rounded mb-4 img-thumbnail'
            onClick={() => openModal(img5)}
          />
        </div>
        <div className='col-lg-4 mb-4 mb-lg-0'>
          <img
            src={img9} alt='gal9'
            className='w-100 shadow-1-strong rounded mb-4 img-thumbnail'
            onClick={() => openModal(img9)}
          />
        </div>
        <div className='col-lg-4 mb-4 mb-lg-0'>
          <img
            src={img8} alt='gal8'
            className='w-100 shadow-1-strong rounded mb-4 img-thumbnail'
            onClick={() => openModal(img8)}
          />
        </div>
      </div>

      {isModalOpen && (
        <Modal imgSrc={selectedImg} closeModal={closeModal} />
      )}
    </div>
  );
}

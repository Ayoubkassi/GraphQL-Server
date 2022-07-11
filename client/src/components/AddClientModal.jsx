import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';

const AddClientModal = () => {
  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div className="d-flex align-items-center">
          <FaUser className="icon"/>
          <div>Add Client</div>
        </div>
      </button>

      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Client</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">name</label>
                <input type="text" className="form-control" id="name" />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>

    </>
  );
}

export default AddClientModal;

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputField from '../input';
import Dropdown from '../dropdown';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
}

export default function OnboardModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const state = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"];
  const handleOptionSelect = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <div className=' '>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="font-serif font-semibold relative inline-block align-bottom bg-white rounded-large px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-[512px] sm:p-6">
              <div >
                <div className='mb-2'>
                  <InputField name={''} id={''} label={'Full Name'} type={'text'} />
                </div>
                <Dropdown label={'State'} options={state} onSelect={handleOptionSelect} />
              </div>
              <div className="mt-5 sm:mt-4  sm:pl-4 sm:flex">
                <button type="button" className="inline-flex justify-center w-full rounded-medium border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-black  sm:w-auto sm:text-sm">Next</button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-medium border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Back</button>
              </div>

            </div>
          </div>
        </div>

      </Modal>
    </div>
  );
}
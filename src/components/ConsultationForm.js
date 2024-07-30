import React, { useState } from 'react';
import Section from '../components/Section';
import whiteArrow from '../assets/images/whiteArrow.png';

const ConsultationForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const thankYouLink = 'https://mittal-plastomet.web.app/thank-you';

  function Submit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formEle = document.querySelector('form');
    const formData = new FormData(formEle);
    console.log('Selected Option: ', selectedOption);
    formData.append('Bills', selectedOption);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    fetch(
      'https://script.google.com/macros/s/AKfycbz3yuC7lNUnleQvL8Gky9sX6D2jvm-abrNSvXFLlRJFIHdoc2qpT_eWQEocxJMIpPgI/exec',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => {
        console.log('Submitted');
        formEle.reset();
        setSelectedOption('');
        setIsSubmitted(true);
        window.location.replace(thankYouLink);
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      })
      .finally(() => {
        clearTimeout(timeout);
        setIsLoading(false);
      });
  }

  return (
    <Section>
      <div className='w-[540px] h-[550px] mt-[25px] sm:mt-0 sm:relative sm:bottom-60 sm:left-4 sm:w-11/12 bg-cyan-600 rounded-2xl'>
        <form className='form pt-12 pl-10 mr-10' onSubmit={Submit}>
          <div className='relative group'>
            <input
              type='text'
              id='Name'
              required
              className='w-[410px] sm:w-fit pb-1 bg-cyan-600 text-white font-semibold text-sm peer outline-none border-b-[1px] border-neutral-200'
              autoComplete='off'
              name='Name'
            ></input>
            <label
              htmlFor='Name'
              className='sm:text-sm font-normal text-white transform transition-all absolute top-0 left-0 h-full flex items-center group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0 cursor-text'
            >
              Full Name<span className='font-normal'>*</span>
            </label>
          </div>

          <div className='relative group top-7'>
            <input
              type='text'
              id='Number'
              required
              className='w-[410px] sm:w-fit bg-cyan-600 text-white font-semibold pb-1 text-sm peer outline-none border-b-[1px] border-neutral-200'
              autoComplete='off'
              name='Number'
            ></input>
            <label
              htmlFor='Number'
              className='sm:text-sm font-normal text-white transform transition-all absolute top-0 left-0 h-full flex items-center group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0 cursor-text'
            >
              Contact Number<span className='font-normal'>*</span>
            </label>
          </div>

          <div className='relative group top-14'>
            <label
              htmlFor='Bills'
              className='sm:text-sm font-normal text-white block mb-2'
            >
              Monthly Electricity Bills<span className='font-normal'>*</span>
            </label>
            <div
              id='Bills'
              className='grid grid-cols-3 gap-y-3 gap-x-0 sm:grid-cols-2'
            >
              {[
                'Less than ₹15000',
                '₹15000 - ₹30000',
                '₹30000 - ₹50000',
                '₹50000 - ₹80000',
                'Above 80000',
              ].map((option, index) => (
                <div
                  key={option}
                  className={`w-[125px] h-[40px] rounded-sm text-sm flex items-center justify-center border-[1px] cursor-pointer sm:text-xs sm:w-auto sm:ml-1 sm:mr-1  ${
                    selectedOption === option
                      ? 'bg-cyan-700 text-white'
                      : 'bg-cyan-600 text-white'
                  } `}
                  onClick={() => setSelectedOption(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          <div className='relative group top-20'>
            <input
              type='text'
              id='City'
              required
              className='w-[410px] sm:w-fit bg-cyan-600 pb-1 text-white font-semibold text-sm peer outline-none border-b-[1px] border-neutral-200'
              autoComplete='off'
              name='City'
            ></input>
            <label
              htmlFor='City'
              className='sm:text-sm font-normal text-white transform transition-all absolute top-0 left-0 h-full flex items-center group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0 cursor-text'
            >
              City<span className='font-normal'>*</span>
            </label>
          </div>

          <div className='relative group top-28'>
            <input
              type='text'
              id='Email'
              required
              className='w-[410px] sm:w-fit bg-cyan-600 pb-1 text-white font-semibold text-sm peer outline-none border-b-[1px] border-neutral-200'
              autoComplete='off'
              name='Email'
            ></input>
            <label
              htmlFor='Email'
              className='sm:text-sm font-normal text-white transform transition-all absolute top-0 left-0 h-full flex items-center group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0 cursor-text'
            >
              Email<span className='font-normal'>*</span>
            </label>
          </div>
          <button
            type='submit'
            className='w-[100px] h-[35px] rounded-full mt-[35%] sm:mt-[60%] bg-indigo-900 flex relative'
            disabled={isLoading} // Disable button while loading
          >
            {isLoading && (
              <div className='absolute left-[40px] top-[7px]'>
                <div className='loader'></div>
              </div>
            )}
            <div
              className={`text-white ml-4 mt-1 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              Submit
            </div>
            {!isLoading && (
              <img
                src={whiteArrow}
                className='h-[8px] w-auto mt-[13.5px] ml-1'
              />
            )}
          </button>
          {isSubmitted && (
            <p className='text-green-400 sm:text-sm mt-2'>
              Form submitted successfully!
            </p>
          )}
        </form>
      </div>
    </Section>
  );
};

export default ConsultationForm;

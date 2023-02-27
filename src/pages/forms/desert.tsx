import Input from '@/components/forms/Input';
import TextArea from '@/components/forms/TextArea';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import React, { useState } from 'react';
import { RiUser3Fill } from 'react-icons/ri';
import Image from 'next/image';
import Calendar from '@/components/forms/Calendar';
import PhotoInput from '@/components/forms/Photos';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import SuccessModal from '@/components/modal/SuccessModal';
import FailedModal from '@/components/modal/FailedModal';

type FormData = {
  checkboxValue: boolean;
};

export default function Desert() {
  const methods = useForm({
    mode: 'onTouched',
  });

  const [isChecked, setIsChecked] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      checkboxValue: false,
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: unknown) => {
    {
      setShowSuccessModal(!showSuccessModal);
    }
    // if(data){
    //   {setShowSuccessModal(!showSuccessModal);}
    // }
    // else setShowFailedModal(!showFailedModal)

    // eslint-disable-next-line no-console
    console.log(errors);
    console.log({ data });
    return;
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Desert | Tour De World</title>
          <meta name='TourDeWorld' content='' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='layout min-h-screen pt-20'>
          <Image
            alt='blob'
            src='/blob.svg'
            width={700}
            height={800}
            className='fixed -z-10 right-8 -bottom-32'
          />
          <Image
            alt='blob'
            src='/blobsm.svg'
            width={800}
            height={800}
            className='fixed -z-10 top-12'
          />
          <div className='flex relative flex-col p-12 rounded-[12px] pt-6 items-center'>
            <h1 className='text-[60px] text-center pb-14'>
              Share Your Experiences
            </h1>
            <div className='flex flex-col pt-20 pb-9 border-[3px] bg-[#260D45] border-[#6E4C99] rounded-[18px] w-[500px] items-center'>
              <RiUser3Fill className='absolute w-[70px] h-[70px] top-[135px] z-10 text-[#E6D2FF]' />
              <div className='absolute border-[3px] border-[#957BB6] rounded-full w-[90px] h-[90px] bg-[#260D45] top-32'></div>
              <FormProvider {...methods}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='flex flex-col gap-y-6'
                >
                  <div className='flex gap-x-9 justify-between'>
                    <Input
                      id='firstName'
                      label='Name'
                      placeholder='First Name'
                      validation={{
                        required: 'This is required',
                        minLength: {
                          value: 4,
                          message: 'Minimum 4 characters',
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: 'Name Format not Valid',
                        },
                      }}
                    />
                    <div className='pt-6'>
                      <Input
                        id='lastName'
                        placeholder='Last Name'
                        validation={{
                          pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'Name Format not Valid',
                          },
                        }}
                      />
                    </div>
                  </div>
                  {/* <div className="flex items-center">
                    <Controller
                      name="checkboxValue"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="checkbox"
                          {...field}
                          className="h-5 w-5 text-blue-600"
                        />
                      )}
                    />
                    <label htmlFor="checkboxValue" className="ml-2 block text-sm text-gray-900">
                      Checkbox Label
                    </label>
                  </div> */}
                  {isChecked && (
                    <>
                      <Input
                        id='email'
                        label='Email'
                        placeholder='example@example.com'
                        type='email'
                        validation={{
                          required: 'This is required',
                        }}
                      />
                      <Input
                        id='telephone'
                        label='Telephone'
                        type='tel'
                        placeholder='+62xxxxxxxxxxx'
                        validation={{
                          required: 'This is required',
                          minLength: {
                            value: 10,
                            message: 'Min length must be 10',
                          },
                          pattern: {
                            value: /[0-9]/,
                            message: 'Number only',
                          },
                        }}
                      />
                    </>
                  )}
                  <div>
                    <label>
                      <Controller
                        name='checkboxValue'
                        control={control}
                        render={({ field }) => (
                          <input
                            type='checkbox'
                            {...field}
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                          />
                        )}
                      />
                      Want us to send information?
                    </label>
                  </div>

                  <PhotoInput
                    id='photo'
                    label='Photo'
                    validation={{}}
                    // validation={{ required: 'Photo must be filled' }}
                  />
                  <Calendar
                    id='date'
                    label='Date'
                    validation={{
                      required: 'Date must be filled',
                      valueAsDate: true,
                    }}
                    placeHolder='dd/mm/yyyy'
                  />
                  <TextArea
                    id='story'
                    label='Description'
                    validation={{
                      required: 'This is required',
                    }}
                  />
                  <button
                    type='submit'
                    className='bg-[#957BB6] rounded-xl p-3 hover:bg-[#493b5c]'
                  >
                    Submit
                  </button>
                  {showSuccessModal && (
                    <SuccessModal
                      onClose={() => setShowSuccessModal(false)}
                      message={''}
                    />
                  )}
                  {/* {showFailedModal && (
                <FailedModal
                  message='Something went wrong. Please try again later.'
                  onClose={() => setShowFailedModal(false)}
                />
              )} */}
                </form>
              </FormProvider>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

'use client';

import React, { useState } from 'react'

import { preview } from '../../../../public/assets/dalle';
import { getRandomPrompt } from '@/utils/dalle';
import { FormField, Loader } from '@/components/dalle';
import Image from 'next/image';

const CreatePost = () => {
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });
  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)

  const hanldeSubmit = () => {

  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSurpriseMe = (e) => {
    const randomPrompt = getRandomPrompt();
    setForm({ ...form, prompt: randomPrompt})
  }
  
  const generateImage = async (e) => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('/api/v1/dalle/openai', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: form.prompt })
        });

        const data = await response.json();

        console.log(data);

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}`});
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('please enter a prompt');
    }
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Create
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
          Create imaginative and visually stunning images through DALL-E AI and share them with the Community
        </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={hanldeSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
            labelName="Your name"
            type="text"
            name="name"
            handleChange={handleChange}
            placeholder="John Doe"
            value={form.name}
          />
          <FormField 
            labelName="Prompt"
            type="text"
            name="prompt"
            handleChange={handleChange}
            placeholder="3D render of a cute tropical fish in an aquarium on a dark blue background"
            value={form.prompt}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className='relative bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo ? (
              <Image 
                src={form.photo}
                alt='form_photo'
                width={100}
                height={100}
                className='w-full h-full object-contain'
              />
            ) :  (
              <Image 
                src={preview}
                alt='preview'
                className='w-9/12 h-9/12 object-contain opacity-40'
              />
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5 flex gap-5'>
            <button
              type='button'
              onClick={generateImage}
              className='text-white bg-green-700 font-medium text-sm rounded-md w-full sm:w-auto px-5 py-2.5 text-center'
            >
              {generatingImg ? 'Generating...' : 'Generate'}
            </button>
        </div>

        <div className='mt-10'>
          <p className='mt-2 text-[#666e75] text-[14px]'>
            Once you have created the image you want, you can share it with others in the community
          </p>
          <button
              type='button'
              onClick={generateImage}
              className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            >
              {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost
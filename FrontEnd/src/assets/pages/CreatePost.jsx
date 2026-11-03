import React from 'react';
import axios from 'axios';

const CreatePost = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const file = form.image.files[0];
    const caption = form.caption.value.trim();

    if (!file) {
      alert('Please select an image');
      return;
    }

    if (!caption) {
      alert('Please enter a caption');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('caption', caption);

    try {
      const res = await axios.post('http://localhost:3000/create-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(res.data);
      alert('Post created successfully');
      form.reset();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Failed to create post');
    }
  };

  return (
    <section className='create-post h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl font-bold bg-gray-700 rounded-2xl text-white p-3 mb-0.5'>Create Post</h1>
      <form
        onSubmit={handleSubmit}
        encType='multipart/form-data'
        className='flex flex-col items-center bg-gray-700 rounded-2xl gap-6 p-4 text-white'
      >
        <input className='border border-gray-300 rounded py-2 px-4' type='file' name='image' accept='image/*' />
        <input className='border border-gray-300 rounded py-2 px-4' type='text' name='caption' placeholder='Enter caption' required />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>
          Create Post
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
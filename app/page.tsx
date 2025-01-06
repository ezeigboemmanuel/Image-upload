"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [image, setImage] = useState<File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const onSubmit = () => {
    if (!image) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    fetch("http://localhost:3000/api/upload-image", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Response was not ok.");
      }
      return response.json();
    });
  };
  return (
    <div className="p-10">
      <div className="w-full">
        <input type="file" accept="image/*" onChange={handleChange} />
      </div>

      <button
        onClick={onSubmit}
        className="mt-4 bg-black text-white p-2 font-semibold rounded-md hover:bg-gray-600 text-sm"
      >
        Upload Image
      </button>

      <div className="mt-4">
        <h1 className="text-2xl font-semibold">All Foods</h1>
      </div>
    </div>
  );
}

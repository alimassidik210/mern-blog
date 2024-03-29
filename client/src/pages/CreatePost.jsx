import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [imageUploadProgess, setImageUploadProgess] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleImageUpload = async () => {
    try {
      if (!file) {
        setImageUploadError("please select an image!");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      console.log(storageRef);
      const uploadTask = uploadBytesResumable(storageRef, file);
      console.log(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progess =
            (snapshot.bytesTransferred + snapshot.totalBytes) * 100;
          setImageUploadProgess(progess.toFixed());
        },
        (error) => {
          setImageUploadError("Imaga upload failed");
          setImageUploadProgess(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadError(null);
            setImageUploadProgess(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("image upload failed");
      setImageUploadProgess(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-3xl min-h-screen mx-auto border">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>

      <form className="flex flex-col gap-4 border" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value={"uncategorized"}>Select a category</option>
            <option value={"fiqih-ibadah"}>Fiqih Ibadah</option>
            <option value={"muamalah"}>Muamalah</option>
            <option value={"aqidah"}>Aqidah</option>
            <option value={"manhaj"}>Manhaj</option>
            <option value={"tajwid"}>Tajwid</option>
            <option value={"qur'an-hadist"}>Qur'an & Hadist</option>
            <option value={"sirah"}>Sirah</option>
            <option value={"nasehat"}>Nasehat</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone={"purpleToBlue"}
            size={"sm"}
            onClick={handleImageUpload}
            disabled={imageUploadProgess}
          >
            {imageUploadProgess ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgess}
                  text={`${imageUploadProgess || 0}%`}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>
        {imageUploadError && (
          <Alert color={"failure"} className="my-3">
            {imageUploadError}
          </Alert>
        )}
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          placeholder="write something ..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type="submit" gradientDuoTone={"purpleToPink"}>
          Publish
        </Button>
        {publishError && (
          <Alert color={"failure"} className="mt-5">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}

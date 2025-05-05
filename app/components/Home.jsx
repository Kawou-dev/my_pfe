"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "./Slider";
import useVacance from "../hooks/useVacance";
import { AiFillPicture } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { FiUploadCloud, FiPlus, FiShare2 } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

const Home = () => {
  const [pictures, setPictures] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [inputs, setInputs] = useState(
    { cityName: "", experience: "", images: [] , publicId : ""  });


  const [openPopupVac, setOpenPopupVac] = useState(false);
  const { loading, vacances, fetchVacance, addVacance, setFavori, onDelete } = useVacance();

  
  useEffect(() => { 
    fetchVacance(); 
  }, []);

  const togglePopup = () => setOpenPopupVac(prev => !prev);

  const handleAdd = async () => {
    if (!inputs.cityName || pictures.length === 0) return;
    await addVacance(inputs);
    setInputs({ cityName: "", experience: "", images: [] , publicId : "" });
    setPictures([]);
    setOpenPopupVac(false);
  };

  const handleImageChange = async (e) => {
    const files = e.target.files;
    if (!files.length) return;

    setUploading(true);
    const uploads = [];

    for (let i = 0; i < Math.min(files.length, 3); i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      formData.append("upload_preset", "todo_test");
      formData.append("cloud_name", "dvnsrfsic");

      try {
        // const { data } = await axios.post("https://api.cloudinary.com/v1_1/dvnsrfsic/image/upload", formData);
        // uploads.push(data.secure_url);
        const response = await axios.post("https://api.cloudinary.com/v1_1/dvnsrfsic/image/upload", formData);
        const {secure_url , public_id} = response.data ;   
        uploads.push(secure_url);
        setInputs({...inputs , publicId : public_id}) ;
    
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }
    setPictures(uploads);
    
    setInputs(prev => ({ ...prev, images: uploads }));
    setUploading(false);
  };

  const handleShareTask = ({ cityName, images }) => {
    const message = `Vacance à : *${cityName}*\n\n${images.map((url, i) => `*🖼️ Image ${i + 1}* : ${url}`).join("\n")}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleSetFavori = async(id) => {
          await setFavori(id)
          console.log(id) ; 
  }
  const handleDeleteVac = async(publicId) => {
      await onDelete(publicId)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Mes vacances</h1>
        <button onClick={togglePopup} className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all">
          <FiPlus size={20} />
          <span className="hidden sm:inline">Ajouter vac</span>
          <span className="sm:hidden">Add</span>
        </button>
      </header>

      {/* Popup */}
      {openPopupVac && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Nouvelle vacance</h2>
              <button onClick={togglePopup} className="text-gray-500 hover:text-red-500 transition">
                <IoIosCloseCircle size={28} />
              </button>
            </div>

            <div className="space-y-4">
              <Input label="Lieu" type="text" value={inputs.cityName} onChange={e => setInputs({ ...inputs, cityName: e.target.value })} placeholder="où etes-vous allez ?" />
              <Textarea label="Experience" value={inputs.experience} onChange={e => setInputs({ ...inputs, experience: e.target.value })} placeholder="Decrivez votre voyage..." />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photos (max 3)</label>
                <label className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-400 hover:bg-green-50 transition">
                  <FiUploadCloud size={32} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Cliquez ou glissez vos photos</span>
                  <input type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </div>

              {pictures.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {pictures.map((img, index) => (
                    <img key={index} src={img} alt={`Preview ${index}`} className="w-full h-24 object-cover rounded-md" />
                  ))}
                </div>
              )}

              <button onClick={handleAdd} disabled={uploading || !inputs.cityName || pictures.length === 0}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition ${uploading || !inputs.cityName || pictures.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}>
                {uploading ? "Uploading..." : "Ajouter"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Vacations */}
      <main>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loading />
          </div>
        ) : vacances.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vacances.map((vac, index) => (
              <VacationCard key={index} vac={vac} onDelete={() => handleDeleteVac(vac.publicId)}   onSet= { () => handleSetFavori(vac._id) } onShare={() => handleShareTask(vac)} />
            ))}
          </div>
        ) : (
          <EmptyState onAdd={togglePopup} />
        )}
      </main>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input {...props} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea {...props} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[100px]" />
  </div>
);

// const VacationCard = ({ vac, onShare }) => (
//   <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//     <div className="h-48">
//       <Slider images={vac?.images} />
//     </div>
//     <div className="p-4">
//       <h3 className="text-lg font-semibold text-gray-800 mb-1">{vac?.cityName}</h3>
//       {vac.experience && <p className="text-gray-600 text-sm mb-3 line-clamp-2">{vac.experience}</p>}
//       <button onClick={onShare} className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition">
//         <FaWhatsapp size={18} />
//         <span>Share</span>
//       </button>
//     </div>
//   </div>
// );

const VacationCard = ({ vac, onShare, onSet , onDelete }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="h-48">
      {/* <Slider   images={vac?.images} /> */}
      <Slider   vac={vac} />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{vac?.cityName}</h3>
      {vac.experience && <p className="text-gray-600 text-sm mb-3 line-clamp-2">{vac.experience}</p>}
       <div className="flex justify-between items-center">

        <div className="flex items-center gap-1 ">
          {/* <BiLike className="text-md cursor-pointer text-blue-700" />  */}
          <MdOutlineFavoriteBorder onClick={onSet}  className={`text-xl cursor-pointer ${vac?.favori ? 'bg-blue-500 rounded  ': ''}  `}  />
          <p className="text-md">Favori</p>
        </div>
          
        <div className="flex items-center gap-0.5 ">
         <FaWhatsapp onClick={onShare}    className="text-xl cursor-pointer text-green-600 " />
         <p className="text-md">Envoyer</p>
      
        </div>
         <button className="flex items-center  rounded-lg">
          <IoTrashOutline onClick={onDelete}  className="text-red-400 text-xl cursor-pointer " />
             {/* <FiShare2 className="mr-1 text-md cursor-pointer" />  */}
        </button>
      
      
       </div>
    </div>
  </div>
);

const EmptyState = ({ onAdd }) => (
  <div className="text-center py-12">
    <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
      <AiFillPicture size={40} className="text-gray-400" />
    </div>
    <h3 className="text-lg font-medium text-gray-700">Pas de vacance</h3>
    <p className="text-gray-500 mt-1">Ajouter des souvenirs de vos vacances</p>
    <button onClick={onAdd} className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
        Immortalisez vos vacances
    </button>
  </div>
);

const Loading = () => (
  <div className="flex space-x-2">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="w-8 h-8 rounded-full animate-pulse"
        style={{ backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"][i % 5], animationDelay: `${i * 0.1}s` }}>
      </div>
    ))}
  </div>
);

export default Home;

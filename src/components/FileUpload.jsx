import axios from "axios";

function FileUpload({ addMessage }) {
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "http://localhost:5000/analyze-image",
      formData
    );

    addMessage(res.data.reply, "ai");
  };

  return (
    <input
      type="file"
      onChange={handleFile}
      className="text-sm text-gray-500"
    />
  );
}

export default FileUpload;
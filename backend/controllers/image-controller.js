import File from "../models/file.js";

export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.original,
  };
  try {
    const file = await File.create(fileObj);
    res.status(202).json({ path: `http://localhost:5000/file/${file._id}` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const downloadImage = async (req, res) => {
  try {
    const file = await File.findById(req.params);

    file.downloadContent++;

    await file.save();
    res.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    return res.status(200).json({ error: error.message });
  }
};

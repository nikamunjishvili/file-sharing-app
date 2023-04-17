import { useEffect, useRef, useState } from "react";
import "./index.css";
import { uploadFile } from "./services/api";

function App() {
  const inputFileRef = useRef<any>(null);
  const [file,setFile] = useState<any>('');
  const [result,setResult] = useState('');

  const onUploadClick = () => {
    inputFileRef.current.click();
  }

  useEffect(() => {
    const getImage = async () => {
      if(file){
        const data = new FormData();
        data.append('name',file.name)
        data.append('file',file)
      }
      let response = await uploadFile(data);
      setResult(response.path)
    }
    getImage();
  },[file])
  
  const logo =
    "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFubmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
  return (
    <div className="bg-[darkred] h-screen overflow-hidden flex">
      <img className="w-[30%] h-screen" src={logo} alt="banner" />
      <div className="w-[600px] h-[400px] bg-white m-auto flex flex-col items-center">
        <h1 className="text-[40px] text-[#445A6F] mt-10">File Sharing App</h1>
        <p>Upload and share the download link.</p>
        <button className="w-[150px] h-[40px] rounded-lg bg-[darkred] text-white text-[20px] mt-10" onClick={() => onUploadClick()}>Upload</button>
        <input className="hidden" type="file" ref={inputFileRef} onChange={(e: any) => setFile(e.target.files[0])} />
        <a href={result} target="_blank" rel="noreferrer">{result}</a>
      </div>
    </div>
  );
}

export default App;

function data(): void {
  throw new Error("Function not implemented.");
}


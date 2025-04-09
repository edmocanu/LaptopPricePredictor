import { useState } from "react";

const LaptopForm = ({ onSubmit }) => {
  const [Company, setCompany] = useState("");
  const [Product, setProduct] = useState("");
  const [TypeName, setTypeName] = useState("");
  const [ScreenSize, setScreenSize] = useState("");
  const [Resolution, setResolution] = useState("");
  const [CPU, setCpu] = useState("");
  const [RAM, setRam] = useState("");
  const [Memory, setMemory] = useState("");
  const [GPU, setGpu] = useState("");
  const [OS, setOs] = useState("");
  const [Weight, setWeight] = useState("");
  const [formData, setFormData] = useState({
    Company : "",
    Product : "",
    TypeName : "",
    ScreenSize : "",
    Resolution : "",
    CPU : "",
    RAM : "",
    Memory : "",
    GPU : "",
    OS : "",
    Weight : "",
  });


  const companies = ['Acer', 'Apple', 'Asus', 'Chuwi', 'Dell', 'Fujitsu', 'Google', 'HP', 'Huawei', 'LG', 'Lenovo', 'MSI', 'Mediacom', 'Microsoft', 'Razer', 'Samsung', 
    'Toshiba', 'Vero', 'Xiaomi'];
  const resolutions = ['1366x768', '1440x900', '1600x900', '1920x1080', '2560x1440', '4K Ultra HD / Touchscreen 3840x2160', '4K Ultra HD 3840x2160', 'Full HD / Touchscreen 1920x1080',
    'Full HD 1920x1080', 'IPS Panel 1366x768', 'IPS Panel 2560x1440', 'IPS Panel 4K Ultra HD / Touchscreen 3840x2160', 'IPS Panel 4K Ultra HD 3840x2160',
    'IPS Panel Full HD / Touchscreen 1920x1080', 'IPS Panel Full HD 1366x768', 'IPS Panel Full HD 1920x1080', 'IPS Panel Full HD 1920x1200', 'IPS Panel Full HD 2160x1440',
    'IPS Panel Full HD 2560x1440', 'IPS Panel Quad HD+ / Touchscreen 3200x1800', 'IPS Panel Quad HD+ 2560x1440', 'IPS Panel Quad HD+ 3200x1800', 'IPS Panel Retina Display 2304x1440',
    'IPS Panel Retina Display 2560x1600', 'IPS Panel Retina Display 2736x1824', 'IPS Panel Retina Display 2880x1800', 'IPS Panel Touchscreen / 4K Ultra HD 3840x2160',
    'IPS Panel Touchscreen 1366x768', 'IPS Panel Touchscreen 1920x1200', 'IPS Panel Touchscreen 2400x1600', 'IPS Panel Touchscreen 2560x1440', 'Quad HD+ / Touchscreen 3200x1800',
    'Quad HD+ 3200x1800', 'Touchscreen / 4K Ultra HD 3840x2160', 'Touchscreen / Full HD 1920x1080', 'Touchscreen / Quad HD+ 3200x1800', 'Touchscreen 1366x768', 'Touchscreen 2256x1504',
    'Touchscreen 2400x1600', 'Touchscreen 2560x1440'];
    const memories = ['1.0TB HDD', '1.0TB Hybrid', '128GB Flash Storage', '128GB HDD', '128GB SSD', '128GB SSD +  1TB HDD', '128GB SSD +  2TB HDD', '16GB Flash Storage',
        '16GB SSD', '180GB SSD', '1TB HDD', '1TB HDD +  1TB HDD', '1TB SSD', '1TB SSD +  1TB HDD', '240GB SSD', '256GB Flash Storage', '256GB SSD', '256GB SSD +  1.0TB Hybrid',
        '256GB SSD +  1TB HDD', '256GB SSD +  256GB SSD', '256GB SSD +  2TB HDD', '256GB SSD +  500GB HDD', '2TB HDD', '32GB Flash Storage', '32GB HDD', '32GB SSD', '500GB HDD',
        '508GB Hybrid', '512GB Flash Storage', '512GB SSD', '512GB SSD +  1.0TB Hybrid', '512GB SSD +  1TB HDD', '512GB SSD +  256GB SSD', '512GB SSD +  2TB HDD', '512GB SSD +  512GB SSD',
        '64GB Flash Storage', '64GB Flash Storage +  1TB HDD', '64GB SSD', '8GB SSD'];
    const oss = ['Android', 'Chrome OS', 'Linux', 'Mac OS X', 'Windows 10', 'Windows 10 S', 'Windows 7', 'macOS'];
    
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block mb-1 capitalize">Company: </label>
        <select value={Company} 
            onChange={
            (e) => {
                setFormData(prev => ({ ...prev, Company : e.target.value}));
                setCompany(e.target.value);
            }} 
            className="border p-2 w-full">
            <option value=""></option>
            {companies.map((option) => (
                <option key={option} value={option}>
                    {option}
                 </option>
             ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 capitalize">Product: </label>
        <input 
            type="text" 
            value={Product} 
            onChange={
            (e) => {
                setFormData(prev => ({ ...prev, Product : e.target.value}));
                setProduct(e.target.value);
            }} 
            className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 capitalize">Type Name: </label>
        <input 
            type="text" 
            value={TypeName} 
            onChange={
                (e) => {
                    setFormData(prev => ({ ...prev, TypeName : e.target.value}));
                    setTypeName(e.target.value);
                }}  
            className="border p-2 w-10"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 capitalize">Screen Size (inches): </label>
        <input 
            type="text" 
            value={ScreenSize} 
            onChange={
                (e) => {
                    setFormData(prev => ({ ...prev, ScreenSize : parseFloat(e.target.value)}));
                    setScreenSize(e.target.value);
                }}  
            className="border p-2 w-10"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 capitalize">Resolution: </label>
        <select value={Resolution}
         onChange={
            (e) => {
                setFormData(prev => ({ ...prev, Resolution : e.target.value}));
                setResolution(e.target.value);
            }} 
        className="border p-2 w-full">
            <option value=""></option>
            {resolutions.map((option) => (
                <option key={option} value={option}>
                    {option}
                 </option>
             ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 capitalize">CPU: </label>
        <input 
            type="text" 
            value={CPU} 
            onChange={
                (e) => {
                    setFormData(prev => ({ ...prev, CPU : e.target.value}));
                    setCpu(e.target.value);
                }}  
            className="border p-2 w-10"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 capitalize">RAM (GB): </label>
        <input 
            type="text" 
            value={RAM} 
            onChange={
                (e) => {
                    setFormData(prev => ({ ...prev, RAM : parseFloat(e.target.value)}));
                    setRam(e.target.value);
                }} 
            className="border p-2 w-10"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 capitalize">Memory: </label>
        <select value={Memory} 
        onChange={
            (e) => {
                setFormData(prev => ({ ...prev, Memory : e.target.value}));
                setMemory(e.target.value);
            }} 
            className="border p-2 w-full">
            <option value=""></option>
            {memories.map((option) => (
                <option key={option} value={option}>
                    {option}
                 </option>
             ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 capitalize">GPU: </label>
        <input 
            type="text" 
            value={GPU} 
            onChange={
                (e) => {
                    setFormData(prev => ({ ...prev, GPU : e.target.value}));
                    setGpu(e.target.value);
                }} 
            className="border p-2 w-10"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 capitalize">OS: </label>
        <select value={OS} 
        onChange={
            (e) => {
                setFormData(prev => ({ ...prev, OS : e.target.value}));
                setOs(e.target.value);
            }} 
            className="border p-2 w-full">
            <option value=""></option>
            {oss.map((option) => (
                <option key={option} value={option}>
                    {option}
                 </option>
             ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 capitalize">Weight (kg): </label>
        <input 
            type="text" 
            value={Weight} 
            onChange={
                (e) => {
                    setFormData(prev => ({ ...prev, Weight : parseFloat(e.target.value)}));
                    setWeight(e.target.value);
                }} 
            className="border p-2 w-10"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Predict Price
      </button>
    </form>
  );
};

export default LaptopForm;

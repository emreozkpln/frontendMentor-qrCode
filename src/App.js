import img from "./img/image-qr-code.png"
function App() {
  return (
    <div className="grid place-content-center">
      <div className="bg-white flex flex-col justify-center text-center w-[300px] h-[490px] rounded-lg shadow-md shadow-gray-400 p-3 m-24 gap-5 ">
        <img className="rounded-lg h-[275px] object-cover" src={img} />
        <div className="gap-4 grid">
          <div className="font-bold text-xl">Improve your front-end<br /> skills by building projects</div>
          <div className=" text-gray-500 mb-5">Scan the QR code to visit Frontend <br /> Mentor and take your coding skills to the next level</div>
        </div>
      </div>
    </div>
  );
}

export default App;

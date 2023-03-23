export function Blob({ className = "", ...props }) {
  return (
    <div
      {...props}
      className={`${className} absolute blur-3xl opacity-30 w-96 h-96 rounded-3xl`}
    ></div>
  );
}

export function Blobs() {
  return (
    <>
      <div className="absolute z-10 bottom-64 -left-32">
        <Blob className="bg-purple-600" />
        <Blob className="bg-yellow-600" />
        <Blob className="bg-blue-600" />
      </div>
      <div className="absolute z-10 -top-24 right-60">
        <Blob className="bg-purple-800" />
        <Blob className="bg-yellow-800" />
        <Blob className="bg-blue-800" />
      </div>
      {/* <div className="absolute z-0 bottom-3/4 left-2/4">
        <Blob className="bg-purple-900" />
        <Blob className="bg-yellow-700" />
        <Blob className="bg-blue-600 " />
      </div> */}
    </>
  );
}

// export function Blob({ className = '', ...props }) {
//     return (
//       <div
//         {...props}
//         className={`${className} absolute rounded-3xl blur-3xl opacity-30 w-96 h-96`}
//       />
//     )
//   }

// export function Blobs() {
//     return (
//       <div className='absolute opacity-80'>
//         <Blob className='bg-purple-800 -top-32 -left-32' />
//         <Blob className='bg-yellow-800 -top-32 -left-32' />
//         <Blob className='bg-blue-800 -top-32 -left-32' />
//       </div>
//     )
//   }

import { FaDownload } from "react-icons/fa"


interface Props {
   
}

export const DownloadAlbumPhotos = ({}:Props) => {
   return (
      <>
         <div className="flex gap-[0.5rem] justify-center items-center">
            <FaDownload className="text-xl text-[1.125rem] font-medium" />
            <span className="text-xs font-normal hidden xl:flex tracking-[1px] leading-6">
               DESCARGA
            </span>
         </div>
      </>
   )
}
import { GenerateImagesInAlbum } from "@/utils/Generator/GenerateImagesInAlbum"

interface Props {
   
}

/* const notSimpleFunction = async() => {
   try {
      const pgdt = await GenerateImagesInAlbum('xaasa')
   } catch (error) {
      console.log
   }
} */

export const Test = async( {}:Props) => {
   console.log("TEST COMPONENT")
   const pgdt = await GenerateImagesInAlbum('xaasa')
   console.log("LOOK HERE",pgdt)
   

   return (
      <>
         
      </>
   )
}
interface NavigationLinks {
   next: string | undefined;
   prev: string | undefined;
}

export function getNextPrevLinks (currentId: string, arrayId: string[]):NavigationLinks{
   if(currentId == undefined || arrayId == undefined){
       return  {
           next: undefined,
           prev: undefined
       }
   }
  const ubicacion = arrayId.indexOf(currentId)

  if(ubicacion == -1) {
       return  {
           next: undefined,
           prev: undefined
       }
   }

   if(ubicacion >= arrayId.length){
       return {
           next: undefined,
           prev: arrayId[ubicacion - 1]
       }
   }
   if(ubicacion == 0){
       return {
           next: arrayId[ubicacion + 1],
           prev: undefined
       }
   }

   return {
       next: arrayId[ubicacion + 1],
       prev: arrayId[ubicacion - 1]
   }
}
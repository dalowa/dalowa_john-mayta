import { useState, useEffect } from 'react'

export function useScreenWidth() {
	const isClient = typeof window === 'object'
	const [screenWidth, setScreenWidth] = useState(isClient ? window.innerWidth : 1200)

	useEffect(() => {
		if (!isClient) {
			return
		}

		const handleResize = () => {
			setScreenWidth(window.innerWidth)
		}

		// Agregar evento de escucha para el cambio de tamaño de la pantalla
		window.addEventListener('resize', handleResize)

		// Eliminar el evento de escucha al desmontar el componente
		return () => {
			window.removeEventListener('resize', handleResize)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []) // El segundo argumento de useEffect es un array vacío para que se ejecute solo una vez al montar el componente

	return screenWidth
}

// Uso del hook en un componente
/* function MyComponent() {
  const screenWidth = useScreenWidth();

  return (
    <div>
      <p>Ancho de la pantalla: {screenWidth}</p>
    </div>
  );
}

export default MyComponent; */

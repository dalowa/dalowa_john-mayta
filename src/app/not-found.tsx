import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="bg-secondary-color h-screen antialiased text-slate-300 flex-col gap-5 flex justify-center items-center">
			<h1 className="text-2xl">Página no encontrada</h1>
			<Link className="p-2 bg-color-secondary rounded-xl border-2 border-slate-300" href={'/es'}>
				Volver al Menu principal
			</Link>
		</div>
	)
}

// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
//         <h1 className="text-6xl font-bold">
//           Bienvenido a nuestro Sistema de Automatización de Ventas
//         </h1>
//         <p className="mt-3 text-2xl">
//           Optimiza tus ventas, inventarios y envíos
//         </p>
//         <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
//           <Link href="/contact">
//             <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
//               Contáctanos
//             </button>
//           </Link>
//           <Link href="/search">
//             <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
//               Buscar Productos
//             </button>
//           </Link>
//         </div>
//       </main>
//     </div>
//   )
// }

import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/dashboard')
}
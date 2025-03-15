import Image from 'next/image';
import images1 from '@/app/assets/images/We Heart It.jpg';
import images2 from '@/app/assets/images/dd695dde-a368-4ff3-b0ab-b699fa645d31.jpg';

const products = [
  {
    id: 1,
    name: 'Vestido Blanco Elegante',
    imageSrc: images1,
    price: '$120.00',
  },
  {
    id: 2,
    name: 'Vestido Negro Casual',
    imageSrc: images2,
    price: '$90.00',
  },
  {
    id: 3,
    name: 'Vestido Negro Casual',
    imageSrc: images1,
    price: '$90.00',
  },
  {
    id: 4,
    name: 'Vestido Negro Casual',
    imageSrc: images2,
    price: '$90.00',
  },
  {
    id: 5,
    name: 'Vestido Negro Casual',
    imageSrc: images1,
    price: '$90.00',
  },
  {
    id: 6,
    name: 'Vestido Negro Casual',
    imageSrc: images2,
    price: '$90.00',
  },
  // Add more products as needed
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <header className="bg-[#582B11] text-white p-4">
        <h1 className="text-3xl font-bold">Tienda Sparkly</h1>
      </header>
      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Nuestros Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-[] gap-6">
          {products.map((product) => (
            <div key={product.id} className="border justify-end flex flex-col p-4 rounded-lg shadow-lg">
              <Image
                src={product.imageSrc}
                alt={product.name}
                width={300}
                height={400}
                className="w-full h-auto object-cover "
              />
                <h3 className="text-xl font-semibold mt-4 ">{product.name}</h3>
              <p className="text-gray-700 mt-2 ">{product.price}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-[#582B11] text-white p-4 mt-8">
        <p className="text-center">&copy; 2025 Tienda Sparkly. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
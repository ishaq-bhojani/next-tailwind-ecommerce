import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getData } from "../../../service/womens";

export default function ProductList({ womensCloth }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !womensCloth || !womensCloth.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {womensCloth.map((womens) => (
            <Link key={womens.id} href={`/womensProduct/${womens.id}`}>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    width={1000}
                    height={1000}
                    src={womens.image}
                    alt={womens.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={womens.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {womens.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {womens.category}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {womens.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
   const womensCloth =  getData();
  return {
    props: {
      womensCloth,
    },
  };
}

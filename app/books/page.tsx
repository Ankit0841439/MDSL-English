import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function BooksPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-2">MDSL English Books</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our carefully crafted books are designed to complement our courses and help you master English at your own
          pace.
        </p>

        <div className="flex flex-col items-center justify-center py-8 px-4">
          <div className="relative w-full max-w-2xl h-[400px] mb-8">
            <Image
              src="/images/mdsl-books-stack.png"
              alt="MDSL English Books Collection"
              fill
              className="object-contain"
            />
          </div>

          <div className="text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Books Collection is Coming Soon!</h2>
            <p className="text-gray-600 mb-8">
              We're working hard to bring you a comprehensive collection of English learning books. Our team of expert
              educators is creating high-quality materials that will help you master grammar, vocabulary, and
              communication skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">Explore Our Courses</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3">
                  Get Notified When Available
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="relative h-40 mb-4">
                <Image src="/images/mdsl-books-stack.png" alt="Grammar Books" fill className="object-contain" />
              </div>
              <h3 className="font-bold text-blue-800 mb-2">Grammar Books</h3>
              <p className="text-gray-600">Master English grammar rules with our comprehensive guides</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="relative h-40 mb-4">
                <Image src="/images/mdsl-books-stack.png" alt="Vocabulary Books" fill className="object-contain" />
              </div>
              <h3 className="font-bold text-blue-800 mb-2">Vocabulary Books</h3>
              <p className="text-gray-600">Expand your word power with our specialized vocabulary books</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="relative h-40 mb-4">
                <Image src="/images/mdsl-books-stack.png" alt="Practice Books" fill className="object-contain" />
              </div>
              <h3 className="font-bold text-blue-800 mb-2">Practice Books</h3>
              <p className="text-gray-600">Reinforce your learning with our practical workbooks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

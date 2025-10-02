import Navbar from './navbar'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Welcome to Cozy Coffee</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Indulge in our premium brews and cozy atmosphere. From aromatic espressos to refreshing lattes, we have something for every coffee lover.
          </p>
        </section>
        <section id="menu" className="py-12">
          <h2 className="text-3xl font-semibold text-amber-700 mb-8 text-center">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Espresso</h3>
              <p className="text-gray-600">Bold and intense, $3.50</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Latte</h3>
              <p className="text-gray-600">Creamy and smooth, $4.50</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Cappuccino</h3>
              <p className="text-gray-600">Frothy delight, $4.00</p>
            </div>
          </div>
        </section>
        <section id="about" className="py-12 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-amber-700 mb-8 text-center">About Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Established in 2020, Cozy Coffee is your neighborhood spot for quality coffee and friendly vibes. We source our beans from sustainable farms and roast them fresh daily.
            </p>
          </div>
        </section>
        <section id="contact" className="py-12">
          <h2 className="text-3xl font-semibold text-amber-700 mb-8 text-center">Contact Us</h2>
          <div className="text-center">
            <p className="text-gray-600 mb-4">123 Brew Street, City, State 12345</p>
            <p className="text-gray-600 mb-4">Phone: (555) 123-4567</p>
            <p className="text-gray-600">Email: hello@cozycoffee.com</p>
          </div>
        </section>
      </main>
    </div>
  )
}

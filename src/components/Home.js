function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[600px]">
        <img 
          src="/vibe.jpg" 
          alt="The Lost Sip Café" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to The Lost Sip</h1>
            <p className="text-xl">Where Every Sip Tells a Story</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              At The Lost Sip, we're passionate about bringing authentic coffee culture to Nepal. 
              Nestled in the heart of Imadol, our café is more than just a coffee shop – it's a 
              celebration of community, craftsmanship, and the perfect cup of coffee.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that great coffee has the power to bring people together and create 
              meaningful connections. From carefully sourced beans to expertly crafted beverages, 
              every detail matters in our pursuit of coffee excellence.
            </p>
          </div>
          <div>
            <img 
              src="/y.jpg"
              alt="Our Chiya" 
              className="rounded-lg shadow-lg w-[500px] h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 
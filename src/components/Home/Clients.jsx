import Image from "next/image"

const Clients = () => {
  return (
    <section className="flex flex-col gap-8 mt-24">
      <h3 className="section_title text-center">Clients</h3>
      <Image 
        src='/assets/img/ai-clients.png'
        width={1200}
        height={215}
        alt="all clients"
        className="w-full h-auto"
      />
    </section>
  )
}

export default Clients
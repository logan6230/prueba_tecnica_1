import Navbar from "./Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: "url(/img-4.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
      }}
      className="flex min-h-screen flex-col items-center lg:p-20 pt-10 p-5"
    >
      <Navbar />
      <div className="text-black mt-5 text-lg ">
        <Image
          className="rounded-lg"
          src="/img-5.jpg"
          height={400}
          width={400}
          alt={"img"}
        />
      </div>
      <div className="border-solid border border-gray-600 rounded-lg lg:m-5 p-2 bg-gray-100 mt-5">
        <p className="text-black mt-5 text-lg">
          ¡Hola! Soy Segundo Pantoja, Suboficial del Ejército de Nacional
          apasionado por el desarrollo de software. A mis 36 años, cuento con 3
          años de experiencia como desarrollador de software en el ejército,
          donde me he especializado en tecnologías como Java,Spring, Angula,Git,
          JavaScript, HTML y CSS. Mi enfoque se centra en crear soluciones
          innovadoras y funcionales que ayuden a optimizar procesos y mejorar la
          eficiencia. Con un firme compromiso con la excelencia y la
          adaptabilidad, estoy constantemente buscando aprender y crecer en este
          emocionante campo de la tecnología. ¡Es un placer conocerte!
        </p>
      </div>
    </main>
  );
}

import form from '../img/1.jpg';
import blog from '../img/2.jpg';
import game from '../img/3.jpg';
import commerce from '../img/4.jpg'

const Projects = () => {
  return (
    <>
      <section className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-6">
               <h3 className="font-bold text-langit text-2xl lg:text-4xl">Projects</h3>
               <p className="font-medium text-base lg:text-lg">
                 Ini merupakan Proyek-proyek yang pernah saya kerjakan. Ini merupakan hasil latihan saya selama saya menekuni bidang ini.
                </p>
              </div>
            </div>
           <div className="w-full px-4 flex flex-wrap justify-center">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={form} alt="Login Form" />
              </div>
              <h3 className="font-semibold text-xl mt-5 mb-3">
                Imitate Form Login
              </h3>
              <p>
                Ini merupakan salah satu proyek saya, yang saya buat setelah mempelajari bagaimana cara membuat sebuah validation form.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={game} alt="Hangman Game" />
              </div>
              <h3 className="font-semibold text-xl mt-5 mb-3">
                Membuat sebuah game
              </h3>
              <p>
                Ini merupakan proyek yang saya buat setelah mempelajari javascript secara mendalam.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={blog} alt="Blog" />
              </div>
              <h3 className="font-semibold text-xl mt-5 mb-3">
                Imitate Blog Website
              </h3>
              <p>
                Ini merupakan proyek saya, yang saya buat untuk menguji kemampuan saya dalam menggunakan css, dan disini saya mampu meniru tampilan sebuah website seakurat 90%
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={commerce} alt="E-Commerce Web" />
              </div>
              <h3 className="font-semibold text-xl mt-5 mb-3">
                E-Commerce Website
              </h3>
              <p>
                ini merupakan proyek React saya setelah mempelajari react secara mendalam. Saya membuat Landing page untuk E-Commerce ini.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Projects
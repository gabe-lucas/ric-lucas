import Head from 'next/head'
import Image from 'next/image'

import HeadShotImage from '../public/headshot.png'
import PDFSVG from '../public/pdf.svg';
// import PDF from '../public/Website_Project_Profiles.pdf'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ric Lucas</title>
        <meta name="description" content="Senior Construction Project Manager" />
      </Head>

      <div className="bg-amber-100 w-full min-h-screen md:py-8">
        <div className="md:mx-4">
            <div className="bg-white max-w-4xl mx-auto p-16 md:flex space-y-2">
                <div className="w-full">
                    <div className='px-6 space-y-4 md:flex md:space-x-4'>
                        <div>
                            <Image src={HeadShotImage} width={150} height={150} />
                        </div>
                        <div className="border-l border-gray-200 pl-2">
                            <h1 className="text-3xl font-medium">Ric Lucas</h1>
                            <h2 className="text-gray-600">Senior Construction Project Manager</h2>
                        </div>

                        {/* <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum augue, porta non odio nec, molestie pharetra dui. Vivamus sit amet sagittis purus.s id porttitor. Pellentesque nulla leo, imperdiet fermentum viverra sit amet, blandit eget risus. Mauris ac eros at tell convallis efficitur.</p>
                        </div> */}

                    </div>
                </div>

                </div>

                <embed className="bg-white w-full max-w-4xl mx-auto p-16 space-x-4 flex h-screen md:mt-8" src={'/Website_Project_Profiles.pdf'} type="application/pdf"/>
            </div>

      </div>

    </div>
  )
}

import Image from "next/image";

const Administration = () => {

    return <main className={`container py-12 flex flex-col justify-center items-center gap-12`}>
        <h1 className={`text-3xl font-medium text-red-600`}>Administration</h1>
        <div className={`grid grid-cols-12 gap-12`}>
            <div className={`col-span-4 gap-6 flex justify-center items-center flex-col`}>
                <Image className={`object-center object-cover w-48 h-auto rounded-2xl`}
                       src={"http://www.kuce.ac.in/images/Ramesh.jpg"} alt={"wesfg"} width={200} height={200}/>
                <div className={`text-center gap-2`}>
                    <h2 className={`text-xl font-medium text-red-600`}>Prof. T. Ramesh</h2>
                    <h4 className={`text-sm`}>Vice-Chancellor</h4>
                </div>
            </div>
            <div className={`col-span-4 gap-6 flex justify-center items-center flex-col`}>
                <Image className={`object-center object-cover w-48 h-auto rounded-2xl`}
                       src={"http://www.kuce.ac.in/images/kuregistrar.jpeg"} alt={"awsdf"} width={200} height={200}/>
                <div className={`text-center gap-2`}>
                    <h2 className={`text-xl font-medium text-red-600`}>Prof. T. Srinivasa Rao</h2>
                    <h4 className={`text-sm`}>Registrar</h4>
                </div>
            </div>
            <div className={`col-span-4 gap-6 flex justify-center items-center flex-col`}>
                <Image className={`object-center object-cover w-48 h-auto rounded-2xl`}
                       src={"http://www.kuce.ac.in/images/tjmrpri.jpg"} alt={"wasf"} width={500} height={500}/>
                <div className={`text-center gap-2`}>
                    <h2 className={`text-xl font-medium text-red-600`}>Dr. T. Jaganmohan Raju</h2>
                    <h4 className={`text-sm`}>Principal</h4>
                </div>
            </div>
        </div>
    </main>
}

export default Administration

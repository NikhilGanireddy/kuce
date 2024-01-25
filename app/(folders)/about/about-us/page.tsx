"use client"
import Image from "next/image";
import {useEffect, useState} from "react";

const Page = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <Image priority src={`http://www.kuce.ac.in/images/aboutuce.jpg`} alt={"Kuce Main Block"} width={800} height={600}
               className={`lg:h-auto lg:w-1/2 w-full h-full object-cover object-center rounded-xl `}/>
        <div className={`w-full h-full flex flex-col gap-4`}>
            <p className={`tracking-normal`}> In 1957, The Depart­ment of Min­ing engi­neer­ing was started, as a wing of Col­lege of Engi­neer­ing,
                Osma­nia Uni­ver­sity and was shifted to Koth­agu­dem, the town of coal indus­try in 1976 and it was
                named
                as Koth­agu­dem School of Mines (KSM). It is the first min­ing engi­neer­ing col­lege in Andhra Pradesh.
            </p>
            <p>
                In 1994 col­lege was shifted from Osma­nia Uni­ver­sity to Kakatiya University Presently hold­ing the
                name,
                Uni­ver­sity Col­lege of Engi­neer­ing, Kakatiya Uni­ver­sity, it is the con­stituent col­lege of
                Kakatiya
                Uni­ver­sity. The two depart­ments Depart­ment of Com­puter Sci­ence and Engi­neer­ing and Depart­ment
                of
                Elec­tri­cal and Elec­tron­ics Engi­neer­ing were estab­lished in 1996 and PG courses M.B.A. and M.C.A.
                were
                started in the year 2001. The engi­neer­ing sec­tions like Mechan­i­cal Engi­neer­ing, Civil
                Engi­neer­ing
                and Sci­ence sec­tions like Physics, Chem­istry, Math­e­mat­ics are meant to cater to the needs of these
                courses .
            </p>
            <p>
                The col­lege with annual intake of 250 engi­neer­ing stu­dents, hav­ing qual­i­fied and expe­ri­enced
                fac­ulty in home to the cream of tal­ent in this area.

            </p>
            <p>
                Two more new courses(Self finance) Elec­tron­ics and Com­mu­ni­ca­tion Engi­neer­ing (ECE) and
                Infor­ma­tion
                Tech­nol­ogy (INF) were added to the col­lege from the aca­d­e­mic year 2011 – 2012.

            </p>
            <p>
                The col­lege is also hav­ing hos­tels for boys and girls indi­vid­u­ally in the campus(only for
                CSE/​EEE/​MINING Branches). Quar­ters for Pro­fes­sors, Assis­tant Pro­fes­sors and Non-​Teaching staff
                are
                also estab­lished in col­lege cam­pus. Col­lege cam­pus is cov­ered with nearly 400 Acres of area with
                peace­ful envi­ron­ment and also has indoor sta­dium, play ground.
            </p>
        </div>

    </div>
}

export default Page

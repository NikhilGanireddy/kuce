import Link from "next/link";
import {punishableActs, punishments, videoLinks} from "@/app/(folders)/about/anti-ragging/index";

const Page = () => {

    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <div className={`w-full h-full flex flex-col gap-4`}>
            <p className={`tracking-normal`}>
                Please note that Rag­ging is pro­hib­ited as per Act 26 of A.P Leg­isla­tive Assem­bly, 1997., rag­ging
                is a crim­i­nal offence and pun­ish­able with one year impris­on­ment. The Supreme Court of India has
                also defined rag­ging as a crim­i­nal offence.
            </p>
            <p>
                All stu­dents admit­ted to the Uni­ver­sity col­leges of Engineer­ing and their par­ents are hereby
                informed to go through the guide­lines on anti ragging:
            </p>
            <p>
                It is manda­tory to fill in an Anti Rag­ing Under­tak­ing online, please visit
                <Link href={`https://www.antiragging.in`} target={"_blank"}
                      className={`mx-2 text-red-600`}>www.antiragging.in</Link>
                or
                <Link href={`https://www.amanmovement.org`} target={"_blank"}
                      className={`mx-2 text-red-600`}>www.amanmovement.org</Link>

            </p>
        </div>
        <div className={`flex flex-col justify-center  gap-12`}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Definition of student ragging
            </h1>
            <p>
                Any con­duct by a stu­dent, whether by words spo­ken or writ­ten or by an act which includes phys­i­cal
                abuse, lewd acts, teas­ing, rough or rude treat­ment, indulging in rowdy, undis­ci­plined and obscene
                activ­i­ties which causes or is likely to cause annoy­ance, undue hard­ship, phys­i­cal or
                psy­cho­log­i­cal harm or men­tal trauma or raise appre­hen­sion or fear in a fresher /​junior stu­dent
                or other stu­dents or forc­ing a stu­dent to do any act which such a stu­dent is not will­ing to do and
                which has the effect of caus­ing or gen­er­at­ing a sense of shame or embar­rass­ment or dan­ger to a
                stu­dents life or adversely affect the physique or psy­che of a fresher or a junior student.
            </p>
        </div>
        <div className={`flex flex-col justify-center gap-12 w-full`}>
            <h1 className={` text-3xl font-medium text-red-600`}>
                Pun­ish­able acts of ragging
            </h1>
            <ul className={`flex flex-col justify-between items-start gap-4 ml-4`}>
                {punishableActs.map((list, index) => <li key={index} className={` list-disc`}>{list}</li>)}
            </ul>
        </div>
        <div className={`flex flex-col justify-center gap-12 w-full`}>
            <h1 className={` text-3xl font-medium text-red-600`}>
                Pun­ish­ments against ragging
            </h1>
            <p>
                Depend­ing upon the nature and grav­ity of the offence as estab­lished by the Anti-​ragging Com­mit­tee
                of the insti­tu­tion, the pos­si­ble pun­ish­ments for those found guilty of rag­ging at the
                insti­tu­tion level shall be any one or any com­bi­na­tion of the following :
            </p>
            <ul className={`flex flex-col justify-between items-start gap-4 ml-4`}>
                {punishments.map((list, index) => <li key={index} className={` list-disc`}>{list}</li>)}
            </ul>
            <p>
                In addi­tion, in case of every sin­gle inci­dent of rag­ging, a First Infor­ma­tion Report (FIR) will be
                filed with the local police author­i­ties. The pos­si­ble pun­ish­ment includes rig­or­ous
                impris­on­ment (in com­pli­ance with the order of Supreme Court of India)
            </p>
        </div>
        <div className={`flex flex-col justify-center gap-12 w-full`}>
            <h1 className={` text-3xl font-medium text-red-600`}>
                UGC Videos on Anti-​Ragging
            </h1>
            <div className={`flex flex-col justify-between items-start gap-4`}>
                {videoLinks.map((list, index) => <div key={index}>Video {index + 1} - <Link href={list} className={`text-red-600`}
                                                                                            target={"_blank"}>{list}</Link>
                </div>)}
            </div>
        </div>
    </div>
}

export default Page

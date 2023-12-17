import React from "react";
import {Card, CardBody, Tab, Tabs} from "@nextui-org/react";
import Link from "next/link";

const BulletienBoard = () => {
    let tabs = [{
        id: "Time Tables",
        label: "Time Tables",
        content: ["B.Tech I Year I Semester Time Table (Section A,B,C)", " B.Tech-CSE- III,V,VII Semester Time Tables"]
    }, {
        id: "Notifications",
        label: "Notifications",
        content: [" Call for Quotations - Sealed quotations are invited from the reputed firm(s) for printing and supply of identity cards to the students . The sealed cover of quotations should reach or submit to undersigned on or before 04.12.2023, 03.00 PM", "  Call for Quotations - Sealed quotations are invited from the appropriate firms procuring Books of B.Tech (CSE, IT, EEE & ECE), 3rd & 4th year to our college library. The sealed cover of quotations should reach the undersigned on or before 27-10-2023, 03.00 PM via Speed Post", " B.Tech 2/4, 3/4 and 4/4 (All branches) 2023-2024 College Fee Notice", "TENDER NOTICE - The University College of Engineering, Kakatiya University, Kothagudem, invites sealed tenders from the experienced and authorized firms / agencies for the supply of 1. Rice, 2. Kirana Provisions, 3. Eggs & Chicken, 4. Vegetables, 5. Milk and 6. Curd for the hostels last date for tender submission is 27.03.2023 by 03.00 pm", " Schedule for Renewal Schoarship Hard Copy submission", "B.Tech 2/4, 3/4 and 4/4 (All branches) 2022-2023 College Fee Notice", "ISRO has invited applications from interested students and professionals for a free online course on Global Navigation Satellite System", " Ambedkar Overseas Vidya Nidhi Scheme to meritorious ST Students", " Online Fee Payment Process", " Fee Notification for the Academic Year 2020-2021", "Re-​Admission Guide­lines for the Aca­d­e­mic Year 2020 – 21", "UGC - Advisory Guidelines on Examinations and Academic Calendar for the Universities in view of COVID-19 Pandemic situation and subsequent lockdown during 2019-2020 - Rules for promotion of students pursuing various UG & PG (Professional & Non-Professiona) programmes of K.U. as one-time execeiption for the academic year 2019-2020"

        ]
    }, {
        id: "News Bulletin",
        label: "News Bulletin",
        content: ["Students, Staff and Principal Thanks Mr.Bharavi Gade Alumni of UCE (KSM) Olive crypto systems founder and Director for sponsoring an amount of Rupees One lack forty two thousands (1,42,000/-) towards installation of Solar fencing for Girls Hostell", "Congratulations to R Mahender Kumar (1807 T 2417), S Gopi (1807 T 2422) secure 1st Prize in a Technical Presentation seminar conducted by Indian Institute of Metals Paloncha Chapter on 26th November 2021.", "  TASK- STUDENT REGISTRATIONS", " Vidya Lakshmi Education Loan"]
    }, {
        id: "Covid-19",
        label: "Covid-19",
        content: ["Advisory for Universities & Colleges - Novel Coronavirus (COVID-19)", "Guidelines for COVID-19 prevention"]
    }, {
        id: "Online Learning Resources",
        label: "Online Learning Resources",
        content: [" Massive Open Online Courses", " Department Of Higher education-ICT Initiatives of MoE", " Swayam Prabha Free DTH Channel for Education", " E-PGPathasala", " Consortium for Higher Education Electronic Resources", " e-Yantra(Engineering a better tomorrow)", " Spoken-Tutorial Project(IIT Bombay)", " Virtual Labs"]
    }, {
        id: "Conferences",
        label: "Conferences",
        content: ["  National Conference on Recent Trends in Intelligent Control Communications and Computing Technologies in Mining (RTIC3TM -2022) (27th March 2022) (Hybrid Mode) Organized by University College of Engineering, Kakatiya University, Kothagudem-507 118", " A National Level Two Day Workshop (Online) on HDL Coding, Simulation and Career Opportunities in VLSI from 23-12-2020 to 24-12-2020 Organized by Department of ECE, University College of Engineering (KU) Kakatiya University, Kothagudem", "  AICTE Training And Learning (ATAL) Academy Sponsored Online FDP On Medical Image Processing and 3D Applications Organized by University College of Engineering, Kakatiya University, Kothagudem-507 118", " AICTE Training and Learning (ATAL) Academy Sponsored online FDP on Challenges in Capstone of 5G and Artificial Intelligence (C25GAI) from 5th October to 9th October 2020 Organized by University College of Engineering, Kakatiya University, Kothagudem, Telangana"]
    }, {
        id: "Open Source Softwares",
        label: "Open Source Softwares",
        content: [" Libre Office", " Open Source Operating System", " Open Source Repeository"]
    }, {
        id: "Open Source Journals",
        label: "Open Source Journals",
        content: [" IEEE Open Access Journals", " Springer Open Access Journals", " Elsevier Open Access Journals", " Directory of Open Access "]
    }];

    return (<div className="flex w-full flex-col container justify-center items-center py-12 text-sm">
        <Tabs aria-label="Dynamic tabs" disableAnimation={false} items={tabs}
              classNames={{
                  tabList: "gap-0 min-w-full relative rounded-2xl mb-4 border py-2 flex flex-row items-center flex-grow flex-wrap shadow-lg",
                  cursor: "w-full ",
                  tab: "max-w-fit  ",
                  tabContent: "group-data-[selected=true]:text-black group-data-[selected=true]:bg-neutral-200 px-4 py-2 rounded-lg min-w-full"
              }}
        >
            {(item) => (<Tab key={item.id} title={item.label} className={`w-full`}>
                <Card className={``}>
                    <CardBody className={"bg-neutral-200 rounded-2xl min-w-full py-4 px-8"}>
                        <ul className={` flex flex-col gap-4`}>
                            {item.content.map((point) => <Link href={""}>
                                <li className={`text-sm list-disc hover:underline underline-offset-4`} key={point}>
                                    {point}
                                </li>
                            </Link>)}
                        </ul>
                    </CardBody>
                </Card>
            </Tab>)}
        </Tabs>
    </div>);
}
export default BulletienBoard

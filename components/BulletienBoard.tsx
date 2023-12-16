import React from "react";
import {Card, CardBody, Tab, Tabs} from "@nextui-org/react";

const BulletienBoard = () => {
    let tabs = [{
        id: "Time Tables",
        label: "Time Tables",
        content: " Call for Quotations - Sealed quotations are invited from the reputed firm(s) for printing and supply of identity cards to the students . The sealed cover of quotations should reach or submit to undersigned on or before 04.12.2023, 03.00 PM\n" + " Call for Quotations - Sealed quotations are invited from the appropriate firms procuring Books of B.Tech (CSE, IT, EEE & ECE), 3rd & 4th year to our college library. The sealed cover of quotations should reach the undersigned on or before 27-10-2023, 03.00 PM via Speed Post\n" + " B.Tech 2/4, 3/4 and 4/4 (All branches) 2023-2024 College Fee Notice"
    }, {
        id: "Notifications",
        label: "Notifications",
        content: "Students, Staff and Principal Thanks Mr.Bharavi Gade Alumni of UCE (KSM) Olive crypto systems founder and Director for sponsoring an amount of Rupees One lack forty two thousands (1,42,000/-) towards installation of Solar fencing for Girls Hostel\n" + "\n" + "Congratulations to R Mahender Kumar (1807 T 2417), S Gopi (1807 T 2422) secure 1st Prize in a Technical Presentation seminar conducted by Indian Institute of Metals Paloncha Chapter on 26th November 2021.\n" + "\n" + "  TASK- STUDENT REGISTRATIONS\n" + " Vidya Lakshmi Education Loan"
    }, {
        id: "News Bulletin",
        label: "News Bulletin",
        content: "Call for Quotations - Sealed quotations are invited from the reputed firm(s) for printing and supply of identity cards to the students . The sealed cover of quotations should reach or submit to undersigned on or before 04.12.2023, 03.00 PM\n" + " Call for Quotations - Sealed quotations are invited from the appropriate firms procuring Books of B.Tech (CSE, IT, EEE & ECE), 3rd & 4th year to our college library. The sealed cover of quotations should reach the undersigned on or before 27-10-2023, 03.00 PM via Speed Post"
    }, {
        id: "Covid-19",
        label: "Covid-19",
        content: "Advisory for Universities & Colleges - Novel Coronavirus (COVID-19)\n" + "Guidelines for COVID-19 prevention"
    }, {
        id: "Online Learning Resources",
        label: "Online Learning Resources",
        content: " Massive Open Online Courses\n" + " Department Of Higher education-ICT Initiatives of MoE\n" + " Swayam Prabha Free DTH Channel for Education\n" + " E-PGPathasala\n" + " Consortium for Higher Education Electronic Resources\n" + " e-Yantra(Engineering a better tomorrow)"
    }, {
        id: "Conferences",
        label: "Conferences",
        content: "  National Conference on Recent Trends in Intelligent Control Communications and Computing Technologies in Mining (RTIC3TM -2022) (27th March 2022) (Hybrid Mode) Organized by University College of Engineering, Kakatiya University, Kothagudem-507 118\n" + " A National Level Two Day Workshop (Online) on HDL Coding, Simulation and Career Opportunities in VLSI from 23-12-2020 to 24-12-2020 Organized by Department of ECE, University College of Engineering (KU) Kakatiya University, Kothagudem\n" + "  AICTE Training And Learning (ATAL) Academy Sponsored Online FDP On Medical Image Processing and 3D Applications Organized by University College of Engineering, Kakatiya University, Kothagudem-507 118\n" + " AICTE Training and Learning (ATAL) Academy Sponsored online FDP on Challenges in Capstone of 5G and Artificial Intelligence (C25GAI) from 5th October to 9th October 2020 Organized by University College of Engineering, Kakatiya University, Kothagudem, Telangana"
    }, {
        id: "Open Source Softwares",
        label: "Open Source Softwares",
        content: " Libre Office\n" + " Open Source Operating System\n" + " Open Source Repe"
    }, {
        id: "Open Source Journals",
        label: "Open Source Journals",
        content: " IEEE Open Access Journals\n" + " Springer Open Access Journals\n" + " Elsevier Open Access Journals\n" + " Directory of Open Access "
    }];

    return (<div className="flex w-full flex-col container justify-center items-center py-16 text-sm">
        <Tabs aria-label="Dynamic tabs" disableAnimation={false} items={tabs}
              classNames={{
                  tabList: "gap-0 w-full relative rounded-lg mb-4 border py-2 flex flex-row items-center flex-grow flex-wrap",
                  cursor: "w-full bg-green-500",
                  tab: "max-w-fit ",
                  tabContent: "group-data-[selected=true]:text-black group-data-[selected=true]:bg-neutral-200 px-4 py-2 rounded-lg"
              }}
        >
            {(item) => (<Tab key={item.id} title={item.label} >
                <Card>
                    <CardBody className={"bg-neutral-200 rounded-2xl min-w-full p-4"}>
                        {item.content}
                    </CardBody>
                </Card>
            </Tab>)}
        </Tabs>
    </div>);
}
export default BulletienBoard

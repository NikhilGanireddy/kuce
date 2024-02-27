import Image from "next/image";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Page = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}
    >
      <div className={`flex flex-col justify-center w-full gap-12`}>
        <div className={`flex flex-col items-center w-full gap-12`}>
          <Image
            src={`http://www.kuce.ac.in/images/staff/Korra_Chinna.jpg`}
            alt={"Placement Incharge"}
            width={572}
            height={799}
            className={`lg:h-1/2 lg:w-auto w-full h-full object-cover object-center rounded-xl sm:max-w-[150px] sm:h-auto`}
          />
          <div
            className={`w-full lg:w-1/2 mx-auto flex flex-col items-center justify-between tex-sm gap-4`}
          >
            <span className="text-red-600">Dr Korra Cheena</span>
            <span className={`text-sm `}>Training & Place­ment Offi­cer</span>

            <span className={`text-sm`}>
              Uni­ver­sity Col­lege of Engi­neer­ing
            </span>

            <span className={`text-sm`}>
              {" "}
              Kak­tiya Uni­ver­sity, Koth­agu­dem, Telan­gana
            </span>

            <span className={`text-sm`}>tpoucekgm@gmail.com</span>

            <span className={`text-sm`}>8330952073</span>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full gap-6 ">
          <h1 className="text-red-600  text-3xl">
            Gen­eral Overview of Train­ing & Place­ment Cell
          </h1>

          <p>
            It is used to pro­vide all pos­si­ble assis­tance to its top ranked
            stu­dents and also to meet the needs of organ​i​sa​tions​.It is
            headed by a Pro­fes­sor des­ig­nated as Train­ing & Place­ment
            Offi­cer in charge and assisted by Stu­dent Place­ment
            Coor­di­na­tors. It ensures the stu­dents to secure esteemed
            posi­tions and also pro­vide the best arran­mge­ments for the
            vis­it­ing national and multi­na­tional com­pa­nies officials.
          </p>
        </div>

        <div className="flex flex-col justify-center w-full gap-6 py-12">
          <h1 className="text-red-600  text-3xl">Activities</h1>

          <p>
            The cell coor­di­nates var­i­ous activ­i­ties and pro­vides career
            guid­ance, nec­es­sary skills to the stu­dents along with the
            aca­d­e­mics.
          </p>

          <ul className="list-disc gap-3 flex flex-col">
            <li className="ml-4">
              Student’s queries of all kinds are clar­i­fied by the most
              qual­i­fied fac­ulty and staff.
            </li>
            <li className="ml-4">
              Stu­dents will be made tech­ni­cally sound,outstanding
              per­form­ers and excel­lent leaders.
            </li>
            <li className="ml-4">
              Over 90% of the stu­dents secure job offers before they com­plete
              their academics.
            </li>
            <li className="ml-4">
              Stu­dents are exposed to the actual work envi­ron­ment of
              var­i­ous Industries.
            </li>
          </ul>

          <p>
            Addi­tion­ally, the Cell main­tains a good library of resource books
            for self improve­ment and job search.The com­put­er­i­za­tion of the
            entire activ­i­ties of the place­ment Cell is in progress. The
            Train­ing & Place­ment Cell is located at the Aca­d­e­mic &
            Plan­ning Depart­ment in the University’s Admin­is­tra­tive
            build­ing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

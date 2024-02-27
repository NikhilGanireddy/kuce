import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,TableCaption,
} from "@/components/ui/table";
import { successionPrincipals } from "@/app/(folders)/administration/succession-list-of-principals/index";
import { placement2021 } from ".";

const Page = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}
    >
      <div className={`flex flex-col justify-center w-full gap-12`}>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm text-red-600">
              Academic Year 2021-22
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-12 justify-between items-center">
              {placement2021.map((placement21) => (
                <Table
                  key={placement21.id}
                  className={`w-full lg:w-2/3 mx-auto border `}
                >
                    <TableCaption>Company: {placement21.company}</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>S.No</TableHead>
                      <TableHead>Name of the Student</TableHead>
                      <TableHead>Branch</TableHead>
                      <TableHead>Package</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {placement21.students.map((student) => {
                      return <TableRow key={student.id}>
                        <TableCell className="font-medium">
                        {student.id}
                      </TableCell>
                      <TableCell className="font-medium uppercase">
                        {student.name}
                      </TableCell>
                      <TableCell className="font-medium uppercase">{student.branch}</TableCell>
                      <TableCell className="font-medium uppercase">{student.package}</TableCell>
                      </TableRow>;
                    })}
                    {/* <TableRow key={placement21.students}>
                      <TableCell className="font-medium">
                        {principal.sNo}
                      </TableCell>
                      <TableCell className="font-medium">
                        {principal.name}
                      </TableCell>
                      <TableCell>{principal.from}</TableCell>
                      <TableCell>{principal.to}</TableCell>
                    </TableRow> */}
                  </TableBody>
                </Table>
              ))}
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm text-red-600">
              Academic Year 2022-23
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </div>
    </div>
  );
};

export default Page;

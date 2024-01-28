import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {successionPrincipals} from "@/app/(folders)/administration/succession-list-of-principals";

const Page = () => {
    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <div className={`flex flex-col items-center w-full gap-12`}>
            <h1 className={` text-3xl font-medium text-red-600 `}>
                Succession List of Principals
            </h1>

            <Table className={`w-full lg:w-2/3 mx-auto `}>
                <TableHeader>
                    <TableRow>
                        <TableHead>S.No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>From</TableHead>
                        <TableHead>To</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {successionPrincipals.map((principal) => (<TableRow key={principal.sNo}>
                        <TableCell className="font-medium">{principal.sNo}</TableCell>
                        <TableCell className="font-medium">{principal.name}</TableCell>
                        <TableCell>{principal.from}</TableCell>
                        <TableCell>{principal.to}</TableCell>
                    </TableRow>))}
                </TableBody>
            </Table>


        </div>
    </div>
}

export default Page

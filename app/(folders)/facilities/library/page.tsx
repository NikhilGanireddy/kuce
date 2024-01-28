import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";


const Page = () => {

    return <div className={`flex flex-col justify-center items-center gap-12 py-12 lg:py-20`}>
        <div className={`w-full h-full flex flex-col gap-4 items-center text-center`}>
            <h1>Library Incharge - Dr. K. Bikshalu</h1>
            <h2>E-mail id: <a href={"mailto:hari_etta@kakatiya.ac.in"}>hari_etta@kakatiya.ac.in</a></h2>
        </div>
        <div className={`w-full flex flex-col gap-6 items-center `}>
            <Table className={`w-full lg:w-2/3 mx-auto `}>

                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Total No of titles</TableCell>
                        <TableCell>1256</TableCell>
                    </TableRow><TableRow>
                    <TableCell className="font-medium">Total No of Volumes</TableCell>
                    <TableCell>22000</TableCell>
                </TableRow><TableRow>
                    <TableCell className="font-medium">Total No of International Journals</TableCell>
                    <TableCell>10</TableCell>
                </TableRow><TableRow>
                    <TableCell className="font-medium">Total No of National Journals</TableCell>
                    <TableCell>20</TableCell>
                </TableRow><TableRow>
                    <TableCell className="font-medium">Total No of Magazines</TableCell>
                    <TableCell>9</TableCell>
                </TableRow><TableRow>
                    <TableCell className="font-medium">S.C & S.T Book Bank</TableCell>
                    <TableCell>4500</TableCell>
                </TableRow>
                </TableBody>
            </Table></div>
        <div className={`w-full h-full flex flex-col gap-12 `}>
            <h1 className={`text-3xl text-red-600`}>Library Timings</h1>
            <h2>Mon­day to Sat­ur­day : 09.20 A.M to 04.10 P.M</h2>
        </div>
        <div className={`w-full h-full flex flex-col gap-4 list-disc`}>
            <h2 className={`text-3xl text-red-600`}>Library Rules and Regulations</h2>
            <ul className={`list-disc ml-4 gap-4 flex flex-col`}>
                <li>Iden­tity Card is com­pul­sory for get­ting access to the library
                </li>
                <li>Strict order and silence shall be main­tained in the library and speak softly if needed.</li>
                <li> Four Books will be issued to UG students</li>
                <li> If the books are not returned within the spec­i­fied time it will be viewed seri­ously and fine
                    will be
                    charged as per rules.
                </li>
                <li> In case a user loses a book he/​she would have to either replace the book or deposit the price
                    of the
                    book in the library.
                </li>
                <li> Any mark­ing or writ­ing in the book is strictly prohibited.</li>
                <li> Ref­er­ence books will not be issued; but are avail­able for study within the Library.</li>
                <li> Library bor­rower cards are not trans­fer­able. The bor­rower is respon­si­ble for
                    the
                    books
                    bor­rowed
                    on his/​her card.
                </li>
                <li> Tear­ing of sheets from books and news­pa­pers is strictly pro­hib­ited and is
                    punishable.
                </li>
                <li> All The Stu­dents Should Return Their Library Bor­rower Cards After
                    Com­ple­tion
                    Of
                    their
                    Course
                    And
                </li>
                <li> Obtain A “No-​Due” Cer­tifi­cate From The Library</li>
            </ul>
        </div>
    </div>
}

export default Page
